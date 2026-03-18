import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface HeroPageProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function HeroPage({ title, subtitle, backgroundImage }: HeroPageProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#f4f1f7] overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-20">
        <div className="w-full h-full rounded-full bg-[#88b7b5]/30 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
        <div className="w-full h-full rounded-full bg-[#88b7b5]/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <nav className={`flex items-center gap-2 text-sm mb-6 ${backgroundImage ? 'text-white/70' : 'text-[#5A5A5A]'}`}>
            <Link href="/" className={`transition ${backgroundImage ? 'hover:text-white' : 'hover:text-[#88b7b5]'}`}>
              Accueil
            </Link>
            <span className={`${backgroundImage ? 'text-white/40' : 'text-[#88b7b5]'}`}>/</span>
            <span className={`${backgroundImage ? 'text-white' : 'text-[#88b7b5]'} font-medium`}>{title}</span>
          </nav>

          <h1 className={`font-baskerville text-4xl lg:text-6xl mb-6 leading-tight ${backgroundImage ? 'text-white' : 'text-[#4B4456]'}`}>
            {title}
          </h1>

          {subtitle && (
            <p className={`text-lg leading-relaxed max-w-2xl ${backgroundImage ? 'text-white/70' : 'text-[#4B4456]/80'}`}>
              {subtitle}
            </p>
          )}

          <div className={`mt-8 w-20 h-[3px] ${backgroundImage ? 'bg-[#88b7b5]' : 'bg-[#88b7b5]'}`} />
        </div>
      </div>
    </section>
  );
}
