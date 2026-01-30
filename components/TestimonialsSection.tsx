'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';



const testimonials = [
  {
    quote: "Notre célébration de fiançailles était plus belle que nous l'avions imaginé. La créativité et le professionnalisme de Le Oui Parfait l'ont rendue vraiment inoubliable.",
    author: "Lydia & Charles",
    location: "Budapest, Hongrie",
    image: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=100&h=100&fit=crop"
  },
  {
    quote: "Le Oui Parfait a rendu notre jour de mariage absolument magique et sans stress. Chaque détail était personnel, élégant et parfaitement planifié.",
    author: "Sarah & William",
    location: "Brisbane, Australie",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop"
  },
  {
    quote: "L'attention aux détails et le dévouement de l'équipe ont dépassé toutes nos attentes. Notre mariage était un rêve devenu réalité.",
    author: "Marie & Alexandre",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=100&h=100&fit=crop"
  },
  {
    quote: "Un service exceptionnel du début à la fin. Le Oui Parfait a transformé notre vision en une célébration parfaite et mémorable.",
    author: "Sophie & Thomas",
    location: "Lyon, France",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-[#FAF9F7]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Header (40% width = 2/5) */}
          <div className="lg:col-span-2 flex flex-col justify-center h-full">
            <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4">
              AVIS DES COUPLES
            </p>
            <h2 className="heading-main mb-8">
              Ce Que Nos Couples Heureux Disent De Nous
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              L'amour et la gratitude inspirent tout ce que nous faisons chez Le Oui Parfait. Découvrez ce que nos couples disent de leur parcours.
            </p>
            <Button
              variant="outline"
              className="uppercase tracking-[0.2em] text-[11px] border border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white px-8 py-6 rounded-full font-normal transition-all w-fit"
            >
              TOUS LES AVIS
            </Button>
          </div>

          {/* Right Column - Testimonials Grid (60% width = 3/5) */}
          <div className="lg:col-span-3 relative">
            {/* Overflow container */}
            <div className="overflow-hidden">
              {/* Sliding container */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-[50%] px-3"
                  >
                    <div className="bg-white p-10 rounded-sm shadow-sm aspect-square flex flex-col justify-between">
                      <p className="text-gray-700 text-[17px] leading-relaxed mb-auto">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                          <img
                            src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=5A5A5A&color=fff&size=56`}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-serif text-[19px] text-[#5A5A5A] mb-1 font-normal">
                            {testimonial.author}
                          </p>
                          <p className="text-[14px] text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: testimonials.length - 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-[#88b7b5]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
