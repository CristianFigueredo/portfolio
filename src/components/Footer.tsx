import { getLanguageFromURL, useTranslations } from '../i18n/utils'
import { PROFILE_URL } from '../constants'
import { Logo } from './Logo'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const locale = getLanguageFromURL()
  const t = useTranslations(locale)
  const year = new Date().getFullYear()

  const links = [
    { name: t('Projects'), href: '#projects' },
    { name: t('Skills'), href: '#skills' },
    { name: t('About me'), href: '#about' },
    { name: t('Testimonials'), href: '#testimonials' },
  ]

  const socials = [
    { name: 'LinkedIn', href: PROFILE_URL.LINKEDIN, icon: Linkedin },
    { name: 'GitHub', href: PROFILE_URL.GITHUB, icon: Github },
    { name: 'Twitter', href: PROFILE_URL.TWITTER, icon: Twitter },
  ]

  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo width={50} height={50} />
            <p className="text-neutral-500 text-sm font-['Avenir_Regular']">
              © {year} Cristian Figueredo. {t('All rights reserved')}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors text-sm font-['Avenir_Regular']"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-5">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
