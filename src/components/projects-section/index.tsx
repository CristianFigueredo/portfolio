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
      <Information show={screenshotsInView} />
      <div className={css.screenshots} ref={screenshots}>
        <Screenshot
          index={0}
          velocity={9}
          src="/images/screenshots/placeholder.png"
          inView={screenshotsInView}
          scale={0.8}
        />
        <Screenshot
          index={1}
          velocity={10}
          src="/images/screenshots/placeholder.png"
          inView={screenshotsInView}
          scale={0.8}
        />
        <Screenshot
          index={2}
          velocity={6}
          src="/images/screenshots/placeholder.png"
          inView={screenshotsInView}
          scale={0.7}
        />
        <Screenshot
          index={3}
          velocity={8}
          src="/images/screenshots/placeholder.png"
          inView={screenshotsInView}
          scale={0.7}
        />
      </div>
    </section>
  )
}
