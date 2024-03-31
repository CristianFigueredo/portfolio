import { Logo, Button } from '.'

type NavBarLiProps = {
  children: React.ReactNode
}

function NavBarLi({ children }: NavBarLiProps) {
  return (
    <li>
      <a className="text-xs font-light text-white" href="#">
        {children}
      </a>
    </li>
  )
}

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between p-2 px-[5%] pt-5">
      <Logo />
      <div>
        <nav>
          <ul className=" space-x-6 hidden sm:flex">
            <NavBarLi>About</NavBarLi>
            <NavBarLi>Projects</NavBarLi>
            <NavBarLi>Services</NavBarLi>
            <NavBarLi>Contact</NavBarLi>
          </ul>
        </nav>
      </div>
      <Button label="Resume" />
    </header>
  )
}
