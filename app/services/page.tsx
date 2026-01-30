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
          backgroundImage="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        <ServicesSection />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
