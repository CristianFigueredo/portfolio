import { useState } from 'react'
import css from './styles.module.css'
import { Screenshots } from '../screenshots'
import { data as projects } from '../../constants/projects'

export const ProjectsSection = () => {
  const [showInformation, setShowInformation] = useState(false)
  const [currentGroupOnView, setCurrentGroupOnView] = useState(0)

  const { id, title, subtitle, description, bottom_label } =
    projects[currentGroupOnView]

  return (
    <section className={css.main_container}>
      <div className={css.container} style={{ opacity: +showInformation }}>
        <p className={css.id}>{id}</p>
        <h3 className={css.title}>{title}</h3>
        <h4 className={css.subtitle}>{subtitle}</h4>
        <p className={css.description}>{description}</p>
        <p className={css.bottom_label}>{bottom_label}</p>
      </div>
      <Screenshots
        onVisibilityChange={setShowInformation}
        onVisibleGroupChange={setCurrentGroupOnView}
      />
    </section>
  )
}
