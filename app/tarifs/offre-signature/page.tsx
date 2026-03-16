import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Gift, Smartphone, Star, Calendar, Users, Heart, Sparkles } from 'lucide-react';
import { AccordionInclus } from '@/components/AccordionInclus';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';

const sections = [
  {
    title: 'Gestion administrative & planning',
    subtitle: 'Une organisation rigoureuse pour sécuriser chaque étape de votre mariage.',
    items: [
      'Analyse complète de votre projet et de vos attentes',
      'Planification budgétaire et suivi transparent',
      'Création d\'un rétroplanning détaillé et personnalisé',
      'Suivi et mise à jour régulière du planning selon l\'avancement',
      'Gestion administrative (centralisation des devis, contrats et documents importants)',
      'Pilotage et suivi des prestataires (relances, respect des délais, suivi des échéances)',
      'Centralisation des informations (tableau de bord partagé)',
    ],
  },
  {
    title: 'Recherche et sélection des prestataires',
    subtitle: 'Une sélection sur mesure de prestataires fiables et adaptés à votre projet.',
    items: [
      'Identification des prestataires en adéquation avec votre budget et votre style',
      'Présentation de prestataires sélectionnés avec soin (avec devis comparatifs)',
      'Mise en relation et coordination des échanges',
      'Analyse et comparaison des devis et/ou contrats (horaire, options, frais…)',
      'Conseils objectifs dans la prise de décision finale',
    ],
  },
  {
    title: 'Visite des lieux et rendez-vous accompagnés',
    subtitle: 'Un accompagnement terrain pour vous aider à faire les bons choix en toute confiance.',
    items: [
      'Recherche et proposition de lieux adaptés à votre projet',
      'Organisation et accompagnement lors des visites des lieux',
      'Visite technique : check-list des points à vérifier (accès, horaires, contraintes, logistique, plan B pluie…)',
      'Vérification des capacités, des espaces, des flux des invités',
      'Présence aux rendez-vous clés avec les prestataires si nécessaire',
      'Compte rendu après chaque rendez-vous pour valider les choix sereinement',
      'Conseil et aide à la prise de décision',
    ],
  },
  {
    title: 'Conception de la décoration et scénographie',
    subtitle: 'Une ambiance pensée dans les moindres détails à votre image pour sublimer votre mariage.',
    items: [
      'Définition de l\'univers, du thème, des couleurs et de l\'ambiance générale',
      'Création d\'un dossier déco : moodboard complet',
      'Gestion du matériel : location, achats, logistique d\'installation et de reprise',
      'Conception d\'une scénographie cohérente et harmonieuse (photobooth, panneaux, livre d\'or, coin photos, cadeaux invités, candy bar…)',
      'Proposition d\'ambiances pour les temps forts (cocktails, entrée des mariés, ouverture du bal, dîner, soirée…)',
      'Conseil sur la décoration, les matières et les couleurs',
      'Coordination avec les prestataires liés à la décoration et au fleuriste',
      'Suivi de la mise en place le jour J',
    ],
  },
  {
    title: 'Gestion de la logistique et coordination complète',
    subtitle: 'Une prise en charge globale pour un mariage fluide et maîtrisé.',
    items: [
      'Brief complet des prestataires avant l\'événement',
      'Accueil et coordination de l\'ensemble des prestataires',
      'Élaboration du planning détaillé du jour J',
      'Organisation des hébergements et transports',
      'Coordination de la cérémonie religieuse ou laïque',
      'Gestion des installations (déco, signalétique, photobooth, livre d\'or…)',
      'Gestion des temps forts (cocktails, entrée des mariés, ouverture du bal, dîner, soirée…)',
      'Gestion des imprévus en toute discrétion',
      'Point de contact unique pour les prestataires et les proches',
    ],
  },
];

const privileges = [
  {
    title: 'Animation Photobooth Classique Offerte',
    desc: 'Une animation photobooth classique offerte pour créer des souvenirs uniques et marquer les esprits de vos convives. (Mise en place et coordination)',
    media: 'video',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
  },
  {
    title: 'Faire-Part Digital & Interactif',
    desc: 'Un faire-part de mariage digital et interactif, imaginé sur-mesure à votre image, pour partager votre annonce avec élégance, simplicité et modernité.',
    media: 'image',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
  },
  {
    title: 'Vidéo "Save the Date" Personnalisée',
    desc: 'La réalisation d\'une vidéo "Save the Date" fun et personnalisée, mettant en scène votre couple, conçue par notre vidéaste pour annoncer votre mariage de façon originale et mémorable.',
    media: 'video',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
  },
  {
    title: 'Site Internet de Mariage Personnalisé',
    desc: 'La création d\'un site internet de mariage entièrement personnalisé, pensé à l\'image de votre couple. Il permet d\'annoncer votre événement avec élégance, partager votre parcours, et informer vos invités.',
    media: 'image',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg',
  },
  {
    title: 'Organisation de Votre Voyage de Noces',
    desc: 'L\'organisation sur-mesure de votre voyage de noces, pensé selon vos envies, votre budget et l\'expérience que vous souhaitez vivre, pour prolonger la magie de votre mariage.',
    media: 'image',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg',
  },
  {
    title: 'Accompagnement Personal Shopper',
    desc: 'Un accompagnement personal shopper dédié à la recherche de vos tenues de mariés, afin de vous guider vers des choix élégants, harmonieux et parfaitement en accord avec votre style.',
    media: 'video',
    image: 'https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg',
  },
];

