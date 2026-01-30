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
          backgroundImage="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        <PortfolioSection />

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
