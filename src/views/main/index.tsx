import { PROFILE_URL } from '../../data/social-media'
import { BackgroundTitle } from '../../components/background-title/'
import css from './styles.module.css'

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
      <BackgroundTitle>
        <p>Crafting user friendly and aesthetic UI designs</p>
      </BackgroundTitle>
      <section className={css.about}>
        <h3>ABOUT ME</h3>
        <p>
          Crafting user friendly and aesthetic UI designs is not just my
          profession, it's my passion.
        </p>
      </section>
      <section className={css.skills}>
        <h3>SKILLS</h3>
        <p>React/React Native NodeJS AstroJS NextJS</p>
      </section>
      <section className={css.contact}>
        <h3>CONTACT</h3>
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
      </section>
    </main>
  )
}
