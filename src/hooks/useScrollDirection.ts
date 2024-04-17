import { useState, useEffect } from 'react'

const THRESHOLD = 0

type Direction = 'up' | 'down'

export const useScrollDirection = (): Direction => {
  const [direction, setDirection] = useState<Direction>('down')

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
