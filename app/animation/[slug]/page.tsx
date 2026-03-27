import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { AnimationImageCarousel } from '@/components/AnimationImageCarousel';
import { AccordionInclus } from '@/components/AccordionInclus';
import { Check, Sparkles, Users, Camera, Wine, Heart, Store } from 'lucide-react';
import { PhotoboothIntroMedia } from '@/components/PhotoboothIntroMedia';

type AnimationDetail = {
  slug: string;
  menuTitle: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  price: string;
  paymentHint?: string;
  highlights: string[];
  body: string[];
  includesTitle: string;
  includes: string[];
  notesTitle?: string;
  notes?: string[];
  images: { src: string; alt: string }[];
};

const animations: AnimationDetail[] = [
  {
    slug: 'coin-chicha',
    menuTitle: 'Coin Chicha',
    eyebrow: 'Animations Mariage',
    title: 'Coin Chicha',
    subtitle:
      'Offrez à vos invités un espace orientale élégant, chaleureux et convivial, pensé comme une véritable parenthèse de détente au cœur de votre réception.',
    heroImage: '/COINCHCHA (1).jpg',
    price: 'À partir de 649€',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Formats : 2h à 4h', 'Intérieur / extérieur', 'Scénographie chic & orientale'],
    body: [
      'Idéal pour créer une ambiance raffinée et originale, cet espace peut être installé en intérieur comme en extérieur, avec une mise en scène soignée mêlant assises, décoration, service de thé et sélection de saveurs.',
      'Conçu pour favoriser les échanges et prolonger l’expérience de vos convives, le Coin Chicha s’intègre harmonieusement à l’univers de votre mariage grâce à une scénographie chic et accueillante.',
    ],
    includesTitle: 'L’offre peut inclure selon la formule',
    includes: [
      'Présence d’un opérateur animateur',
      'Installation en intérieur ou en extérieur',
      'Espace aménagé avec petits canapés, assises et tables basses',
      'De 4 à 7 chichas selon la formule retenue',
      'Service de thé',
      'Accompagnements (petites mignardises)',
      'Choix des saveurs à définir avec les mariés selon le catalogue disponible',
      'Décoration et ambiance orientale adaptées à votre réception',
    ],
    notesTitle: 'Informations importantes',
    notes: [
      'En intérieur, les chichas sont proposées sans tabac, avec utilisation de pierres de chicha Shiazo 100% naturelles et non nocives.',
      'En extérieur, les chichas peuvent être proposées avec charbon, selon les conditions d’installation et le cadre prévu.',
      'En cas d’installation extérieure, une tente ou un parasol peut être envisagé selon les conditions météorologiques.',
    ],
    images: [
      { src: '/COIN CHICHE FORMAT PORTRAIT EN INTERIEUR.png', alt: 'Coin Chicha — ambiance orientale' },
      { src: '/COIN CHICHE FORMAT PORTRAIT.png', alt: 'Coin Chicha — mise en scène' },
      { src: '/CHICHA.png', alt: 'Coin Chicha — détail' },
      { src: '/PLATEAU COIN CHICHA.png', alt: 'PLATEAU COIN CHICHA' },
    ],
  },
  {
    slug: 'stand-oui-pancake',
    menuTitle: 'Stand Oui Pancake',
    eyebrow: 'Animations Mariage',
    title: 'Stand Oui Pancake',
    subtitle: 'L’animation gourmande qui fait fondre les invités.',
    heroImage: '/baniere site pancake.png',
    price: 'À partir de 399€',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Durée : 2h', 'Jusqu’à 100 personnes', 'Garnitures & nappages au choix'],
    body: [
      'Offrez à vos convives une pause sucrée aussi généreuse que conviviale avec Stand Oui Pancake, une animation gourmande pensée pour apporter une touche de douceur, de partage et de plaisir à votre réception.',
      'Installé sous forme de stand, cet espace propose de délicieux pancakes à personnaliser selon les envies, avec différents toppings et accompagnements gourmands pour séduire petits et grands.',
    ],
    includesTitle: 'L’offre comprend',
    includes: [
      'Mise en place du stand pancake',
      'Service pendant 2 heures',
      'Formule prévue pour jusqu’à 100 personnes',
      'Choix de garnitures et nappages gourmands selon la sélection proposée',
      'Présentation soignée et ambiance conviviale',
    ],
    notesTitle: 'À noter',
    notes: ['Au-delà de 100 personnes, un ajustement tarifaire sera appliqué selon le nombre de convives.'],
    images: [
      { src: '/STAND EXT  CUP CAKE.png', alt: 'Stand Oui Pancake — présentation' },
      { src: '/BARQUETTE PUNCAKE.png', alt: 'Stand Oui Pancake — service' },
      { src: '/BROCHETTE CAKE.png', alt: 'Stand Oui Pancake — détails' },
      { src: '/Pot rond cake.png', alt: 'Stand Oui Pancake — ambiance' },
      { src: '/machine piuncake mini.png', alt: 'machine piuncake mini' },
    ],
  },
  {
    slug: 'photobooth-360',
    menuTitle: 'Photobooth 360',
    eyebrow: 'Animations Mariage',
    title: 'Photobooth 360',
    subtitle: 'Une animation immersive, élégante et résolument mémorable.',
    heroImage: '/banner-photoboot.jpg',
    price: 'À partir de 549€ HT',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Captation 360°', 'Effet slow motion', 'Partage rapide (QR, WhatsApp, AirDrop…)'],
    body: [
      'Pensé pour sublimer l’ambiance de votre mariage, ce dispositif capture vos plus beaux instants sous tous les angles à travers des vidéos dynamiques, fluides et spectaculaires.',
      'Idéal pour créer du rythme, surprendre vos convives et générer des souvenirs modernes à partager.',
    ],
    includesTitle: 'L’offre peut inclure selon la formule',
    includes: [
      'Installation du Photobooth 360 sur votre lieu de réception',
      'Présence d’un animateur pendant la prestation',
      'Captation de vidéos immersives et dynamiques',
      'Rendu fluide avec effet slow motion',
      'Installation possible en intérieur comme en extérieur',
      'Partage rapide des vidéos (QR Code, WhatsApp, AirDrop, e-mail, Bluetooth)',
      'Récupération des contenus dans une galerie numérique après l’événement',
      'Personnalisation possible selon l’univers de votre mariage',
    ],
    images: [
      { src: '/360 COUPLE.png', alt: 'Photobooth 360 — souvenir' },
    ],
  },
  {
    slug: 'miroir-photobooth',
    menuTitle: 'Miroir Photobooth',
    eyebrow: 'Animations Mariage',
    title: 'Miroir Photobooth',
    subtitle: 'Une animation élégante, interactive et résolument mémorable.',
    heroImage: '/photobott-mirror (1).jpg',
    price: 'À partir de 550€ HT',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Impressions instantanées', 'GIF & Boomerang', 'Personnalisation du cadre & univers'],
    body: [
      'Véritable élément d’animation à part entière, ce miroir nouvelle génération sublime votre réception tout en capturant des souvenirs spontanés, raffinés et pleins de joie.',
      'Entre photos instantanées, effets visuels et expérience immersive, chaque passage devient un moment de complicité à partager et à conserver.',
    ],
    includesTitle: 'L’offre peut inclure selon la formule',
    includes: [
      'Installation du Miroir Photobooth sur votre lieu de réception',
      'Présence d’un animateur pendant la prestation',
      'Impressions photo instantanées',
      'Photos, GIF et Boomerang',
      'Partage des contenus (QR Code, e-mail, AirDrop, WhatsApp)',
      'Personnalisation du cadre photo, du fond d’écran et de l’univers visuel',
      'Installation possible en intérieur selon la configuration',
    ],
    notesTitle: 'À noter',
    notes: ['Modèle susceptible de varier selon disponibilité.'],
    images: [
      { src: '/photoboot-mirror.png', alt: 'Miroir Photobooth — animation' },
      { src: '/photoboot-mirror-rendu (1).jpg', alt: 'Miroir Photobooth — souvenir' },
      { src: '/photoboot-mirror-rendu (2).jpg', alt: 'Miroir Photobooth — souvenir' },
    ],
  },
  {
    slug: 'photobooth-classique',
    menuTitle: 'Photobooth Classique',
    eyebrow: 'Animations Mariage',
    title: 'Photobooth Classique',
    subtitle: 'Chic, ludique et accessible à tous : un incontournable des mariages.',
    heroImage: '/photobbot-classique (1).jpg',
    price: 'À partir de 350€ HT',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Photos, GIF & Boomerang', 'Impressions instantanées', 'Borne compacte'],
    body: [
      'Pensé pour s’intégrer naturellement à l’univers de votre mariage, il capture les sourires, les éclats de rire et les plus beaux instants de votre réception tout en offrant à vos convives un souvenir immédiat à emporter.',
      'Véritable valeur sûre, il crée un moment de partage aussi simple qu’efficace.',
    ],
    includesTitle: 'L’offre peut inclure selon la formule',
    includes: [
      'Installation du Photobooth Classique sur votre lieu de réception',
      'Présence d’un animateur pendant la prestation',
      'Prises de vue photo, GIF et Boomerang',
      'Impressions photo instantanées',
      'Partage des contenus (QR Code, e-mail, WhatsApp, AirDrop)',
      'Personnalisation du cadre photo, du fond d’écran et de l’univers visuel',
      'Installation possible en intérieur et selon la configuration, en extérieur',
      'Borne compacte et facilement intégrable à différents espaces',
    ],
    images: [
      { src: '/photoboot-classique (6).png', alt: 'Photobooth Classique — animation' },
      { src: '/photoboot-classique (1).jpg', alt: 'Photobooth Classique — animation' },
      { src: '/photoboot-classique (2).jpg', alt: 'Photobooth Classique — animation' },
      { src: '/photoboot-classique (3).jpg', alt: 'Photobooth Classique — animation' },
      { src: '/photoboot-classique (4).jpg', alt: 'Photobooth Classique — animation' },
      { src: '/photoboot-classique (5).jpg', alt: 'Photobooth Classique — animation' },
    ],
  },
  {
    slug: 'candy-bar-cup-cake',
    menuTitle: 'Candy Bar & Cup Cake',
    eyebrow: 'Animations Mariage',
    title: 'Candy Bar & Cup Cake',
    subtitle: 'Une parenthèse sucrée, généreuse et raffinée.',
    heroImage: '/candy-bar (1).jpeg',
    price: 'À partir de 690€ HT',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Durée : 2h30', 'Env. 110 invités', 'Douceurs maison & artisanales'],
    body: [
      'Présenté sur une élégante charrette et imaginé pour sublimer votre réception, cet espace gourmand apporte une touche festive et conviviale à votre mariage.',
      'Entre macarons, bonbons, barres chocolatées, cupcakes, verrines et douceurs variées, chaque détail est pensé pour séduire petits et grands.',
    ],
    includesTitle: 'L’offre peut inclure selon la formule',
    includes: [
      'Mise en place de deux charrettes candy bar',
      'Assortiment de douceurs maison et artisanales',
      'Macarons, bonbons, barres chocolatées, cupcakes et verrines',
      '2 fontaines à cocktails à robinet',
      'Bouteilles d’eau à disposition',
      'Décoration et mise en scène du stand en harmonie avec votre événement',
      'Présence d’un animateur pendant la prestation',
      'Installation, mise en place et retrait inclus',
    ],
    notesTitle: 'Options',
    notes: ['Granités', 'Barbe à papa', 'Bonbon personnalisé au nom des mariés', 'Letter cake aux initiales des mariés'],
    images: [
      { src: '/candy-bar (3).PNG', alt: 'Candy Bar & Cup Cake — présentation' },
      { src: '/candy-bar (1).JPG', alt: 'Candy Bar & Cup Cake — détails' },
      { src: '/candy-bar (2).PNG', alt: 'Candy Bar & Cup Cake — détails' },
      { src: '/candy-bar (1).PNG', alt: 'Candy Bar & Cup Cake — détails' },
    ],
  },
  {
    slug: 'maison-du-ti-punch',
    menuTitle: 'La Maison du Ti’Punch',
    eyebrow: 'Animations Mariage',
    title: 'La Maison du Ti’Punch',
    subtitle: 'Bar à Rhum by Le Oui Parfait — une animation festive et dépaysante.',
    heroImage: '/bar-rhum (1).png',
    price: 'À partir de 649€ HT',
    paymentHint: 'Paiement en 3 ou 4 fois sans frais',
    highlights: ['Bar à thème', 'Sélection de rhums & créations maison', 'Ambiance exotique'],
    body: [
      'Présenté comme un véritable espace d’animation, La Maison du Ti’Punch invite vos convives à découvrir une sélection de créations autour du rhum, dans une ambiance conviviale, colorée et raffinée.',
      'Entre ti’punch, planteurs, punchs maison et cocktails aux inspirations tropicales, chaque dégustation devient une parenthèse sensorielle, joyeuse et pleine de caractère.',
    ],
    includesTitle: 'L’offre peut inclure selon la formule',
    includes: [
      'Mise en place de La Maison du Ti’Punch avec son espace bar à thème',
      'Décoration d’inspiration exotique et chaleureuse',
      'Sélection de rhums et créations maison',
      'Dégustation de ti’punch, planteurs, punchs et cocktails à base de rhum',
      'Garnitures et accompagnements (morceaux de citron découpés)',
      'Présence d’un animateur pendant la prestation',
      'Installation, mise en place, service et retrait inclus',
    ],
    notesTitle: 'Option',
    notes: [
      'Coin tradition des îles : ensemble de petite table d’ambiance avec jeu de dominos et/ou jeu de cartes, pour offrir à vos invités un moment de partage inspiré des traditions créoles.',
    ],
    images: [
      { src: '/bar-rhum (1).jpg', alt: 'La Maison du Ti’Punch — bar à rhum' },
      { src: '/bar-rhum (2).jpg', alt: 'La Maison du Ti’Punch — dégustation' },
      { src: '/bar-rhum (1).png', alt: 'La Maison du Ti’Punch — ambiance' },
    ],
  },
];

