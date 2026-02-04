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
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAF9F7] overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-[#5A5A5A] mb-6">
                  <Link href="/" className="hover:text-[#88b7b5] transition">
                    Accueil
                  </Link>
                  <span className="text-[#88b7b5]">/</span>
                  <Link href="/services" className="hover:text-[#88b7b5] transition">
                    Services
                  </Link>
                  <span className="text-[#88b7b5]">/</span>
                  <span className="text-[#88b7b5] font-medium">Gestion d'Événements</span>
                </nav>

                <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4 font-medium">Service Professionnel</p>
                <h1 className="font-baskerville text-4xl lg:text-5xl text-[#4B4456] mb-6 leading-tight">
                  Gestion d'Événements
                </h1>
                <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8 max-w-xl">
                  De la logistique aux touches finales, chaque détail reflète la perfection, l'harmonie et les émotions que vous souhaitez chérir.
                </p>
                
                {/* CTA Button */}
                <Link href="/contact">
                  <Button className="uppercase tracking-[0.15em] text-xs bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-8 py-6 font-medium transition-all shadow-lg">
                    Réserver une Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/7012244/pexels-photo-7012244.jpeg"
                    alt="Gestion d'Événements"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#88b7b5]/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#88b7b5]/10 rounded-full blur-2xl" />
              </div>
            </div>
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
                  src="wedding (1).jpg"
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
        <section className="relative py-20 lg:py-28 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/presentation.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#88b7b5] mb-4 font-medium">
                Prêt à Commencer ?
              </p>
              <h2 className="font-baskerville text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight px-2">
                Votre Mariage Mérite Une Gestion Parfaite
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Profitez pleinement de votre journée pendant que nous gérons chaque détail.
                Contactez-nous dès maintenant pour une coordination sans stress.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg hover:shadow-xl">
                    Réserver Ma Consultation
                  </Button>
                </Link>
                <Link href="tel:+33123456789" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto uppercase tracking-[0.1em] text-xs sm:text-sm bg-white text-[#4B4456] hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 font-medium transition-all shadow-lg">
                    Appeler Maintenant
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/70 text-xs sm:text-sm">
                <span>✓ Consultation gratuite</span>
                <span>✓ Réponse sous 24h</span>
                <span>✓ Sans engagement</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
