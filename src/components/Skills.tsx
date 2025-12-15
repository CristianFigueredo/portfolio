import { getLanguageFromURL, useTranslations } from '../i18n/utils'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Skills() {
  const locale = getLanguageFromURL()
  const t = useTranslations(locale)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const skills = {
    'Mobile & Frontend': [
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Expo',
      'Redux',
      'GraphQL',
      'Axios',
      'HTML',
      'CSS',
      'SVG',
    ],
    Testing: ['Jest', 'Detox', 'Maestro'],
    'CI / CD': ['GitHub Actions'],
    'Tools & Workflow': ['Git', 'GitHub'],
    'AI & Multimodal': [
      'LLM integrations',
      'Multimodal models (image / video / audio)',
    ],
    Languages: [
      'English (professional)',
      'Spanish (professional)',
      'Portuguese (professional)',
    ],
  }

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-32 overflow-hidden bg-black"
    >
      {/* Background Text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none z-0"
      >
        <h2 className="text-[20vw] font-bold text-white/5 font-['Avenir_Bold'] leading-none tracking-tighter">
          SKILLS
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="sticky top-32">
          <h2 className="text-5xl md:text-7xl font-bold text-white font-['Avenir_Bold'] mb-8">
            {t('Skills')}
          </h2>
          <p className="text-xl text-neutral-400 font-['Avenir_Regular'] leading-relaxed max-w-md">
            {locale === 'es'
              ? 'Construyo productos móviles y web con foco en calidad, automatización, y experiencia de usuario. También trabajo integrando LLMs y modelos multimodales (imagen / video / audio).'
              : 'I build mobile and web products with a focus on quality, automation, and user experience. I also integrate LLMs and multimodal models (image / video / audio).'}
          </p>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="grid gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm text-neutral-500 uppercase tracking-widest font-['Avenir_Bold']">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-['Avenir_Regular'] hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
