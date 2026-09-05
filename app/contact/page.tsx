import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { GoogleBusinessSection } from '@/components/GoogleBusinessSection';
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

const contactLocalBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://leouiparfait.com/contact#localbusiness',
  name: 'Le Oui Parfait',
  url: 'https://leouiparfait.com/contact',
  image: ['https://leouiparfait.com/logo-horizontal.png'],
  telephone: '+33 6 87 21 71 18',
  email: 'contact@leouiparfait.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '19 rue Albert-Remy',
    addressLocality: 'Ris-Orangis',
    postalCode: '91130',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.6536834,
    longitude: 2.4111968,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=48.6536834,2.4111968',
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Sa 10:00-16:00',
  ],
  priceRange: '€€€',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    { '@type': 'City', name: 'Paris' },
    { '@type': 'AdministrativeArea', name: 'Essonne' },
  ],
  sameAs: [
    'https://www.facebook.com/share/1NRMWajbmP/?mibextid=wwXIfr',
    'https://www.instagram.com/leouiparfait_officiel?igsh=Z2dsZHF2cDJmZmIz',
  ],
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

        <section className="bg-[#F5F2F0]">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="mx-auto max-w-2xl">
              <div className="bg-white rounded-lg shadow-lg px-10 py-8">
                <p className="text-[10px] tracking-[0.3em] text-[#88b7b5] uppercase mb-4 font-light">
                  COORDONNÉES
                </p>
                <h2 className="font-baskerville text-[34px] text-[#3B3B3B] leading-[1.15] font-normal">
                  Nous joindre directement
                </h2>
                <p className="mt-3 text-[14px] text-gray-600">
                  Pour toute question urgente, vous pouvez nous contacter ici.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+33687217118"
                    className="text-center uppercase tracking-[0.25em] text-[10px] border border-[#88b7b5] text-[#88b7b5] px-6 py-3 rounded-full hover:bg-[#88b7b5] hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88b7b5]/40"
                  >
                    +33 6 87 21 71 18
                  </a>
                  <a
                    href="mailto:contact@leouiparfait.fr"
                    className="text-center uppercase tracking-[0.25em] text-[10px] border border-[#88b7b5] bg-[#88b7b5] text-white px-6 py-3 rounded-full hover:bg-[#6fa5a3] hover:border-[#6fa5a3] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88b7b5]/40"
                  >
                    contact@leouiparfait.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PlanningSection />

        <GoogleBusinessSection />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLocalBusinessJsonLd) }}
        />
      </main>
      <Footer />
    </div>
  );
}
