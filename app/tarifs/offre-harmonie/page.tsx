import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Smartphone, Calendar, Users, Heart } from 'lucide-react';
import { AccordionInclus } from '@/components/AccordionInclus';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';

const sections = [
  {
    title: 'Reprise complète de votre organisation en amont',
    subtitle: 'Une prise en main structurée pour comprendre et sécuriser votre projet.',
    items: [
      'Analyse et prise en charge de l\'intégralité de votre organisation existante',
      'Prise en main du dossier (état des lieux prestataires, centralisation des informations importantes…)',
      'Identification des points sensibles et des risques potentiels',
      'Prise de contact avec les prestataires que vous avez engagés',
      'Structuration et pilotage du déroulement de la journée',
    ],
  },
  {
    title: 'Structuration du planning du jour J',
    subtitle: 'Un déroulé précis pour une journée fluide et maîtrisée.',
    items: [
      'Création du planning du jour J détaillé',
      'Distribution du planning à tous les prestataires',
      'Définition des temps forts et transitions',
      'Anticipation des temps de marge et imprévus',
    ],
  },
  {
    title: 'Coordination logistique',
    subtitle: 'Une préparation terrain pour garantir un déroulé parfait.',
    items: [
      'Visite technique des lieux 2 à 3 mois avant le mariage',
    ],
  },
  {
    title: 'Gestion du déroulement du jour J',
    subtitle: 'Une communication centralisée avec les prestataires et personnes clés pour vous libérer de toute sollicitation.',
    items: [
      'Présence sur site le jour J',
      'Coordination des arrivées des partenaires et du respect des horaires',
      'Accueil des invités le jour J',
      'Coordination et communication avec les témoins',
      'Liaison avec les personnes clés désignées par les mariés',
      'Supervision des installations complètes et du démontage (déco, éclairages, panneaux…)',
      'Gestion des transitions des temps forts entre cérémonie, cocktail et dîner…',
      'Résolution immédiate des problèmes techniques ou logistiques',
      'Gestion des imprévus',
    ],
  },
  {
    title: 'Pilotage global et suivi de la journée',
    subtitle: 'Un interlocuteur unique pour vous garantir le bon déroulement de l\'événement.',
    items: [
      'Coordination de l\'ensemble des acteurs le jour J',
      'Suivi du respect du planning',
      'Gestion des demandes des invités et des proches',
      'Veille au bon déroulement de chaque temps fort',
    ],
  },
];

export default function OffreHarmoniePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/offre-harmonie.png"
              alt="Offre Harmonie — Coordination du jour J"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-16 pt-40">
            <div className="flex items-center gap-2 text-white/50 text-[11px] uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <span>/</span>
              <Link href="/tarifs" className="hover:text-white transition">Tarifs</Link>
              <span>/</span>
              <span className="text-white">Offre Harmonie</span>
            </div>
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4">OFFRE HARMONIE DU JOUR J</p>
              <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Vivez Pleinement<br />Votre Grand Jour
              </h1>
              <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
                Pour les couples ayant organisé leur mariage eux-mêmes, qui souhaitent profiter pleinement de leur journée en nous déléguant la gestion du jour J, géré avec rigueur et discrétion.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-white/50 text-sm">à partir de</span>
                  <div className="font-baskerville text-5xl text-white">1 190€</div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Smartphone className="w-4 h-4 text-[#88b7b5]" />
                  <span className="text-white/80 text-sm">Application mobile dédiée incluse</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro — Image 1 style */}
        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2.603fr_2.5fr] gap-12 lg:gap-6 items-stretch">
              <div className="lg:col-span-1 flex flex-col">
                <div className="relative h-[650px] overflow-hidden mb-4">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/video-detail.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="bg-white p-5">
                  <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Caractéristiques clés :</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Reprise de votre organisation', 'Planning Jour J détaillé', 'Coordination prestataires', 'Application mobile dédiée'].map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-[16px] text-[#5A5A5A]">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">« OFFRE HARMONIE » Coordination du Jour J</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  Vous Avez Presque Tout Organisé,<br />On S'Occupe du Reste
                </h2>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  Vous avez imaginé, choisi et organisé les grandes lignes de votre mariage: nous prenons le relais pour orchestrer la suite avec rigueur et sérénité.
