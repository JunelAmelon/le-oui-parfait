import type { MetadataRoute } from 'next';
import { WEDDING_PLANNER_CITIES } from '@/lib/weddingPlannerCities';
import { STANDALONE_ARTICLE_SLUGS } from '@/lib/articles';

const baseUrl = 'https://leouiparfait.com';

const ANIMATION_SLUGS = [
  'coin-chicha',
  'stand-oui-pancake',
  'photobooth-360',
  'miroir-photobooth',
  'photobooth-classique',
  'candy-bar-cup-cake',
  'maison-du-ti-punch',
  'oui-oui-kids',
];

const BLOG_SLUGS = [
  'formules-wedding-planner-jour-j-partiel-complet',
  'coordination-jour-j-wedding-planner',
  'creer-liste-invites-sans-stress',
  'fleurs-saison-guide-mariage',
  'mariage-champetre-idees-inspirations',
  'couleurs-tendance-mariage-moderne',
  'discours-mariage-emouvoir-invites',
  'choisir-lieu-parfait-mariage',
  'tendances-decoration-mariage',
  'organiser-demande-mariage-inoubliable',
  'budget-mariage-conseils',
  'choisir-robe-mariee-elegance',
  'meilleurs-photographes-mariage',
];

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
    { url: `${baseUrl}/ile-de-france`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/75-paris`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/77-seine-et-marne`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/78-yvelines`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/91-essonne`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/92-hauts-de-seine`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/93-seine-saint-denis`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/94-val-de-marne`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ile-de-france/95-val-d-oise`, priority: 0.7, changeFrequency: 'monthly' },

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

    { url: `${baseUrl}/animation`, priority: 0.8, changeFrequency: 'monthly' },
    ...ANIMATION_SLUGS.map((slug) => ({
      url: `${baseUrl}/animation/${slug}`,
      priority: slug === 'oui-oui-kids' ? 0.8 : 0.6,
      changeFrequency: 'monthly' as const,
    })),

    ...WEDDING_PLANNER_CITIES.map((c) => ({
      url: `${baseUrl}/wedding-planner-${c.slug}`,
      priority: c.slug === 'ris-orangis' ? 0.8 : 0.7,
      changeFrequency: 'monthly' as const,
    })),

    ...STANDALONE_ARTICLE_SLUGS.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    })),

    { url: `${baseUrl}/blog`, priority: 0.6, changeFrequency: 'weekly' },
    ...BLOG_SLUGS.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    })),
  ];

  return urls.map((u) => ({
    url: u.url,
    lastModified: now,
    changeFrequency: u.changeFrequency,
    priority: u.priority,
  }));
}
