export type Project = {
  title: string
  subtitle: string
  description: string
  id: number
  bottom_label: string
}

const PROJECTS: Array<Project> = [
  {
    title: 'FR Design system',
    subtitle: 'Design system lead  •  Technical PDM',
    description:
      'Multi brand e-commerce design system for websites and native mobile applications.',
    bottom_label: 'Design System',
    id: 1,
  },
  {
    title: 'LASHIC',
    subtitle: 'Design lead',
    description:
      "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
    bottom_label: 'APP SUITE',
    id: 2,
  },
  {
    title: 'Eyep',
    subtitle: 'UI Designer  •  Front-end Developer',
    description: 'Single purpose website to show your IP address and location.',
    bottom_label: 'WEB APP',
    id: 3,
  },
];

export const PROJECTS_DATA = [PROJECTS[0]]
