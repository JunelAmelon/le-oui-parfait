import Link from 'next/link';
import Image from 'next/image';
import { Check, MapPin, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { WEDDING_PLANNER_CITIES, type WeddingPlannerCity } from '@/lib/weddingPlannerCities';

type Props = {
  city: WeddingPlannerCity;
};

function buildFaq(cityName: string) {
  return [
    {
      q: `Intervenez-vous uniquement à ${cityName} ?`,
      a: 'Non. Nous sommes basés à Ris-Orangis et nous accompagnons aussi des couples dans toute l’Essonne (91) et partout en Île-de-France selon votre lieu de réception.',
    },
    {
      q: `Proposez-vous une coordination du jour J à ${cityName} ?`,
      a: 'Oui. Nous prenons en charge le planning, les prestataires, les installations et la timeline pour une journée fluide, du début à la fin.',
    },
    {
      q: 'Combien coûte un wedding planner en Essonne (91) ?',
      a: 'Le tarif dépend du niveau d’accompagnement (clé en main, partiel, coordination). Nous proposons des offres transparentes et un devis après un premier échange.',
    },
    {
      q: 'À quel moment faut-il vous contacter ?',
      a: 'Idéalement dès que la date et le périmètre sont définis. Mais nous pouvons aussi intervenir en renfort (organisation partielle) ou pour la coordination du jour J.',
    },
  ];
}

export function WeddingPlannerCityPage({ city }: Props) {
  const url = `https://leouiparfait.com/wedding-planner-${city.slug}`;
  const faq = buildFaq(city.name);

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
      { '@type': 'City', name: city.name },
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
          title={`Wedding planner à ${city.name} (91)`}
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
            {city.nearbyChips.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full bg-white/90 text-[#4B4456] text-xs font-medium">
                {c}
              </span>
            ))}
          </div>
        </HeroPage>

        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative">
                <div className="relative aspect-[4/5] lg:aspect-[4/4.6] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(25,20,33,0.12)]">
                  <Image
                    src={city.image}
                    alt={`Mariage à ${city.name} — Le Oui Parfait`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute left-4 bottom-4 right-4 sm:right-auto inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-[#e8e0dc] rounded-full px-4 py-2.5 text-[11px] sm:text-[12px] text-[#4B4456] shadow-lg">
                    <MapPin className="w-4 h-4 text-[#88b7b5] flex-shrink-0" />
                    {city.badgeText ?? `Basés à Ris-Orangis — à quelques minutes de ${city.name}`}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">{city.eyebrow}</p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight mb-5">
                  {city.introTitle}
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#5A5A5A] leading-relaxed mb-4">{city.intro}</p>
                <p className="text-[16px] sm:text-[17px] text-[#5A5A5A] leading-relaxed mb-7">
                  Notre approche : une direction claire, des prestataires fiables et une expérience fluide, du premier rendez-vous au jour J.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Planning et budget maîtrisés du premier rendez-vous au jour J',
                    'Sélection de prestataires fiables et alignés à votre style',
                    'Coordination précise et sereine le jour J',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-[#4B4456]">
                      <Check className="w-5 h-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#4B4456] text-white font-medium hover:bg-[#3a3540] transition"
                  >
                    Demander un devis
                  </Link>
                  <Link
                    href="/ile-de-france/91-essonne"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-[#4B4456] font-medium border border-[#88b7b5]/40 hover:border-[#88b7b5] transition"
                  >
                    Essonne (91)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Notre méthode</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight">
                Votre mariage à {city.name}, étape par étape
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Rencontre & cadrage', text: 'Écoute de votre projet, budget, date, nombre d’invités et vision de votre journée.' },
                { title: 'Conception', text: 'Scénographie, sélection des prestataires et rétroplanning détaillé de votre mariage.' },
                { title: 'Production', text: 'Suivi des contrats, acomptes, logistique et coordination de chaque intervenant.' },
                { title: 'Le jour J', text: 'Installation, orchestration des prestataires et gestion des imprévus en coulisses.' },
              ].map((step, i) => (
                <div key={step.title} className="bg-white border border-[#e8e0dc] rounded-2xl p-6">
                  <span className="font-baskerville text-3xl text-[#88b7b5] block mb-3">0{i + 1}</span>
                  <h3 className="font-semibold text-[#4B4456] mb-2">{step.title}</h3>
                  <p className="text-[14px] text-[#5A5A5A] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-start">
              <div className="bg-[#f4f1f7] border border-[#88b7b5]/30 rounded-3xl p-8">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-baskerville text-4xl text-[#4B4456] mb-2">5,0<span className="text-2xl text-[#4B4456]/60">/5</span></p>
                <p className="text-[15px] text-[#5A5A5A] leading-relaxed">
                  Note moyenne de nos mariés — 16 avis sur mariages.net, l’annuaire de référence des professionnels du mariage.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Nos offres</p>
                <h2 className="font-baskerville text-2xl lg:text-3xl text-[#4B4456] mb-6">
                  Choisissez votre niveau d’accompagnement
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: 'Offre Signature',
                      detail: 'Organisation clé en main',
                      href: '/tarifs/offre-signature',
                      points: ['Recherche du lieu et des prestataires', 'Budget et rétroplanning', 'Rendez-vous et visites', 'Scénographie', 'Coordination Jour J'],
                    },
                    {
                      name: 'Offre Élégance',
                      detail: 'Organisation partielle',
                      href: '/tarifs/offre-elegance',
                      points: ['Analyse & cadrage de votre organisation', 'Accompagnement prestataires sur pôles définis', 'Coordination sur 3 à 5 pôles de votre choix'],
                    },
                    {
                      name: 'Offre Harmonie',
                      detail: 'Coordination du jour J',
                      href: '/tarifs/offre-harmonie',
                      points: ['Reprise de votre organisation existante', 'Planning détaillé du jour J', 'Pilotage & gestion des imprévus'],
                    },
                  ].map((offre) => (
                    <Link
                      key={offre.href}
                      href={offre.href}
                      className="group block bg-white border border-[#e8e0dc] rounded-2xl p-5 hover:border-[#88b7b5] hover:shadow-[0_10px_30px_rgba(25,20,33,0.08)] transition"
                    >
                      <h3 className="font-baskerville text-[17px] text-[#4B4456] mb-1 group-hover:text-[#88b7b5] transition">{offre.name}</h3>
                      <p className="text-[13px] text-[#5A5A5A] mb-3">{offre.detail}</p>
                      <ul className="space-y-1.5 mb-4">
                        {offre.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-[12px] text-[#5A5A5A]">
                            <Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-[#88b7b5] font-medium">
                        Découvrir →
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="mt-5 text-[13px] text-[#5A5A5A]">
                  Découvrez aussi :{' '}
                  <Link href="/services/shooting-tour" className="text-[#88b7b5] hover:underline">Shooting Tour (EVJF/EVG)</Link>
                  {' • '}
                  <Link href="/services/demande-en-mariage" className="text-[#88b7b5] hover:underline">Demande en mariage</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f4f1f7] border border-[#88b7b5]/30 rounded-3xl p-6 md:p-8">
                <h2 className="text-lg font-baskerville text-[#4B4456] mb-3">Zones desservies autour de {city.name}</h2>
                <p className="text-[14px] text-[#5A5A5A] leading-relaxed">{city.zonesAround}</p>
              </div>

              <div className="bg-[#f4f1f7] border border-[#88b7b5]/30 rounded-3xl p-6 md:p-8">
                <h2 className="text-lg font-baskerville text-[#4B4456] mb-3">Wedding planner dans d’autres villes d’Essonne</h2>
                <div className="flex flex-wrap gap-2">
                  {WEDDING_PLANNER_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/wedding-planner-${c.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white border border-[#88b7b5]/30 text-[#4B4456] text-xs font-medium hover:border-[#88b7b5] transition"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-16 bg-[#4B4456]">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="font-baskerville text-3xl lg:text-4xl text-white leading-tight mb-4">
              Votre mariage à {city.name} mérite une organisation sereine
            </h2>
            <p className="text-white/70 text-[16px] leading-relaxed mb-8 max-w-xl mx-auto">
              Racontez-nous votre projet : nous revenons vers vous avec une proposition adaptée à votre jour J et à votre lieu de réception.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#88b7b5] text-white font-medium hover:bg-[#6fa3a1] transition"
              >
                Demander un devis
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-white font-medium border border-white/30 hover:bg-white/10 transition"
              >
                Voir nos mariages
              </Link>
            </div>
          </div>
        </section>

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
