import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, breadcrumbs, backgroundImage = 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1920' }: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#E3DCEB] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-20">
        <div className="w-full h-full rounded-full bg-[#88b7b5]/30 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
        <div className="w-full h-full rounded-full bg-[#88b7b5]/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#4B4456]/70 mb-6">
              <Link href="/" className="hover:text-[#88b7b5] transition">
                Accueil
              </Link>
              {breadcrumbs?.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  <Link href={crumb.href} className="hover:text-[#88b7b5] transition">
                    {crumb.label}
                  </Link>
                </span>
              ))}
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#4B4456]">{title}</span>
            </nav>

            {/* Title */}
            <h1 className="font-baskerville text-4xl lg:text-5xl text-[#4B4456] mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg text-[#4B4456]/80 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}

            {/* Decorative Line */}
            <div className="mt-8 w-20 h-[3px] bg-[#88b7b5]" />
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={backgroundImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
