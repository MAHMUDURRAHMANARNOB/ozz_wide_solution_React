import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Luxary Residential Home",
      location: "Sydney, NSW",
      type: "Commercial",
      image: "images/condell_park_project.jpg",
      description:
        "Complete electrical fit-out for a new home in Condell Park, NSW",
      stats: { duration: "6 months", team: "3 electricians" },
      gallery: ["/office-electrical-panel.png", "/emergency-lighting-system.png", "/data-cabling-installation.png"],
    },
    {
      title: "Parramatta Manufacturing Plant",
      location: "Parramatta, NSW",
      type: "Industrial",
      image: "/melbourne-industrial-electrical.png",
      description:
        "Heavy-duty electrical systems installation for automotive manufacturing facility with specialized machinery.",
      stats: { duration: "8 months", team: "15 electricians" },
      gallery: [
        "/industrial-machinery-electrical.png",
        "/power-distribution-panel.png",
        "/industrial-control-room.png",
      ],
    },
    {
      title: "Bondi Residential Estate",
      location: "Bondi, NSW",
      type: "Residential",
      image: "/brisbane-residential-electrical.png",
      description: "Electrical infrastructure for luxury residential development including smart home integration.",
      stats: { duration: "12 months", team: "8 electricians" },
      gallery: ["/residential-smart-home.png", "/solar-panel-installation.png", "/home-electrical-upgrade.png"],
    },
  ]

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-blue-50 animate-gradient-shift"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our expertise across diverse electrical projects throughout Sydney and NSW, from residential
            upgrades to large-scale commercial installations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="grid grid-cols-3 gap-2">
                    {project.gallery.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="aspect-square bg-white/20 backdrop-blur-sm rounded-lg overflow-hidden"
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`${project.title} detail ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-medium animate-pulse-subtle">
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
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

        {/* Enhanced CTA Section with Images */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 shadow-xl animate-fade-in-up animation-delay-600">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Your Project?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed text-lg">
                Join our satisfied clients across Sydney and NSW. Get a free consultation and competitive quote for your
                electrical project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="/quote" className="flex items-center">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="/projects">View All Projects</Link>
                </Button>
              </div>
            </div>

            {/* Project Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/electrical-consultation.jpg"
                    alt="Electrical project planning and consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/electrical-team-work.png"
                    alt="Professional electrical team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/completed-electrical-project.png"
                    alt="Completed electrical project showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/client-satisfaction.png"
                    alt="Satisfied client with completed electrical work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