export default function OffreSignaturePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/wedding (1).jpg"
              alt="Offre Signature — Mariage clé en main"
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
              <span className="text-white">Offre Signature</span>
            </div>
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4">OFFRE SIGNATURE</p>
              <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Mariage Clé en Main
              </h1>
              <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
                Formule clé en main pour ceux qui souhaitent confier l'intégralité de l'organisation de leur mariage à un professionnel.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-white/50 text-sm">à partir de</span>
                  <div className="font-baskerville text-5xl text-white">3 490€</div>
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
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="relative h-[420px] overflow-hidden mb-4">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/mariage.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="bg-white p-5">
                  <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Caractéristiques clés :</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Planification budgétaire', 'Sélection prestataires', 'Coordination Jour J', 'Application mobile dédiée'].map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-[16px] text-[#5A5A5A]">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Mariage Clé en Main</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  Votre Mariage Entre<br />de Bonnes Mains
                </h2>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  Profitez de notre application mobile dédiée, suivez en temps réel chaque étape de l'organisation, l'avancement de votre dossier ainsi que les acomptes et paiements des prestataires.
                </p>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
                  Résultat pour vous : la sérénité de vivre pleinement chaque instant, avec la certitude que votre mariage est pensé, orchestré et maîtrisé dans les moindres détails.
                </p>
                <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Spécifications de l'Offre</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Calendar,   title: 'Planification Complète' },
                    { icon: Users,      title: 'Réseau Prestataires Sélectionnés' },
                    { icon: Smartphone, title: 'Application Mobile Dédiée' },
                    { icon: Sparkles,   title: 'Décoration & Scénographie' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-[#e8e0dc] p-5 flex flex-col items-start gap-3">
                      <s.icon className="w-8 h-8 text-[#88b7b5]" />
                      <span className="font-baskerville text-[20px] text-[#4B4456] leading-snug">{s.title}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <button className="uppercase tracking-[0.2em] text-[11px] bg-white border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-8 py-3 rounded-full transition-all">
                    Réserver maintenant
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sections détaillées */}
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">CE QUI EST INCLUS</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A]">
                Un Accompagnement Complet<br />de A à Z
              </h2>
            </div>

            <AccordionInclus sections={sections} />
          </div>
        </section>

        {/* Privilèges */}
        <section className="py-20 bg-[#4B4456]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-[#88b7b5]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5]">LES PRIVILÈGES DE L'OFFRE SIGNATURE</p>
              </div>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-white">
                Privilèges Inclus
              </h2>
              <p className="text-white/60 mt-4 max-w-xl mx-auto">Des cadeaux soigneusement sélectionnés pour sublimer chaque moment de votre mariage.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privileges.map((priv, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all">
                  <div className="relative h-48 mb-5 overflow-hidden">
                    <Image src={priv.image} alt={priv.title} fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-[#4B4456]/40" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#88b7b5] text-white text-[10px] uppercase tracking-wider px-2 py-1">
                        Inclus
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <Star className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                    <h4 className="font-baskerville text-lg text-white leading-snug">{priv.title}</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{priv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Autres Offres */}
        <section className="py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Nos Offres</p>
              <h2 className="font-baskerville text-3xl text-[#4B4456]">Découvrez Aussi Nos Autres Formules</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white">
                <div className="relative h-[240px] overflow-hidden">
                  <Image src="/wedding (3).jpg" alt="Offre Élégance" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#88b7b5] mb-2">Offre Élégance</p>
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Coordination du Jour J</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Pour ceux qui ont planifié et souhaitent confier la coordination parfaite de leur journée à un professionnel.</p>
                  <ul className="space-y-1 mb-5">
                    {['Supervision complète', 'Coordination prestataires', 'Planning Jour J'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/tarifs/offre-elegance">
                    <button className="uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-6 py-2.5 rounded-full transition-all">Voir l’Offre</button>
                  </Link>
                </div>
              </div>
              <div className="bg-white">
                <div className="relative h-[240px] overflow-hidden">
                  <Image src="/wedding (4).jpg" alt="Offre Harmonie" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#88b7b5] mb-2">Offre Harmonie</p>
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Semi-Planification</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Vous prenez les décisions, nous nous occupons de la mise en œuvre et de la coordination pour un résultat parfait.</p>
                  <ul className="space-y-1 mb-5">
                    {['Accompagnement partiel', 'Gestion prestataires', 'Coordination Jour J'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/tarifs/offre-harmonie">
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
                Votre Mariage de Rêve Commence Ici
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Contactez-nous pour un premier échange sans engagement et découvrez comment l’Offre Signature peut transformer votre projet de mariage.
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
