import { type PropsWithChildren } from 'preact/compat'
import { useEffect, useRef } from 'preact/hooks'
import css from './styles.module.css'
import { useScroll } from '../../hooks/useScroll'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { MEDIA_QUERY_BREAKPOINTS } from '../../constants/media-query'

type TProps = PropsWithChildren<{ text: string }>

export const BackgroundTitle = ({ children, text }: TProps) => {
  const title = useRef<HTMLHeadingElement | null>(null)
  const container = useRef<HTMLElement | null>(null)
  const offset = useRef(0)
  const speed = useRef(100)

  const { inView } = useIntersectionObserver(container)

  const isLargeSizeWindow = useMediaQuery(MEDIA_QUERY_BREAKPOINTS.LARGE)

  useEffect(() => {
    if (isLargeSizeWindow) speed.current = 250
  }, [isLargeSizeWindow])

  useScroll(({ scrollY }) => {
    if (!title.current || !inView) return
    if (offset.current === 0) {
      offset.current = scrollY
    }
    const percentage = Math.round((offset.current - scrollY) * speed.current)
    title.current.style.transform = `translate(${-percentage}%, 0)`
  })

  return (
    <section ref={container} className={css.container}>
      <h3 ref={title} className={css.title}>
        {text}
      </h3>
      <div className={css.wrapper}>{children}</div>
    </section>
  )
}
