'use client'

import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

export default function DonateContent() {
  const qrRef = useRef<HTMLCanvasElement>(null)
  const btcAddress = 'bc1qm5mkrkjgcrhk867xnvdt7rzjjsut3qhyulzcw8'

  useEffect(() => {
    if (qrRef.current) {
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
  }, [])

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
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[500px] mx-auto bg-white rounded-2xl p-8 shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Thank You for Supporting<br />
            Ordinals Plus! 🙏
          </h1>
          <p className="text-[#495057]">Your support helps us continue developing open-source tools for the Bitcoin ecosystem.</p>
        </div>
        
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
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