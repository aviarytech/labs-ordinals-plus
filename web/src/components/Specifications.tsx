export default function Specifications() {
  return (
    <section className="py-24 px-8 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
          Specifications
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
        </h2>
        
        <div className="max-w-[800px] mx-auto space-y-8">
          <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef]">
            <h3 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
              <a 
                href="https://identity.foundation/labs-ordinals-plus/btco-did-method"
                className="text-[#333333] no-underline"
              >
                BTCO DID Method
              </a>
              <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                v0.2.0
              </span>
              <span className="bg-[#fff3cd] text-[#856404] px-3 py-1 rounded-full text-sm font-medium">
                Draft
              </span>
            </h3>
            
            <div className="space-y-4 text-[#495057] leading-relaxed">
              <p>
                The BTCO DID Method specification defines a decentralized identifier method that leverages Bitcoin Ordinal Theory and Inscriptions to create, resolve, update and deactivate DIDs directly on the Bitcoin blockchain.
              </p>
            </div>
          </article>

          <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef]">
            <h3 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
              <a 
                href="https://identity.foundation/labs-ordinals-plus/btco-did-linked-resources"
                className="text-[#333333] no-underline"
              >
                BTCO DID Linked Resources
              </a>
              <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                v0.2.0
              </span>
              <span className="bg-[#fff3cd] text-[#856404] px-3 py-1 rounded-full text-sm font-medium">
                Draft
              </span>
            </h3>
            
            <div className="space-y-4 text-[#495057] leading-relaxed">
              <p>
                The BTCO DID Linked Resources extension provides a standardized framework for associating immutable resources with DIDs through Bitcoin Ordinal inscriptions, enabling verifiable credential schemas, governance frameworks, and other resource types.
              </p>
            </div>
          </article>

          <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef]">
            <h3 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
              <a 
                href="https://identity.foundation/labs-ordinals-plus/btco-vm"
                className="text-[#333333] no-underline"
              >
                BTCO Verifiable Metadata
              </a>
              <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                v0.1.0
              </span>
              <span className="bg-[#fff3cd] text-[#856404] px-3 py-1 rounded-full text-sm font-medium">
                Draft
              </span>
            </h3>
            
            <div className="space-y-4 text-[#495057] leading-relaxed">
              <p>
                The BTCO Verifiable Metadata specification defines how to create and verify metadata about Bitcoin Ordinal inscriptions using the W3C Verifiable Credentials Data Model 2.0, enabling trustless verification of inscription properties and collection curation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
} 