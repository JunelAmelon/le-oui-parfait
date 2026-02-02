import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="À Propos"
          subtitle="Découvrez notre passion pour créer des moments inoubliables"
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
