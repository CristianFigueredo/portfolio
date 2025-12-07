import { Logo } from '.'
import { RESUME_URL } from '../constants/urls'
import { useTranslations, getLanguageFromURL } from '../i18n/utils'
import { Download } from 'lucide-react'
import { Button } from './Button'

type IMenuOption = {
  id: string
  label: string
}

const handleMenuOptionClick = (option: IMenuOption) => {
  const projectsSectionElement = document.getElementById('projects')
  const skillsSectionElement = document.getElementById('skills')
  const testimonialsSectionElement = document.getElementById('testimonials')
  const footer = document.getElementsByTagName('footer')

  if (option.id === 'projects' && projectsSectionElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: projectsSectionElement.offsetTop * 0.78,
    })
    return
  }
  if (option.id === 'skills' && skillsSectionElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: skillsSectionElement.offsetTop,
    })
    return
  }
  if (option.id === 'testimonials' && testimonialsSectionElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: testimonialsSectionElement.offsetTop * 0.98,
    })
    return
  }
  if (option.id === 'contact' && footer) {
    window.scrollTo({
      behavior: 'smooth',
      top: footer[0].offsetTop,
    })
    return
  }
}

export const Header: React.FC = () => {
  const locale = getLanguageFromURL()
  const translated = useTranslations(locale)

  const menuOptions = [
    { id: 'projects', label: translated('Projects') },
    { id: 'skills', label: translated('Skills') },
    { id: 'testimonials', label: translated('Testimonials') },
    { id: 'contact', label: translated('Contact') },
  ]
  return (
    <div className="fixed flex w-full z-50 pt-6 pr-4 pl-4 top-0 left-0 justify-center">
      <nav
        className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/30 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between"
        style={
          {
            position: 'relative',
            '--border-gradient':
              'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))',
            '--border-radius-before': '9999px',
          } as React.CSSProperties
        }
      >
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          {menuOptions.map((option) => (
            <a
              key={option.id}
              href={`#${option.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleMenuOptionClick(option)
              }}
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              {option.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Button
            label={translated('Resume')}
            icon={<Download size={14} strokeWidth={2} />}
            onClick={() => window.open(RESUME_URL[locale])}
          />
        </div>
      </nav>
    </div>
  )
}
