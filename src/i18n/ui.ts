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
  'hero.description':
    'I help teams ship fast, beautiful products that users actually enjoy.',
  'hero.cta': 'View Projects',
  'hero.stats.projects': 'Projects',
  'hero.stats.years': 'Years Experience',
  'hero.stats.clients': 'Happy Clients',
  'Have a project in mind?': 'Have a project in mind?',
  'Let’s turn your ideas into reality. I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.':
    'Let’s turn your ideas into reality. I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
  "Let's work together": "Let's work together",
  'Building digital experiences with focus on performance, design and user experience.':
    'Building digital experiences with focus on performance, design and user experience.',
  'Building digital experiences': 'Building digital experiences',
  'Send me an email': 'Send me an email',
  'Turning ideas into real life products is my calling.':
    'Turning ideas into real life products is my calling.',
  'Let’s turn your ideas into reality.': 'Let’s turn your ideas into reality.',
  Menu: 'Menu',
  'Get in touch': 'Get in touch',
  'Available for new projects': 'Available for new projects',
  'Let’s build something amazing together.':
    'Let’s build something amazing together.',
  'Email copied!': 'Email copied!',
  'Copy email': 'Copy email',
  'Designed & Built with passion.': 'Designed & Built with passion.',
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
    'hero.description':
      'Ayudo a equipos a lanzar hermosos productos rapidamente que la gente realmente disfruta.',
    'hero.cta': 'Ver Proyectos',
    'hero.stats.projects': 'Proyectos',
    'hero.stats.years': 'Años de Experiencia',
    'hero.stats.clients': 'Clientes Satisfechos',
    'Have a project in mind?': '¿Tienes un proyecto en mente?',
    'Let’s turn your ideas into reality. I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.':
      'Convirtamos tus ideas en realidad. Siempre estoy dispuesto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.',
    "Let's work together": 'Trabajemos juntos',
    'Building digital experiences with focus on performance, design and user experience.':
      'Construyendo experiencias digitales con foco en rendimiento, diseño y experiencia de usuario.',
    'Building digital experiences': 'Construyendo experiencias digitales',
    'Send me an email': 'Envíame un correo',
    'Turning ideas into real life products is my calling.':
      'Convertir ideas en productos reales es mi vocación.',
    'Let’s turn your ideas into reality.': 'Hagamos realidad tus ideas.',
    Menu: 'Menú',
    'Get in touch': 'Ponte en contacto',
    'Available for new projects': 'Disponible para nuevos proyectos',
    'Let’s build something amazing together.':
      'Construyamos algo increíble juntos.',
    'Email copied!': '¡Correo copiado!',
    'Copy email': 'Copiar correo',
    'Designed & Built with passion.': 'Diseñado y construido con pasión.',
  },
}
