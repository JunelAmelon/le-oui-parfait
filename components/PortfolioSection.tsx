import { Button } from '@/components/ui/button';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'Sophie & Georges',
    description: 'Une célébration de luxe dans une salle de bal combinant éclairage en cristal, draperies de soie et floraux champagne élégants.',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
  },
  {
    id: 2,
    title: 'Olivia & Daniel',
    description: 'Une affaire de jardin serein mettant en vedette un charme organique, des détails florissants et des moments poétiques entourés par la nature.',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
  },
  {
    id: 3,
    title: 'Éveline & Lucas',
    description: 'Une romance pastel douce mise en valeur par un décor à la bougie, une élégance florale et des cieux étoilés du soir naturels.',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
  },
  {
    id: 4,
    title: 'Clara & Jacques',
    description: 'Une cérémonie inspirée de la côte mélangeant la simplicité moderne avec la lumière du soleil et des tons dorés inspirés de l\'océan.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Notre Portfolio</p>
            <h2 className="heading-main mb-4">
              Célébrations Intemporelles<br />Créées Avec Élégance
            </h2>
          </div>
          <p className="text-gray-600 md:max-w-md mt-4 md:mt-0">
            Chaque célébration est soigneusement conçue pour créer des souvenirs qui durent toute une vie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="uppercase tracking-wider border-[#88b7b5] text-gray-900 hover:bg-[#88b7b5] hover:text-white px-8 transition-all"
          >
            Tout le Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
