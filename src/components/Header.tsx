import { Logo, HoverBorderGradient } from '.'
import { IconDownload } from '@tabler/icons-react'
import { RESUME_URL } from '../constants/urls'

const menuOptions = ['Projects', 'Skills', 'Testimonials', 'Contact'] as const

export type IMenuOption = (typeof menuOptions)[number]

type NavBarLiProps = {
  children: IMenuOption
  onClick: (option: IMenuOption) => void
}

function MenuOption({ children, onClick }: NavBarLiProps) {
  return (
    <li
      className="text-xs font-light text-white cursor-pointer"
      onClick={() => onClick(children)}
    >
      {children}
    </li>
  )
}

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between p-2 px-[5%] pt-5 z-50 relative">
      <Logo />
      <div>
        <nav>
          <ul className="space-x-6 hidden sm:flex">
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
      </div>
      <HoverBorderGradient
        as="button"
        onClick={() => window.open(RESUME_URL)}
        className="flex items-center"
      >
        <IconDownload size={14} className="mr-1" />
        <span>Resume</span>
      </HoverBorderGradient>
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
