import { type FC, useRef } from 'react'
import { useScroll } from '../../hooks/useScroll'
import css from './styles.module.css'

type TProps = {
  src: string
  index: number
  speed: number
  scale: number
  accelerate: boolean
}

export const Screenshot: FC<TProps> = (props) => {
  const image = useRef<HTMLImageElement | null>(null)
  const scrollYOffset = useRef<number>(0)

  useScroll(({ scrollY }) => {
    if (!image.current || !props.accelerate) return
    if (!scrollYOffset.current) {
      scrollYOffset.current = scrollY
    }
    const percentage =
      Math.round((scrollY - scrollYOffset.current) * 100) * props.speed

    image.current.style.transform = `translate(0px,-${percentage}%) scale(${props.scale})`
  })
  return (
    <img
      ref={image}
      class={`${css.screenshot} ${css[`screenshot-${props.index + 1}`]}`}
      alt="placeholder"
      src={props.src}
      loading="lazy"
    />
  )
}
