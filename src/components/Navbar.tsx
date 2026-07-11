/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import {
  Menu,
  X,
  Compass,
  Phone,
  Sparkles,
  ChevronDown,
  Building,
  Hammer,
  Palette,
  Laptop,
  Armchair,
  Wrench
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectService: (id: string) => void;
  onSelectSection: (id: string) => void;
}

export default function Navbar({ onOpenConsultation, onSelectService, onSelectSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background change
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const divisions = [
    { label: 'Realty', id: 'homeworks-realty', href: '#homeworks-realty', icon: Building, desc: 'Agen Properti & Legalitas Aman' },
    { label: 'Engineering', id: 'homeworks-engineering', href: '#homeworks-engineering', icon: Compass, desc: 'Konsultan Teknik Sipil & Struktur' },
    { label: 'Build', id: 'homeworks-build', href: '#homeworks-build', icon: Hammer, desc: 'Kontraktor & Renovasi SNI' },
    { label: 'Interior', id: 'homeworks-interior', href: '#homeworks-interior', icon: Palette, desc: 'Desain Interior Kustom & Furniture' },
    { label: 'Clean', id: 'homeworks-clean', href: '#homeworks-clean', icon: Sparkles, desc: 'Deep Cleaning Profesional & Steril' },
    { label: 'Care', id: 'homeworks-care', href: '#homeworks-care', icon: Wrench, desc: 'Perbaikan Teknis & Perawatan Properti' },
    { label: 'SofaWorks', id: 'sofaworks', href: '#sofaworks', icon: Laptop, desc: 'Coworking Space Modern' },
    { label: 'Raja Sofa', id: 'raja-sofa', href: '#raja-sofa', icon: Armchair, desc: 'Sofa Kustom Mewah Berkualitas' },
  ];

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-brand-beige/85 backdrop-blur-xl border-b border-brand-bronze/10 py-3.5 shadow-md luxury-glow'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          id="scroll-progress-bar"
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-brand-bronze via-[#E5C185] to-brand-bronze transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('home');
            }}
            className="flex items-center gap-3 transition-all duration-500 hover:opacity-90 group"
          >
            <Logo scrolled={scrolled} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              id="nav-link-about"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('about');
              }}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group py-1.5 ${
                scrolled
                  ? 'text-brand-charcoal/80 hover:text-brand-bronze'
                  : 'text-brand-beige/80 hover:text-brand-beige'
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-bronze transition-all duration-300 group-hover:w-full" />
            </a>

            {/* DIVISI Dropdown Menu */}
            <div
              className="relative py-3"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                id="nav-link-divisi"
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-1 cursor-pointer py-1.5 ${
                  scrolled
                    ? 'text-brand-charcoal/80 hover:text-brand-bronze'
                    : 'text-brand-beige/80 hover:text-brand-beige'
                }`}
              >
                Divisi
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    id="divisions-dropdown-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-brand-beige border border-brand-bronze/15 rounded-2xl p-4 shadow-2xl z-50 backdrop-blur-md bg-opacity-95"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest uppercase text-brand-bronze/70 block mb-2 px-2">
                        PILIH DIVISI HOMEWORKS
                      </span>
                      {divisions.map((div) => {
                        const Icon = div.icon;
                        return (
                          <button
                            id={`dropdown-item-${div.id}`}
                            key={div.id}
                            onClick={() => {
                              onSelectService(div.id);
                              setDropdownOpen(false);
                            }}
                            className="w-full text-left p-2 hover:bg-brand-bronze/10 rounded-xl transition-all duration-300 flex items-center gap-3 group/item cursor-pointer"
                          >
                            <div className="p-2 bg-brand-bronze/10 text-brand-bronze rounded-lg group-hover/item:bg-brand-bronze group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-brand-charcoal group-hover/item:text-brand-bronze transition-colors">
                                {div.label}
                              </p>
                              <p className="text-[10px] text-brand-charcoal/60 line-clamp-1">
                                {div.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <a
              id="nav-link-faq"
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('faq');
              }}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group py-1.5 ${
                scrolled
                  ? 'text-brand-charcoal/80 hover:text-brand-bronze'
                  : 'text-brand-beige/80 hover:text-brand-beige'
              }`}
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-bronze transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              id="nav-link-contact"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onSelectSection('contact');
              }}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group py-1.5 ${
                scrolled
                  ? 'text-brand-charcoal/80 hover:text-brand-bronze'
                  : 'text-brand-beige/80 hover:text-brand-beige'
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-bronze transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Contact & Consultation Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              id="navbar-whatsapp"
              href="https://wa.me/6285181052950"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 text-[#25D366] hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <button
              id="navbar-book-consultation"
              onClick={onOpenConsultation}
              className={`px-6 py-3 text-[10px] font-bold tracking-[0.18em] uppercase rounded-lg transition-all duration-500 cursor-pointer border border-transparent luxury-sheen ${
                scrolled
                  ? 'bg-brand-charcoal hover:bg-brand-bronze text-brand-beige shadow-md hover:shadow-brand-bronze/20'
                  : 'bg-brand-beige hover:bg-transparent text-brand-charcoal hover:text-brand-beige hover:border-brand-beige/50'
              }`}
            >
              Book consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-1.5 rounded-lg transition-colors duration-300 ${
              scrolled
                ? 'text-brand-charcoal hover:bg-brand-charcoal/5'
                : 'text-brand-beige hover:bg-brand-beige/5'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Row 2: Categories Directly in Header (Desktop Only) */}
        <div className={`hidden lg:block border-t mt-3 pt-2.5 transition-colors duration-500 ${
          scrolled ? 'border-brand-bronze/10' : 'border-white/10'
        }`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center gap-8">
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <button
                  id={`nav-direct-${div.id}`}
                  key={div.id}
                  onClick={() => onSelectService(div.id)}
                  className={`text-[9.5px] font-bold tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer relative group py-1 ${
                    scrolled
                      ? 'text-brand-charcoal/70 hover:text-brand-bronze'
                      : 'text-brand-beige/70 hover:text-[#E5C185]'
                  }`}
                >
                  <Icon className="w-3 h-3 stroke-[2]" />
                  <span>{div.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.2px] bg-brand-bronze transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="nav-mobile-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-brand-beige border-b border-brand-charcoal/10 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 flex flex-col max-h-[85vh] overflow-y-auto">
                <a
                  id="mobile-nav-link-about"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onSelectSection('about');
                  }}
                  className="text-sm font-bold tracking-widest text-brand-charcoal hover:text-brand-bronze uppercase transition-colors"
                >
                  About
                </a>

                <div className="space-y-2 py-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-bronze block mb-1">
                    DIVISI KATEGORI
                  </span>
                  <div className="grid grid-cols-1 gap-2 pl-2 border-l border-brand-bronze/20">
                    {divisions.map((div) => {
                      const Icon = div.icon;
                      return (
                        <button
                          id={`mobile-dropdown-item-${div.id}`}
                          key={div.id}
                          onClick={() => {
                            onSelectService(div.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left py-1.5 flex items-center gap-3 transition-colors group cursor-pointer"
                        >
                          <div className="p-1.5 bg-brand-bronze/10 text-brand-bronze rounded-lg">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-semibold text-brand-charcoal/80 group-hover:text-brand-bronze transition-colors">
                            {div.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>


                <a
                  id="mobile-nav-link-faq"
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onSelectSection('faq');
                  }}
                  className="text-sm font-bold tracking-widest text-brand-charcoal hover:text-brand-bronze uppercase transition-colors"
                >
                  FAQ
                </a>

                <a
                  id="mobile-nav-link-contact"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onSelectSection('contact');
                  }}
                  className="text-sm font-bold tracking-widest text-brand-charcoal hover:text-brand-bronze uppercase transition-colors"
                >
                  Contact
                </a>

                <div className="h-px bg-brand-charcoal/10 my-2" />
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    id="mobile-navbar-whatsapp"
                    href="https://wa.me/6285181052950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-brand-charcoal/10 px-5 py-3 rounded-lg text-sm font-bold tracking-wider uppercase text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp Chat
                  </a>
                  <button
                    id="mobile-navbar-book-consultation"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="bg-brand-charcoal text-brand-beige hover:bg-brand-bronze px-5 py-3 rounded-lg text-sm font-bold tracking-wider uppercase text-center transition-colors cursor-pointer"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
