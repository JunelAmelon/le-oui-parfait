import Image from 'next/image';
import Link from 'next/link';

interface ServiceHeroProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image: string;
  breadcrumbLabel: string;
}

export function ServiceHero({ title, eyebrow, subtitle, image, breadcrumbLabel }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[65vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pb-16 pt-40">
        <div className="flex items-center gap-2 text-white/50 text-[11px] uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-white transition">Accueil</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <span>/</span>
          <span className="text-white">{breadcrumbLabel}</span>
        </div>
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4 font-medium">{eyebrow}</p>
          )}
          <h1 className="font-baskerville text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
