import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Palette, Camera, Lightbulb, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function StylismeFiancaillesPage() {
  const features = [
    {
      icon: Palette,
      title: 'Création de Thème Romantique',
      description: 'Des concepts uniques qui reflètent votre histoire d\'amour et votre personnalité'
    },
    {
      icon: Camera,
      title: 'Stylisme Visuel Signature',
      description: 'Des mises en scène photographiques qui capturent l\'essence de votre engagement'
    },
    {
      icon: Lightbulb,
      title: 'Design d\'Ambiance Réfléchi',
      description: 'Création d\'atmosphères intimes et mémorables pour votre célébration'
    },
    {
      icon: Star,
      title: 'Expérience Personnalisée',
      description: 'Chaque détail est pensé pour raconter votre histoire unique'
    }
  ];

  const services = [
    'Consultation créative et développement du concept',
    'Sélection de la palette de couleurs et des matériaux',
    'Coordination avec photographe et vidéaste',
    'Stylisme floral et décoration',
    'Mise en place et installation complète',
    'Accessoires et éléments décoratifs personnalisés',
    'Création de tableaux de mariage',
    'Coordination le jour de l\'événement'
  ];

  const inspirations = [
    {
      title: 'Romantique Classique',
      description: 'Élégance intemporelle avec des touches délicates',
      image: 'https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg'
    },
    {
      title: 'Moderne Minimaliste',
      description: 'Lignes épurées et sophistication contemporaine',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80'
    },
    {
      title: 'Bohème Chic',
      description: 'Naturel et décontracté avec une touche d\'élégance',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg"
              alt="Stylisme de Fiançailles"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.2em] mb-4">Service Créatif</p>
            <h1 className="font-serif text-5xl lg:text-6xl mb-6">
              Stylisme de Fiançailles
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto font-light">
              Des moments de fiançailles romantiques remplis d\'élégance,<br className="hidden lg:block" />
              de créativité et d\'une narration visuelle inoubliable
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                  alt="Décoration de fiançailles"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#5A5A5A] mb-4">Notre Vision</p>
                <h2 className="heading-main mb-6">
                  Racontez Votre Histoire<br />
                  Avec Élégance
                </h2>
                <p className="text-[#5A5A5A] leading-relaxed mb-6">
                  Vos fiançailles marquent le début d'un nouveau chapitre. Nous créons des expériences 
                  visuelles qui capturent l'essence de votre amour et créent des souvenirs que vous 
                  chérirez pour toujours.
                </p>
                <p className="text-[#5A5A5A] leading-relaxed">
                  Notre approche combine créativité artistique et attention aux détails pour concevoir 
                  des célébrations de fiançailles qui vous ressemblent vraiment. Chaque élément est 
                  soigneusement sélectionné pour raconter votre histoire unique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="heading-main mb-4">
                Notre Expertise Créative
              </h2>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Des services de stylisme qui transforment vos rêves en réalité visuelle
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

        {/* Inspirations Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="heading-main mb-4">
                Styles & Inspirations
              </h2>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Découvrez quelques-uns de nos styles signature pour votre célébration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inspirations.map((item, index) => (
                <div key={index} className="group">
                  <div className="relative h-[400px] mb-4 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-[#5A5A5A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5A5A5A]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-20 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-main mb-8">
                  Services Inclus
                </h2>
                <div className="space-y-4">
                  {services.map((item, index) => (
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
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                  alt="Stylisme créatif"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#88b7b5] text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Célébrez Votre Amour Avec Élégance
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Transformons vos fiançailles en un moment magique et inoubliable.<br className="hidden lg:block" />
              Contactez-nous pour créer une célébration qui raconte votre histoire d'amour
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  className="uppercase tracking-[0.15em] text-xs bg-white text-[#88b7b5] hover:bg-gray-100 rounded-full px-8 py-6 font-medium transition-all"
                >
                  Nous Contacter
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="uppercase tracking-[0.15em] text-xs border-2 border-white bg-white text-[#88b7b5] hover:bg-gray-100 rounded-full px-8 py-6 font-medium transition-all"
                >
                  Voir Notre Portfolio
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
