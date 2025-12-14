import { SCREENSHOTS_FOLDER_PATH, type Project } from '../constants/projects'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  project: Project
  index: number
  total: number
  column: number
  row: number
  screenshotIndex?: number
  onClick?: () => void
}

export function ProjectCard({
  project,
  index,
  total,
  column,
  row,
  screenshotIndex = 0,
  onClick,
}: ProjectCardProps) {
  // Use the specified screenshot or default to first one
  const screenshotFile =
    project.screenshots.files[screenshotIndex] || project.screenshots.files[0]
  const mainImage = `${SCREENSHOTS_FOLDER_PATH}/${project.screenshots.folder}/${screenshotFile}`

  const size = { w: 'w-[180px]', h: 'h-[330px]' }

  // Rotation and positioning based on column
  const rotations = [-6, 0, 6]
  const rotation = rotations[column % rotations.length]

  // Floating animation tuning (use Framer Motion only to avoid transform conflicts)
  const floatDelay = (column * 0.2 + row * 0.1) % 2.5
  const floatAmplitude = 16 + ((row + column) % 3) * 2
  const floatDuration = 5.2 + (column % 3) * 0.4 + (row % 2) * 0.3

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.08,
        y: -8,
        zIndex: total + 1,
        transition: { duration: 0.2 },
      }}
      className={`${size.w} ${size.h} relative ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      }`}
      style={{ zIndex: index }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, -floatAmplitude, 0] }}
        transition={{
          duration: floatDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
          delay: floatDelay,
        }}
      >
        <motion.img
          className="w-full h-full object-cover will-change-transform select-none"
          style={{ transformOrigin: 'center center' }}
          initial={{ rotate: rotation }}
          animate={{ rotate: rotation }}
          whileHover={{
            rotate: 0,
            transition: { type: 'spring', stiffness: 260, damping: 18 },
          }}
          draggable={false}
          alt={project.title}
          src={mainImage}
        />
      </motion.div>
    </motion.div>
  )
}
