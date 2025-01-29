import DonateContent from '@/components/DonateContent'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 px-8">
        <DonateContent />
      </main>
      <Footer />
    </>
  )
} 