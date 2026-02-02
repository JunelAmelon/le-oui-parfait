import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { ServicesSection } from '@/components/ServicesSection';
import { PlanningSection } from '@/components/PlanningSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Services"
          subtitle="Des prestations sur mesure pour faire de votre mariage un moment unique"
          backgroundImage="wedding (4).jpg"
        />

        <ServicesSection />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
