'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-serif text-[#5A5A5A]">Le Oui Parfait</span>
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-[#88b7b5] mt-1">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
            </svg>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-xs uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Accueil
            </Link>
            <Link href="/a-propos" className="text-xs uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              À Propos
            </Link>
            <Link href="/services" className="text-xs uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Services
            </Link>
            <Link href="/portfolio" className="text-xs uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Portfolio
            </Link>
            <Link href="/tarifs" className="text-xs uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Tarifs
            </Link>
            <Link href="/contact" className="text-xs uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="uppercase tracking-wider text-xs border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white rounded-full px-8 transition-all"
            >
              Réserver
            </Button>
          </div>

          <button
            className="lg:hidden text-[#88b7b5]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-sm uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Accueil
            </Link>
            <Link href="/a-propos" className="block text-sm uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              À Propos
            </Link>
            <Link href="/services" className="block text-sm uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Services
            </Link>
            <Link href="/portfolio" className="block text-sm uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Portfolio
            </Link>
            <Link href="/tarifs" className="block text-sm uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Tarifs
            </Link>
            <Link href="/contact" className="block text-sm uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition">
              Contact
            </Link>
            <Button
              variant="outline"
              className="w-full uppercase tracking-wider text-sm border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white rounded-full transition-all"
            >
              Réserver
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
