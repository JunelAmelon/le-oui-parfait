'use client';

import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  link: string;
};

function OffersServicesCarouselDesktop(props: { offers: ServiceItem[] }) {
  const { offers } = props;
  const [paused, setPaused] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.25 });

  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    api.on('select', () => setCurrentSlide(api.selectedScrollSnap()));
    api.on('reInit', () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (paused) return;
    if (!inView) return;
    const timer = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [api, paused, inView]);

  return (
    <div ref={ref} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Carousel opts={{ loop: true, align: 'start' }} setApi={(emblaApi) => setApi(emblaApi)}>
        <CarouselContent>
          {offers.map((offer, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-[400px] lg:h-[450px] overflow-hidden">
                  <Image src={offer.image} alt={offer.alt} fill className="object-cover" />
                </div>
                <div className="lg:col-span-7 lg:pl-8">
                  <h3 className="font-baskerville text-[30px] text-[#5A5A5A] mb-5 leading-tight font-normal">
                    {offer.title}
                  </h3>
                  <p className="text-[#5A5A5A] leading-relaxed mb-6 text-[17px]">{offer.description}</p>
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A5A5A] text-[16px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={offer.link}>
                    <Button
                      variant="outline"
                      className="uppercase tracking-[0.15em] text-xs border-2 border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white rounded-full px-8 py-6 font-medium transition-all"
                    >
                      Voir les Détails
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-2 mt-8">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index ? 'w-10 h-2 bg-[#88b7b5]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller à l’offre ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const offers: ServiceItem[] = [
    {
      title: 'Offre Signature — Mariage clé en main',
      description:
        "Pour les couples qui souhaitent déléguer l'organisation de A à Z, avec une direction claire, un suivi rigoureux et une exécution fluide jusqu'au jour J.",
      features: [
        'Gestion administrative & planning complet',
        'Recherche & sélection des prestataires',
        'Visites des lieux & rendez-vous accompagnés',
        'Conception décoration & scénographie',
        'Coordination logistique complète du jour J',
      ],
      image: '/offre-signature.png',
      alt: 'Offre Signature — Mariage clé en main',
      link: '/tarifs/offre-signature',
    },
    {
      title: 'Offre Élégance — Organisation partielle',
      description:
        "Pour les couples déjà lancés dans l'organisation, qui veulent être accompagnés sur des pôles clés (planning, prestataires, coordination) tout en gardant la main.",
      features: [
        'Analyse & cadrage de votre organisation',
        'Structuration administrative & planning ciblé',
        'Accompagnement prestataires sur pôles définis',
        'Conseils et rendez-vous accompagnés',
        'Coordination sur 3 à 5 pôles de votre choix',
      ],
      image: '/offre-elegance.png',
      alt: 'Offre Élégance — Organisation partielle',
      link: '/tarifs/offre-elegance',
    },
    {
      title: 'Offre Harmonie — Coordination du Jour J',
      description:
        "Pour les couples ayant organisé leur mariage eux-mêmes, qui souhaitent profiter pleinement de leur journée en déléguant la gestion du jour J à nos équipes.",
      features: [
        'Reprise complète de votre organisation existante',
        'Structuration du planning détaillé du jour J',
        'Visite technique des lieux 2-3 mois avant',
        'Coordination logistique & accueil des invités',
        'Pilotage global & gestion des imprévus',
      ],
      image: '/offre-harmonie.png',
      alt: 'Offre Harmonie — Coordination du jour J',
      link: '/tarifs/offre-harmonie',
    },
  ];

  const otherServices: ServiceItem[] = [
    {
      title: "Le Oui Parfait Shooting Tour — L'EVJF / EVG nouvelle génération à Paris",
      description:
        "Le Shooting Tour by Le Oui Parfait, c'est une journée ou demi-journée sur mesure, pensée pour offrir à la future mariée ou au futur marié une expérience unique à vivre entre proches.",
      features: ['Navette avec chauffeur ou berline de luxe', 'Shooting photo & vidéo (extérieur et/ou studio)', 'Mise en beauté & souvenirs inoubliables'],
      image: '/evg.png',
      alt: 'EVJF / EVG Shooting Tour à Paris',
      link: '/services/shooting-tour',
    },
    {
      title: 'Demande en mariage By Le Oui Parfait',
      description:
        "Parce qu'un \"veux-tu m'épouser ?\" mérite bien plus qu'un simple instant, Le Oui Parfait imagine et orchestre des demandes en fiançailles classiques ou scénarisées, pensées sur mesure selon votre histoire.",
      features: ['Décoration & ambiance romantique sur mesure', 'Coordination discrète & effet de surprise', 'Photo & vidéo souvenir (optionnel)'],
      image: '/veux-tu%20m%E2%80%99%C3%A9pouser.png',
      alt: 'Demande en mariage',
      link: '/services/demande-en-mariage',
    },
  ];

  const servicesMobileCarousel: ServiceItem[] = offers;
  const servicesMobileGrid: ServiceItem[] = otherServices;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [api, setApi] = useState<any>(null);
  const { ref: mobileCarouselRef, inView: mobileInView } = useInView({ threshold: 0.2 });

  const [otherCurrentSlide, setOtherCurrentSlide] = useState(0);
  const [otherPaused, setOtherPaused] = useState(false);
  const [otherApi, setOtherApi] = useState<any>(null);
  const { ref: otherMobileCarouselRef, inView: otherMobileInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    api.on('select', () => setCurrentSlide(api.selectedScrollSnap()));
    api.on('reInit', () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (paused) return;
    if (!mobileInView) return;
    const timer = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [api, paused, mobileInView]);

  useEffect(() => {
    if (!otherApi) return;
    if (otherPaused) return;
    if (!otherMobileInView) return;
    const timer = setInterval(() => {
      otherApi.scrollNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [otherApi, otherPaused, otherMobileInView]);

  return (
    <section
      id="services"
      className="py-20 bg-[#f4f1f7]"
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

        {/* Mobile: Auto Carousel */}
        <div
          ref={mobileCarouselRef}
          className="md:hidden relative"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <Carousel
            opts={{ loop: true, align: 'start' }}
            setApi={(emblaApi) => setApi(emblaApi)}
          >
            <CarouselContent>
              {servicesMobileCarousel.map((service, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="px-2">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {servicesMobileCarousel.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-10 h-2 bg-[#88b7b5]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au service ${index + 1}`}
              />
            ))}
          </div>

          <div
            ref={otherMobileCarouselRef}
            className="mt-10"
            onTouchStart={() => setOtherPaused(true)}
            onTouchEnd={() => setOtherPaused(false)}
          >
            <Carousel opts={{ loop: true, align: 'start' }} setApi={(emblaApi) => setOtherApi(emblaApi)}>
              <CarouselContent>
                {servicesMobileGrid.map((service, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="px-2">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-[220px] w-full">
                          <Image src={service.image} alt={service.alt} fill className="object-cover" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-baskerville text-[20px] text-[#5A5A5A] mb-2 leading-tight font-normal">
                            {service.title}
                          </h3>
                          <p className="text-[#5A5A5A] leading-relaxed mb-4 text-[15px]">
                            {service.description}
                          </p>
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
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-6">
              {servicesMobileGrid.map((_, index) => (
                <button
                  key={index}
                  onClick={() => otherApi?.scrollTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    otherCurrentSlide === index
                      ? 'w-10 h-2 bg-[#88b7b5]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au service ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet/Desktop: Stacked List */}
        <div className="hidden md:block space-y-16">
          <AnimatedSection delay={0.1} direction="up">
            <OffersServicesCarouselDesktop offers={offers} />
          </AnimatedSection>

          {otherServices.map((service, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)} direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-[400px] lg:h-[450px] overflow-hidden">
                  <Image src={service.image} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="lg:col-span-7 lg:pl-8">
                  <h3 className="font-baskerville text-[30px] text-[#5A5A5A] mb-5 leading-tight font-normal">{service.title}</h3>
                  <p className="text-[#5A5A5A] leading-relaxed mb-6 text-[17px]">{service.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
