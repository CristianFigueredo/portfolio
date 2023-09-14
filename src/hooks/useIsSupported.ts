import { useEffect, useState } from 'preact/hooks'

/**
 * Is a feature supported in the browser or not
 * @param predicate - predicate to check if the feature is supported
 */
export function useIsSupported(predicate: () => boolean) {
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported(predicate())
  }, [])

  return isSupported
}
