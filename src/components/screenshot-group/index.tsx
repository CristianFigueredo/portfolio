import css from './styles.module.css'
import type { FC } from 'preact/compat'
import { useRef, useEffect } from 'preact/hooks'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { SCREENSHOTS_FOLDER_PATH } from '../../constants/projects'
import { Screenshot } from '../screenshot/'

type TProps = {
  folder: string
  files: string[]
  onViewport: () => void
  scrollDirection: 'down' | 'up'
}

const config = {
  scales: [0.87, 0.8, 0.7, 0.68],
  speeds: [13, 9, 8, 6],
}

export const ScreenshotGroup: FC<TProps> = ({
  folder,
  files,
  onViewport,
  scrollDirection = 'down',
}) => {
  const container = useRef<HTMLDivElement | null>(null)
  const { inView } = useIntersectionObserver(container, {
    threshold: scrollDirection === 'up' ? 0.9 : 0,
  })

  useEffect(() => {
    if (inView) onViewport()
  }, [inView])

  return (
    <div ref={container} className={css.screenshots}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Screenshot
          src={`${SCREENSHOTS_FOLDER_PATH}/${folder}/${files[index]}`}
          index={index}
          accelerate={inView}
          scale={config.scales[index]}
          speed={config.speeds[index]}
        />
      ))}
    </div>
  )
}
