import css from './styles.module.css'
import { ProjectInformation as Information } from '../project-information'
import { useRef } from 'preact/hooks'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export const ProjectsSection = () => {
  const screenshots = useRef<HTMLDivElement | null>(null)
  const { inView: screenshotsInView } = useIntersectionObserver(screenshots)

  console.log('render')
  return (
    <section className={css.container}>
      <Information display={screenshotsInView ? 'block' : 'none'} />
      <div className={css.screenshots} ref={screenshots}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div class="screenshot-wrapper">
            <img
              width="423"
              height="852"
              class={css.screenshot + ' ' + css['screenshot-' + (index + 1)]}
              alt="placeholder"
              src="/images/screenshots/placeholder.png"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// <script>
// import { getPercentageScrolledFromTop } from '../../utils/scroll'
//
// const phone1 = document.querySelector('.screenshot-1')
// const phone2 = document.querySelector('.screenshot-2')
// const phone3 = document.querySelector('.screenshot-3')
// const phone4 = document.querySelector('.screenshot-4')
//
// const containerEL = document.querySelector('#projects')
// const screenshotsContainerEL = document.querySelector('#screenshots')
//
// window.addEventListener('resize', () => {
//   containerRect = containerEL.getBoundingClientRect()
// })
//
// let scrolledPercentageOffset
//
// window.addEventListener('scroll', () => {
//   if (window.scrollY < screenshotsContainerRect.top - window.innerHeight)
//     return
//   let scrolledPercentage = getPercentageScrolledFromTop()
//
//   if (!scrolledPercentageOffset) scrolledPercentageOffset = scrolledPercentage
//
//   scrolledPercentage = scrolledPercentage - scrolledPercentageOffset
//
//   phone1.style.transform = `translate(0px,-${
//     scrolledPercentage * 8
//   }%) scale(0.7)`
//   phone2.style.transform = `translate(0px,-${
//     scrolledPercentage * 10
//   }%) scale(0.6)`
//   phone3.style.transform = `translate(0px,-${
//     scrolledPercentage * 21
//   }%) scale(0.8)`
//   phone4.style.transform = `translate(0px,-${
//     scrolledPercentage * 16
//   }%) scale(0.75)`
// })
// </script>
