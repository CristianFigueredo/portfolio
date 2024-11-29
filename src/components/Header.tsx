import { Logo } from '.'
import { RESUME_URL } from '../constants/urls'
import { useTranslations, getLanguageFromURL } from '../i18n/utils'
import { Button } from './Button'
import { Download } from 'lucide-react'

type IMenuOption = {
  id: string
  label: string
}

type NavBarLiProps = {
  option: IMenuOption
  onClick: (option: IMenuOption) => void
}

function MenuOption({ option, onClick }: NavBarLiProps) {
  return (
    <li
      className="text-sm font-light text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 relative group"
      onClick={() => onClick(option)}
    >
      <span>{option.label}</span>
      <span className="absolute w-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 left-0 -bottom-1 transition-all duration-300 group-hover:w-full" />
    </li>
  )
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
    <header className="top-0 left-0 right-0 backdrop-blur-sm bg-black/30 flex w-full items-center justify-between p-2 px-[5%] pt-5 z-50">
      <Logo />
      <nav className="hidden sm:block">
        <ul className="flex space-x-8">
          {menuOptions.map((option) => (
            <MenuOption
              onClick={() => handleMenuOptionClick(option)}
              key={option.id}
              option={option}
            />
          ))}
        </ul>
      </nav>
      <Button
        label={translated('Resume')}
        icon={<Download size={14} strokeWidth={2} />}
        onClick={() => window.open(RESUME_URL[locale])}
      />
    </header>
  )
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
