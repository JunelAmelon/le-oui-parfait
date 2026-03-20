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
          subtitle="Des prestations sur mesure pour faire de votre mariage un UN moment unique"
          backgroundImage="https://media.abcsalles.com/images/1/articles/960x640/840709/comment-trouver-ses-prestataires-de-mariage.jpg"
        />

        <ServicesSection />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
