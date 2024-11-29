import { useState } from 'react'
import css from './styles.module.css'
import { Screenshots } from '../screenshots'
import { projectsInEnglish, projectsInSpanish } from '../../constants/projects'
import { IconArrowRight } from '@tabler/icons-react'
import { getLanguageFromURL } from '../../i18n/utils'

export const ProjectsSection = () => {
  const locale = getLanguageFromURL()
  const projects = locale === 'en' ? projectsInEnglish : projectsInSpanish
  const [showInformation, setShowInformation] = useState(false)
  const [currentGroupOnView, setCurrentGroupOnView] = useState(0)

  const { id, title, subtitle, description, bottom_label, websiteURL } =
    projects[currentGroupOnView]

  return (
    <section id="projects" className={css.main_container}>
      <div
        className={css.container}
        style={{ display: showInformation ? 'block' : 'none' }}
      >
        <p className="top-8 text-gray-500 text-lg">{id}</p>
        <h3 className={css.title}>{title}</h3>
        <h4 className={css.subtitle}>{subtitle}</h4>
        <p className={css.description}>{description}</p>
        <p className={css.bottom_label}>{bottom_label}</p>
        <div
          className="flex cursor-pointer"
          onClick={() => window.open(websiteURL)}
        >
          <p className="text-white text-sm">See More</p>
          <IconArrowRight className="text-white ml-2 self-center" size={14} />
        </div>
      </div>
      <Screenshots
        onVisibilityChange={setShowInformation}
        onVisibleGroupChange={setCurrentGroupOnView}
      />
    </section>
  )
}
