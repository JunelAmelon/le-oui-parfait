import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

export function HeroSection() {
  return (
<section id="accueil" className="relative bg-[#f4f1f7] pt-24 pb-30 sm:pb-38 lg:pb-46">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="relative max-w-6xl mx-auto">
      
      {/* ================= MOBILE ================= */}
      <div className="lg:hidden">

        <div className="bg-white shadow-xl overflow-hidden">

          {/* video */}
          <div className="relative w-full h-[60vh]">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* contenu */}
          <div className="py-4 px-4">

            <div className="flex flex-col items-center text-center relative">

              <AnimatedSection delay={0.2} direction="fade">
              <div className="flex justify-center items-center gap-2 mb-3">

                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white w-7 h-7">
                    <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" />
                  </Avatar>

                  <Avatar className="border-2 border-white w-7 h-7">
                    <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                  </Avatar>

                  <Avatar className="border-2 border-white w-7 h-7">
                    <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
                  </Avatar>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#88b7b5] text-[#88b7b5]" />
                  <span className="text-xs font-medium text-gray-900">4.8</span>
                </div>

                <span className="text-[10px] text-gray-600">
                  par 212 couples
                </span>

              </div>
              </AnimatedSection>


              <AnimatedSection delay={0.4} direction="up">
              <h1 className="heading-main text-[26px] sm:text-[42px] mb-3 sm:mb-6 leading-tight">
                Organisateur de Mariage &<br />
                Fiançailles Élégant
              </h1>
              </AnimatedSection>


              <AnimatedSection delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full mb-2">

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto uppercase tracking-[0.12em] text-[9px] sm:text-[11px] bg-transparent text-[#5A5A5A] border-2 border-[#88b7b5] hover:bg-[#88b7b5] hover:text-white px-5 sm:px-8 py-3 sm:py-5 rounded-full"
                  >
                    Commencer la Planification
                  </Button>
                </Link>

                <Link href="/tarifs" className="w-full sm:w-auto">
                  <Button
                    variant="link"
                    className="uppercase tracking-[0.12em] text-[9px] sm:text-[11px] text-[#88b7b5] underline underline-offset-4"
                  >
                    Voir les Forfaits
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>

              </div>
              </AnimatedSection>

            </div>

          </div>

        </div>

      </div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">

        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* image */}
          <div className="relative h-[450px]">
            <div className="relative h-full w-full overflow-hidden shadow-lg">

              <Image
                src="/photo-couple-2.PNG"
                alt="Couple"
                fill
                className="object-cover"
              />

            </div>
          </div>


          {/* video */}
          <div className="relative h-[450px]">
            <div className="relative h-full w-full overflow-hidden shadow-lg">

              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

            </div>
          </div>


          {/* image */}
          <div className="relative h-[450px]">
            <div className="relative h-full w-full overflow-hidden shadow-lg">

              <Image
                src="/photo-couple.PNG"
                alt="Mariée"
                fill
                className="object-cover"
              />

            </div>
          </div>

        </div>



        {/* carte */}
        <div className="relative -mt-40 mx-auto w-full max-w-[800px] bg-white shadow-xl overflow-visible z-20">

          <div className="py-8 px-16">

            <div className="flex flex-col items-center text-center">

              <div className="flex justify-center items-center gap-2 mb-6">

                <div className="flex -space-x-2">

                  <Avatar className="border-2 border-white w-9 h-9">
                    <AvatarImage src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" />
                  </Avatar>

                  <Avatar className="border-2 border-white w-9 h-9">
                    <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" />
                  </Avatar>

                  <Avatar className="border-2 border-white w-9 h-9">
                    <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
                  </Avatar>

                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#88b7b5] text-[#88b7b5]" />
                  <span className="text-sm font-medium text-gray-900">
                    4.8
                  </span>
                </div>

                <span className="text-xs text-gray-600">
                  par 212 couples
                </span>

              </div>


              <h1 className="heading-main text-[52px] mb-6 leading-tight">
                Organisatrice de mariage &<br />
                coordination du jour J
              </h1>



              <div className="flex gap-4 justify-center items-center">

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
                    className="uppercase tracking-[0.12em] text-[11px] text-[#88b7b5] underline underline-offset-4"
                  >
                    Voir les Forfaits
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>

                </Link>

              </div>

            </div>

          </div>



          {/* fleur qui dépasse du coin */}
<div
  className="absolute w-[380px] h-[380px] pointer-events-none z-10"
  style={{ bottom: "-10rem", right: "-10rem" }}
>
  <Image
    src="/decoration-florale.PNG"
    alt="Décoration florale"
    fill
    className="object-contain"
  />
</div>

        </div>

      </div>

    </div>
  </div>
</section>
  );
}
