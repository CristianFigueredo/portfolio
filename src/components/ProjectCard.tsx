import { SCREENSHOTS_FOLDER_PATH, type Project } from '../constants/projects'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  project: Project
  index: number
  total: number
  column: number
  row: number
  screenshotIndex?: number
}

export function ProjectCard({
  project,
  index,
  total,
  column,
  row,
  screenshotIndex = 0,
}: ProjectCardProps) {
  // Use the specified screenshot or default to first one
  const screenshotFile =
    project.screenshots.files[screenshotIndex] || project.screenshots.files[0]
  const mainImage = `${SCREENSHOTS_FOLDER_PATH}/${project.screenshots.folder}/${screenshotFile}`

  const size = { w: 'w-[180px]', h: 'h-[330px]' }

  // Rotation and positioning based on column
  const rotations = [-6, 0, 6]
  const rotation = rotations[column % rotations.length]

  // Animation delay based on column and row (in seconds)
  const floatDelay = (column * 0.2 + row * 0.1) % 3

  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: total + 1,
        transition: { duration: 0.3 },
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      }}
      className={`${size.w} ${size.h} relative cursor-pointer project-card-float object-cover group-hover:scale-110 transition-transform duration-700`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
        animationDelay: `${floatDelay}s`,
      }}
      onClick={() => window.open(project.websiteURL, '_blank')}
      alt={project.title}
      src={mainImage}
    />
  )
}
