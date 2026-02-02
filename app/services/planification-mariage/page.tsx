import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Calendar, Users, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg"
              alt="Planification de Mariage"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.2em] mb-4">Service Premium</p>
            <h1 className="font-serif text-5xl lg:text-6xl mb-6">
              Planification de Mariage
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto font-light">
              Un service de coordination complet qui garantit que votre journée spéciale<br className="hidden lg:block" />
              se déroule magnifiquement du début à la fin
            </p>
          </div>
        </section>

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
        <section className="py-20 bg-[#88b7b5] text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Votre Mariage de Rêve Commence Ici
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Planifions ensemble votre journée parfaite. Contactez-nous pour une consultation<br className="hidden lg:block" />
              gratuite et créons le mariage dont vous avez toujours rêvé
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
