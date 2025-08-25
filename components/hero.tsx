import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Clock, MapPin, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const trustBadges = [
    { icon: Award, text: "CEC Accredited" },
    { icon: CheckCircle, text: "10+ Years Experience" },
    { icon: MapPin, text: "Sydney & NSW Coverage" },
    { icon: Clock, text: "24/7 Emergency Support" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-orange-600 animate-pulse" />
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 animate-bounce-subtle">
                  Professional Electrical Solutions
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Your Experts in{" "}
                <span className="text-orange-600 relative">
                  Electrical Solutions
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 animate-scale-x"></div>
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300">
                Powered by Reliability, Trusted Across Sydney & NSW. From commercial installations to residential
                repairs, we deliver safe, compliant, and innovative electrical solutions across Sydney and surrounding
                NSW areas.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 text-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="#contact">Request a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 text-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="#services">View Our Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 animate-fade-in-up animation-delay-700">
              <p className="text-sm text-slate-500 mb-4 font-medium">Trusted by 500+ clients across Sydney & NSW</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {trustBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-2 p-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <badge.icon className="h-4 w-4 text-orange-600" />
                    <span className="text-xs font-medium">{badge.text}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div className="relative animate-fade-in-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/australian-electricians-panel.png"
                  alt="Professional Australian electricians working on electrical installations"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary images */}
              <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animation-delay-200">
                <img
                  src="/images/safety_inspection.png"
                  alt="Electrical safety inspection and testing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animation-delay-400">
                <img
                  src="/images/modern-switchboard.jpg"
                  alt="Modern electrical switchboard installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border animate-float animation-delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Emergency Support</div>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="absolute top-1/2 -left-8 bg-blue-900 text-white rounded-full p-4 shadow-xl animate-pulse-slow">
              <Shield className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
