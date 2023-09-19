import { useRef } from 'preact/hooks'
import type { FC } from 'preact/compat'
import { useScroll } from '../../hooks/useScroll'
import css from './styles.module.css'

type TProps = {
  src: string
  index: number
  velocity?: number
  inView: boolean
}

export const Screenshot: FC<TProps> = ({
  index,
  src,
  velocity = 1,
  inView,
}) => {
  const image = useRef<HTMLImageElement | null>(null)
  const scrollYOffset = useRef<number>(0)

  useScroll(({ scrollY }) => {
    if (!image.current || !inView) return
    if (!scrollYOffset.current) {
      scrollYOffset.current = scrollY
    }
    const percentage = Math.round(scrollY * 100) * velocity

    image.current.style.transform = `translate(0px,-${percentage}%) scale(0.8)`
  })
  return (
    <img
      ref={image}
      width="423"
      height="852"
      class={`${css.screenshot} ${css[`screenshot-${index + 1}`]}`}
      alt="placeholder"
      src={src}
    />
  )
}
