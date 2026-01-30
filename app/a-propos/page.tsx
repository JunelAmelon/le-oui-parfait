import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHero
          title="À Propos"
          backgroundImage="wedding (1).jpg"
        />

        <AboutSection />

        <TeamSection />

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
