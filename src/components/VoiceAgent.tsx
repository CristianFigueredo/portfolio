import { useState, useEffect, useRef } from 'react'
import Vapi from '@vapi-ai/web'
import { Loader2, Phone, PhoneOff } from 'lucide-react'
import { Toaster, toast } from 'sonner'
import { getLanguageFromURL } from '../i18n/utils'
import { useTranslations } from '../i18n/utils'
import { ButtonPrimary } from './ButtonPrimary'

export function VoiceAgent() {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const vapi = useRef<Vapi | null>(null)
  const locale = getLanguageFromURL()
  const translated = useTranslations(locale)

  useEffect(() => {
    const publicKey = 'cbdf1e22-f328-4b4c-b214-e5d2bb296dbb'
    const vapiInstance = new Vapi(publicKey)
    vapi.current = vapiInstance

    // Set up event listeners
    vapiInstance.on('call-start', () => {
      setIsLoading(false)
      setIsCallActive(true)
    })

    vapiInstance.on('call-end', () => {
      setIsCallActive(false)
    })

    vapiInstance.on('error', () => {
      setIsLoading(false)
      setIsCallActive(false)
      toast.error(translated('Cannot start voice agent'))
    })

    // Cleanup listeners on unmount
    return () => {
      vapiInstance.stop()
    }
  }, [])

  const handleToggleCall = async () => {
    const assistantIdByLocale = {
      en: '501ec22c-2dfa-4178-aee5-f716ba5bb5',
      es: '6429ceee-94ca-4b6d-a7b4-c568af828e87',
    }

    if (!assistantIdByLocale[locale] || !vapi.current) {
      toast.error(translated('Cannot start voice agent'))
      return
    }
    if (isCallActive) {
      vapi.current.stop()
    } else {
      setIsLoading(true)

      vapi.current.start(assistantIdByLocale[locale]).catch(() => {
        setIsLoading(false)
        toast.error(translated('Cannot start voice agent'))
      })
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
      <Toaster />
      <ButtonPrimary
        onClick={handleToggleCall}
        label={
          isLoading
            ? translated('Connecting...')
            : isCallActive
            ? translated('End')
            : translated('AI Twin')
        }
        icon={
          isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
          ) : isCallActive ? (
            <PhoneOff strokeWidth={1.5} className="w-4 h-4 text-indigo-500" />
          ) : (
            <Phone strokeWidth={1.5} className="w-4 h-4 text-indigo-500" />
          )
        }
      />
    </div>
  )
}
