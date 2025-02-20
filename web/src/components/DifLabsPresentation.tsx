export default function DifLabsPresentation() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
          DIF Labs Presentation
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
        </h2>
        <div className="w-full max-w-[1200px] mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/CtTFOrtKdic"
            title="DIF Labs Cohort Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
} 