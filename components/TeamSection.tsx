'use client';

import Image from 'next/image';
import { Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const teamMembers = [
  {
    name: 'Kathy',
    title: 'Wedding Planner & Designer Principal',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
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
                    <div className="relative overflow-hidden bg-[#C5B8C1]">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover grayscale-[20%] opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>

                    {/* Name, title & social */}
                    <div className="pt-4 pb-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-baskerville text-[20px] text-[#4B4456] leading-snug">
                          {member.name}
                        </h3>
                        <div className="flex gap-1.5 flex-shrink-0 ml-2">
                          <a
                            href="#"
                            className="w-8 h-8 rounded-full border border-[#d1c8cf] text-[#4B4456] flex items-center justify-center hover:border-[#88b7b5] hover:text-[#88b7b5] transition-colors"
                            aria-label={`${member.name} Instagram`}
                          >
                            <Instagram className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href="#"
                            className="w-8 h-8 rounded-full border border-[#d1c8cf] text-[#4B4456] flex items-center justify-center hover:border-[#88b7b5] hover:text-[#88b7b5] transition-colors"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[13px] text-gray-500 leading-snug">
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
