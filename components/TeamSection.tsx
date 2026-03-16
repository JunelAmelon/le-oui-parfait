'use client';

import Image from 'next/image';
import { Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const teamMembers = [
  {
    name: 'Kathy',
    title: 'Wedding Planner & Designer Principal',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
  },
  {
    name: 'Amelia',
    title: 'Negafa',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
  },
  {
    name: 'Yann',
    title: 'Spécialiste Logistique & Commercial',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    name: 'Myriam',
    title: 'Chargée Communication',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    name: 'Junel',
    title: 'Développement Web, Marketing & Vidéaste',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
];

export function TeamSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = teamMembers.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next, paused]);

  const visibleCount = 4;

  return (
    <section className="py-20 bg-[#F5F3F1]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-5 top-[40%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white shadow-md transition-all flex items-center justify-center"
            aria-label="Membre précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute -right-5 top-[40%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white shadow-md transition-all flex items-center justify-center"
            aria-label="Membre suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(current * 100) / visibleCount}%)` }}
            >
              {/* Duplicate array for seamless looping */}
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="group cursor-default">
                    {/* Photo */}
                    <div className="relative overflow-hidden mb-5 bg-[#C5B8C1]">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover grayscale-[20%] opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4B4456]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Social links on hover */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-[#88b7b5] transition-colors"
                            aria-label={`${member.name} Instagram`}
                          >
                            <Instagram className="w-4 h-4 text-white" />
                          </a>
                          <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-[#88b7b5] transition-colors"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Name & title */}
                    <div className="text-center">
                      <h3 className="font-baskerville text-[19px] text-[#4B4456] mb-1">
                        {member.name}
                      </h3>
                      <div className="w-6 h-[2px] bg-[#88b7b5] mx-auto mb-2" />
                      <p className="text-[12px] text-gray-500 uppercase tracking-[0.12em]">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
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
