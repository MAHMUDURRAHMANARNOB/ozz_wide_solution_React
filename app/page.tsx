import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Coverage from '@/components/coverage'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
