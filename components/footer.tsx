import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Commercial Electrical', href: '#services' },
      { name: 'Residential Electrical', href: '#services' },
      { name: 'Industrial Solutions', href: '#services' },
      { name: 'Emergency Repairs', href: '#services' },
      { name: 'Maintenance Services', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Coverage Areas', href: '#coverage' },
      { name: 'Careers', href: '#' },
      { name: 'News & Updates', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Get a Quote', href: '#contact' },
      { name: 'Emergency Service', href: 'tel:1300699943' },
      { name: 'Safety Information', href: '#' },
      { name: 'Warranty', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Accessibility Statement', href: '#' },
      { name: 'Licensing Information', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/ozz-logo.png"
                alt="Ozz Wide Solutions"
                width={200}
                height={67}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Sydney's trusted electrical solutions provider with over 30 years of experience. 
              Delivering safe, reliable, and innovative electrical services across Sydney and NSW.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3 text-orange-400" />
                <span>1300 OZZ WIDE (1300 699 943)</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3 text-orange-400" />
                <span>info@ozzwidesolutions.com.au</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-3 text-orange-400" />
                <span>Sydney & NSW Coverage</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-sm font-semibold mb-2 text-slate-400">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-xs focus:outline-none focus:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="text-slate-400">
              <div className="text-sm font-medium">Fully Licensed</div>
              <div className="text-xs">Australian Standards Compliant</div>
            </div>
            <div className="text-slate-400">
              <div className="text-sm font-medium">CEC Accredited</div>
              <div className="text-xs">Certified Electrical Contractors</div>
            </div>
            <div className="text-slate-400">
              <div className="text-sm font-medium">Fully Insured</div>
              <div className="text-xs">Comprehensive Coverage</div>
            </div>
            <div className="text-slate-400">
              <div className="text-sm font-medium">24/7 Emergency</div>
              <div className="text-xs">Sydney & NSW Service</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ozz Wide Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-slate-400 text-xs">
                ABN: 12 345 678 901 | Electrical Contractor License: EC123456
              </p>
            </div>
          </div>
          
          {/* Accessibility Statement */}
          <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-slate-500 text-xs leading-relaxed">
              This website is designed to meet WCAG 2.2 AA accessibility standards. 
              If you experience any accessibility issues, please{' '}
              <Link href="#contact" className="text-orange-400 hover:underline">
                contact us
              </Link>{' '}
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
