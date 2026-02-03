'use client';

import Image from 'next/image';
import { Heart, Calendar, Home, Wallet } from 'lucide-react';

export function ValuesSection() {
  const features = [
    {
      icon: Heart,
      title: "Conception Véritablement Sur Mesure",
      description: "Nous personnalisons chaque élément visuel pour qu'il reflète votre personnalité, créant ainsi une atmosphère qui vous est propre."
    },
    {
      icon: Calendar,
      title: "Planification Sans Stress",
      description: "Nous gérons tous les détails logistiques pour que vous puissiez vous concentrer pleinement sur la célébration avec vos proches."
    },
    {
      icon: Home,
      title: "Partenaires Fournisseurs De Confiance",
      description: "Nous vous mettons en relation avec les meilleurs professionnels afin de garantir une qualité et une fiabilité absolues pour votre événement."
    },
    {
      icon: Wallet,
      title: "Budget Transparent",
      description: "Nous assurons un suivi financier et des conseils honnêtes pour vous aider à optimiser votre budget de mariage."
    }
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop",
      alt: "Célébration de mariage"
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
      alt: "Couple de mariés"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      alt: "Détails de mariage"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#fafaf8]">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500 mb-6">
          CE QUE NOUS DÉFENDONS
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Section - 42% */}
          <div className="lg:col-span-5">
            <h2 className="heading-main mb-8">
              Guider Chaque Histoire D'amour Avec Un But Précis
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Nous nous engageons à créer des souvenirs intemporels grâce à une communication honnête, un design artistique et une passion pour célébrer votre histoire d'amour unique.
            </p>
            
            {/* Photo Carousel - Auto Scrolling */}
            <div className="relative overflow-hidden">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .scrolling-images {
                  animation: scroll 20s linear infinite;
                }
                .scrolling-images:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="flex scrolling-images">
                <div className="flex gap-4 flex-shrink-0">
                  {images.map((image, index) => (
                    <div key={index} className="w-[280px] h-[350px]">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  {images.map((image, index) => (
                    <div key={`duplicate-${index}`} className="w-[280px] h-[350px]">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - 58% */}
          <div className="lg:col-span-7 lg:pt-5">
            <div className="space-y-12 lg:space-y-14">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-6 lg:gap-7">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                        <Icon className="w-10 h-10 lg:w-11 lg:h-11 text-[#88b7b5] stroke-[1.5]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-baskerville text-xl text-gray-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
