import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PortfolioCreatorsShowcase } from '@/components/PortfolioCreatorsShowcase';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio | Réalisations photo & vidéo',
  description:
    'Découvrez nos réalisations photo & vidéo : une esthétique élégante, une narration naturelle, et des souvenirs de mariage intemporels en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Portfolio | Le Oui Parfait',
    description:
      'Réalisations photo & vidéo : une esthétique élégante et des souvenirs de mariage intemporels en Île-de-France.',
    url,
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Portfolio"
          subtitle="Découvrez nos plus belles réalisations et laissez-vous inspirer"
          backgroundImage="photographe-mariage-en-action.jpg"
        />

        <PortfolioCreatorsShowcase />
      </main>
      <Footer />
    </div>
  );
}
