export default function Features() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
        Features
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-8 mt-0 mb-8">
        <div className="bg-[#f8f9fa] p-8 rounded-xl border border-[#e9ecef] text-center">
          <div className="text-4xl mb-4">🔐</div>
          <h3 className="text-[#333333] mb-4 text-xl">For Collectors</h3>
          <ul className="list-none p-0 flex flex-col gap-3">
            <li className="leading-6 text-[#495057] p-2 bg-[#f8f9fa] rounded-md text-[0.95rem]">
              Verify authenticity and provenance of digital assets
            </li>
            <li className="leading-6 text-[#495057] p-2 bg-[#f8f9fa] rounded-md text-[0.95rem]">
              Build trusted collections with cryptographic proof
            </li>
          </ul>
        </div>

        <div className="bg-[#f8f9fa] p-8 rounded-xl border border-[#e9ecef] text-center">
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-[#333333] mb-4 text-xl">For Creators</h3>
          <ul className="list-none p-0 flex flex-col gap-3">
            <li className="leading-6 text-[#495057] p-2 bg-[#f8f9fa] rounded-md text-[0.95rem]">
              Sign your work with decentralized identity
            </li>
            <li className="leading-6 text-[#495057] p-2 bg-[#f8f9fa] rounded-md text-[0.95rem]">
              Build verifiable reputation and attribution
            </li>
          </ul>
        </div>

        <div className="bg-[#f8f9fa] p-8 rounded-xl border border-[#e9ecef] text-center">
          <div className="text-4xl mb-4">🏢</div>
          <h3 className="text-[#333333] mb-4 text-xl">For Businesses</h3>
          <ul className="list-none p-0 flex flex-col gap-3">
            <li className="leading-6 text-[#495057]">
              Issue verifiable credentials and memberships
            </li>
            <li className="leading-6 text-[#495057]">
              Create trusted digital assets with real authority
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
} 