import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WeddingPlannerCityPage } from '@/components/WeddingPlannerCityPage';
import { getWeddingPlannerCityBySlug } from '@/lib/weddingPlannerCities';

const city = getWeddingPlannerCityBySlug('sainte-genevieve-des-bois');
const url = 'https://leouiparfait.com/wedding-planner-sainte-genevieve-des-bois';

export const metadata: Metadata = {
  title: 'Wedding planner à Sainte-Geneviève-des-Bois (Essonne) | Organisation de mariage',
  description:
    'Wedding planner à Sainte-Geneviève-des-Bois (91). Organisation clé en main, organisation partielle et coordination du jour J en Essonne et en Île-de-France. Devis sur demande.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Wedding planner à Sainte-Geneviève-des-Bois (Essonne) | Le Oui Parfait',
    description:
      'Organisation de mariage à Sainte-Geneviève-des-Bois : clé en main, organisation partielle, coordination du jour J. Essonne & Île-de-France.',
    url,
    type: 'website',
  },
};

export default function Page() {
  if (!city) notFound();
  return <WeddingPlannerCityPage city={city} />;
}
