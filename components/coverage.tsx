import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Coverage() {
  const locations = [
    { region: 'Sydney CBD', areas: ['City', 'Circular Quay', 'Darling Harbour', 'The Rocks'], color: 'bg-blue-500' },
    { region: 'Eastern Suburbs', areas: ['Bondi', 'Double Bay', 'Paddington', 'Woollahra'], color: 'bg-green-500' },
    { region: 'Northern Beaches', areas: ['Manly', 'Dee Why', 'Avalon', 'Palm Beach'], color: 'bg-orange-500' },
    { region: 'North Shore', areas: ['Chatswood', 'Hornsby', 'St Leonards', 'Mosman'], color: 'bg-purple-500' },
    { region: 'Western Sydney', areas: ['Parramatta', 'Penrith', 'Blacktown', 'Liverpool'], color: 'bg-red-500' },
    { region: 'Southern Sydney', areas: ['Sutherland', 'Cronulla', 'Hurstville', 'Bankstown'], color: 'bg-indigo-500' },
    { region: 'Blue Mountains', areas: ['Katoomba', 'Leura', 'Springwood'], color: 'bg-yellow-500' },
    { region: 'Central Coast', areas: ['Gosford', 'Wyong', 'Terrigal'], color: 'bg-pink-500' },
  ]

  return (
    <section id="coverage" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Sydney & NSW Coverage
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From the CBD to the Blue Mountains, Wollongong to Newcastle - we provide comprehensive electrical solutions across Sydney and surrounding NSW areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl shadow-lg p-8 border">
              <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="/sydney-coverage-map.jpeg"
                  alt="Sydney and NSW coverage map showing Ozz Wide Solutions service areas"
                  className="w-full h-full object-contain"
                />
                {/* Overlay indicators */}
                <div className="absolute inset-0 flex items-left justify-left p-4 space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-2">Sydney & NSW</div>
                    <div className="text-sm text-slate-600">Complete Coverage</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs">Key Regions</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-xs text-slate-600">Suburbs</div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className={`w-3 h-3 rounded-full ${location.color} mr-3`} />
                      <h3 className="font-semibold text-slate-900">{location.region}</h3>
                    </div>
                    <div className="space-y-1">
                      {location.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="flex items-center text-sm text-slate-600">
                          <MapPin className="h-3 w-3 mr-2 text-slate-400" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Ready to Get Started?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-slate-700">
                  <Phone className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <div className="font-medium">0429 772 624</div>
                    <div className="text-sm text-slate-500">Call Anytime</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <div className="font-medium">24/7 Emergency Service</div>
                    <div className="text-sm text-slate-500">Available Across Sydney & NSW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
