import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { PlanningSection } from '@/components/PlanningSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHero
          title="Contact"
          backgroundImage="wedding (2).jpg"
        />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
