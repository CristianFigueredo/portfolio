import { PROFILE_URL } from '../../data/social-media'
import { BackgroundTitle } from '../../components/background-title/'
import css from './styles.module.css'
import { ProjectsSection } from '../../components/projects-section'

const Icon = ({ name }: { name: string }) => {
  return <p>{name}</p>
}

export const MainView = () => {
  return (
    <main>
      <section className={css.whoami}>
        <h1 className={css.full_name}>Cristian Figueredo</h1>
        <h2 className={css.role}>Mobile Engineer</h2>
      </section>
      <BackgroundTitle text="ABOUT ME">
        <p>
          Crafting user friendly and aesthetic UI designs is not just my
          profession, it's my passion.
        </p>
      </BackgroundTitle>
      <ProjectsSection />
      <BackgroundTitle text="SKILLS">
        <p>React/React Native NodeJS AstroJS NextJS</p>
      </BackgroundTitle>
      <BackgroundTitle text="CONTACT">
        <div>
          <a target="_blank" href={PROFILE_URL.GITHUB}>
            <Icon name="mdi:github" />
          </a>
          <a target="_blank" href={PROFILE_URL.LINKEDIN}>
            <Icon name="mdi:linkedin" />
          </a>
          <a target="_blank" href={PROFILE_URL.TWITTER}>
            <Icon name="mdi:twitter" />
          </a>
        </div>
      </BackgroundTitle>
    </main>
  )
}
