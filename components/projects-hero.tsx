import { Badge } from '@/components/ui/badge'
import { Building2, Home, Factory } from 'lucide-react'

export default function ProjectsHero() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Building2 },
    { number: '15+', label: 'Years Experience', icon: Home },
    { number: '100%', label: 'Client Satisfaction', icon: Factory },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 lg:py-24">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Electrical Projects</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of electrical projects across Sydney and NSW. 
            From residential upgrades to large commercial installations, see how we deliver 
            excellence in every project.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
