import { useRef, useEffect } from 'react'
import { getLanguageFromURL, useTranslations } from '../i18n/utils'
import { useIntersectionObserver, useScroll, useMediaQuery } from '../hooks'
import { MEDIA_QUERY_BREAKPOINTS } from '../constants/media-query'

export function About() {
  const locale = getLanguageFromURL()
  const t = useTranslations(locale)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  const offset = useRef(0)
  const speed = useRef(200)

  const { inView } = useIntersectionObserver(containerRef)
  const isLargeSizeWindow = useMediaQuery(MEDIA_QUERY_BREAKPOINTS.LARGE)
  const isXXSSizeWindow = useMediaQuery(MEDIA_QUERY_BREAKPOINTS.XXL)

  useEffect(() => {
    if (isLargeSizeWindow) speed.current = 250
    if (isXXSSizeWindow) speed.current = 300
  }, [isLargeSizeWindow, isXXSSizeWindow])

  useScroll(({ scrollY }) => {
    if (!titleRef.current || !inView) return
    if (offset.current === 0) offset.current = scrollY

    const percentage = Math.round((offset.current - scrollY) * speed.current)
    titleRef.current.style.transform = `translate(${-percentage}%, 0)`
  })

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left Column: Large Typography with Scroll Animation */}
        <div className="relative">
          <h2
            ref={titleRef}
            className="text-[8rem] md:text-[12rem] font-bold text-white/5 leading-none font-['Avenir_Bold'] tracking-tighter select-none absolute -top-20 -left-10 md:-left-20 z-0 whitespace-nowrap will-change-transform"
            style={{ transition: 'transform 0.9s ease-out' }}
          >
            ABOUT ME
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white relative z-10 font-['Avenir_Bold'] tracking-tight">
            {t('About me')}
          </h2>
        </div>

        {/* Right Column: Content */}
        <div className="relative z-10 pt-10 md:pt-0">
          <div className="w-12 h-1 bg-white mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed font-['Avenir_Regular']">
            {t('aboutMe')}
          </p>
        </div>
      </div>
    </section>
  )
}
