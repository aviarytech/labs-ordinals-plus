import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const post = await getBlogPost(slug)
      return post
    })
  )
  
  return allPostsData.filter(post => post !== null).sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      content: processedContent.toString()
    }
  } catch (e) {
    console.error(`Error getting blog post ${slug}:`, e)
    return null
  }
} 