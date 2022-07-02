/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['www.wine.com.br', 'img.wine.com.br'],
  },
}

module.exports = nextConfig
