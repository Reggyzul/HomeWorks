/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Award, Building2, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
      title: 'HomeWorks Salon, Cap d’Antibes',
      tag: 'Quiet Luxury Residences'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
      title: 'Penthouse Lumina, Saint-Germain',
      tag: 'Bespoke Haussmannian Interiors'
    },
    {
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80',
      title: 'Grand Horizon Villa, Malibu Coast',
      tag: 'Warm Coastal Architectural Minimal'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);





  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden"
    >
      {/* Background Image with Rich Vignette overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={backgrounds[currentBg].url}
            alt={backgrounds[currentBg].title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Soft, rich cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/30" />
        

      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-12">
        <div className="lg:col-span-8 space-y-10">

          {/* Majestic Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-serif text-brand-beige leading-[1.08] tracking-tight max-w-4xl"
          >
            Satu Atap, Jutaan Solusi untuk <span className="italic font-light text-gold-gradient">Properti dan Ruang Hidup</span> Anda.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-beige/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl"
          >
            HomeWorks Group adalah ekosistem bisnis terintegrasi yang dirancang untuk memenuhi segala kebutuhan Anda seputar properti, konstruksi, interior, hingga ruang produktif. Kami percaya bahwa sebuah bangunan bukan sekadar struktur fisik, melainkan tempat di mana kehidupan, kenyamanan, dan bisnis berkembang.
          </motion.p>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 flex flex-col items-center justify-center">
        <motion.a
          id="scroll-down-arrow"
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-brand-beige/50 hover:text-brand-bronze transition-colors flex flex-col items-center gap-2 group cursor-pointer text-center"
        >
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-brand-beige/60 group-hover:text-brand-bronze transition-colors">
            Mengenal Founder & CEO
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
