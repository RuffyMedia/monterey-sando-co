/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'instagram.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

