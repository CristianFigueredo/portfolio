import CSS from './styles.module.css'

export const ProjectInformation = () => {
  return (
    <div className={CSS.container}>
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
