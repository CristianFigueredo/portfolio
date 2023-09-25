import { useEffect, useRef, useState } from 'preact/hooks'
import { data as projects } from '../../constants/projects'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { noop } from '../../hooks/shared'
import { ScreenshotGroup } from '../screenshot-group'
import type { FC } from 'preact/compat'

type TProps = {
  onVisibilityChange?: (visibility: boolean) => void
  onVisibleGroupChange?: (groupIndex: number) => void
}

export const Screenshots: FC<TProps> = ({
  onVisibilityChange = noop,
  onVisibleGroupChange = noop,
}) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  const container = useRef<HTMLDivElement | null>(null)
  const { inView } = useIntersectionObserver(container)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    onVisibilityChange(inView)
  }, [inView])

  useEffect(() => {
    onVisibleGroupChange(currentGroupIndex)
  }, [currentGroupIndex])

  return (
    <div
      ref={container}
      style={{
        height: 75 * projects.length + 'vh',
      }}
    >
      {projects.map(({ screenshots: { files, folder } }, index) => (
        <ScreenshotGroup
          folder={folder}
          files={files}
          onViewport={() => setCurrentGroupIndex(index)}
          scrollDirection={scrollDirection}
        />
      ))}
    </div>
  )
}
