import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { cache } from 'react'

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

// Process all blog posts at module initialization time
const processedPosts = new Map<string, BlogPost>()

function processAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  fileNames.forEach((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    const processedContent = remark()
      .use(html)
      .processSync(content)
    
    processedPosts.set(slug, {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      content: processedContent.toString()
    })
  })
}

// Process all posts when this module is loaded
processAllPosts()

export const getAllBlogPosts = cache((): BlogPost[] => {
  return Array.from(processedPosts.values())
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
})

export const getBlogPost = cache((slug: string): BlogPost | null => {
  return processedPosts.get(slug) || null
}) 