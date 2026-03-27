import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceHero';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Check, Users, Car, Camera, Video, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const inclus = [
  'navette avec chauffeur jusqu’à 8 places ou berline de luxe 4 places',
  'shooting  photo mode, fun, élégantes ou décalées en extérieur et/ou studio',
  'photographe professionnel',
  'mise en beauté avec maquilleuse professionnelle',
  'teaser vidéo souvenir de la journée ou de la soirée',
  'photos HD retouchées',
  'circuits Paris Rive Gauche, Rive Droite ou Grand Tour',
  'accompagnement vers restaurant ou lieu de sortie',
];

const options = [
  'studio + extérieur',
  'retour sécurisé avec chauffeur',
  'restaurant, villas, lofts, appartements ou boat sur devis',
  'recommandations et organisation de A à Z de la suite du programme',
];

export default function ShootingTourPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHero
          title="Le Shooting Tour"
          eyebrow="L’EVJF / EVG nouvelle génération à Paris"
          subtitle="Le Shooting Tour by Le Oui Parfait, c’est une journée ou demi-journée sur mesure, pensée pour offrir à la future mariée ou au futur marié une expérience unique à vivre entre proches."
          image="/evg.png"
          breadcrumbLabel="Shooting Tour"
        />

        <section className="py-12 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2.603fr_2.5fr] gap-12 lg:gap-6 items-stretch">
              <div className="lg:col-span-1 flex flex-col">
                <div className="relative h-[650px] overflow-hidden mb-4">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/evg.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="bg-white p-5">
                  <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Caractéristiques clés :</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Navette avec chauffeur', 'Shooting photo & vidéo', 'Mise en beauté incluse', 'Teaser vidéo souvenir'].map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-[16px] text-[#5A5A5A]">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 lg:pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">L'EVJF / EVG Nouvelle Génération</p>
                <h2 className="font-baskerville text-[32px] text-[#4B4456] leading-tight mb-5">
                  Une Parenthèse Élégante,<br />Festive et Orchestrée
                </h2>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-4">
                  À bord d'une navette avec chauffeur ou d'une berline de luxe, le groupe parcourt Paris et ses plus beaux spots pour profiter d'un moment fort mêlant shooting photo & vidéo, mise en beauté et souvenirs inoubliables.
                </p>
                <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-8">
                  Pensé comme une parenthèse élégante, festive et parfaitement orchestrée, le Shooting Tour transforme l'EVJF ou l'EVG en une expérience mémorable, avec la possibilité de prolonger la journée vers un restaurant, un rooftop ou une soirée.
                </p>

                <Link href="/contact">
                  <button className="uppercase tracking-[0.2em] text-[11px] bg-white border border-[#4B4456] text-[#4B4456] hover:bg-[#4B4456] hover:text-white px-8 py-3 rounded-full transition-all mb-8">
                    Réserver maintenant
                  </button>
                </Link>
                <p className="text-[15px] font-semibold text-[#4B4456] mb-4">Spécifications du Service</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Car,      title: 'Navette de Luxe' },
                    { icon: Camera,   title: 'Shooting Photo' },
                    { icon: Sparkles, title: 'Mise en Beauté' },
                    { icon: Video,    title: 'Teaser Vidéo Souvenir' },
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

        <section className="py-14 bg-[#f4f1f7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">Inclus selon la formule</p>
                <h3 className="font-baskerville text-2xl text-[#4A4A4A] mb-6">
                  Tout est prévu pour créer des souvenirs inoubliables
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {inclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                      <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">Options</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {options.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#5A5A5A] leading-relaxed">
                        <Check className="w-4 h-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#4B4456] p-10 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[#88b7b5] mb-4">À partir de</p>
                <div className="font-baskerville text-5xl mb-3">799 €</div>
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <Users className="w-4 h-4 text-[#88b7b5]" />
                  <span className="text-sm">De 3 à 15 personnes</span>
                </div>
                <p className="text-white/70 text-sm mb-8">*Paiement en 3 ou 4 fois sans frais</p>

                <Link href="/contact">
                  <Button className="w-full uppercase tracking-[0.15em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6a9a98] px-8 py-6 rounded-full font-normal transition-all">
                    Réserver une Consultation
                  </Button>
                </Link>
                <div className="mt-4">
                  <Link href="/tarifs" className="text-white/70 underline underline-offset-4 text-sm hover:text-white transition">
                    Voir les offres
                  </Link>
                </div>
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
                  <Image src="/veux-tu%20m%E2%80%99%C3%A9pouser.png" alt="Demande en mariage" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-baskerville text-2xl text-[#4B4456] mb-2">Demande en Mariage</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Une demande en mariage sur mesure, inédite et inoubliable, orchestrée dans les moindres détails pour un oui parfait.</p>
                  <ul className="space-y-1 mb-5">
                    {['Scénario personnalisé', 'Cadre décoratif', 'Photo & vidéo'].map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#5A5A5A]"><Check className="w-3.5 h-3.5 text-[#88b7b5] flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/services/demande-en-mariage">
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
                  <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">Notre accompagnement haut de gamme : organisation complète, direction artistique et coordination pour un mariage fluide et élégant.</p>
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
                Vivez l'EVJF / EVG de vos Rêves
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Dites-nous votre style, l'ambiance souhaitée et le temps dont vous disposez : nous imaginons le parcours et orchestrons la journée parfaite.
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
