/** @type {import('next').NextConfig} */
const config = require('./src/config/config.json')



const nextConfig = {
  reactStrictMode: true,
  basePath: config.basePath,
  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'blogger.googleusercontent.com' },
      { protocol: 'https', hostname: '1.bp.blogspot.com' },
    ]
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
