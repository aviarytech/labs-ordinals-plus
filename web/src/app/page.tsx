import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestNews from '@/components/LatestNews'
import DifLabs from '@/components/DifLabs'
import Roadmap from '@/components/Roadmap'
import Community from '@/components/Community'
import Specifications from '@/components/Specifications'
import Footer from '@/components/Footer'
import DifLabsPresentation from '@/components/DifLabsPresentation'
import { getAllBlogPosts } from '@/lib/blog'

export default async function Home() {
  const posts = await getAllBlogPosts()
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <DifLabsPresentation />
        <LatestNews posts={posts} />
        <Roadmap />
        <Community />
        <Specifications />
        <DifLabs />
        <Footer />
      </main>
    </>
  )
}
