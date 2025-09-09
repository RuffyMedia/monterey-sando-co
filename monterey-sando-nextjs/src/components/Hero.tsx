import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-ocean-blue via-artichoke-green to-sandstone-beige flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjEiLz4KICAgICAgPGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2dyYWluKSIvPgo8L3N2Zz4K')]"></div>
      </div>

      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Monterey Sando Co
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Fresh, delicious sandwiches on wheels!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#location" className="btn-primary">
              Find Our Truck
            </Link>
            <Link href="/menu" className="btn-secondary">
              View Menu
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Image
            src="/logo.png"
            alt="Monterey Sando Co Logo"
            width={400}
            height={400}
            className="opacity-90 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

