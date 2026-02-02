import Image from 'next/image';

interface HeroPageProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function HeroPage({ title, subtitle, backgroundImage }: HeroPageProps) {
  return (
    <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#88b7b5] via-[#6a9a98] to-[#5a8a88]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-[2px] bg-white/80 mx-auto" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
          <div className="inline-block mt-6">
            <div className="w-16 h-[2px] bg-white/80 mx-auto" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
