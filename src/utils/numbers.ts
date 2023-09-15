/**
 * Check if the number is in the range
 *
 * @example inRange([0, 10], 5) // === true
 */

export const inRange = ([from, to]: [number, number], integer: number) => {
  return integer >= from && integer <= to
}

/**
 * Round the float to the closest integer
 */
export const round = (float: number) => Math.round(float * 1e2) / 1e2
