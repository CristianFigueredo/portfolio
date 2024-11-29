import { useState, useEffect, useRef } from 'react'
import Vapi from '@vapi-ai/web'
import { Loader2, Phone, PhoneOff } from 'lucide-react'
import { cn } from '../utils/cn'
import { Toaster, toast } from 'sonner'
import { getLanguageFromURL } from '../i18n/utils'
import { useTranslations } from '../i18n/utils'

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
      <div className="relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition duration-200" />
        <button
          onClick={handleToggleCall}
          className={cn(
            'relative flex items-center gap-2 px-4 py-2',
            'bg-[#0A0A0A] text-white rounded-full',
            'backdrop-blur-sm',
            'transition-all duration-200',
            'hover:bg-[#0A0A0A]/90'
          )}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
          ) : isCallActive ? (
            <PhoneOff strokeWidth={1.5} className="w-4 h-4 text-indigo-500" />
          ) : (
            <Phone strokeWidth={1.5} className="w-4 h-4 text-indigo-500" />
          )}
          <span className="text-sm">
            {isLoading
              ? translated('Connecting...')
              : isCallActive
              ? translated('End')
              : translated('AI Twin')}
          </span>
        </button>
      </div>
    </div>
  )
}
