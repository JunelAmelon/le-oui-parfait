'use client';

import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export function ServicesSection() {
  const services = [
    {
      title: '« Offre Signature » la Planification complète du mariage',
      description: 'Une organisation complète et personnalisée, de la conception au jour J pour vous permettre de vivre votre engagement en toute sérénité sans stress et sans faille.',
      features: [
        'Conception et pilotage du projet de mariage',
        'Organisation et coordination des prestataires',
        'Coordination du Jour J'
      ],
      image: 'offre-signature.jpeg',
      alt: 'Planification complète du mariage',
      link: '/services/planification-mariage'
    },
    {
      title: 'Le Oui Parfait Shooting Tour — L\'EVJF / EVG nouvelle génération à Paris',
      description: 'Le Shooting Tour by Le Oui Parfait, c\'est une journée ou demi-journée sur mesure, pensée pour offrir à la future mariée ou au futur marié une expérience unique à vivre entre proches.',
      features: [
        'Navette avec chauffeur ou berline de luxe',
        'Shooting photo & vidéo (extérieur et/ou studio)',
        'Mise en beauté & souvenirs inoubliables'
      ],
      image: '/evg.jpg',
      alt: 'EVJF / EVG Shooting Tour à Paris',
      link: '/services/shooting-tour'
    },
    {
      title: 'Demande en mariage By Le Oui Parfait',
      description: 'Parce qu\'un "veux-tu m\'épouser ?" mérite bien plus qu\'un simple instant, Le Oui Parfait imagine et orchestre des demandes en fiançailles classiques ou scénarisées, pensées sur mesure selon votre histoire.',
      features: [
        'Décoration & ambiance romantique sur mesure',
        'Coordination discrète & effet de surprise',
        'Photo & vidéo souvenir (optionnel)'
      ],
      image: '/veux-tu%20m%E2%80%99%C3%A9pouser.png',
      alt: 'Demande en mariage',
      link: '/services/demande-en-mariage'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, services.length]);

  return (
    <section
      id="services"
      className="py-20 bg-[#f4f1f7]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-16">
          <AnimatedSection direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A5A] mb-4">Nos Services</p>
              <h2 className="heading-main">
                Créer des Moments Inoubliables<br />
                Avec Le Oui Parfait
              </h2>
            </div>
            <div className="mt-6 lg:mt-0">
              <Link href="/services">
                <Button
                  variant="link"
                  className="text-[#5A5A5A] uppercase tracking-[0.15em] text-xs hover:text-gray-900 px-0 underline underline-offset-4 font-medium"
                >
                  Plus de Services <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
          </AnimatedSection>
        </div>

        {/* Mobile: Stacked List */}
        <div className="md:hidden space-y-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.12 * index} direction="up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-baskerville text-[24px] text-[#5A5A5A] mb-3 leading-tight font-normal">
                    {service.title}
                  </h3>
                  <p className="text-[#5A5A5A] leading-relaxed mb-4 text-[16px]">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A5A5A] text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button
                      variant="outline"
                      className="w-full uppercase tracking-[0.15em] text-xs border-2 border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white rounded-full px-6 py-5 font-medium transition-all"
                    >
                      Voir les Détails
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop/Tablet Auto Carousel */}
        <div className="hidden md:block">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <AnimatedSection direction="up">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-5 relative h-[400px] lg:h-[450px] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="lg:col-span-7 lg:pl-8">
                        <h3 className="font-baskerville text-[30px] text-[#5A5A5A] mb-5 leading-tight font-normal">
                          {service.title}
                        </h3>
                        <p className="text-[#5A5A5A] leading-relaxed mb-6 text-[17px]">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                              <span className="text-[#5A5A5A] text-[16px]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href={service.link}>
                          <Button
                            variant="outline"
                            className="uppercase tracking-[0.15em] text-xs border-2 border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white rounded-full px-8 py-6 font-medium transition-all"
                          >
                            Voir les Détails
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-10 h-2 bg-[#88b7b5]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
