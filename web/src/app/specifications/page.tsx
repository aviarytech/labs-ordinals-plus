import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Specifications() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Specifications
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
          </h1>
          
          <div className="max-w-[800px] mx-auto">
            <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef]">
              <h2 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
                <a 
                  href="https://identity.foundation/labs-btco-vc/"
                  className="text-[#333333] no-underline"
                >
                  BTCO DID Linked Resources
                </a>
                <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                  v0.1.0
                </span>
                <span className="bg-[#fff3cd] text-[#856404] px-3 py-1 rounded-full text-sm font-medium">
                  Draft
                </span>
              </h2>
              
              <div className="space-y-4 text-[#495057] leading-relaxed">
                <p>
                  The BTC Ordinals DID Linked Resources extension provides a standardized framework for associating immutable DID Linked Resources with Decentralized Identifiers (DIDs) anchored in the Bitcoin blockchain through ordinal inscriptions.
                </p>
                <p>
                  This specification introduces mechanisms for creating, managing, and referencing linked resources, enabling organizations and individuals to attach verifiable credential schemas, governance frameworks, logos, status lists, and other resource types to their DIDs.
                </p>
                <p>
                  The extension ensures the authenticity, integrity, and traceability of resources while maintaining compatibility with W3C DID Core standards and interoperability with existing BTC Ordinals inscriptions. The specification addresses key challenges such as Resource Resolution, resource discovery, and version management, providing a robust foundation for secure and scalable applications in decentralized identity ecosystems.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 