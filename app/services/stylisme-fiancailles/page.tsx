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
                  <span className="text-[#88b7b5] font-medium">Stylisme de Fiançailles</span>
                </nav>

                <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4 font-medium">Service Créatif</p>
                <h1 className="font-baskerville text-4xl lg:text-5xl text-[#4B4456] mb-6 leading-tight">
                  Stylisme de Fiançailles
                </h1>
                <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8 max-w-xl">
                  Des moments de fiançailles romantiques remplis d'élégance, de créativité et d'une narration visuelle inoubliable.
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
                    src="https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg"
                    alt="Stylisme de Fiançailles"
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
                Célébrez Votre Amour Avec Élégance
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Transformons vos fiançailles en un moment magique et inoubliable.
                Contactez-nous pour créer une célébration qui raconte votre histoire d'amour.
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
