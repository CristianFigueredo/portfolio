import { Logo, ButtonSecondary, FooterBackground } from '.'
import { IconPhone, IconMail, IconBrandLinkedin } from '@tabler/icons-react'

const FooterTopBox = () => {
  return (
    <div
      style={{ background: greenAndPurpleLinearGradient }}
      className="flex absolute left-0 z-20 right-0 mx-auto top-[-9vh] w-5/6 h-32 rounded-md bg-blue-500 align-middle sm:flex-col"
    >
      <div className="flex h-full w-full items-center justify-between px-16">
        <h3 className="text-2xl font-semibold">Start a project</h3>
        <p className="text-sm font-light">
          Interested in working together? We should <br /> queue up a time to
          chat. I’ll buy the coffee.
        </p>
        <ButtonSecondary />
      </div>
    </div>
  )
}

const greenAndPurpleLinearGradient =
  'linear-gradient(107.74deg, #48DA82 0%, #6630DA 36.21%, #1F83A9 67.02%, #23B873 100%)'

export const Footer = () => {
  return (
    <footer className="bg-[#15161A] h-[70vh] relative text-white hidden sm:block">
      <FooterTopBox />
      <FooterBackground>
        <div className="flex h-[50vh] items-center">
          <div className="flex flex-1 h-full flex-col p-20 box-border">
            <Logo />
            <p className="text-xs font-light">
              Living, learning, & leveling up <br /> one day at a time.
            </p>
          </div>
          <div className="flex flex-1h-full p-20">
            <div>
              <p className="mb-3">Contact Info:</p>
              <div className="flex mb-4">
                <div className="flex mr-2 gap-1 mb-3">
                  <IconPhone />
                  <p>+1 234 564 823</p>
                </div>
                <div className="flex ml-2  gap-1">
                  <IconMail />
                  <p>support@email.com</p>
                </div>
              </div>
              <p className="mb-2">Social Media:</p>
              <div className="flex gap-2">
                <div className="rounded-full p-2 border-white/10 border-2 mr-2 justify-center items-center">
                  <IconBrandLinkedin size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs font-light mt-12">
          Copyright ©2024 Cristian Figueredo. All rights reserved.
        </p>
      </FooterBackground>
    </footer>
  )
}
