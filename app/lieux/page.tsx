import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LieuxSlideshow } from '@/components/LieuxSlideshow';
import { HeroPage } from '@/components/HeroPage';
import { MapPin, Ruler, Sparkles } from 'lucide-react';

type Lieu = {
  id: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
  ctaHref: string;
  ctaLabel: string;
  images: { src: string; alt: string }[];
  layout: 'image-left' | 'image-right';
};

const lieux: Lieu[] = [
  {
    id: 'domaine-les-oliviers',
    name: 'Domaine Les Oliviers',
    description:
      'Salle de réception avec hébergement et traiteur en Essonne (91), ce domaine situé dans une ancienne ferme réaménagée offre un cadre chaleureux, authentique et élégant.\n\nSa salle de 279 m² peut accueillir jusqu’à 250 personnes assises, avec une grande piste de danse, un vaste jardin, une terrasse et un espace extérieur partiellement couvert.\n\nUn lieu idéal pour célébrer vos événements dans un environnement de campagne, avec une organisation adaptable selon vos besoins, y compris pour le stationnement.',
    specs: [
      { label: '279 m²', value: 'Salle de réception' },
      { label: '250 invités', value: 'Capacité assise' },
      { label: 'Essonne (91)', value: 'Ferme réaménagée' },
    ],
    ctaHref: '/contact',
    ctaLabel: 'RÉSERVER CE LIEU',
    images: [
      { src: '/domaine-olivier/domaine-les-oliviers (1).jpeg', alt: 'Domaine Les Oliviers — extérieur' },
      { src: '/domaine-olivier/domaine-les-oliviers (2).jpeg', alt: 'Domaine Les Oliviers — réception' },
      { src: '/domaine-olivier/domaine-les-oliviers (3).png', alt: 'Domaine Les Oliviers — réception' },
    ],
    layout: 'image-left',
  },
  {
    id: 'azure-beach-resort',
    name: 'Azure Beach Resort',
    description:
      'Vivez un véritable paradis avec ses plages de sable blanc et ses eaux cristallines, pour une expérience de mariage côtier à la fois décontractée et raffinée.',
    specs: [
      { label: '800 m²', value: 'Bali, Indonésie' },
      { label: '150 invités', value: 'Complexe hôtelier' },
      { label: 'Bord de mer', value: 'Cadre tropical' },
    ],
    ctaHref: '/contact',
    ctaLabel: 'RÉSERVER CE LIEU',
    images: [
      {
        src: 'https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/elementor/thumbs/IMG-5M4QEF8-rfdcnrqnbp34yyqh34gtg048xom8jc0r77ttse79b4.jpg',
        alt: 'Azure Beach Resort — piscine',
      },
      {
        src: 'azur/azur (1).png',
        alt: 'Azure Beach Resort — plage',
      },
      {
        src: 'azur/azur (2).png',
        alt: 'Azure Beach Resort — cérémonie',
      },
    ],
    layout: 'image-right',
  },
  {
    id: 'ferme-du-couvent',
    name: 'La Ferme du Couvent',
    description:
      'La Ferme du Couvent vous accueille dans un cadre champêtre avec vue sur la vallée de l’Ancoeur, idéal pour un mariage jusqu’à 200 convives.\n\nLe domaine offre un bel espace pour la réception, le cocktail et la cérémonie laïque, avec un environnement chaleureux et adapté à tous vos invités.\n\nUn hébergement sur place avec chambres permet également d’accueillir jusqu’à 30 personnes pour prolonger ce moment en toute sérénité.',
    specs: [
      { label: 'Jusqu’à 200', value: 'Convives' },
      { label: 'Jusqu’à 30', value: 'Couchages sur place' },
      { label: 'Cadre champêtre', value: 'Vallée de l’Ancoeur' },
    ],
    ctaHref: '/contact',
    ctaLabel: 'RÉSERVER CE LIEU',
    images: [
      { src: '/ferme-du-couvent/ferme du couvent (1).png', alt: 'La Ferme du Couvent — extérieur' },
      { src: '/ferme-du-couvent/ferme du couvent (2).png', alt: 'La Ferme du Couvent — réception' },
      { src: '/ferme-du-couvent/ferme du couvent (3).png', alt: 'La Ferme du Couvent — détail' },
      { src: '/ferme-du-couvent/ferme du couvent (4).png', alt: 'La Ferme du Couvent — panorama' },
      { src: '/ferme-du-couvent/ferme du couvent (5).png', alt: 'La Ferme du Couvent — panorama' },
      { src: '/ferme-du-couvent/ferme du couvent (6).png', alt: 'La Ferme du Couvent — panorama' },
      { src: '/ferme-du-couvent/ferme du couvent (7).png', alt: 'La Ferme du Couvent — panorama' },
      { src: '/ferme-du-couvent/ferme du couvent (8).png', alt: 'La Ferme du Couvent — panorama' },
      { src: '/ferme-du-couvent/ferme du couvent (1).jpeg', alt: 'La Ferme du Couvent — panorama' },
      { src: '/ferme-du-couvent/ferme du couvent (3).jpg', alt: 'La Ferme du Couvent — panorama' },


    ],
    layout: 'image-left',
  },
];

