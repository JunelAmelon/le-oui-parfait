import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PortfolioCreatorsShowcase } from '@/components/PortfolioCreatorsShowcase';

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
