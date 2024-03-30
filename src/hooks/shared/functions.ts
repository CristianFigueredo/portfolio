import type { MutableRefObject } from 'react'

import type { MaybeRef } from './types'

export const isRef = (obj: unknown): boolean =>
  obj !== null &&
  typeof obj === 'object' &&
  Object.prototype.hasOwnProperty.call(obj, 'current')

/**
 * Accepts either a ref object or a dom node and returns a dom node
 *
 * @param target - ref or a dom node
 * @returns dom noe
 */
export function unRef<T = HTMLElement>(target: MaybeRef<T>): T {
  const element = isRef(target)
    ? (target as MutableRefObject<T>).current
    : (target as T)

  return element
}
/**
 * noop is the Acronym of "No Operation"
 * @description Why? to avoid re-renders by making the function have a single reference
 */
export const noop = () => {}
