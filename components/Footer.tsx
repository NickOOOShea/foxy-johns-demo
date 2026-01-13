'use client'

import { Phone, MapPin, Instagram, Beer, Wrench, Bike, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream-100 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-forest-700 via-mustard-400 to-forest-700" />

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1 text-mustard-400">
                <Beer className="w-5 h-5" />
                <Wrench className="w-5 h-5" />
                <Bike className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-cream-50">Foxy John's</h3>
                <p className="text-mustard-400 text-xs font-semibold uppercase tracking-wider">Est. 1899</p>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed">
              Pub. Hardware. Bicycles. Serving Dingle's Main Street for over 125 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-cream-50 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-forest-600" />
              Explore
            </h4>
            <div className="space-y-3">
              <a href="#about" className="block text-cream-300 hover:text-mustard-400 transition-colors text-sm">Our Story</a>
              <a href="#services" className="block text-cream-300 hover:text-mustard-400 transition-colors text-sm">What We Do</a>
              <a href="#snug" className="block text-cream-300 hover:text-mustard-400 transition-colors text-sm">The Snug</a>
              <a href="#visit" className="block text-cream-300 hover:text-mustard-400 transition-colors text-sm">Find Us</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg text-cream-50 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-mustard-400" />
              Legal
            </h4>
            <div className="space-y-3">
              <a href="/privacy" className="block text-cream-300 hover:text-mustard-400 transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="block text-cream-300 hover:text-mustard-400 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-cream-50 mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-brick-600" />
              Contact
            </h4>
            <address className="not-italic text-cream-300 text-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-forest-500" />
                <span>
                  Main Street, Grove<br />
                  Dingle, Co. Kerry<br />
                  V92 PD6F
                </span>
              </div>
              <a href="tel:+353669151316" className="flex items-center gap-3 hover:text-mustard-400 transition-colors">
                <Phone className="w-5 h-5 text-forest-500" />
                066 915 1316
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-forest-500" />
                <span>Open daily from 10:30am</span>
              </div>
            </address>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.instagram.com/foxyjohnsdingle/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream-300 hover:text-mustard-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @foxyjohnsdingle
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-ink-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-faint">
            &copy; {currentYear} Foxy John's. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-ink-faint">
            <span>Website by</span>
            <a
              href="https://connecteire.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mustard-400 hover:text-mustard-300 font-semibold transition-colors"
            >
              ConnectEire
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
