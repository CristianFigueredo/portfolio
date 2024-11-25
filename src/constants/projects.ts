export type Project = {
  title: string
  subtitle: string
  description: string
  id: number
  bottom_label: string
  screenshots: {
    folder: string
    files: Array<string>
  }
  websiteURL: string
}

export const SCREENSHOTS_FOLDER_PATH = '/images/screenshots'

export const data: Array<Project> = [
  {
    title: 'Hugs Dating',
    subtitle: 'Team Lead & Developer',
    description:
      'This app is like a Tinder, but focused on people with disabilities. to break down barriers and make these people comfortable and included.',
    bottom_label: 'Android & iOS Application & Backend (Adaptation)',
    id: 1,
    screenshots: {
      folder: 'hugs-dating',
      files: ['main.png', 'explore.png', 'profile.png', 'chat.png'],
    },
    websiteURL: 'https://hugsdating.app/',
  },
  {
    title: "Corriere Dell 'Italianità",
    subtitle: 'Team lead & Developer',
    description:
      'It serves as a platform for discussion and exchange, aiming to become a leading source of information and ideas for the Italian community in Switzerland.',
    bottom_label: 'Android & iOS Application',
    id: 2,
    screenshots: {
      folder: 'corriere-dell-italianita',
      files: ['home.png', 'subscriptions.png', 'post.png', 'settings.png'],
    },
    websiteURL: 'https://corriereitalianita.ch/',
  },
  {
    title: 'Little Inka',
    subtitle: 'Team Lead & Developer',
    description:
      'This app is focused on the sale of sushi and poke and is for the first restaurant in Bellinzona (Canton Ticino - Switzerland) dedicated to this niche.',
    bottom_label: 'Android & iOS Application + Backend',
    id: 3,
    screenshots: {
      folder: 'little-inka',
      files: ['home.png', 'products.png', 'menu.png', 'contact.png'],
    },
    websiteURL: 'https://littleinka.ch/',
  },
]
