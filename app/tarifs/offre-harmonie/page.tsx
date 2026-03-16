import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Smartphone } from 'lucide-react';
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
              src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG-S5QBJNG.jpg"
              alt="Offre Harmonie — Coordination du Jour J"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/80" />
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

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">POUR QUI ?</p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A] mb-6 leading-tight">
                  Vous Avez Tout Organisé,<br />On S'Occupe du Reste
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-4">
                  Profitez de notre application mobile dédiée, suivez en temps réel chaque étape de l'organisation, l'avancement de votre dossier ainsi que les acomptes et paiements des prestataires.
                </p>
                <p className="text-[#5A5A5A] leading-relaxed italic border-l-4 border-[#88b7b5] pl-4">
                  Résultat pour vous : Vous vivez votre mariage pleinement sans contraintes ni sollicitations, avec l'assurance que tout est coordonné dans les meilleures conditions.
                </p>
              </div>
              <div className="relative h-[350px]">
                <Image
                  src="https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg"
                  alt="Offre Harmonie Jour J"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">CE QUI EST INCLUS</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A]">
                Une Coordination Totale<br />Le Jour de Votre Mariage
              </h2>
            </div>
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={index} className="bg-white p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#88b7b5] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-baskerville text-xl lg:text-2xl text-[#4A4A4A] mb-1">{section.title}</h3>
                      <p className="text-[#88b7b5] text-sm italic">{section.subtitle}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-12">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#5A5A5A] leading-relaxed">
                        <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
