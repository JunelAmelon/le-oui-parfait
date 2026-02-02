'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';

export function VideoPresentationSection() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden shadow-2xl border-2 border-[#88b7b5]">
          <div className="absolute inset-0">
            <img
              src="mairie.jpg"
              alt="Présentation couple mariage"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              className="group relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-2 border-[#88b7b5] flex items-center justify-center transition-all duration-300 hover:bg-[#88b7b5]/80 hover:scale-110 hover:border-white"
              aria-label="Lire la vidéo"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute -bottom-8 left-12 w-32 h-32 lg:w-40 lg:h-40 pointer-events-none opacity-60 hidden lg:block">
          <Image
            src="https://demo.deverust.com/bellavue/wp-content/uploads/sites/75/2025/10/IMG-R89NSWD.png"
            alt="Décoration florale"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
