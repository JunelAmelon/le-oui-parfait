import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
  backgroundImage?: string;
}

export function PageHero({ title, breadcrumbs, backgroundImage = 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920' }: PageHeroProps) {
  return (
    <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6 uppercase tracking-wide">
          {title}
        </h1>

        <nav className="flex items-center justify-center gap-2 text-white/90">
          <Link href="/" className="hover:text-[#88b7b5] transition text-sm uppercase tracking-wider">
            Accueil
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white text-sm uppercase tracking-wider">{title}</span>
        </nav>
      </div>
    </section>
  );
}
