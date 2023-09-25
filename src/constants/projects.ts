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
    subtitle: 'team lead & developer',
    description:
      'the aim of the app is to bring together people with and without disability',
    bottom_label: 'android & ios application',
    id: 1,
    screenshots: {
      folder: 'hugs-dating',
      files: ['explore.png', 'chat.png', 'profile.png', 'main.png'],
    },
  },
]
