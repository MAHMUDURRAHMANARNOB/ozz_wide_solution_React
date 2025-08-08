import { Badge } from '@/components/ui/badge'
import { CheckCircle, Clock, Shield, Award } from 'lucide-react'

export default function QuoteHero() {
  const benefits = [
    { icon: CheckCircle, text: 'Free Consultation' },
    { icon: Clock, text: '24hr Response Time' },
    { icon: Shield, text: 'Fully Licensed & Insured' },
    { icon: Award, text: 'Competitive Pricing' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">
            Free Quote Request
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get Your <span className="text-orange-400">Free Quote</span> Today
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your electrical project in Sydney or NSW? Fill out our detailed 
            quote form and receive a comprehensive estimate within 24 hours. No obligation, 
            completely free.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-3">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-sm font-medium text-slate-300">{benefit.text}</div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h4 className="font-semibold mb-2">Submit Your Details</h4>
              <p className="text-sm text-slate-300">Fill out our comprehensive quote form with your project requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h4 className="font-semibold mb-2">We Review & Assess</h4>
              <p className="text-sm text-slate-300">Our experts review your requirements and may schedule a site visit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h4 className="font-semibold mb-2">Receive Your Quote</h4>
              <p className="text-sm text-slate-300">Get a detailed, competitive quote within 24 hours via email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
