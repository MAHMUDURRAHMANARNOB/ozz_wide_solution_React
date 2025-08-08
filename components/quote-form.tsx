'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Send, Upload, Phone, Mail } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Project Information
    projectType: '',
    serviceCategory: '',
    propertyType: '',
    projectLocation: '',
    projectAddress: '',
    
    // Project Details
    projectDescription: '',
    timeframe: '',
    budget: '',
    urgency: '',
    
    // Additional Information
    existingElectrical: '',
    permits: '',
    additionalServices: [],
    preferredContact: '',
    
    // Files
    attachments: null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Quote form submitted:', formData)
    // Show success message or redirect
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckboxChange = (service: string) => {
    const updatedServices = formData.additionalServices.includes(service)
      ? formData.additionalServices.filter(s => s !== service)
      : [...formData.additionalServices, service]
    
    setFormData({
      ...formData,
      additionalServices: updatedServices,
    })
  }

  const additionalServices = [
    'Emergency Lighting',
    'Data Cabling',
    'Solar Panel Installation',
    'Smart Home Integration',
    'Security Systems',
    'CCTV Installation',
    'Switchboard Upgrades',
    'Safety Switch Installation',
    'Pool/Spa Electrical',
    'Outdoor Lighting',
    'EV Charging Station',
    'Electrical Safety Inspection',
  ]

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-200 shadow-xl">
          <CardHeader className="bg-blue-900 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Detailed Quote Request Form
            </CardTitle>
            <p className="text-center text-blue-100 mt-2">
              Please provide as much detail as possible for an accurate quote
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                  Project Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Category *
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      required
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 bg-white"
                    >
                      <option value="">Select service category</option>
                      <option value="commercial">Commercial Electrical</option>
                      <option value="residential">Residential Electrical</option>
                      <option value="industrial">Industrial Electrical</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="maintenance">Maintenance Service</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment/Unit</option>
                      <option value="office">Office Building</option>
                      <option value="retail">Retail Store</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="factory">Factory/Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectLocation" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Location (Suburb) *
                    </label>
                    <Input
                      id="projectLocation"
                      name="projectLocation"
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g., Bondi, Parramatta, Chatswood"
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectAddress" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Address
                    </label>
                    <Input
                      id="projectAddress"
                      name="projectAddress"
                      type="text"
                      value={formData.projectAddress}
                      onChange={handleChange}
                      placeholder="Full street address (optional)"
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={4}
                      required
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Please describe your electrical project in detail. Include specific requirements, current issues, desired outcomes, etc."
                      className="border-slate-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="timeframe" className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Timeframe *
                      </label>
                      <select
                        id="timeframe"
                        name="timeframe"
                        required
                        value={formData.timeframe}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 bg-white"
                      >
                        <option value="">Select timeframe</option>
                        <option value="asap">ASAP (Emergency)</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1month">Within 1 month</option>
                        <option value="2-3months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                        <option value="not-sure">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Contact Method *
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        required
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 bg-white"
                      >
                        <option value="">Select method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="both">Both Email & Phone</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                  Additional Services (Optional)
                </h3>
                <p className="text-sm text-slate-600 mb-4">Select any additional services you might be interested in:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {additionalServices.map((service) => (
                    <label key={service} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm text-slate-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">5</div>
                  Supporting Documents (Optional)
                </h3>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 mb-2">
                    Upload photos, plans, or documents related to your project
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Accepted formats: JPG, PNG, PDF, DOC (Max 10MB per file)
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-slate-200">
                <Button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 text-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Quote Request
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24 hours with your detailed quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Alternative */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Prefer to Call?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Speak directly with our electrical experts
              </p>
              <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                <a href="tel:1300699943">1300 OZZ WIDE</a>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Email Us Directly</h3>
              <p className="text-sm text-slate-600 mb-4">
                Send us your project details via email
              </p>
              <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                <a href="mailto:quotes@ozzwidesolutions.com.au">Send Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
