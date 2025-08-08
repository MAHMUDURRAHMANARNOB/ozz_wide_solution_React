import Header from '@/components/header'
import Footer from '@/components/footer'
import QuoteForm from '@/components/quote-form'
import QuoteHero from '@/components/quote-hero'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <QuoteHero />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
