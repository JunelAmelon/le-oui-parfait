import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Gift, Smartphone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sections = [
  {
    title: 'Analyse de votre organisation et cadrage du projet',
    subtitle: 'Un état des lieux précis pour sécuriser la suite de votre organisation.',
    items: [
      'Analyse de l\'avancement de votre mariage',
      'Définition des pôles d\'accompagnement sur 3 à 5 pôles définis ensemble',
      'Coordination des prestataires',
      'Gestion du planning',
      'Scénographie et décoration',
      'Conseils budget',
      'Coordination du jour J',
      'Identification des points forts et des points à ajuster',
      'Clarification des besoins et des attentes',
    ],
  },
  {
    title: 'Structuration administrative et planning ciblé',
    subtitle: 'Une organisation claire sur les étapes que vous déléguez.',
    items: [
      'Mise en place ou ajustement du rétroplanning',
      'Structuration des étapes restantes selon les pôles définis',
      'Conseils sur la gestion du budget lié aux prestations concernées',
      'Suivi des échéances sur les éléments pris en charge',
    ],
  },
  {
    title: 'Recherche et accompagnement prestataires (pôles définis)',
    subtitle: 'Un accompagnement professionnel sur les prestataires que vous souhaitez déléguer.',
    items: [
      'Recherche et proposition de prestataires ciblés haut de gamme et reconnus',
      'Mise en relation et coordination des échanges',
      'Analyse et aide à la comparaison des devis et/ou contrats',
      'Conseil dans la sélection finale',
    ],
  },
  {
    title: 'Accompagnement sur les choix clés et rendez-vous',
    subtitle: 'Un regard expert pour vous aider à prendre les bonnes décisions.',
    items: [
      'Présence ou accompagnement lors de rendez-vous clés',
      'Aide à la prise de décision sur les éléments stratégiques',
      'Conseils personnalisés selon l\'avancement du projet',
    ],
  },
  {
    title: 'Coordination ciblée et sécurisation du projet',
    subtitle: 'Un suivi structuré pour éviter les oublis et incohérences.',
    items: [
      'Coordination des prestataires concernés par l\'offre',
      'Centralisation des informations liées aux pôles pris en charge',
      'Anticipation des points de vigilance',
      'Préparation à la coordination du jour J',
    ],
  },
];

const privileges = [
  {
    title: 'Livre d\'Or Audio',
    desc: 'Un livre d\'or audio au format téléphone, pour permettre à vos invités de vous laisser des messages vocaux authentiques, spontanés et remplis d\'émotion, que vous pourrez réécouter et conserver comme un souvenir unique.',
    media: 'video',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
  },
  {
    title: 'Faire-Part Digital & Interactif',
    desc: 'Un faire-part de mariage digital et interactif, imaginé sur-mesure à votre image, pour partager votre annonce avec élégance, simplicité et modernité.',
    media: 'image',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
  },
  {
    title: 'Organisation du Voyage de Noces',
    desc: 'L\'organisation sur-mesure de votre voyage de noces, pensé selon vos envies, votre budget et l\'expérience que vous souhaitez vivre, pour prolonger la magie de votre mariage par une parenthèse inoubliable.',
    media: 'image',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
  },
];

export default function OffreElegancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/wedding (2).jpg"
              alt="Offre Élégance — Organisation partielle"
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
              <span className="text-white">Offre Élégance</span>
            </div>
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4">OFFRE ÉLÉGANCE</p>
              <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Organisation Partielle<br />Sur Mesure
              </h1>
              <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
                Une formule d'organisation partielle et structurée qui vous accompagne sur des pôles précis tout en vous laissant la maîtrise de votre projet déjà engagé.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-white/50 text-sm">à partir de</span>
                  <div className="font-baskerville text-5xl text-white">1 890€</div>
                  <span className="text-white/40 text-xs">après étude du lieu et de l'ampleur de la scénographie</span>
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
              <div className="relative h-[350px]">
                <Image
                  src="https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg"
                  alt="Offre Élégance"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">COMMENT ÇA FONCTIONNE</p>
                <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A] mb-6 leading-tight">
                  Vous Gardez le Contrôle, Nous Apportons l'Expert
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-4">
                  Profitez de notre application mobile dédiée, suivez en temps réel chaque étape de l'organisation, l'avancement de votre dossier ainsi que les acomptes et paiements des prestataires.
                </p>
                <p className="text-[#5A5A5A] leading-relaxed italic border-l-4 border-[#88b7b5] pl-4">
                  Résultat pour vous : Vous avancez dans l'organisation de votre mariage avec un cadre clair, des choix sécurisés et l'accompagnement d'un professionnel sur les points essentiels de votre choix.
                </p>
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
                Un Accompagnement<br />Sur les Pôles Qui Comptent
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

        {/* Privilèges */}
        <section className="py-20 bg-[#4B4456]">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-5 h-5 text-[#88b7b5]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5]">LES PRIVILÈGES DE L'OFFRE ÉLÉGANCE</p>
              </div>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-white">
                3 Privilèges Offerts
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {privileges.map((priv, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all">
                  <div className="relative h-48 mb-5 overflow-hidden">
                    <Image src={priv.image} alt={priv.title} fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-[#4B4456]/40" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#88b7b5] text-white text-[10px] uppercase tracking-wider px-2 py-1">Inclus</span>
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
                Avancez Sereinement Dans Votre Organisation
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Contactez-nous pour définir ensemble les pôles sur lesquels vous avez besoin d’un accompagnement professionnel.
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
