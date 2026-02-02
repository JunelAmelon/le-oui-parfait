import Image from 'next/image';

export function TimelineSection() {
  const timelineData = [
    {
      year: "2015",
      title: "Le Bellavue Entame Son Voyage",
      description: "Nous avons commencé à aider les couples à s'y retrouver dans la complexité de l'organisation de leur mariage.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      imagePosition: "top"
    },
    {
      year: "2018",
      title: "Le Meilleur Urbaniste Régional Remporte Un Prix",
      description: "Notre équipe a reçu un prix majeur de l'industrie du design pour son excellence créative.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      imagePosition: "bottom"
    },
    {
      year: "2021",
      title: "L'événement Destination Events A Été Lancé",
      description: "Nous avons lancé des services pour les lieux romantiques à travers l'Europe.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      imagePosition: "top"
    },
    {
      year: "2024",
      title: "Mille Mariages Construits",
      description: "Nous continuons d'innover tout en restant fidèles à notre engagement de vous servir avec amour.",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      imagePosition: "bottom"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#f5f3f0]">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        {/* Titre principal */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="heading-main" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            Créer Des Souvenirs<br className="hidden lg:block" /> Intemporels Depuis 2015
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
              <div className="text-5xl lg:text-[3.5rem] text-[#6b9b9e] mb-5 font-normal" style={{ fontFamily: "'Libre Baskerville', serif" }}>
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
