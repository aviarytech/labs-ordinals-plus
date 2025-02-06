import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

export default function LatestNews({ posts }: { posts: BlogPost[] }) {
  // Get the most recent post
  const latestPost = posts[0]

  return (
    <section className="py-16 px-8 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
          Latest News
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
        </h2>

        <div className="max-w-[800px] mx-auto space-y-8">
          <article className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef]">
            <h2 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
              <Link href={`/blog/${latestPost.slug}`} className="text-[#333333] no-underline hover:text-[#f7931a] transition-colors">
                {latestPost.title}
              </Link>
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                {latestPost.date}
              </span>
              {latestPost.tags.map((tag) => (
                <span key={tag} className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-[#495057] leading-relaxed">{latestPost.excerpt}</p>
          </article>

          <div className="text-center pt-8">
            <Link 
              href="/blog" 
              className="inline-block px-6 py-3 bg-white text-[#f7931a] font-semibold rounded-lg border-2 border-[#f7931a] hover:bg-[#f7931a] hover:text-white transition-colors duration-200"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 