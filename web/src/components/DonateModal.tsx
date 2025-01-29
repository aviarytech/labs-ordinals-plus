'use client'

import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const qrRef = useRef<HTMLCanvasElement>(null)
  const btcAddress = 'bc1qm5mkrkjgcrhk867xnvdt7rzjjsut3qhyulzcw8'

  useEffect(() => {
    if (isOpen && qrRef.current) {
      QRCode.toCanvas(
        qrRef.current,
        btcAddress,
        {
          width: 250,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        },
        (error) => {
          if (error) console.error(error)
        }
      )
    }
  }, [isOpen])

  if (!isOpen) return null

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(btcAddress)
      const copyMessage = document.getElementById('copyMessage')
      if (copyMessage) {
        copyMessage.textContent = 'Address copied!'
        copyMessage.style.opacity = '1'
        setTimeout(() => {
          copyMessage.style.opacity = '0'
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-[400px] w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-2xl font-bold leading-tight">
            Thank You for Supporting<br />
            Ordinals Plus! 🙏
          </h2>
          <button 
            onClick={onClose} 
            className="text-black/50 hover:text-black text-2xl font-light leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="bg-white">
              <canvas ref={qrRef} className="mx-auto" />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="font-medium text-sm">Bitcoin Address:</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <code className="bg-[#f8f9fa] p-3 rounded text-sm font-mono break-all">{btcAddress}</code>
              <button 
                onClick={copyAddress}
                className="px-4 py-3 bg-[#f7931a] text-white rounded font-medium hover:shadow-lg transition-shadow whitespace-nowrap"
              >
                Copy
              </button>
            </div>
            <div id="copyMessage" className="text-green-600 text-sm opacity-0 transition-opacity duration-200">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 