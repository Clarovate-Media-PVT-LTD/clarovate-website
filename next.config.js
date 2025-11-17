/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for SSR and SEO
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  // Enable static optimization where possible (only for production)
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  // Compress responses
  compress: true,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
