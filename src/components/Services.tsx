/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { servicesData } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onOpenConsultation: () => void;
  activeServiceId: string | null;
  onClearActiveService: () => void;
  onSelectService: (id: string) => void;
}

export default function Services({ onOpenConsultation, activeServiceId, onClearActiveService, onSelectService }: ServicesProps) {
  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 stroke-[1.5]" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 stroke-[1.5]" />;
  };

  const getGradientClass = (id: string) => {
    switch (id) {
      case 'homeworks-realty':
        return 'from-amber-50/90 via-stone-50/50 to-white group-hover:from-amber-100/90 group-hover:via-amber-50/40 group-hover:to-white';
      case 'homeworks-engineering':
        return 'from-blue-50/90 via-stone-50/50 to-white group-hover:from-blue-100/90 group-hover:via-blue-50/40 group-hover:to-white';
      case 'homeworks-build':
        return 'from-stone-100/90 via-stone-50/50 to-white group-hover:from-stone-200/90 group-hover:via-stone-100/40 group-hover:to-white';
      case 'homeworks-interior':
        return 'from-emerald-50/90 via-stone-50/50 to-white group-hover:from-emerald-100/90 group-hover:via-emerald-50/40 group-hover:to-white';
      case 'homeworks-clean':
        return 'from-cyan-50/90 via-stone-50/50 to-white group-hover:from-cyan-100/90 group-hover:via-cyan-50/40 group-hover:to-white';
      case 'homeworks-care':
        return 'from-orange-50/90 via-stone-50/50 to-white group-hover:from-orange-100/90 group-hover:via-orange-50/40 group-hover:to-white';
      case 'sofaworks':
        return 'from-purple-50/90 via-stone-50/50 to-white group-hover:from-purple-100/90 group-hover:via-purple-50/40 group-hover:to-white';
      case 'raja-sofa':
        return 'from-rose-50/90 via-stone-50/50 to-white group-hover:from-rose-100/90 group-hover:via-rose-50/40 group-hover:to-white';
      default:
        return 'from-brand-beige/50 via-white to-white group-hover:from-brand-beige/80';
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
            EKOSISTEM SOLUSI SATU ATAP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            Layanan Ekosistem <span className="italic font-light text-gold-gradient">HomeWorks Group</span>
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-bronze to-transparent mx-auto mt-5" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)' }}
              onClick={() => onSelectService(service.id)}
              className="scroll-mt-28 group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-brand-charcoal/5 hover:border-brand-bronze/20 transition-all duration-500 relative pb-1 cursor-pointer"
            >
              {/* Service Image Section */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent transition-opacity duration-500" />
                
                {/* Float Icon with custom gold circle styling */}
                <div className="absolute bottom-4 left-4 p-3 bg-white/95 text-brand-bronze rounded-xl shadow-lg border border-brand-bronze/10 backdrop-blur-sm group-hover:bg-brand-bronze group-hover:text-white transition-colors duration-500">
                  {renderIcon(service.iconName)}
                </div>
              </div>

              {/* Service Body Content */}
              <div className={`p-6 flex flex-col flex-grow justify-between bg-gradient-to-br ${getGradientClass(service.id)} relative z-10 transition-all duration-500`}>
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal group-hover:text-brand-bronze transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-brand-charcoal/5 mt-5 flex items-center justify-between">
                  <button
                    id={`learn-more-${service.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.id);
                    }}
                    className="text-[10px] font-bold tracking-widest uppercase text-brand-bronze hover:text-brand-charcoal flex items-center gap-1.5 cursor-pointer transition-all duration-300 group-hover:tracking-[0.12em]"
                  >
                    Visi, Misi & Detail
                    <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Gold luxury accent highlight border */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-brand-bronze transition-colors duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
