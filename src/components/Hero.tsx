import { ArrowRight } from 'lucide-react'
import { getLanguageFromURL, useTranslations } from '../i18n/utils'
import { projectsInEnglish, projectsInSpanish } from '../constants/projects'
import { ProjectCard } from './ProjectCard'

export function Hero() {
  const locale = getLanguageFromURL()
  const t = useTranslations(locale)
  const projects = locale === 'en' ? projectsInEnglish : projectsInSpanish

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      window.scrollTo({
        behavior: 'smooth',
        top: projectsSection.offsetTop * 0.78,
      })
    }
  }

  const handleViewSpecificProject = (folder: string) => {
    const group = document.getElementById(`project-group-${folder}`)
    if (group) {
      group.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    handleViewProjects()
  }

  return (
    <section className="relative z-10 pt-20 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="lg:col-span-5 space-y-12 relative z-10">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] font-['Avenir_Bold']">
              <span className="text-white">Cristian</span> <br />
              <span className="text-neutral-500">Figueredo</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg font-light leading-relaxed font-['Avenir_Regular']">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={handleViewProjects}
              className="group bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-neutral-200 transition flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.15)] font-['Avenir_Regular']"
            >
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-12 pt-4">
            <div>
              <div className="text-4xl font-bold text-white tracking-tight font-['Avenir_Bold']">
                20+
              </div>
              <div className="text-xs text-neutral-500 font-medium mt-2 uppercase tracking-widest font-['Avenir_Regular']">
                {t('hero.stats.projects')}
              </div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <div className="text-4xl font-bold text-white tracking-tight font-['Avenir_Bold']">
                6+
              </div>
              <div className="text-xs text-neutral-500 font-medium mt-2 uppercase tracking-widest font-['Avenir_Regular']">
                {t('hero.stats.years')}
              </div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
          </div>
        </div>

        {/* Right Side - Project Cards Grid */}
        <div className="lg:col-span-7 relative h-[800px] hidden lg:block perspective-[2000px]">
          {/* Floating Elements Container */}
          <div className="absolute right-0 top-0 grid grid-cols-3 gap-6 transform rotate-[-6deg] translate-x-[-40px] scale-[0.8] origin-top-right">
            {/* Create array of all cards (2 screenshots per project = 6 total) */}
            {(() => {
              const allCards: Array<{
                project: (typeof projects)[0]
                screenshotIndex: number
                globalIndex: number
              }> = []
              projects.forEach((project, projectIdx) => {
                project.screenshots.files
                  .slice(0, 2)
                  .forEach((_, screenshotIdx) => {
                    allCards.push({
                      project,
                      screenshotIndex: screenshotIdx,
                      globalIndex: projectIdx * 2 + screenshotIdx,
                    })
                  })
              })

              // Distribute cards across 3 columns
              const column1 = allCards.filter((_, i) => i % 3 === 0)
              const column2 = allCards.filter((_, i) => i % 3 === 1)
              const column3 = allCards.filter((_, i) => i % 3 === 2)

              return (
                <>
                  {/* Column 1 */}
                  <div className="flex flex-col gap-6 mt-24">
                    {column1.map((card, idx) => (
                      <ProjectCard
                        key={`${card.project.id}-${card.screenshotIndex}`}
                        project={card.project}
                        index={card.globalIndex}
                        total={allCards.length}
                        column={0}
                        row={idx}
                        screenshotIndex={card.screenshotIndex}
                        onClick={() =>
                          handleViewSpecificProject(
                            card.project.screenshots.folder
                          )
                        }
                      />
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-6">
                    {column2.map((card, idx) => (
                      <ProjectCard
                        key={`${card.project.id}-${card.screenshotIndex}`}
                        project={card.project}
                        index={card.globalIndex}
                        total={allCards.length}
                        column={1}
                        row={idx}
                        screenshotIndex={card.screenshotIndex}
                        onClick={() =>
                          handleViewSpecificProject(
                            card.project.screenshots.folder
                          )
                        }
                      />
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col gap-3 mt-16">
                    {column3.map((card, idx) => (
                      <ProjectCard
                        key={`${card.project.id}-${card.screenshotIndex}`}
                        project={card.project}
                        index={card.globalIndex}
                        total={allCards.length}
                        column={2}
                        row={idx}
                        screenshotIndex={card.screenshotIndex}
                        onClick={() =>
                          handleViewSpecificProject(
                            card.project.screenshots.folder
                          )
                        }
                      />
                    ))}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
