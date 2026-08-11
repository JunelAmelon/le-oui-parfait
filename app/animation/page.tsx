import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

const url = 'https://leouiparfait.com/animation';

export const metadata: Metadata = {
  title: 'Animations | Le Oui Parfait',
  description:
    'Animations pour mariage : photobooth, bar à thème, stands gourmands et expériences sur mesure en Île-de-France.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Animations | Le Oui Parfait',
    description:
      'Animations pour mariage : photobooth, bar à thème, stands gourmands et expériences sur mesure en Île-de-France.',
    url,
    type: 'website',
  },
};

const animations = [
  {
    slug: 'coin-chicha',
    title: 'Coin Chicha',
    price: 'À partir de 649€ HT',
    description:
      'Un espace lounge élégant et convivial, pensé comme une parenthèse de détente au cœur de votre réception.',
    duration: 'Formats disponibles : 2h à 4h',
    image: '/coin-chicha.jpg',
  },
  {
    slug: 'stand-oui-pancake',
    title: 'Stand Oui Pancake',
    price: 'À partir de 399€ HT',
    description:
      'Une animation gourmande sous forme de stand, avec pancakes à personnaliser et toppings pour séduire petits et grands.',
    duration: 'Durée : 2h (jusqu’à 100 personnes)',
    image: '/stand-oui-pancake.jpg',
  },
  {
    slug: 'photobooth-360',
    title: 'Photobooth 360',
    price: 'À partir de 549€ HT',
    description:
      'Une animation immersive qui capture vos instants sous tous les angles avec des vidéos dynamiques (slow motion, rendu fluide).',
    duration: 'Formats disponibles : 2h à 4h',
    image: '/photoboot%20360.png.jpg',
  },
  {
    slug: 'miroir-photobooth',
    title: 'Miroir Photobooth',
    price: 'À partir de 550€ HT',
    description:
      'Une expérience premium et interactive, avec impressions photo, GIF/Boomerang et personnalisation de l’univers visuel.',
    duration: 'Formats disponibles : 2h à 4h',
    image: '/mirroir-photoboot.png',
  },
  {
    slug: 'photobooth-classique',
    title: 'Photobooth Classique',
    price: 'À partir de 350€ HT',
    description:
      'L’incontournable de la réception : photos, GIF/Boomerang, impression instantanée et partage rapide via QR Code.',
    duration: 'Formats disponibles : 2h à 4h',
    image: '/photoboot-classique.jpg',
  },
  {
    slug: 'candy-bar-cup-cake',
    title: 'Candy Bar & Cup Cake',
    price: 'À partir de 690€ HT',
    description:
      'Une parenthèse sucrée raffinée sur charrette, avec douceurs maison et mise en scène en harmonie avec votre réception.',
    duration: 'Durée : 2h30 (env. 110 invités)',
    image: '/candy-bar.jpg',
  },
  {
    slug: 'maison-du-ti-punch',
    title: 'La Maison du Ti’Punch',
    price: 'À partir de 649€ HT',
    description:
      'Un bar à rhum chaleureux et dépaysant : ti’punch, planteurs, punchs maison et ambiance exotique.',
    duration: 'Formats disponibles : 2h à 4h',
    image: '/lamaisondu-tipuch.jpg',
  },
];

