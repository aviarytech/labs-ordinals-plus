import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import LatestNews from '@/components/LatestNews'
import DifLabs from '@/components/DifLabs'
import UseCases from '@/components/UseCases'
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
        <Features />
        <LatestNews posts={posts} />
        <DifLabs />
        <UseCases />
        <Roadmap />
        <Community />
        <Documentation />
        <Footer />
      </main>
    </>
  )
}
