import { useEffect, useState } from 'react'

/**
 * Reactive media query hook that returns the truthy value of the media query.
 *
 * @param {string} query
 * @returns {boolean} boolean value of the query
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    setMatches(window.matchMedia(query).matches)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}
