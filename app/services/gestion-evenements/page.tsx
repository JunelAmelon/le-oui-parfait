import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ClipboardList, Clock, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GestionEvenementsPage() {
  const features = [
    {
      icon: ClipboardList,
      title: 'Coordination Sur Site',
      description: 'Présence et gestion complète de tous les aspects logistiques le jour de l\'événement'
    },
    {
      icon: Clock,
      title: 'Organisation du Calendrier',
      description: 'Planification minutieuse et respect du timing pour un déroulement parfait'
    },
    {
      icon: Shield,
      title: 'Exécution Sans Stress',
      description: 'Gestion proactive des imprévus pour une tranquillité d\'esprit totale'
    },
    {
      icon: Zap,
      title: 'Réactivité Professionnelle',
      description: 'Solutions rapides et efficaces pour tous les défis qui peuvent survenir'
    }
  ];

  const eventTypes = [
    {
      title: 'Mariages',
      description: 'Coordination complète de votre journée de mariage',
      image: 'https://images.pexels.com/photos/7012244/pexels-photo-7012244.jpeg'
    },
    {
      title: 'Réceptions',
      description: 'Organisation de réceptions élégantes et mémorables',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80'
    },
    {
      title: 'Événements Corporatifs',
      description: 'Gestion professionnelle d\'événements d\'entreprise',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
    },
    {
      title: 'Célébrations Privées',
      description: 'Coordination d\'événements familiaux et célébrations',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80'
    }
  ];

  const responsibilities = [
    'Supervision complète le jour de l\'événement',
    'Coordination de tous les fournisseurs',
    'Gestion du calendrier et du timing',
    'Installation et mise en place',
    'Résolution de problèmes en temps réel',
    'Communication avec les invités et prestataires',
    'Coordination de la cérémonie et réception',
    'Démontage et coordination post-événement'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/7012244/pexels-photo-7012244.jpeg"
              alt="Gestion d'Événements"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.2em] mb-4">Service Professionnel</p>
            <h1 className="font-serif text-5xl lg:text-6xl mb-6">
              Gestion d'Événements
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto font-light">
              De la logistique aux touches finales, chaque détail reflète<br className="hidden lg:block" />
              la perfection, l'harmonie et les émotions que vous souhaitez chérir
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A5A] mb-4">Excellence Opérationnelle</p>
                <h2 className="heading-main mb-6">
                  Une Exécution<br />
                  Impeccable
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-6">
                  La gestion d'événements requiert une expertise professionnelle, une attention aux 
                  détails et une capacité à anticiper et résoudre les défis. Notre équipe expérimentée 
                  assure que chaque aspect de votre événement se déroule sans accroc.
                </p>
                <p className="text-[#5A5A5A] leading-relaxed">
                  Nous coordonnons tous les éléments logistiques, gérons les fournisseurs et veillons 
                  à ce que votre vision devienne réalité, vous permettant de profiter pleinement de 
                  votre événement sans aucun souci.
                </p>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800&q=80"
                  alt="Coordination d'événement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="heading-main mb-4">
                Notre Approche Professionnelle
              </h2>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Une gestion complète pour des événements parfaitement orchestrés
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow">
                  <feature.icon className="h-10 w-10 text-[#88b7b5] mb-4" />
                  <h3 className="font-serif text-2xl text-[#5A5A5A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5A5A5A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="heading-main mb-4">
                Types d'Événements
              </h2>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Nous gérons une variété d'événements avec la même excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventTypes.map((type, index) => (
                <div key={index} className="group">
                  <div className="relative h-[300px] mb-4 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-[#5A5A5A] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-[#5A5A5A]">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80"
                  alt="Gestion professionnelle"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="heading-main mb-8">
                  Nos Responsabilités
                </h2>
                <div className="space-y-4">
                  {responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-[#88b7b5] flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A5A5A]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link href="/contact">
                    <Button
                      className="uppercase tracking-[0.15em] text-xs bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-8 py-6 font-medium transition-all"
                    >
                      Demander un Devis <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="mb-8">
              <svg className="h-12 w-12 text-[#88b7b5] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="font-serif text-2xl text-[#5A5A5A] mb-6 leading-relaxed">
              "L'équipe de Le Oui Parfait a géré notre mariage avec une telle professionnalisme 
              et attention aux détails. Nous avons pu profiter pleinement de notre journée sans 
              aucun stress. Tout était parfait !"
            </p>
            <p className="text-[#5A5A5A] font-medium">Sophie & Marc</p>
            <p className="text-sm text-[#5A5A5A]">Mariage - Juin 2024</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#88b7b5] text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Votre Mariage Mérite Une Gestion Parfaite
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Profitez pleinement de votre journée pendant que nous gérons chaque détail.<br className="hidden lg:block" />
              Contactez-nous pour une coordination sans stress de votre mariage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  className="uppercase tracking-[0.15em] text-xs bg-white text-[#88b7b5] hover:bg-gray-100 rounded-full px-8 py-6 font-medium transition-all"
                >
                  Nous Contacter
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="uppercase tracking-[0.15em] text-xs border-2 border-white bg-white text-[#88b7b5] hover:bg-gray-100 rounded-full px-8 py-6 font-medium transition-all"
                >
                  Voir Tous les Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
