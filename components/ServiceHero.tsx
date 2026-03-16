import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  image: string;
  breadcrumbLabel: string;
}

export function ServiceHero({ title, eyebrow, subtitle, image, breadcrumbLabel }: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAF9F7] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-[#88b7b5]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[620px] h-[620px] bg-[#4B4456]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="flex items-center gap-2 text-sm text-[#5A5A5A] mb-6">
              <Link href="/" className="hover:text-[#88b7b5] transition">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4 text-[#88b7b5]" />
              <Link href="/services" className="hover:text-[#88b7b5] transition">
                Services
              </Link>
              <ChevronRight className="w-4 h-4 text-[#88b7b5]" />
              <span className="text-[#88b7b5] font-medium">{breadcrumbLabel}</span>
            </nav>

            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.25em] text-[#88b7b5] mb-4 font-medium">
                {eyebrow}
              </p>
            )}

            <h1 className="font-baskerville text-4xl lg:text-5xl text-[#4B4456] mb-6 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8 max-w-xl">
                {subtitle}
              </p>
            )}

            <Link href="/contact">
              <Button className="uppercase tracking-[0.15em] text-xs bg-[#88b7b5] text-white hover:bg-[#6a9a98] rounded-full px-8 py-6 font-medium transition-all shadow-lg">
                Réserver une Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={image} alt={title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#88b7b5]/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#88b7b5]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
