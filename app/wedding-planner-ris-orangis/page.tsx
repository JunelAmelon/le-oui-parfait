import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { ServicesSection } from '@/components/ServicesSection';

const url = 'https://leouiparfait.com/wedding-planner-ris-orangis';

export const metadata: Metadata = {
  title: 'Wedding planner à Ris-Orangis (Essonne) | Organisation de mariage',
  description:
    'Wedding planner à Ris-Orangis (91). Organisation clé en main, organisation partielle et coordination du jour J en Essonne et en Île-de-France. Devis sur demande.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Wedding planner à Ris-Orangis (Essonne) | Le Oui Parfait',
    description:
      'Organisation de mariage à Ris-Orangis : clé en main, organisation partielle, coordination du jour J. Essonne & Île-de-France.',
    url,
    type: 'website',
  },
};

const faq = [
  {
    q: 'Intervenez-vous uniquement à Ris-Orangis ?'
    ,
    a: 'Non. Nous sommes basés à Ris-Orangis et nous accompagnons aussi des couples dans toute l’Essonne (91) et partout en Île-de-France selon votre lieu de réception.',
  },
  {
    q: 'Proposez-vous une coordination du jour J à Ris-Orangis ?'
    ,
    a: 'Oui. Nous prenons en charge le planning, les prestataires, les installations et la timeline pour une journée fluide, du début à la fin.',
  },
  {
    q: 'Combien coûte un wedding planner en Essonne (91) ?'
    ,
    a: 'Le tarif dépend du niveau d’accompagnement (clé en main, partiel, coordination). Nous proposons des offres transparentes et un devis après un premier échange.',
  },
  {
    q: 'À quel moment faut-il vous contacter ?'
    ,
    a: 'Idéalement dès que la date et le périmètre sont définis. Mais nous pouvons aussi intervenir en renfort (organisation partielle) ou pour la coordination du jour J.',
  },
];

export default function WeddingPlannerRisOrangisPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localbusiness`,
    name: 'Le Oui Parfait',
    url,
    image: ['https://leouiparfait.com/logo-horizontal.png'],
    telephone: '+33 6 87 21 71 18',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '19 rue Albert-Remy',
      addressLocality: 'Ris-Orangis',
      postalCode: '91130',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Essonne' },
      { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    ],
    sameAs: [
      'https://www.facebook.com/share/1NRMWajbmP/?mibextid=wwXIfr',
      'https://www.instagram.com/leouiparfait_officiel?igsh=Z2dsZHF2cDJmZmIz',
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Wedding planner à Ris-Orangis (91)"
          subtitle="Organisation & coordination de mariage en Essonne et en Île-de-France"
          backgroundImage="https://media.abcsalles.com/images/1/articles/960x640/840709/comment-trouver-ses-prestataires-de-mariage.jpg"
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#88b7b5] text-white font-medium hover:bg-[#6fa3a1] transition"
            >
              Demander un devis
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/90 text-[#4B4456] font-medium hover:bg-white transition"
            >
              Voir les tarifs
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              'Ris-Orangis',
              'Évry-Courcouronnes',
              'Viry-Châtillon',
              'Sainte-Geneviève-des-Bois',
              'Grigny',
              'Corbeil-Essonnes',
            ].map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full bg-white/90 text-[#4B4456] text-xs font-medium">
                {c}
              </span>
            ))}
          </div>
        </HeroPage>

        <section className="py-16 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6 md:p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#4B4456]/70 uppercase mb-3">RIS-ORANGIS • ESSONNE</p>
                <h2 className="text-2xl md:text-3xl font-baskerville text-[#4B4456] mb-4">Une organisatrice de mariage basée à Ris-Orangis</h2>
                <p className="text-[#4B4456]/80 leading-relaxed">
                  Le Oui Parfait accompagne les couples à Ris-Orangis et dans toute l’Essonne (91) pour une organisation sur mesure :
                  organisation clé en main, organisation partielle, coordination du jour J et prestations complémentaires.
                  Notre approche : une direction claire, des prestataires fiables, et une expérience fluide du premier rendez-vous au jour J.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/ile-de-france/91-essonne"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4B4456] text-white font-medium hover:bg-[#3a3540] transition"
                  >
                    Essonne (91)
                  </Link>
                  <Link
                    href="/ile-de-france"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#4B4456] font-medium border border-[#88b7b5]/30 hover:border-[#88b7b5] transition"
                  >
                    Île-de-France
                  </Link>
                </div>
              </div>

              <div className="mt-10 rounded-3xl bg-white border border-[#88b7b5]/30 p-6 md:p-8">
                <h2 className="text-xl font-baskerville text-[#4B4456] mb-3">Pour quel type d’accompagnement ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#4B4456]/80">
                  <div className="rounded-2xl bg-[#f4f1f7] p-4">Organisation clé en main</div>
                  <div className="rounded-2xl bg-[#f4f1f7] p-4">Organisation partielle</div>
                  <div className="rounded-2xl bg-[#f4f1f7] p-4">Coordination du jour J</div>
                </div>
              </div>

              <div className="mt-10 rounded-3xl bg-white border border-[#88b7b5]/30 p-6 md:p-8">
                <h2 className="text-xl font-baskerville text-[#4B4456] mb-3">Zones desservies autour de Ris-Orangis</h2>
                <p className="text-[#4B4456]/80 leading-relaxed">
                  Ris-Orangis, Évry-Courcouronnes, Viry-Châtillon, Grigny, Draveil, Juvisy-sur-Orge, Sainte-Geneviève-des-Bois,
                  Brétigny-sur-Orge, Corbeil-Essonnes, Massy… et plus largement toute l’Île-de-France.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className="py-10 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-baskerville text-[#4B4456] mb-4">FAQ</h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <div key={item.q} className="rounded-2xl bg-white border border-[#88b7b5]/30 p-5">
                    <p className="font-semibold text-[#4B4456]">{item.q}</p>
                    <p className="mt-2 text-[#4B4456]/80">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/contact" className="text-[#4B4456] underline">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PlanningSection />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
