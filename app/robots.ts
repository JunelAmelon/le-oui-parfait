import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://leouiparfait.com/sitemap.xml',
    host: 'https://leouiparfait.com',
  };
}
