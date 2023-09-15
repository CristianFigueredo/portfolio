import CSS from './styles.module.css'

type TProps = {
  display: 'block' | 'none'
}

export const ProjectInformation = ({ display = 'none' }: TProps) => {
  return (
    <div
      className={CSS.container}
      style={{ display, position: 'fixed', top: 0, left: 0 }}
    >
      <p className={CSS.id}>01</p>
      <h3 className={CSS.title}>FR Design system</h3>
      <h4 className={CSS.subtitle}>Design system lead • Technical PDM</h4>
      <p className={CSS.description}>
        Multi brand e-commerce design system for websites and native mobile
        applications
      </p>
      <p className={CSS.bottom_label}>Design System</p>
    </div>
  )
}
