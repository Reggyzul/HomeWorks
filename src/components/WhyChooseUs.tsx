/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { whyChooseUsData } from '../data';

export default function WhyChooseUs() {
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 stroke-[1.5]" />;
    }
    return <Icons.HelpCircle className="w-5 h-5 stroke-[1.5]" />;
  };

  return (
    <section id="why-choose-us" className="py-24 bg-brand-beige border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Centered Premium Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            Kenapa Memilih Layanan <span className="italic font-light text-gold-gradient">HomeWorks Group</span>
          </h2>
          <div className="w-16 h-[2px] bg-brand-bronze/40 mx-auto mt-6" />
        </div>

        {/* Why Choose Us Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.03), 0 4px 6px -4px rgb(0 0 0 / 0.03)' }}
              className="group p-6 bg-white border border-brand-charcoal/5 hover:border-brand-bronze/20 rounded-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Majestic Corner Number Display */}
              <div className="absolute right-6 top-5 font-serif text-5xl font-extrabold text-brand-bronze/10 group-hover:text-brand-bronze/20 group-hover:scale-110 transition-all duration-500 select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="space-y-4 relative z-10">
                {/* Floating Icon Frame */}
                <div className="p-2.5 bg-brand-bronze/10 text-brand-bronze rounded-xl w-fit group-hover:bg-brand-bronze group-hover:text-white transition-colors duration-500">
                  {renderIcon(item.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-brand-charcoal text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="h-0.5 w-6 bg-brand-bronze/30 group-hover:bg-brand-bronze group-hover:w-12 mt-6 transition-all duration-500 relative z-10" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
