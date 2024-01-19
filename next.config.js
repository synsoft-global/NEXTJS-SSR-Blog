/** @type {import('next').NextConfig} */



const nextConfig = {
  reactStrictMode: true,
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
