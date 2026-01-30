'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F3F1]">
      <div className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6 leading-tight">
            Restez Inspiré Avec Les Moments<br />Mariage & Fiançailles Le Oui Parfait
          </h2>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="px-6 py-3 w-full sm:w-96 border border-gray-300 rounded-full text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 border border-[#88b7b5] rounded-full text-sm uppercase tracking-wider text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
            >
              S'abonner
            </button>
          </form>
          <p className="text-sm text-gray-500">
            Recevez des conseils de planification et des offres exclusives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <h3 className="font-serif text-3xl text-gray-800">Le Oui Parfait</h3>
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-purple-300">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              930 Palma Lane Suite 500 Larkinhaven
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-4 text-lg">Entreprise</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Équipe d'Experts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Avis Clients
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Travailler Avec Nous
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-4 text-lg">Informations Légales</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center md:text-left">
            Copyright &copy; 2025 Le Oui Parfait Template Kit | Designed by Deverust Studio
          </p>
          <button
            onClick={scrollToTop}
            className="absolute right-0 top-8 md:top-6 w-12 h-12 rounded-full border border-[#88b7b5] flex items-center justify-center text-[#88b7b5] hover:bg-[#88b7b5] hover:text-white transition-all duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex scrolling-banner">
          <div className="flex gap-0 flex-shrink-0">
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 4"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 5"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 6"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex gap-0 flex-shrink-0" aria-hidden="true">
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 4"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 5"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-64 h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Moment mariage 6"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
