import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import type { MutableRefObject } from 'preact/compat'

import { useIsSupported } from './useIsSupported'

type MaybeRef<T> = T | MutableRefObject<T>

/**
 * Check if object is a react ref
 */
export const isRef = (obj: unknown): boolean =>
  obj !== null &&
  typeof obj === 'object' &&
  Object.prototype.hasOwnProperty.call(obj, 'current')

export function unRef<T = HTMLElement>(target: MaybeRef<T>): T {
  const element = isRef(target)
    ? (target as MutableRefObject<T>).current
    : (target as T)

  return element
}

export interface IntersectionObserverOptions {
  /**
   * The Element or Document whose bounds are used as the bounding box when testing for intersection.
   *
   * @default document
   */
  root?: MaybeRef<Element | Document | undefined | null>
  /**
   * A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections.
   *
   * @default '0px'
   */
  rootMargin?: string

  /**
   * Either a single number or an array of numbers between 0.0 and 1.
   *
   * @default 0
   */
  threshold?: number | number[]
}

/**
 * Reactive intersection observer.
 *
 * @param target - React ref or DOM node
 * @param options - Options passed to mutation observer
 * @param callback - callback to execute when mutations are observed
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver IntersectionObserver MDN
 * @see https://react-hooks-library.vercel.app/core/useIntersectionObserver
 */
export function useIntersectionObserver(
  target: MaybeRef<Element | undefined | null>,
  options: IntersectionObserverOptions = {},
  callback: IntersectionObserverCallback = () => {}
) {
  const { root = document, rootMargin = '0px', threshold = 0 } = options

  const [inView, setInView] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const isSupported = useIsSupported(() => 'IntersectionObserver' in window)

  const observer = useRef<IntersectionObserver | null>(null)

  const stop = useCallback(() => {
    if (!observer.current) return

    observer.current.disconnect()
    observer.current = null
  }, [])

  useEffect(() => {
    const el = unRef(target)
    const rootEl = unRef(root)

    if (!(isSupported && el && rootEl)) return

    observer.current = new window.IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const thresholds = Array.isArray(threshold) ? threshold : [threshold]

        entries.forEach((entry) => {
          const inView =
            entry.isIntersecting &&
            thresholds.some((threshold) => entry.intersectionRatio >= threshold)

          setInView(inView)
          setEntry(entry)
        })
        callback(entries, observer)
      },
      {
        root: rootEl,
        rootMargin,
        threshold,
      }
    )

    observer.current?.observe(el)

    return stop
  }, [callback, isSupported, root, rootMargin, stop, target, threshold])

  useEffect(() => {
    return stop
  }, [])

  return {
    isSupported,
    stop,
    inView,
    entry,
  }
}
