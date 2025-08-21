import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, Factory, Wrench, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      category: "Commercial",
      icon: Building2,
      color: "bg-blue-100 text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      image: "/images/office-building-electrical.png",
      services: [
        "Office Building Electrical Systems",
        "Retail Store Installations",
        "Data Centre Power Solutions",
        "Emergency Lighting Systems",
        "Commercial Maintenance",
        "Level 2 Service Provider",
        "Renewable Energy Solutions",
      ],
      gallery: [
        "/images/office-building-electrical.png",
        "/images/retail-electrical-installation.png",
        "/images/commercial-lighting-system.png",
        "/images/data-center-electrical.png",
      ],
    },
    {
      category: "Residential",
      icon: Home,
      color: "bg-green-100 text-green-600",
      bgGradient: "from-green-50 to-green-100",
      image: "/images/residential-electrical-services.png",
      services: [
        "Home Electrical Installations",
        "Safety Switch Upgrades",
        "Solar Panel Integration",
        "Smart Home Automation",
        "Electrical Repairs & Maintenance",
        "Level 2 Service Provider",
        "Renewable Energy Solutions",
      ],
      gallery: [
        "/home-electrical-installation.png",
        "/safety-switch-upgrade.png",
        "/solar-panel-electrical.png",
        "/smart-home-automation.png",
      ],
    },
    {
      category: "Industrial",
      icon: Factory,
      color: "bg-purple-100 text-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      image: "/images/industrial-electrical-services.png",
      services: [
        "Heavy Machinery Electrical",
        "Industrial Control Systems",
        "Power Distribution Networks",
        "Motor Control Installations",
        "Industrial Maintenance Programs",
        "Level 2 Service Provider",
        "Renewable Energy Solutions",
      ],
      gallery: [
        "/heavy-machinery-electrical.png",
        "/industrial-control-systems.png",
        "/power-distribution-network.png",
        "/motor-control-installation.png",
      ],
    },
  ]

  const specialtyServices = [
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical repair services across Sydney & NSW.",
      image: "/images/emergency-electrical-repair.png",
    },
    {
      icon: Zap,
      title: "Energy Solutions",
      description: "Sustainable and energy-efficient electrical solutions.",
      image: "/images/energy-efficient-solutions.png",
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety audits and compliance checks.",
      image: "/images/electrical-safety-inspection.png",
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 via-transparent to-blue-100 animate-gradient-shift"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Electrical Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical services tailored to meet the unique needs of commercial, residential, and
            industrial clients across Sydney and NSW.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.category} electrical services`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className={`text-start pb-4 mb-4 `}>
                
                <CardTitle className="text-xl font-bold text-slate-900">{service.category}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0 pb-6">
                <ul className="space-y-3 mb-6">
                  {service.services.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-sm text-slate-600 animate-fade-in-left"
                      style={{ animationDelay: `${itemIndex * 50}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Service Gallery */}
                {/* <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.gallery.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="aspect-square bg-slate-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${service.category} service ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div> */}

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 group-hover:border-orange-500 group-hover:text-orange-600 transition-all duration-300 bg-transparent"
                >
                  <Link href="#contact" className="flex items-center justify-center">
                    Get Quote
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialty Services */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl animate-fade-in-up animation-delay-600">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Specialty Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500 shadow-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
