import { useCallback, useEffect, useRef, useState } from 'react'
import { type MaybeRef, noop, unRef } from './shared'
import { useIsSupported } from './useIsSupported'

/**
 * Check if object is a react ref
 */

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
 */
export function useIntersectionObserver(
  target: MaybeRef<Element | undefined | null>,
  options: IntersectionObserverOptions = {},
  callback: IntersectionObserverCallback = noop
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
  }, [isSupported, root, rootMargin, stop, target, threshold])

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
