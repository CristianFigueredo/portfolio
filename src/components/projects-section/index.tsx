import { Image } from 'astro:assets'
import './styles.module.css'
import { ProjectInformation } from '../project-information'

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <ProjectInformation />
      <div id="screenshots">
        {Array.from({ length: 4 }).map((_, index) => (
          <div class="screenshot-wrapper">
            <Image
              width="423"
              height="852"
              class={'screenshot ' + 'screenshot-' + (index + 1)}
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
