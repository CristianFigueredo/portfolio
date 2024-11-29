import type { PropsWithChildren } from 'react'
import { Logo, ButtonSecondary, FooterBackground } from '.'
import { Linkedin, Github, Twitter } from 'lucide-react'
import { PROFILE_URL } from '../constants'
import { getLanguageFromURL, useTranslations } from '../i18n/utils'
import { IconHandLoveYou } from '@tabler/icons-react'

function sendEmail() {
  const emailID = 'cristian25figueredo'

  document.location = 'mailto:' + emailID + '@gmail.com'
}

const FooterTopBox = () => {
  const locale = getLanguageFromURL()
  const translated = useTranslations(locale)
  return (
    <div
      style={{ background: greenAndPurpleLinearGradient }}
      className="flex absolute left-0 z-20 right-0 mx-auto top-[-9vh] w-5/6 h-32 rounded-md bg-blue-500 align-middle sm:flex-col"
    >
      <div className="flex h-full w-full items-center justify-between px-16">
        <h3 className="text-2xl font-semibold">
          {translated('Start a Conversation')}
        </h3>
        <p className="text-sm font-light">
          {translated('Interested in working together? We should')}
          <br />
          {translated('queue up a time to chat. I’ll buy the coffee.')}
        </p>
        <ButtonSecondary
          onClick={sendEmail}
          text={translated("Let's Do This")}
          icon={<IconHandLoveYou size={16} className="mr-2" />}
        />
      </div>
    </div>
  )
}

const IconContainer: React.FC<PropsWithChildren<{ onClick?: () => void }>> = ({
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-full p-2 border-white/10 border-2 mr-2 justify-center items-center cursor-pointer"
    >
      {children}
    </div>
  )
}
const greenAndPurpleLinearGradient =
  'linear-gradient(107.74deg, #48DA82 0%, #6630DA 36.21%, #1F83A9 67.02%, #23B873 100%)'

export const Footer = () => {
  const locale = getLanguageFromURL()
  const translated = useTranslations(locale)
  return (
    <footer className="bg-[#15161A] relative text-white hidden sm:block">
      <FooterTopBox />
      <FooterBackground>
        <div className="flex h-[50vh] items-center">
          <div className="flex flex-1 h-full flex-col p-20 box-border justify-center items-start">
            <Logo />
            <p className="text-xs font-light">
              {translated('Living, learning, & leveling up')} <br />
              {translated('one day at a time.')}
            </p>
          </div>
          <div className="flex flex-1 h-full p-20 justify-end items-center">
            <div>
              <p className="mb-2 text-center">{translated('Social Media')}</p>
              <div className="relative flex gap-2 z-20">
                <IconContainer
                  onClick={() => window.open(PROFILE_URL.LINKEDIN)}
                >
                  <Linkedin size={14} />
                </IconContainer>
                <IconContainer onClick={() => window.open(PROFILE_URL.GITHUB)}>
                  <Github size={14} />
                </IconContainer>
                <IconContainer onClick={() => window.open(PROFILE_URL.TWITTER)}>
                  <Twitter size={14} />
                </IconContainer>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs font-light mt-12">
          {translated('Copyright')} ©2024 Cristian Figueredo.{' '}
          {translated('All rights reserved')}
        </p>
      </FooterBackground>
    </footer>
  )
}
