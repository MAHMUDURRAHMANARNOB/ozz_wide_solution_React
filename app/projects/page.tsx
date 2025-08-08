import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectsGrid from '@/components/projects-grid'
import ProjectsHero from '@/components/projects-hero'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}
