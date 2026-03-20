'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

type AnimationImageCarouselProps = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
  className?: string;
};

export function AnimationImageCarousel({
  images,
  intervalMs = 4200,
  className,
}: AnimationImageCarouselProps) {
  const [paused, setPaused] = useState(false);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    if (paused) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [api, paused, intervalMs]);

  if (!images?.length) return null;

  return (
    <div
      className={`relative ${className || ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Carousel opts={{ loop: true, align: 'start' }} setApi={(emblaApi) => setApi(emblaApi)}>
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={`${img.src}-${idx}`} className="basis-full">
              <div className="relative h-full w-full overflow-hidden">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className="h-2 w-2 rounded-full bg-white/40 hover:bg-white/70 transition"
            aria-label={`Aller à l'image ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
