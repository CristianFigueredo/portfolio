import { type PropsWithChildren } from 'preact/compat'
import { useEffect, useRef } from 'preact/hooks'
import css from './styles.module.css'
import { useScroll } from '../../hooks/useScroll'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { MEDIA_QUERY_BREAKPOINTS } from '../../constants/media-query'

type TProps = PropsWithChildren<{ text: string; direction?: 'left' | 'right' }>

export const BackgroundTitle = ({
  children,
  text,
  direction = 'left',
}: TProps) => {
  const title = useRef<HTMLHeadingElement | null>(null)
  const container = useRef<HTMLElement | null>(null)
  const offset = useRef(0)
  const speed = useRef(150)

  const { inView } = useIntersectionObserver(container)

  const isLargeSizeWindow = useMediaQuery(MEDIA_QUERY_BREAKPOINTS.LARGE)
  const isXXSSizeWindow = useMediaQuery(MEDIA_QUERY_BREAKPOINTS.XXL)

  useEffect(() => {
    if (isLargeSizeWindow) speed.current = 150
    if (isXXSSizeWindow) speed.current = 300
  }, [isLargeSizeWindow, isXXSSizeWindow])

  useScroll(({ scrollY }) => {
    if (!title.current || !inView) return
    if (offset.current === 0) offset.current = scrollY

    const percentage = Math.round((offset.current - scrollY) * speed.current)
    const translationX = direction === 'left' ? -percentage : percentage

    title.current.style.transform = `translate(${translationX}%, 0)`
  })

  return (
    <section
      ref={container}
      className={css.container}
      style={{
        flexDirection: direction === 'left' ? 'row' : 'row-reverse',
        paddingRight: direction === 'left' ? '0' : '50px',
      }}
    >
      <h3 ref={title} className={css.title}>
        {text}
      </h3>
      <div className={css.wrapper}>{children}</div>
    </section>
  )
}
