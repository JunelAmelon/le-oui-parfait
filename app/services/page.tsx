import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { ServicesSection } from '@/components/ServicesSection';
import { PlanningSection } from '@/components/PlanningSection';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/services';

export const metadata: Metadata = {
  title: 'Services | Wedding planner Île-de-France',
  description:
    'Découvrez nos services : organisation clé en main, organisation partielle, coordination du jour J, demande en mariage et expériences EVJF/EVG en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Services | Le Oui Parfait',
    description:
      'Organisation de mariage sur mesure : clé en main, partielle, coordination du jour J, demande en mariage et expériences EVJF/EVG en Île-de-France.',
    url,
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Services"
          subtitle="Des prestations sur mesure pour faire de votre mariage un moment unique"
          backgroundImage="https://media.abcsalles.com/images/1/articles/960x640/840709/comment-trouver-ses-prestataires-de-mariage.jpg"
        />

        <ServicesSection />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
