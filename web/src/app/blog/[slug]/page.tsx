import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/blog'
import BlogPost from '@/components/BlogPost'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
} 