import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';

export default function TarifsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHero
          title="Nos Tarifs"
          backgroundImage="wedding (5).jpg"
        />

        <PricingSection />

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
