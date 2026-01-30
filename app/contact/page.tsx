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
          backgroundImage="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        <PlanningSection />
      </main>
      <Footer />
    </div>
  );
}
