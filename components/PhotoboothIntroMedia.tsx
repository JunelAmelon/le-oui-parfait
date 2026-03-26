'use client';

import { useState } from 'react';
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

  return (
    <div className={className}>
      {!showCarousel ? (
        <div className="relative w-full h-full bg-black">
          <video
            src={videoSrc}
            autoPlay
            playsInline
            preload="auto"
            controls
            muted={false}
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
