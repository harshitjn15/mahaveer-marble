import { MetadataRoute } from 'next'

const BASE_URL = 'https://mahaveermarble.com' // Replace with actual production URL when known

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/products',
    '/services',
    '/gallery',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
