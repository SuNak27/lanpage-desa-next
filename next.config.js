/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/surat',
        destination: '/',
        permanent: true,
      },
      {
        source: '/artikel/kategori/',
        destination: '/artikel',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
