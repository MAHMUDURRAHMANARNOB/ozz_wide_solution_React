import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Zap, Clock, CheckCircle } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "30+ Years Experience",
      description: "Three decades of delivering safe, reliable electrical solutions across Australia.",
      image: "/images/experienced-electrician.jpg",
    },
    {
      icon: Users,
      title: "Sydney & NSW Coverage",
      description: "Comprehensive coverage across Sydney metropolitan area and surrounding NSW regions.",
      image: "/images/syndey_coverage.jpg",
    },
    {
      icon: Zap,
      title: "Industry Accredited",
      description: "Fully licensed CEC installers with all necessary certifications and compliance.",
      image: "/images/cec_certified.png",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency electrical services when you need them most.",
      image: "/images/emergency-support.jpg",
    },
  ]

  const certificationImages = [
    "/electrical-license-certificate.png",
    "/cec-accreditation-badge.png",
    "/safety-compliance-certificate.png",
    "/insurance-certificate.png",
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Ozz Wide Solutions?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            As Sydney's trusted electrical solutions provider, we combine decades of experience with cutting-edge
            technology to deliver safe, compliant, and innovative electrical services across Sydney and NSW's
            commercial, residential, and industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Content Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 animate-fade-in-up animation-delay-600">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Committed to Safety & Compliance</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Our team of certified electricians adheres to the highest Australian safety standards and regulations.
                We're fully insured, licensed, and committed to delivering work that meets or exceeds NSW and Australian
                industry requirements.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Fully Licensed & Insured",
                  "Australian Standards Compliant",
                  "Comprehensive Warranty Coverage",
                  "Emergency Response Team",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-slate-700 animate-fade-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Certification Images */}
              {/* <div className="grid grid-cols-2 gap-4">
                {certificationImages.map((cert, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={cert || "/placeholder.svg"}
                      alt={`Certification ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div> */}
            </div>

            <div className="space-y-6">
              {/* Main Safety Image */}
              <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/danger-sign-safety-standard.jpg"
                  alt="Electrical safety standards and compliance documentation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/professional-electrical-testing-equipment.jpg"
                    alt="Professional electrical testing equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/professional-working-setup.jpeg"
                    alt="Professional electrical safety gear and equipment"
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
