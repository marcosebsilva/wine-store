/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['www.wine.com.br', 'img.wine.com.br'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/loja',
        permanent: true,
      },
    ]
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = nextConfig
