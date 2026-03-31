import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import { PlanningSection } from '@/components/PlanningSection';
import { getDepartmentBySlug, IDF_DEPARTMENTS } from '../_idfData';

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

  return {
    title: `Wedding planner ${d.name} (${d.code}) | Organisation de mariage`,
    description: `Organisatrice de mariage en ${d.name} (${d.code}). Organisation clé en main, organisation partielle et coordination du jour J. Intervention partout en Île-de-France. Devis sur demande.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Wedding planner ${d.name} (${d.code}) | Le Oui Parfait`,
      description: `Organisation de mariage en ${d.name} : clé en main, organisation partielle, coordination du jour J.`,
      url,
      type: 'website',
    },
  };
}

function buildFaq(deptName: string) {
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

  const faq = buildFaq(d.name);
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
          title={`Wedding planner ${d.name} (${d.code})`}
          subtitle={`Organisation & coordination de mariage en ${d.name} — Île-de-France`}
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

        <section className="py-16 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6 md:p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#4B4456]/70 uppercase mb-3">ORGANISATION DE MARIAGE</p>
                <h2 className="text-2xl md:text-3xl font-baskerville text-[#4B4456] mb-4">
                  Une organisatrice de mariage en {d.name}
                </h2>
                <p className="text-[#4B4456]/80 leading-relaxed">
                  Vous cherchez une wedding planner en {d.name} ? Le Oui Parfait vous accompagne avec une méthode claire,
                  des prestataires sélectionnés et une coordination irréprochable. Notre approche : élégante, efficace et 100%
                  sur-mesure.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4B4456] text-white font-medium hover:bg-[#3a3540] transition"
                  >
                    Voir les tarifs
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#4B4456] font-medium border border-[#88b7b5]/30 hover:border-[#88b7b5] transition"
                  >
                    Voir le portfolio
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6">
                  <h2 className="text-xl font-baskerville text-[#4B4456] mb-2">Prestations</h2>
                  <ul className="space-y-2 text-[#4B4456]/80">
                    <li>Organisation clé en main</li>
                    <li>Organisation partielle</li>
                    <li>Coordination du jour J</li>
                    <li>Demande en mariage</li>
                  </ul>
                  <div className="mt-5">
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#4B4456] text-white font-medium hover:bg-[#3a3540] transition"
                    >
                      Voir les services
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl bg-white border border-[#88b7b5]/30 p-6">
                  <h2 className="text-xl font-baskerville text-[#4B4456] mb-2">Villes fréquentes</h2>
                  <p className="text-[#4B4456]/80">
                    {d.cities.join(' · ')}
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#88b7b5] text-white font-medium hover:bg-[#6fa3a1] transition"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-3xl bg-white border border-[#88b7b5]/30 p-6 md:p-8">
                <h2 className="text-xl font-baskerville text-[#4B4456] mb-3">Pourquoi choisir Le Oui Parfait ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#4B4456]/80">
                  <div className="rounded-2xl bg-[#f4f1f7] p-4">Un planning et un budget maîtrisés</div>
                  <div className="rounded-2xl bg-[#f4f1f7] p-4">Des prestataires fiables et alignés à votre style</div>
                  <div className="rounded-2xl bg-[#f4f1f7] p-4">Une coordination précise le jour J</div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-baskerville text-[#4B4456] mb-4">FAQ</h2>
                <div className="space-y-4">
                  {faq.map((item) => (
                    <div key={item.q} className="rounded-2xl bg-white border border-[#88b7b5]/30 p-5">
                      <p className="font-semibold text-[#4B4456]">{item.q}</p>
                      <p className="mt-2 text-[#4B4456]/80">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <Link href="/ile-de-france" className="text-[#4B4456] underline">
                  Retour à Île-de-France
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
