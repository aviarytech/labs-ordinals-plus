export default function Community() {
  return (
    <section id="community" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
        Join the Community
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
      </h2>
      
      <div className="flex flex-wrap justify-between gap-8 mt-8 max-w-[1200px] mx-auto">
        <div className="flex-1 min-w-[250px] text-center p-8 bg-white rounded-xl shadow-md border border-[#e9ecef]">
          <h3 className="text-xl font-semibold mb-4">Monthly Updates</h3>
          <p className="text-[#495057] mb-4">Follow our progress with monthly development insights</p>
          <a href="/blog/dif-labs-announcement" className="btn btn-primary">Read Latest</a>
        </div>

        <div className="flex-1 min-w-[250px] text-center p-8 bg-white rounded-xl shadow-md border border-[#e9ecef] opacity-60 relative">
          <div className="absolute -top-2.5 -right-2.5 bg-[#ff4757] text-white px-2 py-0.5 rounded text-xs font-bold shadow-sm">
            TODO
          </div>
          <h3 className="text-xl font-semibold mb-4">Community Calls</h3>
          <p className="text-[#495057] mb-4">Monthly community calls for feedback and discussion</p>
          <a href="#" className="btn btn-primary pointer-events-none">Calendar</a>
        </div>

        <div className="flex-1 min-w-[250px] text-center p-8 bg-white rounded-xl shadow-md border border-[#e9ecef]">
          <h3 className="text-xl font-semibold mb-4">GitHub Discussions</h3>
          <p className="text-[#495057] mb-4">Join technical discussions and contribute to the project</p>
          <a href="https://github.com/decentralized-identity/labs-ordinals-plus/discussions" className="btn btn-primary">
            Participate
          </a>
        </div>
      </div>
    </section>
  )
} 