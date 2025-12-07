import { getLanguageFromURL, useTranslations } from '../i18n/utils'
import { InfiniteMovingCards } from './InfiniteMovingCards'
import { testimonialsInEnglish, testimonialsInSpanish } from '../constants'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Testimonials() {
  const locale = getLanguageFromURL()
  const t = useTranslations(locale)
  const testimonials =
    locale === 'en' ? testimonialsInEnglish : testimonialsInSpanish
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-black"
    >
      {/* Background Text */}
      <motion.div
        style={{ x }}
        className="text-center absolute top-1/2 right-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none z-0"
      >
        <h2 className="text-[12vw] font-bold text-white/5 font-['Avenir_Bold'] leading-none tracking-tighter">
          TESTIMONIALS
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white font-['Avenir_Bold'] mb-4">
            {t('Testimonials')}
          </h2>
        </div>

        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  )
}