export default async function AnimationDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const data = animations.find((a) => a.slug === slug);
  if (!data) return notFound();

  const notesIllustration = (() => {
    switch (data.slug) {
      case 'coin-chicha':
        return { src: '/coin-chicha-interieur.jpg', alt: 'Coin Chicha — intérieur' };
      case 'stand-oui-pancake':
        return { src: '/stand-oui-pancake 2.jpg', alt: 'Stand Oui Pancake' };
      case 'photobooth-360':
        return { src: '/photoboot%20360.png.jpg', alt: 'Photobooth 360' };
      case 'miroir-photobooth':
        return { src: '/mirroir-photoboot.png', alt: 'Miroir Photobooth' };
      case 'photobooth-classique':
        return { src: '/photoboot-classique.jpg', alt: 'Photobooth Classique' };
      case 'candy-bar-cup-cake':
        return { src: '/candy-bar.jpg', alt: 'Candy Bar & Cup Cake' };
      case 'maison-du-ti-punch':
        return { src: '/lamaisondu-tipuch.jpg', alt: 'La Maison du Ti’Punch' };
      default:
        return { src: data.heroImage, alt: data.title };
    }
  })();

  const includesSections = [
    {
      title: 'Ce qui est inclus',
      subtitle: 'Tout est prévu pour une installation fluide et une expérience élégante.',
      items: data.includes,
    },
    ...(data.notes?.length
      ? [
          {
            title: data.notesTitle || 'Informations importantes',
            subtitle: 'À connaître avant le jour J.',
            items: data.notes,
          },
        ]
      : []),
  ];

  const specs = (() => {
    switch (data.slug) {
      case 'coin-chicha':
        return [
          { icon: Wine, title: 'Ambiance orientale' },
          { icon: Users, title: 'Espace Convivial' },
          { icon: Sparkles, title: 'Scénographie Chic' },
          { icon: Heart, title: 'Moment de Détente' },
        ];
      case 'stand-oui-pancake':
        return [
          { icon: Store, title: 'Stand Gourmand' },
          { icon: Users, title: 'Service Fluide' },
          { icon: Sparkles, title: 'Personnalisation' },
          { icon: Heart, title: 'Moment Partagé' },
        ];
      case 'photobooth-360':
        return [
          { icon: Camera, title: 'Captation 360°' },
          { icon: Sparkles, title: 'Effets & Rendu' },
          { icon: Users, title: 'Animation Interactive' },
          { icon: Heart, title: 'Souvenirs Modernes' },
        ];
      case 'miroir-photobooth':
        return [
          { icon: Camera, title: 'Expérience Premium' },
          { icon: Sparkles, title: 'Personnalisation' },
          { icon: Users, title: 'Interaction Invités' },
          { icon: Heart, title: 'Souvenirs Instantanés' },
        ];
      case 'photobooth-classique':
        return [
          { icon: Camera, title: 'Photos & GIF' },
          { icon: Users, title: 'Accessible à Tous' },
          { icon: Sparkles, title: 'Personnalisation' },
          { icon: Heart, title: 'Souvenirs Imprimés' },
        ];
      case 'candy-bar-cup-cake':
        return [
          { icon: Store, title: 'Stand Sucré' },
          { icon: Sparkles, title: 'Mise en Scène' },
          { icon: Users, title: 'Service & Présence' },
          { icon: Heart, title: 'Pause Gourmande' },
        ];
      case 'maison-du-ti-punch':
        return [
          { icon: Wine, title: 'Bar à Thème' },
          { icon: Sparkles, title: 'Décoration Exotique' },
          { icon: Users, title: 'Animation Festive' },
          { icon: Heart, title: 'Dégustation Conviviale' },
        ];
      default:
        return [
          { icon: Sparkles, title: 'Scénographie' },
          { icon: Users, title: 'Animation Invités' },
          { icon: Heart, title: 'Moments Forts' },
          { icon: Camera, title: 'Souvenirs' },
        ];
    }
  })();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={data.heroImage} alt={data.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-16 pt-40">
            <div className="flex items-center gap-2 text-white/50 text-[11px] uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <span>/</span>
              <Link href="/animation" className="hover:text-white transition">Animation</Link>
              <span>/</span>
              <span className="text-white">{data.menuTitle}</span>
            </div>
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4">{data.eyebrow}</p>
              <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">{data.title}</h1>
              <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">{data.subtitle}</p>
              <div>
                <span className="text-white/50 text-sm">à partir de</span>
                <div className="font-baskerville text-5xl text-white">{data.price}</div>
                {data.paymentHint ? <span className="text-white/60 text-sm">{data.paymentHint}</span> : null}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2.603fr_2.5fr] gap-12 lg:gap-6 items-stretch">
              <div className="lg:col-span-1 flex flex-col">
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-4">
                  {data.slug === 'photobooth-360' ? (
                    <PhotoboothIntroMedia
                      videoSrc="/photoboot-mariage.mp4"
                      images={data.images}
                      className="h-full"
                    />
                  ) : (
                    <AnimationImageCarousel images={data.images} className="h-full" />
                  )}
                </div>
                <div className="bg-white p-5">
                  <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Caractéristiques clés :</p>
                  <div className="grid grid-cols-2 gap-3">
                    {data.highlights.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-[16px] text-[#5A5A5A]">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">{data.eyebrow}</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  Une Animation Pensée<br />Pour Vos Invités
                </h2>
                {data.body.slice(0, 2).map((p, i) => (
                  <p key={i} className={`text-[17px] text-[#5A5A5A] leading-relaxed ${i === 0 ? 'mb-4' : 'mb-8'}`}>
                    {p}
                  </p>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-8 py-6 font-medium transition-all shadow-lg hover:shadow-xl">
                      Réserver
                    </Button>
                  </Link>
                  <Link href="/animation" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm border-2 border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white rounded-full px-8 py-6 font-medium transition-all"
                    >
                      Retour aux animations
                    </Button>
                  </Link>
                </div>

                <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Spécifications de l'Animation</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {specs.map((s, i) => (
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

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">CE QUI EST INCLUS</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4A4A4A]">
                Une Animation Orchestrée<br />Avec Rigueur et Élégance
              </h2>
            </div>
            <AccordionInclus sections={includesSections} />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
