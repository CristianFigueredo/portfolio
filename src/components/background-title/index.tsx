import { type PropsWithChildren } from 'preact/compat'
import { useRef } from 'preact/hooks'
import css from './styles.module.css'
import { useScroll } from '../../hooks/useScroll'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

type TProps = PropsWithChildren<{ text: string }>

export const BackgroundTitle = ({ children, text }: TProps) => {
  const title = useRef<HTMLHeadingElement | null>(null)
  const container = useRef<HTMLElement | null>(null)
  const offset = useRef(0)

  const { inView } = useIntersectionObserver(container)

  useScroll(({ scrollY }) => {
    if (!title.current || !inView) return
    if (offset.current === 0) {
      offset.current = scrollY
    }
    const percentage = Math.round((offset.current - scrollY) * 100)
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
