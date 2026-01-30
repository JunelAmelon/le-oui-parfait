import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHero
          title="Portfolio"
          backgroundImage="wedding (3).jpg"
        />

        <PortfolioSection />

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
