import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { VideoPresentationSection } from '@/components/VideoPresentationSection';
import { FAQSection } from '@/components/FAQSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { PricingSection } from '@/components/PricingSection';
import { PlanningSection } from '@/components/PlanningSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoPresentationSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <PlanningSection />
 
      </main>
      <Footer />
    </div>
  );
}
