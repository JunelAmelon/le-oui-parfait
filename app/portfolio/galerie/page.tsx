import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroPage } from '@/components/HeroPage';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Shooting éditorial — Studio',
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg',
  },
  {
    id: 2,
    title: 'Portraits — Lumière naturelle',
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg',
  },
  {
    id: 3,
    title: 'Détails — Accessoires',
    image: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
  },
  {
    id: 4,
    title: 'Cérémonie — Émotion',
    image: 'https://images.pexels.com/photos/3171762/pexels-photo-3171762.jpeg',
  },
  {
    id: 5,
    title: 'Réception — Ambiance',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
  },
  {
    id: 6,
    title: 'Collaboration — Artistique',
    image: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
  },
  {
    id: 7,
    title: 'Portraits — Noir & blanc',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  },
  {
    id: 8,
    title: 'Shooting — Lifestyle',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
  },
  {
    id: 9,
    title: 'Éditorial — Composition',
    image: 'https://images.pexels.com/photos/1483921/pexels-photo-1483921.jpeg',
  },
  {
    id: 10,
    title: 'Collaboration — Créative',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
  },
  {
    id: 11,
    title: 'Shooting — Outdoor',
    image: 'https://images.pexels.com/photos/1485731/pexels-photo-1485731.jpeg',
  },
  {
    id: 12,
    title: 'Portrait — Fashion',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
  },
];

export default function GaleriePortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroPage
          title="Galerie"
          subtitle="Découvrez nos projets créatifs et professionnels — shootings photos, portraits et collaborations artistiques"
          backgroundImage="wedding (6).jpg"
        />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {galleryItems.map((item, index) => {
                const colSpan = index % 10 === 0 ? 'lg:col-span-7' : index % 10 === 1 ? 'lg:col-span-5' : index % 10 === 2 ? 'lg:col-span-4' : index % 10 === 3 ? 'lg:col-span-8' : index % 10 === 4 ? 'lg:col-span-6' : index % 10 === 5 ? 'lg:col-span-6' : index % 10 === 6 ? 'lg:col-span-5' : index % 10 === 7 ? 'lg:col-span-7' : index % 10 === 8 ? 'lg:col-span-8' : 'lg:col-span-4';
                const heightClass = index % 10 === 0 ? 'h-[440px]' : index % 10 === 1 ? 'h-[440px]' : index % 10 === 2 ? 'h-[340px]' : index % 10 === 3 ? 'h-[340px]' : index % 10 === 4 ? 'h-[380px]' : index % 10 === 5 ? 'h-[380px]' : index % 10 === 6 ? 'h-[360px]' : index % 10 === 7 ? 'h-[360px]' : index % 10 === 8 ? 'h-[420px]' : 'h-[320px]';

                return (
                  <div key={item.id} className={`group relative overflow-hidden rounded-3xl ${colSpan} ${heightClass} bg-[#f4f1f7] shadow-[0_18px_45px_rgba(25,20,33,0.10)]`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
                    <div className="absolute left-6 bottom-6 right-6">
                      <p className="text-white/70 text-[11px] uppercase tracking-[0.22em]">Travaux créatifs</p>
                      <h3 className="font-baskerville text-white text-2xl mt-2 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
