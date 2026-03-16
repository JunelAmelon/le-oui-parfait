import Image from 'next/image';

export function TimelineSection() {
  const timelineData = [
    {
      year: "2020",
      title: "Les Premières Bases D'Une Vision",
      description: "Formée aux exigences de l'univers du mariage et de l'événementiel, la fondatrice développe très tôt une sensibilité particulière pour l'esthétique, l'émotion et l'expérience client.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      imagePosition: "top"
    },
    {
      year: "2022",
      title: "Au Cœur D'Une Première Aventure Entrepreneuriale",
      description: "Elle rejoint ensuite, aux côtés de plusieurs associés, une première structure dans l'univers du mariage. Cette expérience de terrain, à la fois riche et formatrice, contribue à affiner sa méthode et sa vision.",
      image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
      imagePosition: "bottom"
    },
    {
      year: "2024",
      title: "Une Signature Plus Personnelle S'Affirme",
      description: "Animée par l'envie d'aller plus loin, la fondatrice poursuit son évolution à travers de nouveaux perfectionnements, notamment dans l'univers du wedding design, afin de développer une approche encore plus raffinée, cohérente et actuelle.",
      image: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
      imagePosition: "top"
    },
    {
      year: "2026",
      title: "Naissance Du Oui Parfait",
      description: "Forte de son parcours, la fondatrice choisit en 2026 de donner vie à « Le Oui Parfait ». Implantée avec des bureaux à Paris et un showroom dans l'Essonne, la marque est pensée pour offrir un accompagnement élégant, humain et parfaitement structuré. Cette même année marque également le lancement de son réseau de franchisés.",
      image: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg",
      imagePosition: "bottom"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#f5f3f0]">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        {/* Titre principal */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="heading-main" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            Créer Des Souvenirs<br className="hidden lg:block" /> Intemporels Depuis 2020
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image en haut */}
              {item.imagePosition === "top" && (
                <div className="relative w-full h-[200px] mb-5">
                  <Image
                    src={item.image}
                    alt={`${item.title} ${item.year}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Année */}
              <div className="font-baskerville text-5xl lg:text-[3.5rem] text-[#6b9b9e] mb-5 font-normal">
                {item.year}
              </div>

              {/* Titre */}
              <h3 className="text-xl lg:text-[1.4rem] text-gray-800 leading-snug mb-4 font-normal" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-[0.95rem] text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {item.description}
              </p>

              {/* Image en bas */}
              {item.imagePosition === "bottom" && (
                <div className="relative w-full h-[180px] lg:h-[200px] mt-auto">
                  <Image
                    src={item.image}
                    alt={`${item.title} ${item.year}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
