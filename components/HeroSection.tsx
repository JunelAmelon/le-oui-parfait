import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="accueil" className="relative bg-[#FAF9F7] pt-20 pb-48 mb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            <div className="relative h-[500px] lg:h-[550px]">
              <div className="relative h-full w-full overflow-hidden shadow-lg">
                <Image
                  src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG-UN4DQU3.jpg"
                  alt="Couple sur la plage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[550px]">
              <div className="relative h-full w-full overflow-hidden shadow-lg">
                <Image
                  src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG-LU9VY7U.jpg"
                  alt="Portrait de mariée"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[550px]">
              <div className="relative h-full w-full overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg"
                  alt="Couple élégant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[650px] z-20 bg-white shadow-2xl py-8 px-8 lg:px-16">
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

              <h1 className="heading-main text-[52px] mb-6">
                Organisateur de Mariage &<br />
                Fiançailles Élégant
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-4">
                <Button
                  size="lg"
                  className="uppercase tracking-[0.15em] text-[11px] bg-transparent text-[#5A5A5A] border-2 border-[#88b7b5] hover:bg-[#88b7b5] hover:text-white px-10 py-6 rounded-full font-medium transition-all"
                >
                  Commencer la Planification
                </Button>
                <Button
                  size="lg"
                  variant="link"
                  className="uppercase tracking-[0.15em] text-[11px] text-[#88b7b5] hover:text-[#6a9a98] px-6 py-5 font-medium underline underline-offset-4"
                >
                  Voir les Forfaits <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="absolute -bottom-10 -right-10 w-36 h-36 pointer-events-none">
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
    </section>
  );
}
