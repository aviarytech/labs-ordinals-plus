import Accordion from '@/components/Accordion'
import Logo from '@/components/Logo'

export default function Hero() {
  return (
    <section className="pt-32 pb-8 px-8 bg-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <h1 className="mb-16">
          <span className="flex justify-center items-center text-[#333333] text-4xl font-semibold mb-8 gap-2">
            <Logo size="lg" /> Ordinals Plus
          </span>
          {/* <span className="block text-[#f7931a] text-4xl font-extrabold">Authentic Assets on Bitcoin</span> */}
        </h1>

        <div className="max-w-[800px] mx-auto">
          <div className="explainer-section mb-12">
            <Accordion id="accordion-ordinals" title="What are Ordinals?">
              <div className="explainer-grid">
                <div className="explainer-item">
                  <h3>Permanent and Self-Owned Digital Assets</h3>
                  <ul>
                    <li>Ordinal Theory organizes Bitcoin&apos;s blockchain and inscribes data permanently while associating it with an individual satoshi.</li>
                    <li>This innovation allows for the creation and ownership of digital assets, like art or collectibles, in a secure, tamper-proof, and enduring manner.</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="explainer-section mb-12">
            <Accordion id="accordion1" title="What is Ordinals Plus?">
              <div className="explainer-grid">
                <div className="explainer-item">
                  <h3>Ordinals Plus Brings Identity to Digital Assets</h3>
                  <ul>
                    <li>Ordinals Plus combines Bitcoin Ordinals with decentralized identity technology to create more powerful digital assets.</li>
                    <li>It allows creators to cryptographically sign their work, proving authenticity and ownership forever on Bitcoin.</li>
                    <li>Collections can be verified, traced, and trusted using the same technology that powers modern digital identity systems.</li>
                    <li>Assets can carry verifiable credentials - cryptographic proofs about their properties, history, and relationships.</li>
                  </ul>
                </div>
                <div className="explainer-item">
                  <h3>Why This Matters</h3>
                  <ul>
                    <li>Digital assets become more than just files - they become verifiable objects with provable history and authenticity.</li>
                    <li>Creators can build reputation and trust around their digital works.</li>
                    <li>Collectors can verify the complete provenance of their assets.</li>
                    <li>Organizations can issue verifiable digital items that carry real-world meaning and authority.</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  )
} 