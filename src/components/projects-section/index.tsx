import { useState } from 'react'
import css from './styles.module.css'
import { Screenshots } from '../screenshots'
import { projectsInEnglish, projectsInSpanish } from '../../constants/projects'
import { ArrowUpRight } from 'lucide-react'
import { getLanguageFromURL } from '../../i18n/utils'

export const ProjectsSection = () => {
  const locale = getLanguageFromURL()
  const projects = locale === 'en' ? projectsInEnglish : projectsInSpanish
  const [showInformation, setShowInformation] = useState(false)
  const [currentGroupOnView, setCurrentGroupOnView] = useState(0)

  const { id, title, subtitle, description, websiteURL } =
    projects[currentGroupOnView]

  return (
    <section id="projects" className={css.main_container}>
      <div
        className={css.container}
        style={{
          opacity: showInformation ? 1 : 0,
          pointerEvents: showInformation ? 'all' : 'none',
        }}
      >
        <div className="flex flex-col justify-center h-full relative px-8 pb-16 md:px-16 md:pb-24 overflow-hidden">
          {/* Background Number */}
          <span className="absolute top-1/2 left-0 md:-left-10 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold text-white/[0.07] font-['Avenir_Bold'] leading-none select-none pointer-events-none z-0">
            {id}
          </span>

          {/* Content */}
          <div className="relative z-10 space-y-12 max-w-2xl pl-4 md:pl-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-white/30"></span>
                <span className="text-neutral-400 font-['Avenir_Regular'] text-sm tracking-[0.2em] uppercase">
                  {subtitle}
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-['Avenir_Bold'] leading-[1.1] tracking-tight">
                {title}
              </h3>
            </div>

            {/* Description & Action */}
            <div className="space-y-10 pl-2">
              <p className="text-xl text-neutral-400 font-['Avenir_Regular'] leading-relaxed max-w-lg">
                {description}
              </p>

              <button
                onClick={() => window.open(websiteURL)}
                className="group flex items-center gap-4 text-white transition-all"
              >
                <span className="text-lg font-['Avenir_Regular'] border-b border-white/30 group-hover:border-white transition-colors pb-1">
                  View Live Project
                </span>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Screenshots
        onVisibilityChange={setShowInformation}
        onVisibleGroupChange={setCurrentGroupOnView}
      />
    </section>
  )
}
