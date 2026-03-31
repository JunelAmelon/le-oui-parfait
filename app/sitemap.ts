import type { MetadataRoute } from 'next';

const baseUrl = 'https://leouiparfait.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: Array<{ url: string; priority?: number; changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { url: `${baseUrl}/`, priority: 1, changeFrequency: 'weekly' },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/tarifs`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/portfolio`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/lieux`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/a-propos`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/espace-client`, priority: 0.6, changeFrequency: 'monthly' },

    { url: `${baseUrl}/services/planification-mariage`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services/stylisme-fiancailles`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services/gestion-evenements`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services/shooting-tour`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services/demande-en-mariage`, priority: 0.8, changeFrequency: 'monthly' },

    { url: `${baseUrl}/tarifs/offre-signature`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/tarifs/offre-elegance`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/tarifs/offre-harmonie`, priority: 0.8, changeFrequency: 'monthly' },

    { url: `${baseUrl}/mentions-legales`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/confidentialite`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/conditions`, priority: 0.3, changeFrequency: 'yearly' },

    { url: `${baseUrl}/blog`, priority: 0.6, changeFrequency: 'weekly' },
  ];

  return urls.map((u) => ({
    url: u.url,
    lastModified: now,
    changeFrequency: u.changeFrequency,
    priority: u.priority,
  }));
}
