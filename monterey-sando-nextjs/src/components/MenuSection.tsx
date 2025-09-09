'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuData = {
  sandos: [
    {
      name: "Cannery Row Tri-Tip",
      price: 15,
      description: "Santa Maria–style tri-tip, salsa roja, grilled garlic bread"
    },
    {
      name: "Wharf Calamari Sando",
      price: 16,
      description: "Oven-roasted calamari rings, lemon-garlic aioli, pickled onions, fresh arugula"
    },
    {
      name: "Monterey Bay Melt",
      price: 15,
      description: "Rockfish filet, cheddar, tartar sauce, shredded lettuce on sourdough"
    },
    {
      name: "Castroville Veggie Panini",
      price: 13,
      description: "Grilled artichoke hearts, mozzarella, basil pesto, roasted red peppers"
    },
    {
      name: "Wine Country Turkey & Brie",
      price: 14,
      description: "Roast turkey, brie, fig jam, arugula on a soft roll — made to pair with local Pinot"
    },
    {
      name: "BBQ Brisket & Slaw Hoagie",
      price: 15,
      description: "Slow-cooked brisket, tangy BBQ sauce, crunchy coleslaw"
    }
  ],
  sides: [
    { name: "Garlic Herb Slaw", price: 4, description: "Fresh, crunchy, perfect with BBQ" },
    { name: "Esquites Cup", price: 5, description: "Roasted corn, cotija, chili-lime crema" },
    { name: "Roasted Artichoke Hearts", price: 6, description: "Served with lemon aioli dip" },
    { name: "Baked Mac & Cheese Cup", price: 5, description: "Creamy, oven-baked, portioned for easy service" },
    { name: "Pickle & Veggie Mix", price: 3, description: "House-pickled cucumbers, carrots, jalapeños" }
  ],
  drinks: [
    { name: "Local Craft Sodas", price: 4 },
    { name: "Iced Tea / Lemonade", price: 4 },
    { name: "Cold Brew Coffee", price: 5 },
    { name: "Seasonal Strawberry Agua Fresca", price: 5 }
  ]
}

export default function MenuSection() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSandos = menuData.sandos.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ocean-blue to-artichoke-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl opacity-90">Hand-crafted sandwiches & sides inspired by the coast and farms of Monterey Bay</p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-artichoke-green focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Signature Sandos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ocean-blue mb-8 text-center border-b-2 border-artichoke-green pb-2">
              🥪 Signature Sandos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSandos.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-transparent hover:border-artichoke-green/30">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-ocean-blue">{item.name}</h3>
                    <span className="text-xl font-bold text-wine-burgundy">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sides */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ocean-blue mb-8 text-center border-b-2 border-artichoke-green pb-2">
              🍴 Sides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.sides.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-transparent hover:border-artichoke-green/30">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-ocean-blue">{item.name}</h3>
                    <span className="text-xl font-bold text-wine-burgundy">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ocean-blue mb-8 text-center border-b-2 border-artichoke-green pb-2">
              🥤 Drinks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData.drinks.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-transparent hover:border-artichoke-green/30">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-ocean-blue">{item.name}</h3>
                    <span className="text-xl font-bold text-wine-burgundy">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combo Deal */}
          <div className="bg-gradient-to-r from-artichoke-green to-wine-burgundy text-white p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">🍽️ Combo Deal</h3>
            <p className="text-xl mb-2"><strong>Any Sando + Side + Drink</strong></p>
            <p className="text-4xl font-bold mb-4">$20–$22</p>
            <p className="text-sm opacity-90 italic">Makes ordering easy for tourists and raises average ticket price!</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ocean-blue mb-4">Ready to Order?</h2>
          <p className="text-lg text-gray-600 mb-8">Find our truck and taste the flavors of Monterey Bay</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#location" className="btn-primary">
              Find Our Truck
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

