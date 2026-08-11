import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Sparkles, Palette, Trophy, Mic, GamepadIcon } from 'lucide-react';
import type { Metadata } from 'next';

const url = 'https://leouiparfait.com/animation/oui-oui-kids';

export const metadata: Metadata = {
  title: 'Oui Oui Kids | Animation enfants mariage | Le Oui Parfait',
  description:
    'Oui Oui Kids : animation et ateliers créatifs pour enfants lors de votre mariage. Une expérience Le Oui Parfait × Maison des 4A. Jusqu’à 25 enfants, 2 animatrices incluses.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Oui Oui Kids | Animation enfants mariage | Le Oui Parfait',
    description:
      'Oui Oui Kids : animation et ateliers créatifs pour enfants lors de votre mariage. Une expérience Le Oui Parfait × Maison des 4A.',
    url,
    type: 'website',
  },
};

const ateliers = [
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Imagine, crée & customise',
    text: 'Tote bags, tee-shirts, petits objets, dessin, peinture ou créations manuelles… Chaque enfant laisse parler son imagination et repart avec sa propre création.',
  },
  {
    icon: Sparkles,
    emoji: '🎒',
    title: 'Customise ta création',
    text: "Un atelier manuel autour d'un objet personnalisé que les enfants décorent eux-mêmes. Couleurs, matières, accessoires : chacun crée quelque chose qui lui ressemble.",
  },
  {
    icon: Trophy,
    emoji: '💡',
    title: 'Crée ta marque !',
    text: "Et si vos petits invités devenaient entrepreneurs le temps d'un atelier ? Ils imaginent un nom, un logo, un produit et apprennent ensuite à présenter leur idée aux autres.",
  },
  {
    icon: Mic,
    emoji: '🎤',
    title: 'À toi l’interview !',
    text: 'Journaliste ou personnalité ? Les enfants préparent leurs questions, s’interviewent, changent de rôle et apprennent à s’exprimer tout en s’amusant.',
  },
  {
    icon: GamepadIcon,
    emoji: '🎭',
    title: 'Jeux de rôle & défis en équipe',
    text: 'Des petits challenges pensés pour les faire réfléchir, communiquer, coopérer… et surtout rire ensemble.',
  },
];

const formuleComprend = [
  "Jusqu’à 25 enfants",
  '2 animatrices incluses',
  'Mise en place et animation des activités',
  'Ateliers créatifs et activités manuelles',
  'Jeux collectifs',
  'Jeux de rôle et défis en équipe',
  "Activités favorisant la créativité et l’expression",
  'Programme adapté à l’âge et à la composition du groupe',
  'Matériel nécessaire aux ateliers sélectionnés',
  'Encadrement pendant la durée de la prestation',
];

const pointsForts = [
  { emoji: '👧🧒', label: "Jusqu’à 25 enfants" },
  { emoji: '👩‍🎨👩‍🎨', label: '2 animatrices incluses' },
  { emoji: '🎨', label: 'Ateliers & matériel' },
  { emoji: '🎭', label: 'Jeux & défis' },
  { emoji: '✨', label: 'Programme personnalisé' },
  { emoji: '💍', label: 'Spécial mariages & événements' },
];

const criteres = [
  'du nombre d’enfants',
  'de leur âge',
  'du lieu',
  'de la durée souhaitée',
  'de l’ambiance du mariage',
  'des activités sélectionnées',
];

