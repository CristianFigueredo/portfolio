import { useRef } from 'preact/hooks'
import css from './styles.module.css'

type TProps = {
  show: boolean
}

export const ProjectInformation = ({ show }: TProps) => {
  const container = useRef<HTMLDivElement | null>(null)
  return (
    <div ref={container} className={css.container} style={{ opacity: +show }}>
      <p className={css.id}>01</p>
      <h3 className={css.title}>FR Design system</h3>
      <h4 className={css.subtitle}>Design system lead • Technical PDM</h4>
      <p className={css.description}>
        Multi brand e-commerce design system for websites and native mobile
        applications
      </p>
      <p className={css.bottom_label}>Design System</p>
    </div>
  )
}
