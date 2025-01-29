import Header from './Header'
import Footer from './Footer'
import { BlogPost as BlogPostType } from '@/lib/blog'

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 relative pb-4">
              {post.title}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-[#f7931a] to-[#d97b0d] rounded"></span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                {post.date}
              </span>
              {post.tags.map((tag) => (
                <span key={tag} className="bg-[#f8f9fa] text-[#495057] px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <div 
              className="blog-content prose prose-lg max-w-none space-y-4 text-[#495057] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 