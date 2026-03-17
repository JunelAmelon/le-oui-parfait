import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Portfolio"
          subtitle="Découvrez nos plus belles réalisations et laissez-vous inspirer"
          backgroundImage="wedding (6).jpg"
        />

        <PortfolioSection />

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
