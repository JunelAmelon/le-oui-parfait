'use client';

import { Play, Pause } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef } from 'react';

export function VideoPresentationSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative w-full aspect-video lg:aspect-[2/1] overflow-hidden">
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              src="/video-detail.mp4"
              poster="/présentation-video.jpg"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
            onClick={handlePlayPause}
          >
            <button
              className="group relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-[#88b7b5]/80 hover:scale-110"
              aria-label={isPlaying ? "Pause la vidéo" : "Lire la vidéo"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white fill-white group-hover:scale-110 transition-transform" />
              ) : (
                <Play className="w-6 h-6 text-white fill-white ml-0.5 group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>

<div className="absolute -bottom-32 -left-10 w-96 h-96 lg:w-[480px] lg:h-[480px] pointer-events-none opacity-60 hidden lg:block">
  <Image
    src="/decoration-florale.PNG"
    alt="Décoration florale"
    fill
    className="object-contain"
  />
</div>
      </div>
    </section>
  );
}
