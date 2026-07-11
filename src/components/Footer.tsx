/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Instagram, ArrowUp, Send, Check } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-brand-charcoal text-brand-beige border-t border-brand-beige/5 pt-20 pb-8 relative overflow-hidden">
      
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-brand-beige/10 pb-16">
        
        {/* Brand Column (Span 4) */}
        <div className="md:col-span-4 space-y-6">
          <a
            id="footer-logo"
            href="#"
            className="flex items-center gap-2 text-brand-beige hover:opacity-95 transition-opacity"
          >
            <Logo variant="dark" />
          </a>
          <p className="text-xs text-brand-beige/65 leading-relaxed font-light max-w-sm">
            Ekosistem bisnis terintegrasi yang dirancang untuk memenuhi segala kebutuhan Anda seputar properti, konstruksi, interior, hingga ruang produktif. Satu Atap, Jutaan Solusi.
          </p>
          <div className="flex gap-4">
            <a
              id="footer-social-instagram"
              href="https://www.instagram.com/homeworksgroup.id"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-brand-beige/10 hover:border-brand-bronze text-brand-beige/60 hover:text-brand-bronze rounded-lg transition-all"
              title="Instagram: @homeworksgroup.id"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column (Span 2) */}
        <div className="md:col-span-2 space-y-5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-bronze">
            Tautan Cepat
          </h4>
          <ul className="space-y-3 text-xs font-light text-brand-beige/70">
            <li><a href="#about" className="hover:text-brand-bronze transition-colors">Profil Founder</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">Layanan Jasa</a></li>
            <li><a href="#why-choose-us" className="hover:text-brand-bronze transition-colors">Kenapa Kami</a></li>
            <li><a href="#faq" className="hover:text-brand-bronze transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Services / Categories Column (Span 2) */}
        <div className="md:col-span-2 space-y-5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-bronze">
            Divisi Utama
          </h4>
          <ul className="space-y-3 text-xs font-light text-brand-beige/70">
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">HomeWorks Realty</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">HomeWorks Engineering</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">HomeWorks Build</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">HomeWorks Interior</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">HomeWorks Clean</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">HomeWorks Care</a></li>
            <li><a href="#services" className="hover:text-brand-bronze transition-colors">SofaWorks Space</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription Column (Span 4) */}
        <div className="md:col-span-4 space-y-5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-bronze">
            Newsletter HomeWorks
          </h4>
          <p className="text-xs text-brand-beige/65 leading-relaxed font-light">
            Dapatkan update tren terbaru konstruksi, tips space-planning, kebersihan, dan kabar proyek terbaru kami langsung di email Anda.
          </p>

          {!subscribed ? (
            <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="flex gap-2">
              <input
                id="footer-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-brand-beige/5 border border-brand-beige/15 text-brand-beige placeholder-brand-beige/40 text-xs focus:outline-none focus:ring-1 focus:ring-brand-bronze"
                placeholder="Alamat Email Anda..."
              />
              <button
                id="footer-subscribe-btn"
                type="submit"
                className="px-4 bg-brand-bronze hover:bg-brand-bronze-hover text-brand-beige rounded-lg transition-colors cursor-pointer flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2.5 p-3 rounded-lg border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium">
              <Check className="w-4 h-4" />
              Terima kasih, email Anda telah terdaftar.
            </div>
          )}
        </div>

      </div>

      {/* Sub-Footer copyrights & Back-to-top */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-brand-beige/45 uppercase font-bold tracking-widest">
        <div>
          &copy; {new Date().getFullYear()} HomeWorks Group. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-bronze transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-bronze transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-brand-bronze transition-colors">Rajasofa.id</a>
        </div>

        {/* Back-To-Top button */}
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 p-2 bg-brand-beige/5 border border-brand-beige/10 hover:border-brand-bronze text-brand-beige hover:text-brand-bronze rounded-lg transition-all cursor-pointer"
        >
          Kembali ke Atas
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
