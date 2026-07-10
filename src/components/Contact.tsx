/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Check, Instagram, ArrowLeft } from 'lucide-react';

interface ContactProps {
  onBackToHome?: () => void;
}

export default function Contact({ onBackToHome }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Properti & Realty',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      type: 'Properti & Realty',
      message: ''
    });
    setIsSuccess(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      desc: 'Jl. Teropong Kelurahan No.28, Sidomulyo Bar., Kec. Tampan, Kota Pekanbaru, Riau'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      desc: '085181052950'
    },
    {
      icon: Mail,
      title: 'Email',
      desc: 'homeworksofaworks@gmail.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      desc: '@homeworksgroup.id'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      desc: '08.00 - 20.00'
    }
  ];

  return (
    <div className={onBackToHome ? "pt-36 md:pt-40 min-h-screen bg-brand-beige" : ""}>
      {onBackToHome && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between border-b border-brand-bronze/10 mb-10 relative z-50">
          <button
            id="contact-page-back-btn"
            onClick={onBackToHome}
            className="text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-bronze flex items-center gap-2 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </button>
          <span className="text-[10px] font-mono tracking-widest text-brand-bronze uppercase">
            Kontak Kami
          </span>
        </div>
      )}
      <section id="contact" className={`py-24 bg-white ${onBackToHome ? "" : "border-b border-brand-charcoal/5"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
            KOLABORASI & LAYANAN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
            KONTAK <span className="italic font-light text-gold-gradient">KAMI</span>
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-bronze to-transparent mx-auto mt-5" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Section (Span 7) */}
          <div className="lg:col-span-7 bg-brand-beige border border-brand-charcoal/5 p-8 sm:p-10 rounded-2xl shadow-sm">
            {!isSuccess ? (
              <form id="contact-page-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal">
                    Ajukan Kebutuhan / Estimasi Biaya
                  </h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed font-light">
                    Miliki proyek impian atau butuh layanan kami? Isi detail di bawah ini dan konsultan kami akan menghubungi Anda dengan estimasi awal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                      Nama Lengkap Anda *
                    </label>
                    <input
                      id="contact-input-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze"
                      placeholder="Contoh: Alex T Mayezet"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      id="contact-input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      id="contact-input-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze"
                      placeholder="+62 812..."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                      Divisi / Layanan yang Dibutuhkan *
                    </label>
                    <select
                      id="contact-input-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze"
                    >
                      <option value="Properti & Realty">HomeWorks Realty (Jual/Beli/Sewa)</option>
                      <option value="Teknik & Perencanaan">HomeWorks Engineering (Konsultan Sipil)</option>
                      <option value="Konstruksi & Build">HomeWorks Build (Kontraktor Fisik)</option>
                      <option value="Desain Interior">HomeWorks Interior (Custom Design)</option>
                      <option value="Kebersihan & Clean">HomeWorks Clean (Deep Cleaning)</option>
                      <option value="SofaWorks Space">SofaWorks (Coworking Space)</option>
                      <option value="Raja Sofa">Raja Sofa (Sofa Premium)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70 mb-1.5">
                    Pesan Detail Kebutuhan Anda *
                  </label>
                  <textarea
                    id="contact-input-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-brand-charcoal/15 text-brand-charcoal placeholder-brand-charcoal/40 text-sm focus:outline-none focus:ring-1 focus:ring-brand-bronze resize-none"
                    placeholder="Tuliskan luas tanah, tipe renovasi, atau sofa impian Anda..."
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-brand-charcoal hover:bg-brand-bronze disabled:bg-brand-charcoal/40 text-brand-beige rounded-lg font-bold text-[10px] tracking-[0.2em] uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-beige border-t-transparent rounded-full animate-spin" />
                      Sedang Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Kirim Formulir Estimasi
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                id="contact-success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6 space-y-6 flex flex-col items-center"
              >
                <div className="p-4 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full w-fit">
                  <Check className="w-10 h-10 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-brand-charcoal">
                    Formulir Berhasil Terkirim!
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light max-w-md">
                    Terima kasih, <strong className="font-semibold text-brand-charcoal">{formData.name}</strong>. Tim konsultan HomeWorks Group di bawah supervisi Ir. Alex T Mayezet akan meninjau kebutuhan Anda dan segera menghubungi dalam waktu 1x24 jam.
                  </p>
                </div>
                <button
                  id="contact-reset-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand-charcoal hover:bg-brand-bronze text-brand-beige rounded-lg font-bold text-[10px] tracking-widest uppercase transition-colors cursor-pointer"
                >
                  Kirim Pesan Baru
                </button>
              </motion.div>
            )}
          </div>

          {/* Right Column: Contact info cards & WhatsApp direct linkage (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
                INFORMATION DESK
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-charcoal tracking-tight leading-tight">
                Hubungi Kami Langsung
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-light">
                Ekosistem kami dirancang untuk mempermudah komunikasi Anda. Silakan hubungi meja pelayanan pelanggan kami atau kunjungi Gedung Raja Sofa untuk berdiskusi langsung.
              </p>
            </div>

            {/* Informational Cards */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 bg-brand-beige/50 border border-brand-charcoal/5 hover:border-brand-bronze/10 rounded-xl transition-all group"
                >
                  <div className="p-3 bg-white/80 text-brand-bronze rounded-lg shadow-xs group-hover:bg-brand-bronze group-hover:text-brand-beige transition-colors duration-500 shrink-0 h-fit">
                    <info.icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-bronze mb-1">
                      {info.title}
                    </h4>
                    <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium WhatsApp Button */}
            <div className="p-6 border border-green-500/20 bg-green-500/5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-green-700 flex items-center gap-1.5 justify-center sm:justify-start">
                  <MessageCircle className="w-4 h-4 text-green-500 fill-green-500/20" /> WhatsApp Hot Desk
                </h4>
                <p className="text-[11px] text-brand-charcoal/65 font-light">
                  Diskusi lebih cepat langsung dengan tim CS kami via pesan singkat WhatsApp.
                </p>
              </div>
              <a
                id="contact-whatsapp-direct"
                href="https://wa.me/6285181052950"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-[10px] tracking-wider uppercase transition-all shadow-sm cursor-pointer"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  );
}
