import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/wien/',
    },
    sitemap: 'https://tuerex.at/sitemap.xml',
  };
}