function LieuRow(props: { lieu: Lieu }) {
  const { lieu } = props;

  const imageBlock = (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden bg-white">
      <LieuxSlideshow images={lieu.images} className="absolute inset-0" />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h3 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] mb-4">{lieu.name}</h3>
      <p className="text-[#5A5A5A] leading-relaxed whitespace-pre-line mb-8">{lieu.description}</p>

      <p className="font-baskerville text-xl text-[#4B4456] mb-4">Spécification:</p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {lieu.specs.map((s, i) => {
            const Icon = i === 0 ? Ruler : i === 1 ? MapPin : Sparkles;
            return (
              <div key={i} className="flex items-center gap-3 text-[#5A5A5A]">
                <span className="w-9 h-9 rounded-full bg-white border border-[#e8e0dc] flex items-center justify-center text-[#88b7b5]">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[14px] text-[#4B4456]">{s.label}</div>
                  <div className="text-[13px] text-[#5A5A5A]">{s.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        <Link href={lieu.ctaHref} className="w-fit md:ml-auto">
          <span className="inline-flex items-center justify-center uppercase whitespace-nowrap tracking-[0.22em] text-[10px] border border-[#88b7b5] text-[#4B4456] hover:bg-[#88b7b5] hover:text-white px-7 py-2.5 rounded-full transition-all">
            {lieu.ctaLabel}
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {lieu.layout === 'image-left' ? (
        <>
          <div className="lg:col-span-6">{imageBlock}</div>
          <div className="lg:col-span-6">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="lg:col-span-6 order-2 lg:order-1">{textBlock}</div>
          <div className="lg:col-span-6 order-1 lg:order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
}

export default function LieuxPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Lieux"
          subtitle="Découvrez des lieux à couper le souffle pour les mariages"
          backgroundImage="/location-de-salle-de-mariage.jpg.jpeg"
        />

        <section className="pt-8 pb-10 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">NOS LIEUX EXCLUSIFS</p>
                <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-[#4B4456] leading-tight">
                  Découvrez Des Lieux À
                  <br />
                  Couper Le Souffle Pour
                  <br />
                  Les Mariages
                </h1>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[#5A5A5A] leading-relaxed text-[16px] max-w-xl lg:ml-auto">
                  Nous travaillons main dans la main avec un réseau de plus de 30 partenaires (traiteurs, salles et prestataires)
                  pour vous proposer une sélection de lieux variés, adaptés à votre style, à votre nombre d&apos;invités et à l&apos;ambiance
                  que vous imaginez. Découvrez notre large gamme de domaines, hôtels et espaces de réception pour trouver le cadre
                  parfait.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-7xl space-y-14">
            {lieux.map((lieu) => (
              <div key={lieu.id} className="bg-[#f4f1f7]">
                <LieuRow lieu={lieu} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#f4f1f7] overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 order-1 lg:order-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">PARCOURIR PAR STYLE</p>
                <h2 className="font-baskerville text-4xl lg:text-5xl text-[#4B4456] leading-tight mb-6">
                  Découvrez Nos
                  <br />
                  Collections De Lieux De
                  <br />
                  Réception Pour
                  <br />
                  Mariages
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-10">
                  Explorez notre portefeuille diversifié de lieux exceptionnels conçus pour correspondre à chaque thème unique,
                  à chaque nombre d&apos;invités et à chaque vision romantique que vous pouvez avoir.
                </p>

                <div className="relative overflow-hidden">
                  <div className="flex scrolling-banner">
                    <div className="flex gap-3 flex-shrink-0">
                      {[
                        '/domaine-olivier/domaine-les-oliviers (1).jpeg',
                        '/ferme-du-couvent/ferme du couvent (2).png',
                        '/mariage-réalisés (2).jpg',
                      ].map((src, idx) => (
                        <div key={idx} className="w-56 h-40 overflow-hidden bg-white">
                          <img
                            src={encodeURI(src)}
                            alt={`Collection lieux ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 flex-shrink-0" aria-hidden="true">
                      {[
                        '/domaine-olivier/domaine-les-oliviers (1).jpeg',
                        '/ferme-du-couvent/ferme du couvent (2).png',
                        '/mariage-réalisés (2).jpg',
                      ].map((src, idx) => (
                        <div key={`dup-${idx}`} className="w-56 h-40 overflow-hidden bg-white">
                          <img
                            src={encodeURI(src)}
                            alt={`Collection lieux ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { n: '17+', title: 'Nombre total de sites', desc: 'Domaines De Jardins' },
                  { n: '23+', title: 'Nombre total de sites', desc: 'Hôtels De Luxe' },
                  { n: '21+', title: 'Nombre total de sites', desc: 'Salles de mariages' },
                  { n: '12+', title: 'Nombre total de sites', desc: 'Châteaux Historiques' },
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 border border-[#e8e0dc]">
                    <p className="text-[#88b7b5] text-4xl font-baskerville mb-2">{card.n}</p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">{card.title}</p>
                    <p className="font-baskerville text-2xl text-[#4B4456] mb-2">{card.desc}</p>
                    <p className="text-[#5A5A5A] text-sm leading-relaxed">
                      Explorez des lieux sélectionnés pour correspondre à chaque ambiance et à chaque vision de réception.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
