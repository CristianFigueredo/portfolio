import { defaultLocale, languages, ui, type Locale } from './ui'

export const getLanguageFromURL = (
  url: URL = new URL(window.location.href)
): Locale => {
  const [, lang] = url.pathname.split('/')

  if (lang in languages) {
    return lang as Locale
  }

  return defaultLocale
}

export const useTranslations = (locale: Locale) => {
  return function translate(key: keyof (typeof ui)[typeof defaultLocale]) {
    return ui[locale][key] || ui[defaultLocale][key]
  }
}
