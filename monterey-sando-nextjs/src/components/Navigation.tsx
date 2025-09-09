'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Monterey Sando Co Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h2 className="text-xl font-bold text-ocean-blue">Monterey Sando Co</h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-ocean-blue hover:text-artichoke-green transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-ocean-blue hover:text-artichoke-green transition-colors">
              Menu
            </Link>
            <Link href="/#location" className="text-ocean-blue hover:text-artichoke-green transition-colors">
              Find Us
            </Link>
            <Link href="/#instagram" className="text-ocean-blue hover:text-artichoke-green transition-colors">
              Instagram
            </Link>
            <Link href="/#contact" className="text-ocean-blue hover:text-artichoke-green transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span className="w-6 h-0.5 bg-ocean-blue"></span>
            <span className="w-6 h-0.5 bg-ocean-blue"></span>
            <span className="w-6 h-0.5 bg-ocean-blue"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              <Link href="/" className="text-ocean-blue hover:text-artichoke-green transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-ocean-blue hover:text-artichoke-green transition-colors">
                Menu
              </Link>
              <Link href="/#location" className="text-ocean-blue hover:text-artichoke-green transition-colors">
                Find Us
              </Link>
              <Link href="/#instagram" className="text-ocean-blue hover:text-artichoke-green transition-colors">
                Instagram
              </Link>
              <Link href="/#contact" className="text-ocean-blue hover:text-artichoke-green transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

