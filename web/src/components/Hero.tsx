import Accordion from '@/components/Accordion'
import Logo from '@/components/Logo'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-8 px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="mb-16 text-center">
          <span className="flex justify-center items-center text-[#333333] text-4xl font-semibold mb-8 gap-2">
            <Logo size="lg" /> Ordinals Plus
          </span>
          {/* <span className="block text-[#f7931a] text-4xl font-extrabold">Authentic Assets on Bitcoin</span> */}
        </h1>

        <div className="max-w-[800px] mx-auto">
          <div className="explainer-section mb-12">
            <Accordion id="accordion-ordinals" title="What are Ordinals?">
              <div className="explainer-grid text-left">
                <div className="explainer-item">
                  <h3 className="text-xl font-semibold mb-4">Permanent and Self-Owned Digital Assets</h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Established in 2021 by Casey Rodarmor, <a href="https://docs.ordinals.com" className="text-[#f7931a] hover:underline">Ordinal Theory</a> organizes Bitcoin&apos;s blockchain and inscribes data permanently while associating it with an individual satoshi.</li>
                    <li>This innovation allows for the creation and ownership of digital assets, like art or collectibles, in a secure, tamper-proof, and enduring manner.</li>
                    <li>While powerful on their own, Ordinals can be enhanced with verifiable authenticity and identity features.</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="explainer-section mb-12">
            <Accordion id="accordion1" title="What is Ordinals Plus?">
              <div className="explainer-grid text-left">
                <div className="explainer-item mb-8">
                  <h3 className="text-xl font-semibold mb-4">Ordinals Plus Brings Identity to Digital Assets</h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Ordinals Plus combines Bitcoin Ordinals with decentralized identity technology to create more powerful digital assets.</li>
                    <li>It allows creators to cryptographically sign their work, proving authenticity and ownership forever on Bitcoin.</li>
                    <li>Collections can be verified, traced, and trusted using the same technology that powers modern digital identity systems.</li>
                    <li>Assets can carry verifiable credentials - cryptographic proofs about their properties, history, and relationships.</li>
                  </ul>
                </div>
                <div className="explainer-item">
                  <h3 className="text-xl font-semibold mb-4">Why This Matters</h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Digital assets become more than just files - they become verifiable objects with provable history and authenticity.</li>
                    <li>Creators can build reputation and trust around their digital works.</li>
                    <li>Collectors can verify the complete provenance of their assets.</li>
                    <li>Organizations can issue verifiable digital items that carry real-world meaning and authority.</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="explainer-section mb-12">
            <Accordion id="accordion2" title="Who is it for?">
              <div className="explainer-grid text-left">
                <div className="explainer-item mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔐</span> For Collectors
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Verify authenticity and provenance of digital assets</li>
                    <li>Build trusted collections with cryptographic proof</li>
                    <li>Ensure the legitimacy of every piece in your collection</li>
                  </ul>
                </div>
                <div className="explainer-item mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">✍️</span> For Creators
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Sign your work with decentralized identity</li>
                    <li>Build verifiable reputation and attribution</li>
                    <li>Create collections with built-in authenticity</li>
                  </ul>
                </div>
                <div className="explainer-item">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏢</span> For Organizations
                  </h3>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Issue verifiable credentials and certificates</li>
                    <li>Create trusted digital assets and documents</li>
                    <li>Build reputation systems on Bitcoin</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="explainer-section mb-12">
            <Accordion id="accordion3" title="What can you build with it?">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href="https://soundwave-securefest.lovable.app/"
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-white rounded-xl overflow-hidden shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src="/images/event.jpeg"
                      alt="Concert crowd with vibrant lighting"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#333333]">
                      <span className="text-2xl">🎫</span> Event Ticketing
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-[#495057]">
                      <li>Create tamper-proof digital tickets with built-in authenticity verification</li>
                      <li>Enable secure ticket transfers with complete provenance tracking</li>
                      <li>Eliminate counterfeiting through blockchain-backed verification</li>
                    </ul>
                  </div>
                </a>

                <a href="https://clutch-legacy-collectibles.lovable.app/"
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-white rounded-xl overflow-hidden shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src="/images/clutch.avif"
                      alt="Basketball arena with dramatic lighting"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#333333]">
                      <span className="text-2xl">🏀</span> Sports Memorabilia
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-[#495057]">
                      <li>Authenticate collectibles with verifiable provenance</li>
                      <li>Create digital twins of physical memorabilia</li>
                      <li>Build trusted marketplaces for sports collectibles</li>
                    </ul>
                  </div>
                </a>

                <a href="https://neurocanvas-hub.lovable.app/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-white rounded-xl overflow-hidden shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src="/images/code.jpeg"
                      alt="Code interface with syntax highlighting"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#333333]">
                      <span className="text-2xl">🤖</span> AI Development
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-[#495057]">
                      <li>Verify AI model authenticity and training provenance</li>
                      <li>Create marketplaces for trusted AI solutions</li>
                      <li>Track AI model versions and updates with cryptographic proof</li>
                    </ul>
                  </div>
                </a>

                <a href="https://authentic-travel-experiences.lovable.app/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-white rounded-xl overflow-hidden shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src="/images/travel.jpg"
                      alt="Travel experiences platform"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#333333]">
                      <span className="text-2xl">✈️</span> Travel Experiences
                    </h3>
                    <ul className="list-disc pl-5 space-y-3 text-[#495057]">
                      <li>Verify authentic local experiences and tour providers</li>
                      <li>Create trusted travel credentials and certifications</li>
                      <li>Build reputation systems for travel services</li>
                    </ul>
                  </div>
                </a>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
} 