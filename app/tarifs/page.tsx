import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';

export default function TarifsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Nos Tarifs"
          subtitle="Des forfaits adaptés à tous les budgets pour votre jour parfait"
          backgroundImage="wedding (5).jpg"
        />

        <PricingSection />

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
