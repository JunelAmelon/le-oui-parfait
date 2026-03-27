'use client';

import Image from 'next/image';
import { Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useState, useEffect, useRef, useCallback } from 'react';

const teamMembers = [
  {
    name: 'Kathy',
    title: 'Wedding Planner & Designer Principal',
    image: '/equipe/kathy.png',
  },
  {
    name: 'Amelia',
    title: 'Negafa',
    image: '/equipe/amelia.png',
  },
  {
    name: 'Yann',
    title: 'Spécialiste Logistique & Commercial',
    image: '/equipe/yan.jpeg',
  },
  {
    name: 'Miriam',
    title: 'Chargée Communication',
    image: '/equipe/miriam.png',
  },
  {
    name: 'Junel',
    title: 'Développement Web, Marketing & Vidéaste',
    image: '/equipe/junel.png',
  },
  {
    name: 'Sam',
    title: 'Responsable des Opérations',
    image: '/equipe/Sam.jpg',
  },
];

export function TeamSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = teamMembers.length;
  const [api, setApi] = useState<any>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (!api) return;
    if (paused) return;
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 3200);
  }, [api, paused, stopAutoplay]);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
    api.on('reInit', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    startAutoplay();

    api.on('reInit', startAutoplay);
    api.on('settle', startAutoplay);
    api.on('pointerDown', () => stopAutoplay());
    api.on('pointerUp', startAutoplay);

    return () => {
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <section
      id="equipe-experts"
      className="py-20 bg-[#f4f1f7]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4">
            ÉQUIPE LE OUI PARFAIT
          </p>
          <h2 className="heading-main">
            Les Visages Derrière<br />Le Oui Parfait
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{ loop: true, align: 'start' }}
            setApi={(emblaApi) => setApi(emblaApi)}
          >
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="hidden lg:flex absolute -left-5 top-[40%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white shadow-md transition-all items-center justify-center"
              aria-label="Membre précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="hidden lg:flex absolute -right-5 top-[40%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white shadow-md transition-all items-center justify-center"
              aria-label="Membre suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/4"
                >
                  <div className="px-4 h-full">
                    <div className="group cursor-default h-full">
                      {/* Photo */}
                      <div className="relative overflow-hidden bg-[#C5B8C1]">
                        <div className="aspect-[3/4] relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover grayscale-[20%] opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>

                      {/* Name, title & social */}
                      <div className="pt-4 pb-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-baskerville text-[20px] text-[#4B4456] leading-snug">
                            {member.name}
                          </h3>
                          <div className="flex gap-1.5 flex-shrink-0 ml-2">
                            <a
                              href="#"
                              className="w-8 h-8 rounded-full border border-[#d1c8cf] text-[#4B4456] flex items-center justify-center hover:border-[#88b7b5] hover:text-[#88b7b5] transition-colors"
                              aria-label={`${member.name} Instagram`}
                            >
                              <Instagram className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href="#"
                              className="w-8 h-8 rounded-full border border-[#d1c8cf] text-[#4B4456] flex items-center justify-center hover:border-[#88b7b5] hover:text-[#88b7b5] transition-colors"
                              aria-label={`${member.name} LinkedIn`}
                            >
                              <Linkedin className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                        <p className="text-[13px] text-gray-500 leading-snug">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Aller au membre ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current % total
                    ? 'w-8 h-2 bg-[#88b7b5]'
                    : 'w-2 h-2 bg-[#C5B8C1] hover:bg-[#88b7b5]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
