import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

export function HeroSection() {
  return (
    <section id="accueil" className="relative bg-[#FAF9F7] pt-24 pb-30 sm:pb-38 lg:pb-46">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative max-w-6xl mx-auto">
          
          {/* Mobile: Card avec vidéo en header */}
          <div className="lg:hidden">
            <div className="bg-white shadow-xl border-2 border-gray-300 overflow-hidden">
              {/* Video Header */}
              <div className="relative w-full aspect-video">
                <video
                  src="mariage.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Body */}
              <div className="py-6 px-6">
            <div className="flex flex-col items-center text-center relative">
              <AnimatedSection delay={0.2} direction="fade">
              <div className="flex justify-center items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white w-9 h-9">
                    <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-9 h-9">
                    <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-9 h-9">
                    <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
                    <AvatarFallback>C3</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#88b7b5] text-[#88b7b5]" />
                  <span className="text-sm font-medium text-gray-900">4.8</span>
                </div>
                <span className="text-xs text-gray-600">par 12,6K couples</span>
              </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4} direction="up">
              <h1 className="heading-main text-[32px] sm:text-[42px] lg:text-[52px] mb-4 sm:mb-6 leading-tight">
                Organisateur de Mariage &<br />
                Fiançailles Élégant
              </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full mb-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto uppercase tracking-[0.12em] text-[10px] sm:text-[11px] bg-transparent text-[#5A5A5A] border-2 border-[#88b7b5] hover:bg-[#88b7b5] hover:text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full font-medium transition-all"
                  >
                    Commencer la Planification
                  </Button>
                </Link>
                <Link href="/tarifs" className="w-full sm:w-auto">
                  <Button
                    variant="link"
                    className="w-full sm:w-auto uppercase tracking-[0.12em] text-[10px] sm:text-[11px] text-[#88b7b5] hover:text-[#6a9a98] px-4 sm:px-6 py-3 sm:py-4 font-medium underline underline-offset-4"
                  >
                    Voir les Forfaits <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </Button>
                </Link>
              </div>
              </AnimatedSection>

                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Images Grid avec carte overlay */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Image 1 */}
              <div className="relative h-[450px]">
                <div className="relative h-full w-full overflow-hidden shadow-lg">
                  <Image
                    src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG-UN4DQU3.jpg"
                    alt="Couple sur la plage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Vidéo */}
              <div className="relative h-[450px]">
                <div className="relative h-full w-full overflow-hidden shadow-lg">
                  <video
                    src="mariage.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative h-[450px]">
                <div className="relative h-full w-full overflow-hidden shadow-lg">
                  <Image
                    src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG-LU9VY7U.jpg"
                    alt="Portrait de mariée"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* White Card Overlay */}
            <div className="relative -mt-40 mx-auto w-full max-w-[800px] z-20 bg-white py-8 px-16 border-2 border-gray-300 shadow-xl">
              <div className="flex flex-col items-center text-center relative">
                <div className="flex justify-center items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white w-9 h-9">
                      <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" />
                      <AvatarFallback>C1</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-9 h-9">
                      <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                      <AvatarFallback>C2</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-9 h-9">
                      <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
                      <AvatarFallback>C3</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#88b7b5] text-[#88b7b5]" />
                    <span className="text-sm font-medium text-gray-900">4.8</span>
                  </div>
                  <span className="text-xs text-gray-600">par 12,6K couples</span>
                </div>

                <h1 className="heading-main text-[52px] mb-6 leading-tight">
                  Organisateur de Mariage &<br />
                  Fiançailles Élégant
                </h1>

                <div className="flex flex-row gap-4 justify-center items-center w-full mb-4">
                  <Link href="/contact">
                    <Button
                      className="uppercase tracking-[0.12em] text-[11px] bg-transparent text-[#5A5A5A] border-2 border-[#88b7b5] hover:bg-[#88b7b5] hover:text-white px-8 py-5 rounded-full font-medium transition-all"
                    >
                      Commencer la Planification
                    </Button>
                  </Link>
                  <Link href="/tarifs">
                    <Button
                      variant="link"
                      className="uppercase tracking-[0.12em] text-[11px] text-[#88b7b5] hover:text-[#6a9a98] px-6 py-4 font-medium underline underline-offset-4"
                    >
                      Voir les Forfaits <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>

                <div className="absolute -bottom-8 -right-40 w-28 h-28 pointer-events-none">
                  <Image
                    src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG02-R89NSWD.png"
                    alt="Fleurs décoratives"
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
