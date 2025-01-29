import { getAllBlogPosts } from '@/lib/blog'
import BlogIndex from '@/components/BlogIndex'

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  return <BlogIndex posts={posts} />
} 