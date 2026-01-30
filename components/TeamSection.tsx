import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ethan William',
    title: 'Planificateur Principal d\'Événements',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    name: 'Amelia Rose',
    title: 'Directrice de Création Design',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
  },
  {
    name: 'Lucas Heyes',
    title: 'Spécialiste Logistique de Lieu',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
  {
    name: 'Sophie Lane',
    title: 'Gestionnaire d\'Expérience Client',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-[#F5F3F1]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-4">
            ÉQUIPE LE OUI PARFAIT
          </p>
          <h2 className="heading-main">
            Rencontrez les Cœurs Derrière<br />Le Oui Parfait Planner
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden bg-[#C5B8C1]">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-[30%] opacity-90"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="font-serif text-[19px] text-[#5A5A5A]">
                  {member.name}
                </h3>
                <div className="flex gap-1">
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full border border-[#88b7b5] flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={`${member.name} Instagram`}
                  >
                    <Instagram className="w-3 h-3 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full border border-[#88b7b5] flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-3 h-3 text-gray-600" />
                  </a>
                </div>
              </div>

              <p className="text-[13px] text-gray-500">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
