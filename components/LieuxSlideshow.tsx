'use client';

import { useEffect, useMemo, useState } from 'react';

type Slide = {
  src: string;
  alt: string;
};

export function LieuxSlideshow(props: {
  images: Slide[];
  intervalMs?: number;
  className?: string;
}) {
  const { images, intervalMs = 4200, className } = props;
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, safeImages.length]);

  if (!safeImages.length) return null;

return (
  <div className={`relative h-full w-full overflow-hidden ${className || ''}`}>
    {safeImages.map((img, i) => {
      const normalizedSrc = img.src.startsWith('http')
        ? img.src
        : encodeURI(img.src);

      const active = i === index;

      return (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={normalizedSrc}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>
      );
    })}
  </div>
);
}
