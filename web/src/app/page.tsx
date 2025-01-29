import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DifLabs from '@/components/DifLabs'
import UseCases from '@/components/UseCases'
import Roadmap from '@/components/Roadmap'
import Community from '@/components/Community'
import Documentation from '@/components/Documentation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
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
