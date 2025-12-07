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

  // Different card sizes for visual variety - much bigger to show full screenshots
  const cardSizes = [
    { w: 'w-64', h: 'h-80' }, // 256px x 320px
    { w: 'w-64', h: 'h-72' }, // 256px x 288px
    { w: 'w-64', h: 'h-96' }, // 256px x 384px
    { w: 'w-64', h: 'h-64' }, // 256px x 256px
  ]
  const size = cardSizes[index % cardSizes.length]

  // Rotation and positioning based on column
  const rotations = [-6, 0, 6]
  const rotation = rotations[column % rotations.length]

  // Animation delay based on column and row (in seconds)
  const floatDelay = (column * 0.2 + row * 0.1) % 3

  return (
    <motion.div
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
      className={`${size.w} ${size.h} bg-[#1a1a1a] rounded-3xl overflow-hidden relative group shadow-2xl border border-white/5 cursor-pointer project-card-float`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
        animationDelay: `${floatDelay}s`,
      }}
      onClick={() => window.open(project.websiteURL, '_blank')}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <img
        src={mainImage}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-white text-sm font-bold">{project.title}</p>
        <p className="text-xs text-neutral-400">{project.subtitle}</p>
      </div>
    </motion.div>
  )
}
