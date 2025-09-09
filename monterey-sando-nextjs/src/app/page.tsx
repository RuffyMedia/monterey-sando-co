'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LocationSection from '@/components/LocationSection'
import InstagramSection from '@/components/InstagramSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState({
    name: "Not currently parked",
    lat: 36.6002,
    lng: -121.8947,
    isOpen: false
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <LocationSection 
        currentLocation={currentLocation} 
        setCurrentLocation={setCurrentLocation}
      />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
