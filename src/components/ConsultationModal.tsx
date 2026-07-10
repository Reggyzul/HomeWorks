/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Check, Send, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillMessage?: string;
  initialCategory?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefillMessage = '', initialCategory = 'Villa' }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Villa',
    budget: '$50k - $100k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update form data if prefillMessage or initialCategory is updated
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        message: prefillMessage || prev.message,
        category: initialCategory || prev.category
      }));
    }
  }, [isOpen, prefillMessage, initialCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'Villa',
      budget: '$50k - $100k',
      message: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-brand-beige border border-brand-charcoal/10 shadow-2xl z-10"
          >
            {/* Top decorative bar */}
            <div className="h-1.5 w-full bg-brand-bronze" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-charcoal/60 hover:text-brand-charcoal p-1.5 rounded-full hover:bg-brand-charcoal/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSuccess ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-brand-bronze/10 rounded-lg text-brand-bronze">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold tracking-tight text-brand-charcoal">
                        Book a Consultation
                      </h3>
                      <p className="text-xs text-brand-charcoal/60 mt-0.5">
                        Free 45-minute spatial layout & strategy session
                      </p>
                    </div>
                  </div>

                  <form id="consultation-form" onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="modal-input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze focus:border-brand-bronze transition-shadow"
                        placeholder="E.g. Sterling Cooper"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="modal-input-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze focus:border-brand-bronze transition-shadow"
                          placeholder="e.g. sterling@cooper.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="modal-input-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze focus:border-brand-bronze transition-shadow"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                          Project Category
                        </label>
                        <select
                          id="modal-select-category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze focus:border-brand-bronze transition-shadow"
                        >
                          <option value="Villa">Villa Residence</option>
                          <option value="Apartment">Apartment / Penthouse</option>
                          <option value="Restaurant">Restaurant / Cafe</option>
                          <option value="Office">Corporate Office</option>
                          <option value="Retail">Boutique Retail</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          id="modal-select-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze focus:border-brand-bronze transition-shadow"
                        >
                          <option value="Under $50k">Under $50k</option>
                          <option value="$50k - $100k">$50k - $100k</option>
                          <option value="$100k - $250k">$100k - $250k</option>
                          <option value="$250k+">$250k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                        Tell us about your space
                      </label>
                      <textarea
                        id="modal-input-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze focus:border-brand-bronze transition-shadow resize-none"
                        placeholder="Briefly describe what you are looking to design..."
                      />
                    </div>

                    <button
                      id="modal-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3 bg-brand-charcoal hover:bg-brand-bronze text-brand-beige rounded-lg font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-brand-beige border-t-transparent rounded-full animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  id="modal-success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-brand-charcoal mb-2">
                    Request Received
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 max-w-sm mb-8 leading-relaxed">
                    Thank you, <span className="font-semibold text-brand-charcoal">{formData.name}</span>. One of our lead architects will contact you within the next 2 hours to confirm your calendar booking.
                  </p>
                  
                  <div className="bg-brand-charcoal/5 rounded-xl p-4 w-full text-left space-y-2.5 mb-8 border border-brand-charcoal/10">
                    <p className="text-xs font-semibold text-brand-charcoal/50 uppercase tracking-widest">
                      Reservation Summary
                    </p>
                    <p className="text-xs text-brand-charcoal/80 flex justify-between">
                      <span>Category:</span> <span className="font-semibold">{formData.category} Interior</span>
                    </p>
                    <p className="text-xs text-brand-charcoal/80 flex justify-between">
                      <span>Assigned Designer:</span> <span className="font-semibold">Evelyn Valerius</span>
                    </p>
                    <p className="text-xs text-brand-charcoal/80 flex justify-between">
                      <span>Fee status:</span> <span className="text-green-600 font-semibold">100% Free Consultation</span>
                    </p>
                  </div>

                  <button
                    id="modal-success-close-btn"
                    onClick={handleReset}
                    className="px-8 py-2.5 bg-brand-charcoal text-brand-beige hover:bg-brand-bronze rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Back to Website
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
