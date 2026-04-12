import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { AboutSection } from '@/components/AboutSection';
import { ValuesSection } from '@/components/ValuesSection';
import { TimelineSection } from '@/components/TimelineSection';
import { TeamSection } from '@/components/TeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/a-propos';

export const metadata: Metadata = {
  title: 'À propos | Le Oui Parfait',
  description:
    'Découvrez Le Oui Parfait : notre approche, notre équipe et notre vision de l’organisation de mariage sur mesure en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'À propos | Le Oui Parfait',
    description:
      'Notre approche et notre vision de l’organisation de mariage sur mesure en Île-de-France.',
    url,
    type: 'website',
  },
};

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="À Propos"
          subtitle="Découvrez notre passion pour créer des moments inoubliables"
          backgroundImage="wedding (1).jpg"
        />

        <AboutSection />
        <ValuesSection />
        <TimelineSection />
        <TeamSection />

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
