import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Home, Factory, Wrench, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      category: 'Commercial',
      icon: Building2,
      color: 'bg-blue-100 text-blue-600',
      services: [
        'Office Building Electrical Systems',
        'Retail Store Installations',
        'Data Centre Power Solutions',
        'Emergency Lighting Systems',
        'Commercial Maintenance',
      ],
    },
    {
      category: 'Residential',
      icon: Home,
      color: 'bg-green-100 text-green-600',
      services: [
        'Home Electrical Installations',
        'Safety Switch Upgrades',
        'Solar Panel Integration',
        'Smart Home Automation',
        'Electrical Repairs & Maintenance',
      ],
    },
    {
      category: 'Industrial',
      icon: Factory,
      color: 'bg-purple-100 text-purple-600',
      services: [
        'Heavy Machinery Electrical',
        'Industrial Control Systems',
        'Power Distribution Networks',
        'Motor Control Installations',
        'Industrial Maintenance Programs',
      ],
    },
  ]

  const specialtyServices = [
    {
      icon: Wrench,
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical repair services across Australia.',
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Sustainable and energy-efficient electrical solutions.',
    },
    {
      icon: Shield,
      title: 'Safety Inspections',
      description: 'Comprehensive electrical safety audits and compliance checks.',
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Electrical Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical services tailored to meet the unique needs of 
            commercial, residential, and industrial clients across Australia.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {service.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  <Link href="#contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialty Services */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Specialty Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
