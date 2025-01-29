export default function Documentation() {
  return (
    <section id="docs" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
        Documentation
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
        <a href="/specifications" className="p-8 bg-[#f8f9fa] rounded-xl no-underline text-[#333333] transition-transform duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
          <p className="text-[#495057]">Detailed technical documentation for developers</p>
        </a>

        <a href="#" className="p-8 bg-[#f8f9fa] rounded-xl no-underline text-[#333333] transition-transform duration-300 hover:-translate-y-1 opacity-60 relative pointer-events-none">
          <div className="absolute -top-2.5 -right-2.5 bg-[#ff4757] text-white px-2 py-0.5 rounded text-xs font-bold shadow-sm">
            TODO
          </div>
          <h3 className="text-xl font-semibold mb-4">Implementation Guide</h3>
          <p className="text-[#495057]">Step-by-step guide for implementing Ordinals Plus</p>
        </a>

        {/* Add other documentation cards similarly */}
      </div>
    </section>
  )
} 