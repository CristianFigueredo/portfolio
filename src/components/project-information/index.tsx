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
      <h3 className={css.title}>Hugs Dating</h3>
      <h4 className={css.subtitle}>Team Lead & Developer</h4>
      <p className={css.description}>
        The aim of the app is to bring together people with and without
        disability
      </p>
      <p className={css.bottom_label}>Android & iOS Application</p>
    </div>
  )
}
