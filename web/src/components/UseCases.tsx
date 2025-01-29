import Image from 'next/image'

export default function UseCases() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
        Use Cases
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
      </h2>
      
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {/* Event Ticketing */}
          <a href="https://soundwave-securefest.lovable.app/" target="_blank" rel="noopener noreferrer"
             className="group bg-white rounded-2xl overflow-hidden shadow-md border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/images/event.jpeg"
                alt="Concert crowd with vibrant lighting"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7 bg-white">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">Event Ticketing</h3>
              <p className="text-[#495057] leading-relaxed">Join the future of event ticketing with Bitcoin-verified tickets - 100% authentic, 100% secure, for a confident event experience</p>
            </div>
          </a>

          {/* Sports Memorabilia */}
          <a href="https://clutch-legacy-collectibles.lovable.app/" target="_blank" rel="noopener noreferrer"
             className="group bg-white rounded-2xl overflow-hidden shadow-md border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/images/clutch.avif"
                alt="Basketball arena with dramatic lighting"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7 bg-white">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">Sports Memorabilia</h3>
              <p className="text-[#495057] leading-relaxed">Own authenticated digital collectibles of legendary sports moments with verifiable provenance and NBA legend backing</p>
            </div>
          </a>

          {/* AI Development Marketplace */}
          <a href="https://neurocanvas-hub.lovable.app/" target="_blank" rel="noopener noreferrer"
             className="group bg-white rounded-2xl overflow-hidden shadow-md border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/images/code.jpeg"
                alt="Code interface with syntax highlighting"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7 bg-white">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">AI Development Marketplace</h3>
              <p className="text-[#495057] leading-relaxed">The premier marketplace for verified AI-powered development solutions with cryptographic proof of origin and quality</p>
            </div>
          </a>

          {/* Crisis Tourism Management */}
          <a href="https://crisis-tourism-harmony.lovable.app/" target="_blank" rel="noopener noreferrer"
             className="group bg-white rounded-2xl overflow-hidden shadow-md border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src="/images/crisis-tourism.jpg"
                alt="Mountain landscape with person standing on peak"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7 bg-white">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">Crisis Tourism Management</h3>
              <p className="text-[#495057] leading-relaxed">Empower destinations with verifiable credentials for emergency response and real-time crisis management tools</p>
            </div>
          </a>

          {/* And Many More... */}
          <div className="group bg-gradient-to-br from-[#f7931a] to-[#d97b0d] rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="p-7 text-white">
              <h3 className="text-2xl font-semibold mb-3">And Many More...</h3>
              <p className="leading-relaxed">The possibilities are endless. From supply chain provenance to event authenticity, from public attestations to digital identity verification - Bitcoin Ordinals can revolutionize how we think about verifiable credentials.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
} 