Grâce à notre accompagnement, tout est coordonné dans les meilleures conditions pour vous permettre de vivre pleinement votre journée, sans contraintes ni sollicitations de dernière minute.
                </p>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
                  En complément, notre application mobile dédiée vous permet de suivre en temps réel l’avancement de votre dossier, de communiquer facilement avec notre équipe et de garder une visibilité claire sur les étapes clés, les acomptes et les paiements prestataires.
                </p>

                <Link href="/contact">
                  <button className="uppercase tracking-[0.2em] text-[11px] bg-white border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-8 py-3 rounded-full transition-all mb-8">
                    Réserver maintenant
                  </button>
                </Link>
                <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Spécifications de l'Offre</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Calendar,   title: 'Planning Jour J Détaillé' },
                    { icon: Users,      title: 'Coordination Prestataires' },
                    { icon: Smartphone, title: 'Application Mobile Dédiée' },
                    { icon: Heart,      title: 'Supervision Complète' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-[#e8e0dc] p-5 flex flex-col items-start gap-3">
                      <s.icon className="w-8 h-8 text-[#88b7b5]" />
                      <span className="font-baskerville text-[20px] text-[#4B4456] leading-snug">{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">CE QUI EST INCLUS</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A]">
                Une Coordination Totale<br />Le Jour de Votre Mariage
              </h2>
            </div>
            <AccordionInclus sections={sections} />
          </div>
        </section>

        {/* Result Banner */}
        <section className="py-16 bg-[#88b7b5]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="font-baskerville text-3xl lg:text-4xl text-white mb-4">
              Votre Sérénité, Notre Priorité
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
              Vous vivez votre mariage pleinement sans contraintes ni sollicitations, avec l'assurance que tout est coordonné dans les meilleures conditions.
            </p>
          </div>
        </section>

        <TestimonialsSection />

        {/* Autres Offres */}
        <section className="py-14 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Nos Offres</p>
              <h2 className="font-baskerville text-3xl text-[#4B4456]">Découvrez Aussi Nos Autres Formules</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white">
                <div className="relative h-[240px] overflow-hidden">
                  <Image src="/offre-signature.png" alt="Offre Signature" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#88b7b5] mb-2">Offre Signature</p>
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Mariage Clé en Main</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Formule complète pour ceux qui souhaitent confier l’intégralité de l’organisation à un professionnel.</p>
                  <ul className="space-y-1 mb-5">
                    {['Planification complète', 'Sélection prestataires', 'Application mobile'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/tarifs/offre-signature">
                    <button className="uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-6 py-2.5 rounded-full transition-all">Voir l’Offre</button>
                  </Link>
                </div>
              </div>
              <div className="bg-white">
                <div className="relative h-[240px] overflow-hidden">
                  <Image src="/offre-elegance.png" alt="Offre Élégance" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#88b7b5] mb-2">Offre Élégance</p>
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Organisation Partielle</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Vous gardez le contrôle, nous intervenons sur les pôles où vous avez besoin d’un expert.</p>
                  <ul className="space-y-1 mb-5">
                    {['Accompagnement ciblé', 'Pôles au choix', 'Conseils professionnels'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/tarifs/offre-elegance">
                    <button className="uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-6 py-2.5 rounded-full transition-all">Voir l’Offre</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/presentation.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#88b7b5] mb-4 font-medium">
                Prêt à Commencer ?
              </p>
              <h2 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight px-2">
                Confiez-Nous Votre Jour J
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Vous avez organisé votre mariage avec amour. Il ne vous reste plus qu’à profiter pleinement de chaque instant. On s’occupe du reste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg hover:shadow-xl">
                    Réserver Ma Consultation
                  </Button>
                </Link>
                <Link href="tel:+33123456789" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-white text-[#4B4456] hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg">
                    Appeler Maintenant
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/70 text-xs sm:text-sm">
                <span>✓ Consultation gratuite</span>
                <span>✓ Réponse sous 24h</span>
                <span>✓ Sans engagement</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
