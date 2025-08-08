'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, Eye } from 'lucide-react'

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'industrial', name: 'Industrial' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Sydney CBD Office Tower',
      category: 'commercial',
      location: 'Sydney CBD, NSW',
      image: '/modern-office-electrical-sydney.png',
      description: 'Complete electrical fit-out for 25-story commercial building including emergency systems, data infrastructure, and energy-efficient LED lighting throughout.',
      details: {
        duration: '8 months',
        team: '15 electricians',
        client: 'Premium Property Group',
        value: '$2.5M',
      },
      features: ['Emergency Lighting', 'Data Cabling', 'LED Retrofit', 'Fire Safety Systems'],
    },
    {
      id: 2,
      title: 'Parramatta Shopping Centre',
      category: 'commercial',
      location: 'Parramatta, NSW',
      image: '/parramatta-shopping-center.png',
      description: 'Major electrical upgrade for large retail complex including new switchboards, emergency systems, and tenant electrical infrastructure.',
      details: {
        duration: '6 months',
        team: '12 electricians',
        client: 'Westfield Corporation',
        value: '$1.8M',
      },
      features: ['Retail Fit-outs', 'Emergency Systems', 'Switchboard Upgrades', 'Tenant Services'],
    },
    {
      id: 3,
      title: 'Bondi Beach Residential Complex',
      category: 'residential',
      location: 'Bondi, NSW',
      image: '/brisbane-residential-electrical.png',
      description: 'Electrical infrastructure for luxury 50-unit residential development including smart home integration and solar panel preparation.',
      details: {
        duration: '10 months',
        team: '8 electricians',
        client: 'Coastal Developments',
        value: '$800K',
      },
      features: ['Smart Home Systems', 'Solar Ready', 'EV Charging', 'Safety Switches'],
    },
    {
      id: 4,
      title: 'Penrith Manufacturing Plant',
      category: 'industrial',
      location: 'Penrith, NSW',
      image: '/melbourne-industrial-electrical.png',
      description: 'Heavy-duty electrical systems for automotive parts manufacturing facility including specialized machinery connections and power distribution.',
      details: {
        duration: '12 months',
        team: '18 electricians',
        client: 'AutoParts Manufacturing',
        value: '$3.2M',
      },
      features: ['Heavy Machinery', 'Power Distribution', 'Control Systems', 'Safety Compliance'],
    },
    {
      id: 5,
      title: 'Chatswood Medical Centre',
      category: 'commercial',
      location: 'Chatswood, NSW',
      image: '/chatswood-medical-center.png',
      description: 'Specialized electrical installation for multi-story medical facility with backup power systems and medical-grade electrical requirements.',
      details: {
        duration: '4 months',
        team: '10 electricians',
        client: 'HealthCare Properties',
        value: '$1.2M',
      },
      features: ['Medical Grade Systems', 'Backup Power', 'Specialized Lighting', 'Emergency Systems'],
    },
    {
      id: 6,
      title: 'Blue Mountains Resort',
      category: 'commercial',
      location: 'Katoomba, NSW',
      image: '/blue-mountains-resort.png',
      description: 'Complete electrical renovation of heritage resort including modern amenities while preserving historical character.',
      details: {
        duration: '7 months',
        team: '9 electricians',
        client: 'Mountain View Resorts',
        value: '$950K',
      },
      features: ['Heritage Compliance', 'Modern Amenities', 'Outdoor Lighting', 'Energy Efficiency'],
    },
    {
      id: 7,
      title: 'Manly Beachfront Homes',
      category: 'residential',
      location: 'Manly, NSW',
      image: '/manly-beachfront-homes.png',
      description: 'Luxury residential electrical installations for waterfront properties including outdoor entertainment areas and pool systems.',
      details: {
        duration: '5 months',
        team: '6 electricians',
        client: 'Beachfront Living',
        value: '$600K',
      },
      features: ['Outdoor Entertainment', 'Pool Systems', 'Weather Protection', 'Luxury Lighting'],
    },
    {
      id: 8,
      title: 'Liverpool Logistics Hub',
      category: 'industrial',
      location: 'Liverpool, NSW',
      image: '/liverpool-logistics-hub.png',
      description: 'Large-scale electrical infrastructure for distribution center including automated systems and high-bay lighting.',
      details: {
        duration: '9 months',
        team: '14 electricians',
        client: 'Express Logistics',
        value: '$2.1M',
      },
      features: ['Automated Systems', 'High-Bay Lighting', 'Loading Dock Systems', 'Security Integration'],
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-900 hover:bg-blue-800 text-white'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 hover:bg-slate-100"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className={`font-medium ${
                      project.category === 'commercial' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'residential' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div className="flex items-center text-slate-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.details.duration}
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Users className="h-3 w-3 mr-1" />
                    {project.details.team}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-2 py-1 border-slate-300 text-slate-600">
                      {feature}
                    </Badge>
                  ))}
                  {project.features.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-1 border-slate-300 text-slate-600">
                      +{project.features.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Client & Value */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Client:</span>
                    <span className="font-medium text-slate-700">{project.details.client}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-slate-500">Value:</span>
                    <span className="font-medium text-orange-600">{project.details.value}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Join our satisfied clients across Sydney and NSW. Get a free consultation 
            and competitive quote for your electrical project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4"
            >
              <a href="/quote">Get Free Quote</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
