import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import { BlogPost } from '@/lib/blog'

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Blog
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
          </h1>
          
          <div className="max-w-[800px] mx-auto space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white p-8 rounded-xl shadow-md border border-[#e9ecef]">
                <h2 className="flex flex-wrap items-center gap-3 text-2xl font-bold mb-6">
                  <Link href={`/blog/${post.slug}`} className="text-[#333333] no-underline hover:text-[#f7931a] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                    {post.date}
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-[#495057] leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 