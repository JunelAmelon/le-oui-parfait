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
          backgroundImage="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        <PricingSection />

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
