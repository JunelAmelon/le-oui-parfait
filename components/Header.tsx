'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-4 max-w-full">
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

      {/* Mobile Menu - Slide from left */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-all duration-400 ease-out z-[998] lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <nav className={`fixed left-0 top-0 h-screen w-[85%] max-w-[380px] bg-white shadow-2xl transform transition-transform duration-400 ease-out z-[999] lg:hidden overflow-y-auto flex flex-col ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 min-h-[80px] flex-shrink-0">
          <div className="flex items-center gap-1">
            <span className="text-[26px] font-serif text-[#1a1a1a] tracking-wide">Le Oui Parfait</span>
            <svg width="14" height="14" viewBox="0 0 24 24" className="text-[#88b7b5] mt-1">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all"
            aria-label="Fermer le menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
            
        {/* Menu Navigation */}
        <div className="flex-1 py-4 overflow-y-auto">
          <ul className="list-none">
            <li className={`border-b border-gray-100 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`} style={{ transitionDelay: mobileMenuOpen ? '100ms' : '0ms' }}>
              <Link 
                href="/" 
                className="flex justify-between items-center px-6 py-[18px] text-[13px] font-medium tracking-[1.5px] uppercase text-[#333] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Accueil</span>
              </Link>
            </li>
            <li className={`border-b border-gray-100 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`} style={{ transitionDelay: mobileMenuOpen ? '150ms' : '0ms' }}>
              <Link 
                href="/a-propos" 
                className="flex justify-between items-center px-6 py-[18px] text-[13px] font-medium tracking-[1.5px] uppercase text-[#333] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>À Propos</span>
              </Link>
            </li>
            <li className={`border-b border-gray-100 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`} style={{ transitionDelay: mobileMenuOpen ? '200ms' : '0ms' }}>
              <Link 
                href="/services" 
                className="flex justify-between items-center px-6 py-[18px] text-[13px] font-medium tracking-[1.5px] uppercase text-[#333] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Services</span>
                <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-[12px] text-gray-400">›</span>
              </Link>
            </li>
            <li className={`border-b border-gray-100 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`} style={{ transitionDelay: mobileMenuOpen ? '250ms' : '0ms' }}>
              <Link 
                href="/portfolio" 
                className="flex justify-between items-center px-6 py-[18px] text-[13px] font-medium tracking-[1.5px] uppercase text-[#333] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Portfolio</span>
              </Link>
            </li>
            <li className={`border-b border-gray-100 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`} style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}>
              <Link 
                href="/tarifs" 
                className="flex justify-between items-center px-6 py-[18px] text-[13px] font-medium tracking-[1.5px] uppercase text-[#333] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Tarifs</span>
              </Link>
            </li>
            <li className={`border-b border-gray-100 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`} style={{ transitionDelay: mobileMenuOpen ? '350ms' : '0ms' }}>
              <Link 
                href="/contact" 
                className="flex justify-between items-center px-6 py-[18px] text-[13px] font-medium tracking-[1.5px] uppercase text-[#333] hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Menu Footer */}
        <div className={`p-6 border-t border-gray-200 flex-shrink-0 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`} style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}>
          <Link href="/contact" className="flex items-center gap-2 text-[13px] text-gray-600">
            <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            Contactez-nous pour réserver
          </Link>
        </div>
      </nav>
    </header>
  );
}
