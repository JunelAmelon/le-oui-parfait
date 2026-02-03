'use client';

import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export function ServicesSection() {
  const services = [
    {
      title: 'Planification de Mariage',
      description: 'Un service de coordination complet qui garantit que votre journée spéciale se déroule magnifiquement du début à la fin, sans stress et sans faille.',
      features: [
        'Coordination élégante de l\'événement',
        'Excellence de la gestion des fournisseurs',
        'Touche de planification personnalisée'
      ],
      image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg',
      alt: 'Cérémonie de mariage',
      link: '/services/planification-mariage'
    },
    {
      title: 'Stylisme de Fiançailles',
      description: 'Nous créons des moments de fiançailles romantiques qui vous appartiennent véritablement, remplis d\'élégance, de créativité et d\'une narration visuelle inoubliable.',
      features: [
        'Création de thème romantique',
        'Stylisme visuel signature',
        'Design d\'ambiance réfléchi'
      ],
      image: 'https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg',
      alt: 'Dîner romantique',
      link: '/services/stylisme-fiancailles'
    },
    {
      title: 'Gestion d\'Événements',
      description: 'De la logistique aux touches finales, nous nous assurons que chaque détail de l\'événement reflète la perfection, l\'harmonie et les émotions que vous souhaitez chérir.',
      features: [
        'Coordination sur site',
        'Organisation professionnelle du calendrier',
        'Exécution sans stress'
      ],
      image: 'https://images.pexels.com/photos/7012244/pexels-photo-7012244.jpeg',
      alt: 'Organisation d\'événement',
      link: '/services/gestion-evenements'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-[#FAF9F7]">
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

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
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
                      <p className="text-[#5A5A5A] leading-relaxed mb-4 text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                            <span className="text-[#5A5A5A] text-sm">{feature}</span>
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
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all flex items-center justify-center"
              aria-label="Service précédent"
            >
              ←
            </button>
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-[#88b7b5] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au service ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all flex items-center justify-center"
              aria-label="Service suivant"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block space-y-16">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.2 * index} direction="up">
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
                <p className="text-[#5A5A5A] leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A5A5A]">{feature}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
