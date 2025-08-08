import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Sydney CBD Office Complex',
      location: 'Sydney, NSW',
      type: 'Commercial',
      image: '/modern-office-electrical-sydney.png',
      description: 'Complete electrical fit-out for 20-story commercial building including emergency systems and data infrastructure.',
      stats: { duration: '6 months', team: '12 electricians' },
    },
    {
      title: 'Melbourne Manufacturing Plant',
      location: 'Melbourne, VIC',
      type: 'Industrial',
      image: '/melbourne-industrial-electrical.png',
      description: 'Heavy-duty electrical systems installation for automotive manufacturing facility with specialized machinery.',
      stats: { duration: '8 months', team: '15 electricians' },
    },
    {
      title: 'Brisbane Residential Estate',
      location: 'Brisbane, QLD',
      type: 'Residential',
      image: '/brisbane-residential-electrical.png',
      description: 'Electrical infrastructure for 200-home residential development including smart home integration.',
      stats: { duration: '12 months', team: '8 electricians' },
    },
  ]

  const clientLogos = [
    { name: 'Westfield', logo: '/generic-shopping-center-logo.png' },
    { name: 'Woolworths', logo: '/generic-supermarket-logo.png' },
    { name: 'BHP', logo: '/bhp-logo.png' },
    { name: 'Telstra', logo: '/generic-telecom-logo.png' },
    { name: 'ANZ Bank', logo: '/generic-bank-logo.png' },
  ]

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our expertise across diverse electrical projects throughout Australia, 
            from small residential upgrades to large-scale commercial installations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-medium">
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.stats.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {project.stats.team}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Trusted by Leading Australian Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col mt-8">
            <Button asChild variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Link href="/projects">View All Projects</Link>
            </Button>
            <Button asChild className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
