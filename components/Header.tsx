'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Bike, Wrench, Beer } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'Our Story' },
    { href: '#services', label: 'What We Do' },
    { href: '#snug', label: 'The Snug' },
    { href: '#visit', label: 'Find Us' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-700/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex gap-1">
            <Beer className={`w-5 h-5 transition-colors ${isScrolled ? 'text-mustard-400' : 'text-mustard-300'}`} />
            <Wrench className={`w-5 h-5 transition-colors ${isScrolled ? 'text-mustard-400' : 'text-mustard-300'}`} />
            <Bike className={`w-5 h-5 transition-colors ${isScrolled ? 'text-mustard-400' : 'text-mustard-300'}`} />
          </div>
          <div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-cream-50' : 'text-white'
            }`}>
              Foxy John's
            </span>
            <span className={`hidden sm:block text-xs uppercase tracking-widest transition-colors ${
              isScrolled ? 'text-cream-200' : 'text-cream-100'
            }`}>
              Est. 1899
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-mustard-400 ${
                isScrolled ? 'text-cream-100' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+353669151316"
            className={`hidden sm:flex items-center gap-2 px-5 py-2.5 font-display font-bold text-sm transition-all ${
              isScrolled
                ? 'bg-mustard-400 text-ink hover:bg-mustard-300'
                : 'bg-cream-50 text-forest-700 hover:bg-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">066 915 1316</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-cream-50' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-forest-700 border-t border-forest-600 shadow-xl">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream-100 font-medium text-lg py-2 hover:text-mustard-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+353669151316"
              className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-mustard-400 text-ink font-display font-bold"
            >
              <Phone className="w-5 h-5" />
              Call Us: 066 915 1316
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
