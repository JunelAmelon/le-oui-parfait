'use client';

import { Play } from 'lucide-react';

export function VideoPresentationSection() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Présentation couple mariage"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              className="group relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-2 border-[#88b7b5] flex items-center justify-center transition-all duration-300 hover:bg-[#88b7b5]/80 hover:scale-110 hover:border-white"
              aria-label="Lire la vidéo"
            >
              <Play className="w-10 h-10 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute -bottom-8 left-12 w-32 h-32 lg:w-40 lg:h-40 pointer-events-none opacity-60 hidden lg:block">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="succulent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#88b7b5', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#6a9a98', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <g transform="translate(100, 100)">
              <circle cx="0" cy="0" r="15" fill="#88b7b5" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(0)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(45)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(90)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(135)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(180)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(225)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(270)" />
              <ellipse cx="0" cy="-35" rx="18" ry="28" fill="url(#succulent-gradient)" transform="rotate(315)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
