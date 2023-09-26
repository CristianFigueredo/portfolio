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
}

export const SCREENSHOTS_FOLDER_PATH = '/images/screenshots'

export const data: Array<Project> = [
  {
    title: 'Hugs Dating',
    subtitle: 'Team Lead & Developer',
    description:
      'The aim of the app is to bring together people with and without disability',
    bottom_label: 'Android & iOS',
    id: 1,
    screenshots: {
      folder: 'hugs-dating',
      files: ['main.png', 'explore.png', 'profile.png', 'chat.png'],
    },
  },
  {
    title: 'Little Inka',
    subtitle: 'Team Lead & Developer',
    description:
      "Bellinzona's (Canton of Ticino - Switzerland) first takeaway dedicated to the world of poke and sushi",
    bottom_label: 'Android & iOS',
    id: 2,
    screenshots: {
      folder: 'little-inka',
      files: ['home.png', 'products.png', 'menu.png', 'contact.png'],
    },
  },
  {
    title: "Corriere Dell 'Italianità",
    subtitle: 'Team lead & Developer',
    description:
      'Is an independent, nonpartisan, nondenominational, ideology-free digital media, published by the Corriere degli Italiani Association for Italianism',
    bottom_label: 'Android & iOS',
    id: 3,
    screenshots: {
      folder: 'corriere-dell-italianita',
      files: ['home.png', 'subscriptions.png', 'post.png', 'settings.png'],
    },
  },
]
