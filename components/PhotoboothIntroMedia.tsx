'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimationImageCarousel } from '@/components/AnimationImageCarousel';

type CarouselImage = {
  src: string;
  alt: string;
};

export function PhotoboothIntroMedia(props: {
  videoSrc: string;
  images: CarouselImage[];
  className?: string;
}) {
  const { videoSrc, images, className } = props;
  const [showCarousel, setShowCarousel] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (showCarousel) return;

    let cancelled = false;

    const tryPlay = async () => {
      try {
        el.muted = muted;
        await el.play();
      } catch {
        if (cancelled) return;
        if (!muted) {
          setMuted(true);
        }
      }
    };

    tryPlay();

    const onVisibility = () => {
      if (!document.hidden) {
        void tryPlay();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [muted, showCarousel]);

  return (
    <div className={className}>
      {!showCarousel ? (
        <div className="relative w-full h-full bg-black">
          <video
            src={videoSrc}
            ref={videoRef}
            autoPlay
            playsInline
            preload="auto"
            controls={false}
            muted={muted}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const el = videoRef.current;
              if (!el) return;
              if (muted) setMuted(false);
              void el.play();
            }}
            onPause={() => {
              const el = videoRef.current;
              if (!el) return;
              void el.play();
            }}
            onEnded={() => setShowCarousel(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ) : (
        <AnimationImageCarousel images={images} className="h-full" />
      )}
    </div>
  );
}