export default function AnimationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Animations"
          subtitle="Des expériences pensées pour enrichir l’expérience de vos invités et créer des souvenirs mémorables"
          backgroundImage="feu-artifice-lanternes-mariage.jpg"
        />

        <section className="py-16 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Animations Mariage</p>
                <h2 className="font-baskerville text-3xl lg:text-5xl text-[#4B4456] leading-tight">
                  Des Animations Qui Font la Différence
                </h2>
                <p className="text-[#5A5A5A] mt-5 max-w-2xl leading-relaxed text-[17px]">
                  Chez Le Oui Parfait, chaque animation est pensée pour enrichir l’expérience de vos invités et apporter à votre réception cette touche de convivialité,
                  d’élégance et d’originalité qui fait toute la différence.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#e8e0dc] shadow-[0_18px_45px_rgba(25,20,33,0.08)] p-7">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Formats</p>
                  <p className="font-baskerville text-2xl text-[#4B4456] mb-4">2h minimum, jusqu’à 4h</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#f4f1f7] border border-[#e8e0dc] p-4">
                      <p className="text-[#4B4456] text-sm font-medium">Installation</p>
                      <p className="text-[#5A5A5A] text-sm mt-1">Adaptée à votre lieu</p>
                    </div>
                    <div className="bg-[#f4f1f7] border border-[#e8e0dc] p-4">
                      <p className="text-[#4B4456] text-sm font-medium">Scénographie</p>
                      <p className="text-[#5A5A5A] text-sm mt-1">Cohérente & élégante</p>
                    </div>
                    <div className="bg-[#f4f1f7] border border-[#e8e0dc] p-4">
                      <p className="text-[#4B4456] text-sm font-medium">Rythme</p>
                      <p className="text-[#5A5A5A] text-sm mt-1">Fluidité de service</p>
                    </div>
                    <div className="bg-[#f4f1f7] border border-[#e8e0dc] p-4">
                      <p className="text-[#4B4456] text-sm font-medium">Invités</p>
                      <p className="text-[#5A5A5A] text-sm mt-1">Moment partagé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Oui Oui Kids — carte hero avec vidéo */}
            <Link
              href="/animation/oui-oui-kids"
              className="group relative block w-full mb-10 overflow-hidden shadow-[0_18px_55px_rgba(25,20,33,0.18)]"
            >
              <div className="relative h-[460px] sm:h-[500px] lg:h-[540px] w-full">
                <video
                  src="/animation%20enfant%20pr%C3%A9sentation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

                {/* Badge — Du cocktail jusqu'au soir */}
                <div className="absolute left-4 top-4 sm:left-5 sm:top-5 z-10 max-w-[calc(100%-2rem)]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.24em] whitespace-nowrap">
                    Du cocktail jusqu'au soir
                    <span className="text-sm sm:text-base leading-none">🛌</span>
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-12">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#88b7b5] mb-2 sm:mb-3">
                    Animation &amp; ateliers créatifs pour enfants
                  </p>
                  <h3 className="font-baskerville text-2xl sm:text-3xl lg:text-5xl text-white leading-tight mb-3 sm:mb-4 max-w-2xl">
                    Oui Oui Kids
                  </h3>
                  <p className="text-white/80 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mb-4 sm:mb-5">
                    Pendant que les grands célèbrent, les petits vivent eux aussi leur propre expérience. Créativité, jeux, défis et moments de partage : Oui Oui Kids imagine un espace ludique et encadré pour divertir les enfants pendant votre événement.
                  </p>
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <span className="w-1 h-8 bg-[#88b7b5] flex-shrink-0" />
                    <span className="text-white/90 text-[12px] sm:text-[14px] leading-snug">
                      <strong className="text-white">Jusqu'à 25 enfants</strong>
                      <span className="text-white/40 mx-1.5">•</span>
                      <strong className="text-white">2 animatrices incluses</strong>
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <span className="text-white/70 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em]">
                      Le Oui Parfait × Maison des 4A
                    </span>
                    <span className="inline-flex items-center justify-center gap-2 text-white text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium rounded-full border-2 border-[#88b7b5] px-5 py-2.5 sm:px-6 sm:py-3 backdrop-blur-sm bg-white/5 group-hover:bg-[#88b7b5] group-hover:text-white transition-all duration-300 self-start sm:self-auto">
                      Voir les détails
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {animations.map((a) => (
                <Link
                  key={a.slug}
                  href={`/animation/${a.slug}`}
                  className="group block bg-white border border-[#e8e0dc] shadow-[0_18px_45px_rgba(25,20,33,0.10)] hover:shadow-[0_18px_55px_rgba(25,20,33,0.14)] transition-all overflow-hidden"
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <Image src={a.image} alt={a.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="inline-flex items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.24em]">
                        {a.duration}
                      </span>
                    </div>

                    <div className="absolute left-5 bottom-5 right-5">
                      <p className="text-white/70 text-[10px] uppercase tracking-[0.28em]">{a.price}</p>
                      <h3 className="font-baskerville text-white text-2xl mt-2 leading-tight">{a.title}</h3>
                    </div>
                  </div>

                  <div className="p-9">
                    <p className="text-[#5A5A5A] text-[15px] leading-relaxed mb-7">{a.description}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#4B4456]">Voir le détail</span>
                      <Button
                        variant="outline"
                        className="uppercase tracking-[0.15em] text-[11px] border-2 border-[#88b7b5] text-[#5A5A5A] group-hover:bg-[#88b7b5] group-hover:text-white rounded-full px-6 py-6 font-medium transition-all"
                      >
                        Détail
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}

              <Link
                href="/contact"
                className="group block lg:col-span-2 bg-[#4B4456] shadow-[0_18px_55px_rgba(25,20,33,0.18)] overflow-hidden"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0">
                    <Image
                      src="/animation-background.jpg"
                      alt="Réserver une animation"
                      fill
                      className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-black/35" />
                  </div>

                  <div className="relative z-10 p-10 lg:p-12 flex flex-col h-full justify-between min-h-[360px]">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Sur-mesure</p>
                      <h3 className="font-baskerville text-3xl lg:text-4xl text-white mt-3 leading-tight">
                        Vous ne trouvez pas
                        <br />
                        l’animation idéale ?
                      </h3>
                      <p className="text-white/80 text-[16px] leading-relaxed mt-5 max-w-2xl">
                        Dites-nous l’ambiance que vous souhaitez créer (lounge, gourmandise, souvenirs, bar à thème…).
                        Nous vous proposons une formule adaptée, élégante et parfaitement intégrée à votre réception.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 min-w-0">
                      <div className="text-white/70 text-[11px] uppercase tracking-[0.22em] break-words whitespace-normal [hyphens:auto]">
                        Réponse rapide — devis personnalisé
                      </div>
                      <Button className="w-full sm:w-auto uppercase tracking-[0.15em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-10 py-7 font-medium transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
                        Nous contacter
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
