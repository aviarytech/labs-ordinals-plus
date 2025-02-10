import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestNews from '@/components/LatestNews'
import DifLabs from '@/components/DifLabs'
import Roadmap from '@/components/Roadmap'
import Community from '@/components/Community'
import Documentation from '@/components/Documentation'
import Footer from '@/components/Footer'
import { getAllBlogPosts } from '@/lib/blog'

export default async function Home() {
  const posts = await getAllBlogPosts()
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <LatestNews posts={posts} />
        <Roadmap />
        <Community />
        <Documentation />
        <DifLabs />
        <Footer />
      </main>
    </>
  )
}
