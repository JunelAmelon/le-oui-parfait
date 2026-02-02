import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Contact"
          subtitle="Contactez-nous pour discuter de votre projet de mariage"
          backgroundImage="wedding (2).jpg"
        />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
