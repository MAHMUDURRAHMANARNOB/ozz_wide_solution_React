import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Zap, Clock } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Shield,
      title: '30+ Years Experience',
      description: 'Three decades of delivering safe, reliable electrical solutions across Australia.',
    },
    {
      icon: Users,
      title: 'Sydney & NSW Coverage',
      description: 'Comprehensive coverage across Sydney metropolitan area and surrounding NSW regions.',
    },
    {
      icon: Zap,
      title: 'Industry Accredited',
      description: 'Fully licensed CEC installers with all necessary certifications and compliance.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock emergency electrical services when you need them most.',
    },
  ]

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Ozz Wide Solutions?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            As Sydney's trusted electrical solutions provider, we combine decades of experience 
            with cutting-edge technology to deliver safe, compliant, and innovative electrical services 
            across Sydney and NSW's commercial, residential, and industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Committed to Safety & Compliance
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our team of certified electricians adheres to the highest Australian safety standards 
                and regulations. We're fully insured, licensed, and committed to delivering work that 
                meets or exceeds NSW and Australian industry requirements.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-slate-700">
                  <Shield className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <Shield className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Australian Standards Compliant</span>
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <Shield className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Comprehensive Warranty Coverage</span>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden">
              <img
                src="/electrical_team.jpg"
                alt="Safety certifications and compliance documentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
