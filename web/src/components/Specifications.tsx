'use client';

import Link from 'next/link';

export default function Specifications() {
  return (
    <section className="py-24 px-8 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-gradient-to-br from-[#f7931a]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-gradient-to-tr from-[#f7931a]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[#f7931a] after:to-[#d97b0d] after:rounded">
          Specifications
        </h2>

        <div className="max-w-[800px] mx-auto space-y-8">
          {/* BTCO DID Method */}
          <Link href="https://identity.foundation/labs-ordinals-plus/btco-did-method" className="block group">
            <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group-hover:border-[#f7931a]/30">
              <h3 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
                <span className="text-[#333333] group-hover:text-[#f7931a] transition-colors">
                  BTCO DID Method
                </span>
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
              
              <div className="flex justify-end mt-6">
                <span className="text-white bg-[#f7931a] rounded-full px-4 py-2 text-sm font-medium flex items-center group-hover:bg-[#d97b0d] transition-colors">
                  View Specification
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>

          {/* BTCO DID Linked Resources */}
          <Link href="https://identity.foundation/labs-ordinals-plus/btco-did-linked-resources" className="block group">
            <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group-hover:border-[#f7931a]/30">
              <h3 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
                <span className="text-[#333333] group-hover:text-[#f7931a] transition-colors">
                  BTCO DID Linked Resources
                </span>
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
              
              <div className="flex justify-end mt-6">
                <span className="text-white bg-[#f7931a] rounded-full px-4 py-2 text-sm font-medium flex items-center group-hover:bg-[#d97b0d] transition-colors">
                  View Specification
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>

          {/* BTCO Verifiable Metadata */}
          <Link href="https://identity.foundation/labs-ordinals-plus/btco-vm" className="block group">
            <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group-hover:border-[#f7931a]/30">
              <h3 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
                <span className="text-[#333333] group-hover:text-[#f7931a] transition-colors">
                  BTCO Verifiable Metadata
                </span>
                <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                  v0.2.0
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
              
              <div className="flex justify-end mt-6">
                <span className="text-white bg-[#f7931a] rounded-full px-4 py-2 text-sm font-medium flex items-center group-hover:bg-[#d97b0d] transition-colors">
                  View Specification
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  );
} 