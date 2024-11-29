export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Locale = keyof typeof languages

export const defaultLocale: Locale = 'en'

const defaultTranslations = {
  aboutMe: `If you're seeking a results-driven developer with a proven ability to
        deliver impactful solutions and drive business growth, let's connect!`,
  Testimonials: 'Testimonials',
  Projects: 'Projects',
  Skills: 'Skills',
  Contact: 'Contact',
  Resume: 'Resume',
  'Cannot start voice agent': 'Cannot start voice agent',
  'Connecting...': 'Connecting...',
  End: 'End',
  'AI Twin': 'AI twin',
  'About me': 'About me',
  'Social Media': 'Social Media',
  Copyright: 'Copyright',
  'All rights reserved': 'All rights reserved',
  'Start a Conversation': 'Start a Conversation',
  'Interested in working together? We should':
    'Interested in working together? We should ',
  'queue up a time to chat. I’ll buy the coffee.':
    'queue up a time to chat. I’ll buy the coffee.',
  'Living, learning, & leveling up': 'Living, learning, & leveling up',
  'one day at a time.': 'one day at a time.',
  "Let's Do This": "Let's Do This",
}

export const ui: Record<Locale, typeof defaultTranslations> = {
  en: defaultTranslations,
  es: {
    aboutMe: `Si buscas un desarrollador con habilidades probadas para entregar soluciones impactantes y impulsar el crecimiento de tu negocio, ¡conectémonos!`,
    Testimonials: 'Testimonios',
    Projects: 'Proyectos',
    Skills: 'Habilidades',
    Contact: 'Contacto',
    Resume: 'Currículum Vitae',
    'Cannot start voice agent': 'No se pudo iniciar el agente de voz',
    'Connecting...': 'Conectando...',
    End: 'Finalizar',
    'AI Twin': 'Gemelo AI',
    'About me': 'Sobre mí',
    'Social Media': 'Redes Sociales',
    Copyright: 'Copyright',
    'All rights reserved': 'Todos los derechos reservados',
    'Start a Conversation': 'Iniciar una conversación',
    'Interested in working together? We should':
      '¿Estás interesado en trabajar juntos? \n Deberíamos',
    'queue up a time to chat. I’ll buy the coffee.':
      'agendar un tiempo para charlar. \n Te compraré el café.',
    'Living, learning, & leveling up': 'Viviendo, aprendiendo',
    'one day at a time.': 'y mejorando día a día.',
    "Let's Do This": 'Contáctame',
  },
}
