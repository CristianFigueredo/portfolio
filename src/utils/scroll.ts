/**
 * Get the percentage scrolled from the top until the current position
 *
 * @example getPercentageScrolledFromTop() === 0 // when any scroll was made
 * @example getPercentageScrolledFromTop() === 100 // when the user scrolls to the end of the page
 *
 * @see https://www.geeksforgeeks.org/offsetwidth-clientwidth-scrollwidth-and-height-respectively-in-css/
 **/
export function getPercentageScrolledFromTop(): number {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement

  return (scrollTop / (scrollHeight - clientHeight)) * 100
}
