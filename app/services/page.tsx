import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { ServicesSection } from '@/components/ServicesSection';
import { PlanningSection } from '@/components/PlanningSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHero
          title="Services"
          backgroundImage="wedding (4).jpg"
        />

        <ServicesSection />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
