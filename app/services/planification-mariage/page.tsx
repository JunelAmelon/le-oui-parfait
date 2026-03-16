import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Calendar, Users, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceHero } from '@/components/ServiceHero';

export default function PlanificationMariagePage() {
  const features = [
    {
      icon: Calendar,
      title: 'Coordination Élégante',
      description: 'Gestion complète de votre calendrier et de tous les détails de votre journée spéciale'
    },
    {
      icon: Users,
      title: 'Gestion des Fournisseurs',
      description: 'Sélection et coordination des meilleurs prestataires pour votre mariage'
    },
    {
      icon: Heart,
      title: 'Planification Personnalisée',
      description: 'Un service sur mesure qui reflète votre histoire et vos désirs'
    },
    {
      icon: Sparkles,
      title: 'Attention aux Détails',
      description: 'Chaque élément est pensé pour créer une expérience inoubliable'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation Initiale',
      description: 'Rencontre pour comprendre votre vision, vos attentes et votre budget'
    },
    {
      step: '02',
      title: 'Conception & Planification',
      description: 'Création d\'un plan détaillé et sélection des fournisseurs'
    },
    {
      step: '03',
      title: 'Coordination',
      description: 'Gestion de tous les aspects logistiques et communication avec les prestataires'
    },
    {
      step: '04',
      title: 'Le Jour J',
      description: 'Supervision complète pour que vous puissiez profiter pleinement de votre mariage'
    }
  ];

  const includes = [
    'Consultation illimitée jusqu\'au jour du mariage',
    'Recherche et sélection de fournisseurs',
    'Gestion du budget et des paiements',
    'Création du calendrier détaillé',
    'Coordination des répétitions',
    'Supervision complète le jour J',
    'Gestion des imprévus',
    'Coordination post-événement'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHero
          title="Planification de Mariage"
          eyebrow="Service Premium"
          subtitle="Un service de coordination complet qui garantit que votre journée spéciale se déroule magnifiquement du début à la fin."
          image="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg"
          breadcrumbLabel="Planification de Mariage"
        />

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A5A] mb-4">Notre Approche</p>
                <h2 className="heading-main mb-6">
                  Votre Mariage de Rêve,<br />
                  Sans le Stress
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-6">
                  Organiser un mariage peut être accablant. C'est pourquoi nous sommes là pour transformer 
                  cette expérience en un voyage joyeux et sans stress. Notre équipe dévouée s'occupe de 
                  chaque détail, vous permettant de savourer chaque moment de cette période magique.
                </p>
                <p className="text-[#5A5A5A] leading-relaxed">
                  De la première consultation jusqu'au dernier invité qui quitte la réception, nous 
                  orchestrons chaque élément avec précision, élégance et une attention particulière à 
                  vos souhaits uniques.
                </p>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                  alt="Coordination de mariage"
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
                Ce Qui Rend Notre Service Unique
              </h2>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Une approche complète et personnalisée pour créer le mariage de vos rêves
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

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="heading-main mb-4">
                Notre Processus
              </h2>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Un parcours structuré en quatre étapes pour garantir la perfection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-6xl text-[#88b7b5] mb-4 opacity-30">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl text-[#5A5A5A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
                  alt="Services inclus"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="heading-main mb-8">
                  Ce Qui Est Inclus
                </h2>
                <div className="space-y-4">
                  {includes.map((item, index) => (
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
                Votre Mariage de Rêve Commence Ici
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Planifions ensemble votre journée parfaite. Contactez-nous pour une consultation
                gratuite et créons le mariage dont vous avez toujours rêvé.
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
