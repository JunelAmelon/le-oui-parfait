import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/contact';

export const metadata: Metadata = {
  title: 'Contact | Le Oui Parfait',
  description:
    'Contactez Le Oui Parfait pour organiser votre mariage : devis, questions, disponibilités et premier échange en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact | Le Oui Parfait',
    description:
      'Demandez un devis et échangeons sur votre projet de mariage en Île-de-France.',
    url,
    type: 'website',
  },
};

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
