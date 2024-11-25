import { useState, useEffect } from 'react'
import Vapi from '@vapi-ai/web'
import { Loader2, Phone, PhoneOff } from 'lucide-react'
import { cn } from '../utils/cn'

const assistantID = '501ec22c-2dfa-4178-aee5-f716ba5bb5bc'
const publicKey = 'cbdf1e22-f328-4b4c-b214-e5d2bb296dbb'
const vapi = new Vapi(publicKey)

export function VoiceAgent() {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Set up event listeners
    vapi.on('call-start', () => {
      setIsLoading(false)
      setIsCallActive(true)
    })

    vapi.on('call-end', () => {
      setIsCallActive(false)
    })

    vapi.on('error', (e) => {
      console.error(e)
      setIsLoading(false)
      setIsCallActive(false)
    })

    // Cleanup listeners on unmount
    return () => {
      vapi.stop()
    }
  }, [])

  const handleToggleCall = async () => {
    if (isCallActive) {
      vapi.stop()
    } else {
      setIsLoading(true)

      vapi.start(assistantID).finally(() => {
        setIsLoading(false)
      })
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
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
              ? 'Connecting...'
              : isCallActive
              ? 'End'
              : 'Speak with my AI twin'}
          </span>
        </button>
      </div>
    </div>
  )
}