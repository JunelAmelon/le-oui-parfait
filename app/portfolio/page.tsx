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
          backgroundImage="https://www.formation-photographe.net/wp-content/uploads/2020/11/Formation-Photo-Studio-Palle-180562225.jpg"
        />

        <PortfolioCreatorsShowcase />
      </main>
      <Footer />
    </div>
  );
}
