import Image from 'next/image'

export default function DifLabs() {
  return (
    <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-16 w-full">
      <div className="max-w-[1200px] mx-auto flex items-center gap-16 px-8 md:flex-row flex-col">
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-4xl mb-6 font-bold bg-gradient-to-r from-white to-[#e0e0e0] bg-clip-text text-transparent">
            Incubating at DIF <span className="text-[#00ff00]">LABS</span>
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Ordinals Plus is proudly being developed and incubated at DIF Labs, the innovation arm of the Decentralized Identity Foundation. This strategic partnership ensures the project adheres to the highest standards of decentralized identity infrastructure while pushing the boundaries of what&apos;s possible with Bitcoin-based credentials.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-white text-lg mb-2">Timeline</h4>
              <p className="text-[#e0e0e0] text-sm">Part of the inaugural Beta Cohort (November 2024 - February 2025)</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-white text-lg mb-2">Expert Mentorship</h4>
              <p className="text-[#e0e0e0] text-sm">Access to industry leaders and technical experts in decentralized identity</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-white text-lg mb-2">Open Innovation</h4>
              <p className="text-[#e0e0e0] text-sm">All outputs are open-source and royalty-free, allowing for broad community adoption</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://blog.identity.foundation/dif-labs-ssi-market-gets-an-innovation-hub-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-[#00ff00] border-2"
            >
              Learn More About DIF <span className="text-[#00ff00]">LABS</span>
            </a>
          </div>
        </div>
        
        <div className="flex-shrink-0 flex justify-center order-1 md:order-2">
          <Image
            src="/images/dif.png"
            alt="DIF Labs Logo"
            width={200}
            height={200}
            className="filter brightness-110"
          />
        </div>
      </div>
    </section>
  )
} 