import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Award, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const trustBadges = [
    { icon: Award, text: 'CEC Accredited' },
    { icon: CheckCircle, text: '30+ Years Experience' },
    { icon: MapPin, text: 'Sydney & NSW Coverage' },
    { icon: Clock, text: '24/7 Emergency Support' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Your Experts in{' '}
                <span className="text-orange-600">Sydney Electrical Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Powered by Reliability, Trusted Across Sydney & NSW. From commercial installations to residential repairs, we deliver safe, compliant, and innovative electrical solutions across Sydney and surrounding NSW areas.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 text-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <Link href="#contact">Request a Consultation</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 text-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                <Link href="#services">View Our Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8">
              <p className="text-sm text-slate-500 mb-4 font-medium">Trusted by 1,000+ clients across Sydney & NSW</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {trustBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-2 p-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <badge.icon className="h-4 w-4 text-orange-600" />
                    <span className="text-xs font-medium">{badge.text}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/australian-electricians-panel.png"
                alt="Professional Australian electricians working on electrical installations"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1000+</div>
                <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
