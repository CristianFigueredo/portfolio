import { useRef } from 'preact/hooks'
import type { FC } from 'preact/compat'
import { useScroll } from '../../hooks/useScroll'
import css from './styles.module.css'

type TProps = {
  src: string
  index: number
  velocity?: number
  inView: boolean
  scale: number
}

export const Screenshot: FC<TProps> = ({
  index,
  src,
  velocity = 1,
  inView,
  scale,
}) => {
  const image = useRef<HTMLImageElement | null>(null)
  const scrollYOffset = useRef<number>(0)

  useScroll(({ scrollY }) => {
    if (!image.current || !inView) return
    if (!scrollYOffset.current) {
      scrollYOffset.current = scrollY
    }
    const percentage =
      Math.round((scrollY - scrollYOffset.current) * 100) * velocity

    image.current.style.transform = `translate(0px,-${percentage}%) scale(${scale})`
  })
  return (
    <img
      ref={image}
      class={`${css.screenshot} ${css[`screenshot-${index + 1}`]}`}
      alt="placeholder"
      src={src}
      loading="lazy"
    />
  )
}
