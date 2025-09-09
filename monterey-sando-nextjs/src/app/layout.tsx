import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Monterey Sando Co - Food Truck',
  description: 'Fresh, delicious sandwiches on wheels! Hand-crafted sandwiches & sides inspired by the coast and farms of Monterey Bay.',
  keywords: 'food truck, sandwiches, Monterey Bay, Castroville, artichokes, seafood',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        {children}
      </body>
    </html>
  )
}
