import type { FunctionalComponent } from 'preact'
import type { ReactNode } from 'preact/compat'
import css from './styles.module.css'

type Props = {
  children: ReactNode
}

type Component = FunctionalComponent<Props>

export const BackgroundTitle: Component = ({ children }) => {
  return (
    <section className={css.container}>
      <h3 className={css.title}>ABOUT ME</h3>
      <div className={css.wrapper}>{children}</div>
    </section>
  )
}
