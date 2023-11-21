const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['firebasestorage.googleapis.com'],
  },
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true,
    largePageDataBytes: 128 * 100000,
  },
}

module.exports = nextConfig
