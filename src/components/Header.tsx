import { Logo } from '.'
import { RESUME_URL } from '../constants/urls'
import { Button } from './Button'
import { Download } from 'lucide-react'

const menuOptions = ['Projects', 'Skills', 'Testimonials', 'Contact'] as const

export type IMenuOption = (typeof menuOptions)[number]

type NavBarLiProps = {
  children: IMenuOption
  onClick: (option: IMenuOption) => void
}

function MenuOption({ children, onClick }: NavBarLiProps) {
  return (
    <li
      className="text-sm font-light text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 relative group"
      onClick={() => onClick(children)}
    >
      <span>{children}</span>
      <span className="absolute w-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 left-0 -bottom-1 transition-all duration-300 group-hover:w-full" />
    </li>
  )
}

export const Header: React.FC = () => {
  return (
    <header className="top-0 left-0 right-0 backdrop-blur-sm bg-black/30 flex w-full items-center justify-between p-2 px-[5%] pt-5 z-50">
      <Logo />
      <nav className="hidden sm:block">
        <ul className="flex space-x-8">
          {menuOptions.map((option) => (
            <MenuOption
              onClick={() => handleMenuOptionClick(option)}
              key={option}
            >
              {option}
            </MenuOption>
          ))}
        </ul>
      </nav>
      <Button
        label="Resume"
        icon={<Download size={14} strokeWidth={2} />}
        onClick={() => window.open(RESUME_URL)}
      />
    </header>
  )
}

const handleMenuOptionClick = (option: IMenuOption) => {
  const projectsSectionElement = document.getElementById('projects')
  const skillsSectionElement = document.getElementById('skills')
  const testimonialsSectionElement = document.getElementById('testimonials')
  const footer = document.getElementsByTagName('footer')

  if (option === 'Projects' && projectsSectionElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: projectsSectionElement.offsetTop * 0.78,
    })
    return
  }
  if (option === 'Skills' && skillsSectionElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: skillsSectionElement.offsetTop,
    })
    return
  }
  if (option === 'Testimonials' && testimonialsSectionElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: testimonialsSectionElement.offsetTop * 0.98,
    })
    return
  }
  if (option === 'Contact' && footer) {
    window.scrollTo({
      behavior: 'smooth',
      top: footer[0].offsetTop,
    })
    return
  }
}
