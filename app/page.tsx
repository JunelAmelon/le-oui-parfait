import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { ValuesSection } from '@/components/ValuesSection';
import { TeamSection } from '@/components/TeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { VideoPresentationSection } from '@/components/VideoPresentationSection';
import { FAQSection } from '@/components/FAQSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { PricingSection } from '@/components/PricingSection';
import { PlanningSection } from '@/components/PlanningSection';
import { ContactSection } from '@/components/ContactSection';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/';

export const metadata: Metadata = {
  title: 'Le Oui Parfait - Organisatrice de Mariage à Paris & Île-de-France',
  description:
    'Organisatrice de mariage à Paris & en Île-de-France. Organisation clé en main, organisation partielle, coordination du jour J, demande en mariage et expériences EVJF/EVG.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Le Oui Parfait - Organisatrice de Mariage à Paris & Île-de-France',
    description:
      'Organisation de mariage sur mesure : clé en main, organisation partielle, coordination du jour J, demande en mariage et EVJF/EVG à Paris & en Île-de-France.',
    url,
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
     
        <VideoPresentationSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <PlanningSection />
 
      </main>
      <Footer />
    </div>
  );
}
