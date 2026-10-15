'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hls from 'hls.js';
import { AnimatedSection } from './AnimatedSection';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

type VideoItem = {
  id: string;
  title: string;
  src: string;
};

function PortfolioVideo({
  src,
  controls = false,
  muted = true,
  className,
}: {
  src: string;
  controls?: boolean;
  muted?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    const isHls = src.endsWith('.m3u8');

    if (isHls && Hls.isSupported()) {
      hls = new Hls({ capLevelToPlayerSize: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else {
      video.src = src;
      video.play().catch(() => {});
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls={controls}
      autoPlay
      muted={muted}
      loop={!controls}
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

type PhotoItem = {
  id: string;
  src: string;
  alt: string;
};

const romainVideos: VideoItem[] = [
  {
    id: 'romain-1',
    title: 'Raumane et Maxime',
    src: 'https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/83686a13e5f54899f950158f72c8c32e/manifest/video.m3u8',
  },
  {
    id: 'romain-2',
    title: 'Thomas & Rénia',
    src: 'https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/880252c1927223f2c511570fde7cfd9b/manifest/video.m3u8',
  },
  {
    id: 'romain-3',
    title: 'Alan et Daria',
    src: 'https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/2a68f7c8e4fef5885e20a312dc823620/manifest/video.m3u8',
  },
  {
    id: 'romain-4',
    title: 'Aurelien et Angelique',
    src: 'https://customer-wqxo6nzwlwy95bai.cloudflarestream.com/771360ab3673da41460d3eeb0dc444e3/manifest/video.m3u8',
  },
];

const samPhotoOnlyVideos: VideoItem[] = [];

const romainPhotos: PhotoItem[] = [
  {
    id: 'romain-photo-1',
    src: '/portfolio-mariages/audrey-abdel.webp',
    alt: 'Reportage photo de mariage — Audrey & Abdel — Romain — Le Oui Parfait — Photo 1',
  },
  {
    id: 'romain-photo-2',
    src: '/portfolio-mariages/thomas-renia.webp',
    alt: 'Reportage photo de mariage — Thomas & Rénia — Romain — Le Oui Parfait — Photo 2',
  },
  {
    id: 'romain-photo-3',
    src: '/portfolio-mariages/david-charlotte.webp',
    alt: 'Reportage photo de mariage — David & Charlotte — Romain — Le Oui Parfait — Photo 3',
  },
  {
    id: 'romain-photo-4',
    src: '/portfolio-mariages/gwendolyn-jerome.webp',
    alt: 'Reportage photo de mariage — Gwendolyn & Jérôme — Romain — Le Oui Parfait — Photo 4',
  },
  {
    id: 'romain-photo-5',
    src: '/portfolio-mariages/justine-jerome.webp',
    alt: 'Reportage photo de mariage — Justine & Jérôme — Romain — Le Oui Parfait — Photo 5',
  },
];

const samPhotos: PhotoItem[] = [
  {
    id: 'sam-photo-1',
    src: '/sam%20realisation/realisation-sam-photo%20(12).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 1',
  },
  {
    id: 'sam-photo-2',
    src: '/sam%20realisation/realisation-sam-photo%20(2).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 2',
  },
  {
    id: 'sam-photo-3',
    src: '/sam%20realisation/realisation-sam-photo%20(11).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 3',
  },
  {
    id: 'sam-photo-4',
    src: '/sam%20realisation/realisation-sam-photo%20(4).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 4',
  },
  {
    id: 'sam-photo-5',
    src: '/sam%20realisation/realisation-sam-photo%20(5).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 5',
  },
  {
    id: 'sam-photo-6',
    src: '/sam%20realisation/realisation-sam-photo%20(6).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 6',
  },
  {
    id: 'sam-photo-7',
    src: '/sam%20realisation/realisation-sam-photo%20(7).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 7',
  },
  {
    id: 'sam-photo-8',
    src: '/sam%20realisation/realisation-sam-photo%20(15).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 8',
  },
  {
    id: 'sam-photo-9',
    src: '/sam%20realisation/realisation-sam-photo%20(9).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 9',
  },
    {
    id: 'sam-photo-10',
    src: '/sam%20realisation/realisation-sam-photo%20(16).jpg',
    alt: 'Reportage photo de mariage — Sam — Le Oui Parfait — Photo 10',
  },
];

function CreatorBlock(props: {
  eyebrow: string;
  title: string;
  subtitle: string;
  videos: VideoItem[];
  photos: PhotoItem[];
}) {
  const { eyebrow, title, subtitle, videos, photos } = props;

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection direction="up">
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">{eyebrow}</p>
            <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456]">{title}</h2>
            <p className="text-[#5A5A5A] mt-4 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          </div>
        </AnimatedSection>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, index) => (
              <AnimatedSection key={v.id} direction="up" delay={0.06 * index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="group w-full text-left"
                      aria-label={`Film de mariage — ${v.title} — vidéaste Romain — Le Oui Parfait — Vidéo ${index + 1}`}
                    >
                      <div className="relative overflow-hidden bg-black shadow-[0_18px_45px_rgba(25,20,33,0.12)]">
                        <div className="relative aspect-video">
                          <PortfolioVideo
                            src={v.src}
                            className="h-full w-full object-cover scale-[1.34] pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/10" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15">
                              <Play className="h-5 w-5 text-white" fill="currentColor" />
                            </span>
                            <p className="mt-4 text-white text-[11px] uppercase tracking-[0.25em]">{v.title}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-5xl border-0 bg-black p-0 overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <PortfolioVideo src={v.src} controls muted={false} className="h-full w-full object-cover" />
                    </div>
                  </DialogContent>
                </Dialog>
              </AnimatedSection>
            ))}
          </div>
        ) : null}

        <div className={videos.length > 0 ? 'mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4' : 'mt-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'}>
          {photos.map((p, index) => (
            <AnimatedSection key={p.id} direction="up" delay={0.03 * index}>
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="group w-full text-left">
                    <div className="overflow-hidden bg-white shadow-[0_12px_30px_rgba(25,20,33,0.08)]">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-5xl border-0 bg-black p-0 overflow-hidden">
                  <div className="relative w-full max-h-[85vh]">
                    <div className="relative w-full aspect-[4/5] sm:aspect-[16/10]">
                      <Image src={p.src} alt={p.alt} fill className="object-contain bg-black" />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioCreatorsShowcase() {
  return (
    <>
      <section className="py-16 bg-[#f4f1f7]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#88b7b5] mb-3">Portfolio</p>
              <h2 className="font-baskerville text-3xl lg:text-4xl text-[#4B4456] mb-5">Des Images Qui Racontent Une Histoire</h2>
              <p className="text-[#5A5A5A] leading-relaxed text-[17px] mb-7">
                Nous capturons l’essentiel : l’émotion, la lumière, les gestes spontanés et les détails qui donnent du relief à votre journée.
                <br />
                <br />
                Découvrez nos réalisations photo & vidéo, pensées avec une esthétique élégante et une narration naturelle.
              </p>
              <Link href="/contact">
                <Button className="uppercase tracking-[0.15em] text-[11px] bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-10 py-7 font-medium transition-all shadow-lg hover:shadow-xl">
                  Réserver
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: '/mariage-moment.jpg', alt: 'Portfolio — image 1' },
                  { src: '/mariage-r%C3%A9alis%C3%A9s%20(3).jpg', alt: 'Portfolio — image 2' },
                  { src: '/mariage%20moment.jpg', alt: 'Portfolio — image 3' },
                  { src: '/photoboot-mirror-rendu%20(1).JPG', alt: 'Portfolio — image 4' },
                 
                ].map((img, i) => (
                  <div key={i} className="relative aspect-[4/5] overflow-hidden bg-white shadow-[0_18px_45px_rgba(25,20,33,0.10)]">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreatorBlock
        eyebrow="Réalisations"
        title="Romain — Vidéaste"
        subtitle="Films de mariage au rendu naturel et élégant : captation des moments forts (préparatifs, cérémonie, réception), montage rythmé et storytelling discret, avec une attention particulière à la lumière et aux émotions."
        videos={romainVideos}
        photos={romainPhotos}
      />

      <CreatorBlock
        eyebrow="Réalisations"
        title="Sam — Reportage photo"
        subtitle="Reportage photo axé sur l’authenticité : prises de vue sur le vif, portraits, détails, et couverture complète de la journée pour raconter votre événement avec simplicité et sincérité."
        videos={samPhotoOnlyVideos}
        photos={samPhotos}
      />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline preload="none" className="w-full h-full object-cover">
            <source src="/presentation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#88b7b5] mb-4 font-medium">Prêt à Créer Vos Souvenirs ?</p>
            <h2 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight px-2">Votre Histoire, Filmée et Photographiée</h2>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Contactez-nous pour réserver votre prestation photo & vidéo et construire une expérience à votre image.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg hover:shadow-xl">
                  Réserver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
