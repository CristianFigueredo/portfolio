import { useState, useEffect } from 'preact/hooks'

const THRESHOLD = 0

type DIRECTION = 'up' | 'down'

export const useScrollDirection = (): DIRECTION => {
  const [direction, setDirection] = useState<DIRECTION>('down')

  useEffect(() => {
    let lastScrollY = window.scrollY,
      ticking = false

    const updateDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < THRESHOLD) {
        ticking = false
        return
      }
      setDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [direction])

  return direction
}
