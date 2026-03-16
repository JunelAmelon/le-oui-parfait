import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceHero';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const inclus = [
  'conception et organisation complète de la demande',
  'version classique ou scénarisée',
  'recherche, privatisation ou mise à disposition du lieu',
  'décoration et ambiance romantique sur mesure',
  'coordination discrète du moment et gestion de l’effet de surprise',
  'photographe et/ou vidéaste',
  'captation de la demande',
  'vidéo souvenir et galerie photo',
  'possibilité d’ajouter un bouquet, une mise en beauté, un dîner privé avec chef cuisinier, un transport avec chauffeur, ainsi que des prestations exclusives telles qu’un violoniste, une chanteuse, un pianiste, une masseuse ou tout autre artiste selon l’univers souhaité',
];

export default function DemandeEnMariagePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHero
          title="Demande en mariage"
          eyebrow="Demande en mariage By Le Oui Parfait"
          subtitle="Une déclaration pensée comme un souvenir inoubliable"
          image="/veux-tu%20m%E2%80%99%C3%A9pouser.png"
          breadcrumbLabel="Demande en mariage"
        />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-main mb-6">
                  Une Expérience Élégante,
                  <br />
                  Intime et Mémorable
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-6">
                  Parce qu’un « veux-tu m’épouser ? » mérite bien plus qu’un simple instant, Le Oui Parfait imagine et orchestre des demandes en fiançailles classiques ou scénarisées, pensées sur mesure selon votre histoire, votre personnalité et l’émotion que vous souhaitez créer.
                </p>
                <p className="text-[#5A5A5A] leading-relaxed">
                  Dans un lieu soigneusement sélectionné ou entièrement mis en scène, nous concevons pour vous une expérience élégante, intime et mémorable : décoration, ambiance, coordination, timing, effet de surprise, captation photo et vidéo… chaque détail est imaginé pour sublimer ce moment unique.
                </p>
              </div>
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src="/veux-tu%20m%E2%80%99%C3%A9pouser.png"
                  alt="Demande en mariage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">L’offre peut inclure selon la formule</p>
                <h3 className="font-baskerville text-2xl text-[#4A4A4A] mb-6">
                  Chaque détail est imaginé pour sublimer l’instant
                </h3>
                <ul className="space-y-3">
                  {inclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                      <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#4B4456] p-10 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">à Partir de</p>
                <div className="font-baskerville text-5xl mb-3">490€</div>
                <p className="text-white/70 text-sm mb-8">*Paiement en 3 ou 4 fois sans frais</p>

                <div className="bg-white/10 p-5 mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                    <p className="font-baskerville text-lg">Le concept</p>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Vous vivez pleinement l’instant, nous nous occupons du reste.
                  </p>
                </div>

                <div className="bg-white/10 p-5 mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                    <p className="font-baskerville text-lg">Notre promesse</p>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Créer un moment unique, pensé dans les moindres détails, pour transformer votre demande en un souvenir fort, sincère et intemporel.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="w-full uppercase tracking-[0.15em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6a9a98] px-8 py-6 rounded-full font-normal transition-all">
                    Réserver une Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
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
                Créez le Plus Beau des « Oui »
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Confiez-nous votre déclaration. Nous imaginons, orchestrons et préservons chaque détail de ce moment unique pour vous permettre de le vivre pleinement.
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