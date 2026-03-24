import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

export function AboutSection() {
  return (
    <section id="apropos" className="relative py-12 lg:py-0 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        
        {/* Mobile: Card Layout */}
        <div className="lg:hidden">
          <AnimatedSection direction="up">
          <div className="bg-white shadow-xl border-2 border-gray-300 overflow-hidden">
            {/* Image Header with Decorations */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/alliance.jpg"
                alt="Échange d'alliances"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative element on image */}
              <div className="absolute bottom-4 left-4 w-32 h-32 z-10">
                <Image
                  src="/decoration-florale.PNG"
                  alt="Décoration florale"
                  fill
                  className="object-contain opacity-90"
                />
              </div>
            </div>
            
            {/* Card Body - Text Content */}
            <div className="p-6">
              <div className="absolute -top-8 -right-4 w-20 h-32 z-20 hidden lg:block">
                <Image
                  src="/decoration-eucalyptus.PNG"
                  alt="Décoration eucalyptus"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-light">
                À PROPOS DE LE OUI PARFAIT
              </p>

              <h2 className="heading-main text-3xl lg:text-4xl mb-6">
                Transformer des Moments en Souvenirs Impérissables
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-[16px]">
                Le Oui Parfait est bien plus qu'un organisateur de mariage — nous sommes des conteurs d'amour et de détails. Nous apportons émotion, beauté et équilibre parfait à chaque célébration.
              </p>

              <div className="w-full h-[1px] bg-gray-300 mb-6"></div>

              <h3 className="heading-main text-2xl mb-8">
                Pourquoi Choisir Le Oui Parfait?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-[#88b7b5]">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                      <line x1="8" y1="8" x2="16" y2="8" strokeWidth="1.5"/>
                      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1.5"/>
                      <line x1="8" y1="16" x2="12" y2="16" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h4 className="heading-main text-xl mb-2">
                    Planification Élégante
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Créer des événements qui capturent magnifiquement des histoires sincères.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-[#88b7b5]">
                      <circle cx="9" cy="8" r="3" strokeWidth="1.5"/>
                      <circle cx="15" cy="8" r="3" strokeWidth="1.5"/>
                      <path d="M3 18c0-2.5 2.5-4 6-4s6 1.5 6 4" strokeWidth="1.5"/>
                      <path d="M15 18c0-2.5 2.5-4 6-4" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h4 className="heading-main text-xl mb-2">
                    Équipe Passionnée
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Dédiée à créer des souvenirs avec amour et professionnalisme.
                  </p>
                </div>
              </div>

              <Link href="/a-propos">
                <Button
                  variant="outline"
                  className="uppercase tracking-[0.15em] text-xs px-6 py-5 border border-[#88b7b5] text-gray-900 hover:bg-[#88b7b5] hover:text-white transition-all duration-300 rounded-full font-medium w-full"
                >
                  EN SAVOIR PLUS
                </Button>
              </Link>
            </div>
          </div>
          </AnimatedSection>
        </div>

        {/* Desktop: Original Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 items-center gap-0">
          <div className="lg:col-span-7 relative h-[700px]">
            <div className="absolute bottom-[-56px] left-[-45px] w-72 h-72 z-30">
              <Image
                src="/decoration-florale.PNG"
                alt="Décoration florale"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/alliance.jpg"
                alt="Échange d'alliances"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white p-12 shadow-2xl -ml-24 relative z-10 my-20">
              <div className="absolute -top-8 -right-4 w-20 h-32 z-20">
                <Image
                  src="/decoration-eucalyptus.PNG"
                  alt="Décoration eucalyptus"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-light">
                À PROPOS DE LE OUI PARFAIT
              </p>

              <h2 className="heading-main text-4xl mb-6">
                Transformer des Moments en Souvenirs Impérissables
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-[16px]">
                Le Oui Parfait est bien plus qu'un organisateur de mariage — nous sommes des conteurs d'amour et de détails. Nous apportons émotion, beauté et équilibre parfait à chaque célébration.
              </p>

              <div className="w-full h-[1px] bg-gray-300 mb-6"></div>

              <h3 className="heading-main text-2xl mb-8">
                Pourquoi Choisir Le Oui Parfait?
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-[#88b7b5]">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                      <line x1="8" y1="8" x2="16" y2="8" strokeWidth="1.5"/>
                      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1.5"/>
                      <line x1="8" y1="16" x2="12" y2="16" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h4 className="heading-main text-xl mb-2">
                    Planification Élégante
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Créer des événements qui capturent magnifiquement des histoires sincères.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="w-10 h-10 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-[#88b7b5]">
                      <circle cx="9" cy="8" r="3" strokeWidth="1.5"/>
                      <circle cx="15" cy="8" r="3" strokeWidth="1.5"/>
                      <path d="M3 18c0-2.5 2.5-4 6-4s6 1.5 6 4" strokeWidth="1.5"/>
                      <path d="M15 18c0-2.5 2.5-4 6-4" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h4 className="heading-main text-xl mb-2">
                    Équipe Passionnée
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Dédiée à créer des souvenirs avec amour et professionnalisme.
                  </p>
                </div>
              </div>

              <Link href="/a-propos">
                <Button
                  variant="outline"
                  className="uppercase tracking-[0.15em] text-xs px-6 py-5 border border-[#88b7b5] text-gray-900 hover:bg-[#88b7b5] hover:text-white transition-all duration-300 rounded-full font-medium"
                >
                  EN SAVOIR PLUS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
