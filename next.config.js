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
  // Redirects for SEO (www/non-www)
  async redirects() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clarovate.com';
    const shouldRedirect = process.env.NODE_ENV === 'production';

    if (!shouldRedirect) {
      return [];
    }

    // Redirect www to non-www (or vice versa based on your preference)
    // Adjust based on your canonical domain preference
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.clarovate.com',
          },
        ],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
