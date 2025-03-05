'use client';

import Image from 'next/image';

export default function Roadmap() {
  return (
    <section className="py-24 px-8 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-gradient-to-br from-[#f7931a]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-gradient-to-tr from-[#f7931a]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[#f7931a] after:to-[#d97b0d] after:rounded">
          Roadmap
        </h2>

        <div className="absolute left-[29px] top-[180px] bottom-20 w-1 bg-gradient-to-b from-[#f7931a]/20 via-[#f7931a]/10 to-transparent -z-10" />

        <div className="flex flex-col gap-12 items-center">
          <div className="flex justify-center items-center gap-8 animate-fade-in [animation-delay:200ms] w-full max-w-[800px] group">
        <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md flex-shrink-0 z-10">
              1
            </div>
            <div className="flex flex-col items-center flex-1 max-w-[500px] bg-white backdrop-blur-md p-8 rounded-xl shadow-md border border-[#f7931a]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group-hover:border-[#f7931a]/30 relative">
              <div className="absolute top-0 right-0 bg-[#f7931a] text-white px-6 py-1 rounded-bl-lg rounded-tr-xl font-bold shadow-md">
                DRAFT READY ✓
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] bg-clip-text text-transparent flex items-center">
                <span>Specifications</span>
                <a href="https://blog.identity.foundation/dif-labs-ssi-market-gets-an-innovation-hub-2/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center bg-black px-2.5 py-1 rounded text-sm font-extrabold tracking-wide ml-3 align-middle">
                  <Image src="/images/dif.png" alt="DIF Labs" width={40} height={40} className=" -mt-[2px] mr-1.5 filter brightness-0 invert" />
                  <span className="text-[#00ff00]">LABS</span>
                </a>
              </h3>
              <ul className="list-none p-0 m-0">
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Technical specifications development
                </li>
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  DID method specification updates
                </li>
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Standards documentation
                </li>
              </ul>
              <div className="mt-4 text-[#f7931a] font-semibold text-sm opacity-90">
                Initial drafts published Feb 18, 2025
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 animate-fade-in [animation-delay:400ms] w-full max-w-[800px] group">
            <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md flex-shrink-0 z-10">
              2
            </div>
            <div className="flex flex-col items-center flex-1 max-w-[500px] bg-white backdrop-blur-md p-8 rounded-xl shadow-md border border-[#f7931a]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group-hover:border-[#f7931a]/20">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] bg-clip-text text-transparent">
                Implementation 🛠️
              </h3>
              <ul className="list-none p-0 m-0">
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Reference implementation
                </li>
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Verification library
                </li>
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Sample applications
                </li>
              </ul>
              <div className="mt-4 text-[#f7931a] font-semibold text-sm opacity-90">
                Completes May 18, 2025
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 animate-fade-in [animation-delay:600ms] w-full max-w-[800px] group">
            <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md flex-shrink-0 z-10">
              3
            </div>
            <div className="flex flex-col items-center flex-1 max-w-[500px] bg-white backdrop-blur-md p-8 rounded-xl shadow-md border border-[#f7931a]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group-hover:border-[#f7931a]/20">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] bg-clip-text text-transparent">
                Launch & Beyond 🚀
              </h3>
              <ul className="list-none p-0 m-0">
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  First inscriptions on mainnet
                </li>
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Community rewards
                </li>
                <li className="py-2 pl-6 relative text-[#495057] before:content-['→'] before:absolute before:left-0 before:text-[#f7931a] before:font-bold">
                  Inscribing Vegas launch celebration 🎉
                </li>
              </ul>
              <div className="mt-4 text-[#f7931a] font-semibold text-sm opacity-90">
                At Bitcoin Vegas May 27-29th, 2025
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 text-[#f7931a]/10 text-6xl font-bold -rotate-12">₿</div>
        <div className="absolute top-1/4 right-0 text-[#f7931a]/10 text-6xl font-bold rotate-12">₿</div>
        <div className="absolute bottom-1/4 left-0 text-[#f7931a]/10 text-6xl font-bold -rotate-12">₿</div>
      </div>
    </section>
  )
} 