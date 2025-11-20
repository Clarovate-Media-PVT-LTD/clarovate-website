import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clarovate.com';

  const routes = [
    '',
    '/about',
    '/get-in-touch',
    '/privacy-policy',
    '/cookies-settings',
    '/terms-of-service',
    '/terms-and-policies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
