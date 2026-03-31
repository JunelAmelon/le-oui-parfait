import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { IDF_DEPARTMENTS } from './_idfData';

export const metadata: Metadata = {
  title: 'Wedding planner Île-de-France (IDF) | Organisation de mariage',
  description:
    "Organisatrice de mariage en Île-de-France : Paris (75), 77, 78, 91, 92, 93, 94, 95. Organisation clé en main, organisation partielle et coordination du jour J. Demandez un devis.",
  alternates: { canonical: 'https://leouiparfait.com/ile-de-france' },
  openGraph: {
    title: 'Wedding planner Île-de-France (IDF) | Le Oui Parfait',
    description:
      "Organisatrice de mariage en Île-de-France : organisation clé en main, organisation partielle, coordination du jour J. Couverture : Paris + tous les départements IDF.",
    url: 'https://leouiparfait.com/ile-de-france',
    type: 'website',
  },
};

const faq = [
  {
    q: 'Intervenez-vous dans toute l’Île-de-France ?',
    a: 'Oui. Nous accompagnons les couples à Paris (75) et dans tous les départements : 77, 78, 91, 92, 93, 94, 95.',
  },
  {
    q: 'Quels types de prestations proposez-vous ?',
    a: 'Organisation clé en main, organisation partielle, coordination du jour J, demande en mariage, et expériences EVJF/EVG.',
  },
  {
    q: 'Comment obtenir un devis ?',
    a: 'Via le formulaire de contact : nous revenons vers vous rapidement pour cadrer votre besoin et vous proposer un accompagnement sur mesure.',
  },
];

export default function IleDeFrancePage() {
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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Wedding planner Île-de-France"
          subtitle="Organisation de mariage sur mesure : Paris et toute l’IDF"
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
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/90 text-[#4B4456] font-medium hover:bg-white transition"
            >
              Voir les services
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {IDF_DEPARTMENTS.map((d) => (
              <Link
                key={d.slug}
                href={`/ile-de-france/${d.slug}`}
                className="px-3 py-1.5 rounded-full bg-white/90 text-[#4B4456] text-xs font-medium hover:bg-white transition"
              >
                {d.code} · {d.name}
              </Link>
            ))}
          </div>
        </HeroPage>

        <section className="py-16 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-baskerville text-[#4B4456] mb-4">
                Une organisatrice de mariage pour toute l’Île-de-France
              </h2>
              <p className="text-[#4B4456]/80 leading-relaxed mb-10">
                Le Oui Parfait accompagne les couples partout en Île-de-France : repérage de lieux, sélection de prestataires,
                scénographie et coordination. Notre objectif : une organisation fluide, élégante, et une journée parfaitement
                orchestrée.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6">
                  <p className="text-[10px] tracking-[0.3em] text-[#4B4456]/70 uppercase mb-3">ACCOMPAGNEMENT</p>
                  <p className="text-xl font-baskerville text-[#4B4456]">Une méthode claire</p>
                  <p className="mt-2 text-[#4B4456]/80">Planning, budget, prestataires, scénographie : tout est cadré et suivi.</p>
                </div>
                <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6">
                  <p className="text-[10px] tracking-[0.3em] text-[#4B4456]/70 uppercase mb-3">JOUR J</p>
                  <p className="text-xl font-baskerville text-[#4B4456]">Coordination premium</p>
                  <p className="mt-2 text-[#4B4456]/80">Une journée fluide, des prestataires briefés, une timeline maîtrisée.</p>
                </div>
                <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6">
                  <p className="text-[10px] tracking-[0.3em] text-[#4B4456]/70 uppercase mb-3">SUR-MESURE</p>
                  <p className="text-xl font-baskerville text-[#4B4456]">Un style qui vous ressemble</p>
                  <p className="mt-2 text-[#4B4456]/80">Élégant, moderne, cohérent : du moodboard à la mise en place.</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[10px] tracking-[0.3em] text-[#4B4456]/70 uppercase mb-4">DÉPARTEMENTS</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {IDF_DEPARTMENTS.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/ile-de-france/${d.slug}`}
                    className="rounded-2xl bg-white border border-[#88b7b5]/30 p-5 hover:border-[#88b7b5] transition"
                  >
                    <p className="text-sm tracking-wide text-[#4B4456]/70">{d.code}</p>
                    <p className="text-lg font-semibold text-[#4B4456]">{d.name}</p>
                    <p className="text-sm text-[#4B4456]/70 mt-2">Voir les détails</p>
                  </Link>
                ))}
              </div>

              <div className="mt-12 rounded-3xl bg-white border border-[#88b7b5]/30 p-6 md:p-8">
                <h3 className="text-xl font-baskerville text-[#4B4456] mb-3">Besoin d’un devis ?</h3>
                <p className="text-[#4B4456]/80 mb-6">
                  Dites-nous la date, le lieu envisagé et le niveau d’accompagnement souhaité. Nous vous répondons rapidement.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#88b7b5] text-white font-medium hover:bg-[#6fa3a1] transition"
                >
                  Demander un devis
                </Link>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-baskerville text-[#4B4456] mb-4">FAQ</h3>
                <div className="space-y-4">
                  {faq.map((item) => (
                    <div key={item.q} className="rounded-2xl bg-white border border-[#88b7b5]/30 p-5">
                      <p className="font-semibold text-[#4B4456]">{item.q}</p>
                      <p className="mt-2 text-[#4B4456]/80">{item.a}</p>
                    </div>
                  ))}
                </div>
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
