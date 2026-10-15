import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/tarifs';

export const metadata: Metadata = {
  title: 'Tarifs | Wedding planner Île-de-France',
  description:
    'Découvrez nos tarifs : offres et accompagnements (organisation clé en main, organisation partielle, coordination du jour J) en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Tarifs | Le Oui Parfait',
    description:
      'Offres et accompagnements wedding planner : clé en main, partiel, coordination du jour J en Île-de-France.',
    url,
    type: 'website',
  },
};

export default function TarifsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Nos Tarifs"
          subtitle="Des forfaits adaptés à tous les budgets pour votre jour parfait"
          backgroundImage="alliance.jpg"
        />

        <PricingSection />

        <section className="py-10 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-[15px] text-[#4B4456]">
              Basés à Ris-Orangis :{' '}
              <Link
                href="/ile-de-france/91-essonne"
                className="text-[#88b7b5] font-medium hover:underline"
              >
                découvrez nos prestations de Wedding Planner en Essonne →
              </Link>
            </p>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
