import css from './styles.module.css'
import { ProjectInformation as Information } from '../project-information'
import { useRef } from 'preact/hooks'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { Screenshot } from '../screenshot'

export const ProjectsSection = () => {
  const screenshots = useRef<HTMLDivElement | null>(null)
  const { inView: screenshotsInView } = useIntersectionObserver(screenshots)

  return (
    <section className={css.container}>
      <Information display={screenshotsInView ? 'block' : 'none'} />
      <div className={css.screenshots} ref={screenshots}>
        <Screenshot
          velocity={1}
          src="/images/screenshots/placeholder.png"
          index={0}
          inView={screenshotsInView}
        />
        <Screenshot
          velocity={2}
          src="/images/screenshots/placeholder.png"
          index={1}
          inView={screenshotsInView}
        />
        <Screenshot
          velocity={3}
          src="/images/screenshots/placeholder.png"
          index={2}
          inView={screenshotsInView}
        />
        <Screenshot
          velocity={4}
          src="/images/screenshots/placeholder.png"
          index={3}
          inView={screenshotsInView}
        />
      </div>
    </section>
  )
}
