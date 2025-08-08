'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ozz-logo.png"
                alt="Ozz Wide Solutions - Australian Electrical Solutions"
                width={180}
                height={60}
                className="h-12 w-auto lg:h-14"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:1300-OZZ-WIDE"
              className="flex items-center text-slate-700 hover:text-orange-600 transition-colors"
              aria-label="Call us at 1300 OZZ WIDE"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">1300 OZZ WIDE</span>
            </Link>
            <Button 
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-700 hover:text-orange-600 hover:bg-slate-50 font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t">
                <Link
                  href="tel:1300-OZZ-WIDE"
                  className="flex items-center px-3 py-2 text-slate-700 hover:text-orange-600 transition-colors"
                  aria-label="Call us at 1300 OZZ WIDE"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">1300 OZZ WIDE</span>
                </Link>
                <div className="px-3 py-2">
                  <Button 
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
                  >
                    <Link href="/quote">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
