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
      </div>

      {/* Mobile Menu - Slide from right */}
      <div className={`fixed inset-0 z-[100] lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`fixed right-0 top-0 h-full w-80 bg-[#FAF9F7] shadow-2xl transform transition-transform duration-300 ease-in-out z-[101] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full bg-[#FAF9F7]">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-300 bg-[#FAF9F7]">
              <div className="flex items-center gap-1">
                <span className="text-xl font-serif text-[#5A5A5A]">Le Oui Parfait</span>
                <svg width="14" height="14" viewBox="0 0 24 24" className="text-[#88b7b5] mt-1">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <button
                className="text-[#88b7b5]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Menu Items */}
            <nav className="flex-1 p-6 space-y-6 bg-[#FAF9F7]">
              <Link 
                href="/" 
                className="block text-lg uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/a-propos" 
                className="block text-lg uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                href="/services" 
                className="block text-lg uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-lg uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/tarifs" 
                className="block text-lg uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                href="/contact" 
                className="block text-lg uppercase tracking-wider text-[#5A5A5A] hover:text-[#88b7b5] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            {/* Menu Footer */}
            <div className="p-6 border-t border-gray-300 bg-[#FAF9F7]">
              <Button
                variant="outline"
                className="w-full uppercase tracking-wider text-sm border-[#88b7b5] text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white rounded-full transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Réserver
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
