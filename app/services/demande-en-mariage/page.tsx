import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceHero';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Heart, Camera, MapPin, Video } from 'lucide-react';
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

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2.603fr_2.5fr] gap-12 lg:gap-6 items-stretch">
              <div className="lg:col-span-1 flex flex-col">
                <div className="relative h-[650px] overflow-hidden mb-4">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/demande-en-mariage.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="bg-white p-5">
                  <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Caractéristiques clés :</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Lieu sur mesure ou privatisé', 'Décoration romantique', 'Coordination discrète', 'Photo & vidéo souvenir'].map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-[16px] text-[#5A5A5A]">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Demande en Mariage By Le Oui Parfait</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  Une Expérience Élégante,<br />Intime et Mémorable
                </h2>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  Parce qu'un « veux-tu m'épouser ? » mérite bien plus qu'un simple instant, Le Oui Parfait imagine et orchestre des demandes en fiançailles classiques ou scénarisées, pensées sur mesure selon votre histoire, votre personnalité et l'émotion que vous souhaitez créer.
                </p>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
                  Dans un lieu soigneusement sélectionné ou entièrement mis en scène, nous concevons pour vous une expérience élégante, intime et mémorable : décoration, ambiance, coordination, timing, effet de surprise, captation photo et vidéo… chaque détail est imaginé pour sublimer ce moment unique.
                </p>

                <Link href="/contact">
                  <button className="uppercase tracking-[0.2em] text-[11px] bg-white border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-8 py-3 rounded-full transition-all mb-8">
                    Réserver maintenant
                  </button>
                </Link>
                <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Spécifications du Service</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: MapPin,   title: 'Lieu Sur Mesure' },
                    { icon: Sparkles, title: 'Décoration Romantique' },
                    { icon: Heart,    title: 'Coordination Discrète' },
                    { icon: Camera,   title: 'Captation Photo & Vidéo' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-[#e8e0dc] p-5 flex flex-col items-start gap-3 min-w-0">
                      <s.icon className="w-8 h-8 text-[#88b7b5] flex-shrink-0" />
                      <span className="font-baskerville text-[20px] text-[#4B4456] leading-snug min-w-0 break-words whitespace-normal [hyphens:auto]">
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f4f1f7]">
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

        <TestimonialsSection />

        {/* Other Services */}
        <section className="py-14 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Autres Services</p>
              <h2 className="heading-main">Créer des Moments Inoubliables<br />Avec Le Oui Parfait</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white">
                <div className="relative h-[260px] overflow-hidden">
                  <Image src="/evg.png" alt="Shooting Tour" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Le Shooting Tour</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Une journée ou demi-journée sur mesure à Paris, mêlant shooting photo, mise en beauté et souvenirs inoubliables entre proches.</p>
                  <ul className="space-y-1 mb-5">
                    {['Navette avec chauffeur', 'Photographe professionnel', 'Mis en beauté incluse'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/services/shooting-tour">
                    <button className="uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-6 py-2.5 rounded-full transition-all">Voir le Détail</button>
                  </Link>
                </div>
              </div>
              <div className="bg-white">
                <div className="relative h-[260px] overflow-hidden">
                  <Image src="/offre-signature.png" alt="Offre Signature" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Offre Signature</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">L’accompagnement premium pour un mariage maîtrisé : organisation complète, direction artistique et coordination avec une exigence élevée.</p>
                  <ul className="space-y-1 mb-5">
                    {['Organisation clé en main', 'Prestataires & planning', 'Coordination Jour J'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/tarifs/offre-signature">
                    <button className="uppercase tracking-[0.15em] text-[11px] border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-6 py-2.5 rounded-full transition-all">Voir le Détail</button>
                  </Link>
                </div>
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
              <source src="/video-detail.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#88b7b5] mb-4 font-medium">
                Prêt à Commencer ?
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
                <Link href="tel:+33687217118" className="w-full sm:w-auto">
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