'use client';

import Image from 'next/image';
import { AnimatedSection } from './AnimatedSection';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Film de Mariage — Cinématique',
    description: 'Une narration élégante, un montage rythmé et une colorimétrie premium.',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: '/wedding (5).jpg',
  },
  {
    id: 2,
    title: 'Highlights — Émotions',
    description: 'Les moments forts capturés avec discrétion et intention.',
    src: 'https://www.w3schools.com/html/movie.mp4',
    poster: '/wedding (6).jpg',
  },
];

const photos = [
  {
    id: 1,
    title: 'Portraits',
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg',
  },
  {
    id: 2,
    title: 'Détails',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
  },
  {
    id: 3,
    title: 'Cérémonie',
    image: 'https://images.pexels.com/photos/3171762/pexels-photo-3171762.jpeg',
  },
  {
    id: 4,
    title: 'Réception',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
  },
  {
    id: 5,
    title: 'Éditorial',
    image: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
  },
  {
    id: 6,
    title: 'Lifestyle',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
  },
];

export function PortfolioMediaSection() {
  return (
    <section className="py-20 bg-[#f4f1f7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4">PHOTO & VIDÉO</p>
            <h2 className="heading-main">Nos Réalisations Créatives</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <AnimatedSection direction="up">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#6b6573] mb-3">Vidéastes</p>
                <h3 className="font-baskerville text-3xl text-[#2f2a36]">Vidéos réalisées</h3>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {videos.map((v, index) => (
                <AnimatedSection key={v.id} direction="up" delay={0.06 * index}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="group w-full text-left">
                        <div className="relative overflow-hidden rounded-3xl bg-black shadow-[0_18px_45px_rgba(25,20,33,0.12)]">
                          <div className="relative aspect-video">
                            <Image
                              src={v.poster}
                              alt={v.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-black/45" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15">
                                <Play className="h-5 w-5 text-white" fill="currentColor" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="font-baskerville text-xl text-[#2f2a36]">{v.title}</p>
                          <p className="text-[#6b6573] text-sm leading-relaxed mt-1">{v.description}</p>
                        </div>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl border-0 bg-black p-0 overflow-hidden">
                      <div className="relative aspect-video w-full">
                        <video src={v.src} poster={v.poster} controls autoPlay playsInline className="h-full w-full object-cover" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <AnimatedSection direction="up">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#6b6573] mb-3">Photographes</p>
                <h3 className="font-baskerville text-3xl text-[#2f2a36]">Photographies</h3>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {photos.map((p, index) => (
                <AnimatedSection key={p.id} direction="up" delay={0.04 * index}>
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(25,20,33,0.08)]">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <p className="text-[12px] uppercase tracking-[0.22em] text-[#6b6573] mt-3">{p.title}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