export default function OuiOuiKidsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* ===== Hero section ===== */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero%20section%20animation%20enfant%20le%20oui%20parfait.png"
              alt="Oui Oui Kids — animation enfants Le Oui Parfait"
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
              <Link href="/animation" className="hover:text-white transition">Animation</Link>
              <span>/</span>
              <span className="text-white">Oui Oui Kids</span>
            </div>
            <div className="max-w-5xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4">Animation Enfants</p>
              <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                OUI OUI KIDS
              </h1>
              <p className="text-white/80 text-lg lg:text-xl max-w-2xl leading-relaxed mb-8">
                Les petits invités aussi ont droit à leur moment parfait.
              </p>
              <p className="text-white/70 text-base max-w-2xl leading-relaxed mb-6">
                Une animation Le Oui Parfait, en collaboration avec Maison des 4A
              </p>
              <div>
                <span className="text-white/50 text-sm">à partir de</span>
                <div className="font-baskerville text-4xl lg:text-5xl text-white">890€ HT</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Vidéo + Introduction (layout comme les autres pages détail) ===== */}
        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2.603fr_2.5fr] gap-12 lg:gap-6 items-stretch">
              {/* Vidéo à gauche */}
              <div className="lg:col-span-1 flex flex-col">
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-4">
                  <video
                    src="/animation%20enfant%20video%20detail.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Logos côte à côte sous la vidéo */}
                <div className="flex items-center justify-center gap-6 bg-white border border-[#e8e0dc] p-5">
                  <div className="relative h-20 w-32 flex-shrink-0">
                    <Image
                      src="/logo%20methode%20montessori.png"
                      alt="Logo Méthode Montessori"
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                  <div className="h-12 w-px bg-[#e8e0dc]" />
                  <div className="relative h-20 w-32 flex-shrink-0">
                    <Image
                      src="/maison%20des%204A.png"
                      alt="Logo Maison des 4A"
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>

              {/* Texte à droite */}
              <div className="lg:col-span-1 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Oui Oui Kids</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  L’animation pensée spécialement<br />pour vos petits invités
                </h2>
                <div className="space-y-4 text-[17px] text-[#5A5A5A] leading-relaxed">
                  <p>
                    Parce qu’un mariage réussi se vit aussi à hauteur d’enfant, Le Oui Parfait s’associe à Maison des 4A pour créer Oui Oui Kids, une expérience spécialement imaginée pour les enfants présents lors de votre événement.
                  </p>
                  <p>
                    L’objectif : leur offrir bien plus qu’un simple espace pour « les occuper ».
                  </p>
                  <p>
                    Avec Oui Oui Kids, les enfants créent, jouent, imaginent, échangent et participent à des activités adaptées à leur âge et à la dynamique du groupe.
                  </p>
                  <p>
                    La philosophie de Maison des 4A repose justement sur quatre fondamentaux : Apprendre, S’amuser, Partager et Accompagner.
                  </p>
                  <p className="font-baskerville text-2xl text-[#4B4456] pt-2">
                    Pendant que vous profitez… eux aussi vivent leur événement.
                  </p>
                  <p>
                    Oui Oui Kids permet aux mariés et à leurs invités de profiter plus sereinement de la réception, pendant que les enfants bénéficient d'un espace qui leur est entièrement consacré.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
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
              </div>
            </div>
          </div>
        </section>

        {/* ===== La formule comprend ===== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">La formule comprend</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456]">
                Tout est prévu pour les enfants
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formuleComprend.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#f4f1f7] border border-[#e8e0dc] p-5">
                  <Check className="w-5 h-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-[#5A5A5A] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mt-8 max-w-3xl mx-auto text-center">
              Les ateliers Maison des 4A sont justement conçus pour s’adapter à l’âge des enfants, à la composition du groupe et à l’objectif recherché, avec une approche favorisant coopération, autonomie, expression et confiance en soi.
            </p>
          </div>
        </section>

        {/* ===== Ateliers ===== */}
        <section className="py-16 lg:py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">Ateliers créatifs</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] mb-4">
                Des ateliers qui changent<br />de l’animation classique
              </h2>
              <p className="text-[#5A5A5A] text-[17px] max-w-2xl mx-auto leading-relaxed">
                Selon l’événement, l’âge des enfants et le temps disponible, Oui Oui Kids peut proposer différents univers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ateliers.map((atelier, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e8e0dc] shadow-[0_18px_45px_rgba(25,20,33,0.08)] p-7 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{atelier.emoji}</span>
                    <atelier.icon className="w-6 h-6 text-[#88b7b5] flex-shrink-0" />
                  </div>
                  <h3 className="font-baskerville text-xl text-[#4B4456] mb-3 leading-snug">
                    {atelier.title}
                  </h3>
                  <p className="text-[15px] text-[#5A5A5A] leading-relaxed">{atelier.text}</p>
                </div>
              ))}

              <div className="bg-[#4B4456] p-7 flex flex-col justify-center">
                <p className="text-white/70 text-[11px] uppercase tracking-[0.22em] mb-3">À noter</p>
                <p className="text-white/90 text-[15px] leading-relaxed">
                  Ces formats figurent parmi les exemples d’ateliers développés par Maison des 4A.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Adaptation au mariage ===== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">Personnalisation</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456]">
                Une animation qui s’adapte<br />à votre mariage
              </h2>
            </div>
            <p className="text-[17px] text-[#5A5A5A] leading-relaxed text-center mb-8">
              Pas de programme complètement figé.
            </p>
            <p className="text-[17px] text-[#5A5A5A] leading-relaxed text-center mb-8">
              Avant l’événement, nous définissons les animations les plus adaptées en fonction :
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {criteres.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-[#f4f1f7] border border-[#e8e0dc] px-5 py-2.5 text-[14px] text-[#4B4456]"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="text-[17px] text-[#5A5A5A] leading-relaxed text-center max-w-3xl mx-auto">
              Ainsi, Oui Oui Kids peut prendre la forme d’un atelier créatif, d’un programme de plusieurs animations ou d’un véritable petit univers enfants au cœur de votre réception.
            </p>
          </div>
        </section>

        {/* ===== Points forts ===== */}
        <section className="py-16 lg:py-20 bg-[#4B4456]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">Jusqu’à 25 petits invités</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-white">
                Une formule complète<br />et encadrée
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {pointsForts.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center text-center gap-3"
                >
                  <span className="text-3xl">{p.emoji}</span>
                  <span className="text-white/90 text-[15px] leading-snug">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Partenaire — Maison des 4A (photo gérante) ===== */}
        <section className="py-16 lg:py-20 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-3">Notre partenaire</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456]">
                Maison des 4A
              </h2>
              <p className="text-[#5A5A5A] text-[17px] mt-4 max-w-2xl mx-auto leading-relaxed">
                Apprendre • S’amuser • Partager • Accompagner
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] overflow-hidden bg-white border border-[#e8e0dc] shadow-[0_18px_45px_rgba(25,20,33,0.10)]">
              <Image
                src="/g%C3%A9rante%20partenaire.jpeg"
                alt="La gérante de Maison des 4A — partenaire de Le Oui Parfait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="text-center text-[13px] text-[#5A5A5A]/70 mt-4 italic">
              Anissa et Sarah de Maison des 4A, notre partenaire pour Oui Oui Kids.
            </p>
          </div>
        </section>

        {/* ===== Citation finale + CTA ===== */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-4">Oui Oui Kids</p>
            <h2 className="font-baskerville text-3xl lg:text-5xl text-[#4B4456] leading-tight mb-6">
              Créer. Jouer. Partager. S’amuser.
            </h2>
            <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
              Une expérience Le Oui Parfait × Maison des 4A
            </p>
            <p className="font-baskerville text-2xl text-[#4B4456] leading-relaxed mb-10">
              Parce que pendant votre grand jour…<br />les petits aussi méritent leur moment parfait.
            </p>
            <Link href="/contact">
              <Button className="uppercase tracking-[0.15em] text-xs sm:text-sm bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-10 py-7 font-medium transition-all shadow-lg hover:shadow-xl">
                Demander un devis
              </Button>
            </Link>
          </div>
        </section>

        {/* ===== Retour aux animations ===== */}
        <section className="py-12 bg-[#f4f1f7] border-t border-[#e8e0dc]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Link href="/animation">
              <Button
                variant="outline"
                className="uppercase tracking-[0.15em] text-xs sm:text-sm border-2 border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white rounded-full px-8 py-6 font-medium transition-all"
              >
                Retour aux animations
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
