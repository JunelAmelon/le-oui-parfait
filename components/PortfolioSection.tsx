import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from './AnimatedSection';

const portfolioItems = [
  {
    id: 1,
    title: 'Sophie & Georges',
    description: 'Célébration de luxe en salle de bal avec éclairage cristal et floraux champagne.',
    image: '/mariage-réalisés (3).JPG',
  },
  {
    id: 2,
    title: 'Olivia & Daniel',
    description: 'Mariage de jardin serein avec charme organique et détails florissants uniques.',
    image: '/mariage-réalisés (2).JPG',
  },
  {
    id: 3,
    title: 'Éveline & Lucas',
    description: 'Romance pastel douce avec décor à la bougie et élégance florale raffinée.',
    image: '/mariage-réalisés (1).JPG',
  },
  {
    id: 4,
    title: 'Clara & Jacques',
    description: 'Cérémonie côtière avec simplicité moderne et tons dorés inspirés océan.',
    image: '/mariage-réalisés (4).JPG',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Nos Réalisations</p>
              <h2 className="heading-main mb-4">
                Mariages Réalisés<br />Avec Élégance
              </h2>
            </div>
            <p className="text-gray-600 md:max-w-md mt-4 md:mt-0 text-center md:text-left">
              Quelques projets sélectionnés, conçus avec exigence et une attention extrême aux détails.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={0.1 * index} direction="up">
              <div className="group">
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-baskerville text-2xl text-gray-900 mb-2 group-hover:text-[#88b7b5] transition-colors duration-300 text-center md:text-left">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center md:text-left">{item.description}</p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full uppercase tracking-[0.15em] text-xs border-2 border-[#88b7b5] text-[#5A5A5A] hover:bg-[#88b7b5] hover:text-white rounded-full px-6 py-4 font-medium transition-all"
                  >
                    Voir Détails
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button
              variant="link"
              className="uppercase tracking-[0.15em] text-[11px] text-[#88b7b5] hover:text-[#6a9a98] px-6 py-5 font-medium underline underline-offset-4"
            >
              Tout le Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
