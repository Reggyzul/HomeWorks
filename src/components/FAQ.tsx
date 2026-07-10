/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // default open first
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Process', 'Pricing', 'Materials', 'Warranty'];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-brand-charcoal/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
            Client Inquiry Desk
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            Frequently Asked <span className="italic font-light text-gold-gradient">Questions</span>
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-bronze to-transparent mx-auto mt-5" />
        </div>

        {/* Search and Category Control Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10 border-b border-brand-charcoal/5 pb-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                id={`faq-cat-btn-${cat.toLowerCase()}`}
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenId(null);
                }}
                className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-charcoal text-brand-beige'
                    : 'bg-brand-beige text-brand-charcoal/70 hover:bg-brand-charcoal/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-brand-beige border border-brand-charcoal/10 rounded-lg text-xs text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-1 focus:ring-brand-bronze"
              placeholder="Search questions..."
            />
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    id={`faq-item-${faq.id}`}
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="border border-brand-charcoal/10 rounded-xl overflow-hidden bg-brand-beige"
                  >
                    <button
                      id={`faq-toggle-btn-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif text-sm sm:text-base font-semibold text-brand-charcoal hover:text-brand-bronze transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="p-1 rounded-full bg-white text-brand-charcoal border border-brand-charcoal/5 shrink-0 shadow-sm">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-content-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light border-t border-brand-charcoal/5 bg-white">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-brand-beige border border-dashed border-brand-charcoal/10 rounded-xl space-y-3">
                <HelpCircle className="w-8 h-8 text-brand-bronze mx-auto" />
                <p className="text-sm font-semibold text-brand-charcoal">No matching questions found</p>
                <p className="text-xs text-brand-charcoal/50">Try searching for keywords like "price", "materials" or "warranty".</p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
