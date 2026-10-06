import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check, MapPin, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { getDepartmentBySlug, IDF_DEPARTMENTS } from '../_idfData';
import { WEDDING_PLANNER_CITIES } from '@/lib/weddingPlannerCities';

type PageProps = {
  params: Promise<{ dept: string }>;
};

export async function generateStaticParams() {
  return IDF_DEPARTMENTS.map((d) => ({ dept: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { dept } = await params;
  const d = getDepartmentBySlug(dept);
  if (!d) return {};

  const url = `https://leouiparfait.com/ile-de-france/${d.slug}`;
  const seoTitle = d.seoTitle ?? `Wedding planner ${d.name} (${d.code}) | Organisation de mariage`;
  const seoDescription =
    d.seoDescription ??
    `Organisatrice de mariage en ${d.name} (${d.code}). Organisation clé en main, organisation partielle et coordination du jour J. Intervention partout en Île-de-France. Devis sur demande.`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: `Organisation de mariage en ${d.name} : clé en main, organisation partielle, coordination du jour J.`,
      url,
      type: 'website',
    },
  };
}

function buildFaq(deptName: string): { q: string; a: string; links?: { label: string; href: string }[] }[] {
  return [
    {
      q: `Intervenez-vous partout en ${deptName} ?`,
      a: `Oui. Nous nous déplaçons dans tout le département ${deptName}, ainsi que dans toute l’Île-de-France selon votre lieu de réception et vos besoins.`,
    },
    {
      q: 'Proposez-vous la coordination du jour J ?',
      a: 'Oui. Nous coordonnons le planning, les prestataires, les installations et la timeline pour une journée fluide et sereine.',
    },
    {
      q: 'Quelle est la différence entre organisation clé en main et organisation partielle ?',
      a: 'La formule clé en main couvre l’ensemble de l’organisation, tandis que l’organisation partielle complète votre organisation existante sur les points qui vous manquent.',
    },
  ];
}

export default async function IleDeFranceDepartmentPage({ params }: PageProps) {
  const { dept } = await params;
  const d = getDepartmentBySlug(dept);
  if (!d) notFound();

  const faq = d.faq ?? buildFaq(d.name);
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

  const otherDepartments = IDF_DEPARTMENTS.filter((x) => x.slug !== d.slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title={d.h1 ?? `Wedding planner ${d.name} (${d.code})`}
          subtitle={d.heroSubtitle ?? `Organisation & coordination de mariage en ${d.name} — Île-de-France`}
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
            {d.cities.slice(0, 5).map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full bg-white/90 text-[#4B4456] text-xs font-medium"
              >
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
                    src={d.image}
                    alt={`Mariage en ${d.name} — Le Oui Parfait`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute left-4 bottom-4 right-4 sm:right-auto inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-[#e8e0dc] rounded-full px-4 py-2.5 text-[11px] sm:text-[12px] text-[#4B4456] shadow-lg">
                    <MapPin className="w-4 h-4 text-[#88b7b5] flex-shrink-0" />
                    Basés à Ris-Orangis — intervention dans tout le {d.name}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">
                  {d.name} ({d.code}) • Île-de-France
                </p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight mb-5">
                  {d.introTitle ?? `Une organisatrice de mariage en ${d.name}`}
                </h2>
                {(d.intro ?? [
                  `Le Oui Parfait accompagne les couples en ${d.name} (${d.code}) avec une organisation sur mesure : clé en main, organisation partielle, coordination du jour J et prestations complémentaires. Objectif : un mariage fluide, élégant et parfaitement orchestré.`,
                  'Notre approche : une direction claire, des prestataires fiables et une expérience fluide, du premier rendez-vous au jour J.',
                ]).map((p, i, arr) => (
                  <p
                    key={i}
                    className={`text-[16px] sm:text-[17px] text-[#5A5A5A] leading-relaxed ${i === arr.length - 1 ? 'mb-7' : 'mb-4'}`}
                  >
                    {p}
                  </p>
                ))}

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
                    href="/ile-de-france"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-[#4B4456] font-medium border border-[#88b7b5]/40 hover:border-[#88b7b5] transition"
                  >
                    Toute l’Île-de-France
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
                Votre mariage en {d.name}, étape par étape
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
                <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-4">
                  Note moyenne de nos mariés — 16 avis sur mariages.net, l’annuaire de référence des professionnels du mariage.
                </p>
                <a
                  href="https://www.mariages.net/organisation-mariage/le-oui-parfait--e422129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.15em] text-[#88b7b5] font-medium hover:underline"
                >
                  Découvrir nos avis →
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Nos offres</p>
                <h2 className="font-baskerville text-2xl lg:text-3xl text-[#4B4456] mb-6">
                  {d.offersTitle ?? 'Choisissez votre niveau d’accompagnement'}
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
                <h2 className="text-lg font-baskerville text-[#4B4456] mb-3">
                  {d.zonesTitle ?? `Zones desservies en ${d.name}`}
                </h2>
                <p className="text-[14px] text-[#5A5A5A] leading-relaxed">
                  {d.zonesText ?? `${d.cities.join(', ')}… et plus largement toute l’Île-de-France.`}
                </p>
              </div>

              <div className="bg-[#f4f1f7] border border-[#88b7b5]/30 rounded-3xl p-6 md:p-8">
                {d.slug === '91-essonne' ? (
                  <>
                    <h2 className="text-lg font-baskerville text-[#4B4456] mb-3">
                      Wedding planner dans les villes d’Essonne
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {WEDDING_PLANNER_CITIES.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/wedding-planner-${c.slug}`}
                          className="px-3 py-1.5 rounded-full bg-white border border-[#88b7b5]/30 text-[#4B4456] text-xs font-medium hover:border-[#88b7b5] transition"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-lg font-baskerville text-[#4B4456] mb-3">
                      Wedding planner dans les autres départements
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {otherDepartments.map((x) => (
                        <Link
                          key={x.slug}
                          href={`/ile-de-france/${x.slug}`}
                          className="px-3 py-1.5 rounded-full bg-white border border-[#88b7b5]/30 text-[#4B4456] text-xs font-medium hover:border-[#88b7b5] transition"
                        >
                          {x.name} ({x.code})
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {d.slug === '91-essonne' && (
          <section className="pb-16 lg:pb-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
              <div className="max-w-2xl mb-10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Réalisations</p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] leading-tight">
                  Nos mariages et réalisations en Essonne
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { src: '/mariage-r%C3%A9alis%C3%A9s%20(2).jpg', alt: 'Organisation et coordination d’un mariage en Essonne — Le Oui Parfait' },
                  { src: '/mariage-r%C3%A9alis%C3%A9s%20(3).jpg', alt: 'Scénographie de mariage en Essonne — Le Oui Parfait' },
                  { src: '/mariage-r%C3%A9alis%C3%A9s%20(4).jpg', alt: 'Coordination du jour J d’un mariage dans le 91 — Le Oui Parfait' },
                ].map((photo) => (
                  <figure key={photo.src} className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(25,20,33,0.08)]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                    <figcaption className="mt-3 text-[13px] text-[#5A5A5A]">{photo.alt}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/portfolio" className="text-[#4B4456] underline underline-offset-4 hover:text-[#88b7b5] transition">
                  Voir tous nos mariages réalisés
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="py-14 lg:py-16 bg-[#4B4456]">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <h2 className="font-baskerville text-3xl lg:text-4xl text-white leading-tight mb-4">
              Votre mariage en {d.name} mérite une organisation sereine
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
                    {item.links && (
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                        {item.links.map((l) => (
                          <Link key={l.href} href={l.href} className="text-sm text-[#88b7b5] hover:underline">
                            {l.label} →
                          </Link>
                        ))}
                      </div>
                    )}
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Footer />
    </div>
  );
}
