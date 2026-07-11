/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServicePageProps {
  service: Service;
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export default function ServicePage({ service, onBackToHome, onOpenConsultation }: ServicePageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  
  // Custom form questions based on the division
  const getDivisionFields = (id: string) => {
    switch (id) {
      case 'homeworks-realty':
        return [
          { name: 'propertyType', label: 'Tipe Properti yang Dicari', type: 'select', options: ['Rumah Tinggal', 'Ruko / Komersial', 'Tanah Kavling', 'Apartemen', 'Gedung / Kantor'] },
          { name: 'transactionType', label: 'Tujuan Transaksi', type: 'select', options: ['Beli Properti', 'Sewa Properti', 'Titip Jual / Jual Properti', 'Titip Sewa Properti'] },
          { name: 'budgetRange', label: 'Kisaran Anggaran / Budget', type: 'select', options: ['Under Rp 500 Juta', 'Rp 500 Juta - Rp 1 Miliar', 'Rp 1 Miliar - Rp 3 Miliar', 'Rp 3 Miliar - Rp 5 Miliar', 'Above Rp 5 Miliar'] },
          { name: 'preferredLocation', label: 'Lokasi Prioritas', type: 'text', placeholder: 'Contoh: Padang Barat, Padang Timur, dsb.' }
        ];
      case 'homeworks-engineering':
        return [
          { name: 'serviceType', label: 'Jenis Layanan Teknik', type: 'select', options: ['Perencanaan Struktur (Aman Gempa)', 'Analisis Kelayakan Struktur (Audit Bangunan)', 'Gambar Kerja Teknis Lengkap (DED)', 'Perencanaan Sistem MEP (Kelistrikan & Air)', 'Pengawasan Konstruksi Berkala'] },
          { name: 'buildingArea', label: 'Perkiraan Luas Bangunan (sqm)', type: 'number', placeholder: 'Contoh: 150' },
          { name: 'storiesCount', label: 'Jumlah Lantai Rencana', type: 'select', options: ['1 Lantai', '2 Lantai', '3 Lantai', '4 Lantai atau lebih'] },
          { name: 'projectTimeline', label: 'Kapan Gambar Kerja Dibutuhkan?', type: 'select', options: ['Segera (Bulan Ini)', '1-3 Bulan Ke Depan', '3-6 Bulan Ke Depan'] }
        ];
      case 'homeworks-build':
        return [
          { name: 'projectType', label: 'Jenis Konstruksi Fisik', type: 'select', options: ['Bangun Rumah Tinggal Dari Nol', 'Bangun Ruko / Kantor Baru', 'Renovasi Total Bangunan', 'Penambahan Lantai / Dak Beton', 'Pekerjaan Struktur Saja'] },
          { name: 'buildingStatus', label: 'Status Lahan saat Ini', type: 'select', options: ['Tanah Kosong Siap Bangun', 'Ada Bangunan Tua (Perlu Demolisi)', 'Bangunan Setengah Jadi', 'Rumah Masih Dihuni (Perlu Renovasi)'] },
          { name: 'approxBudget', label: 'Alokasi Dana Pembangunan', type: 'select', options: ['Rp 100 Juta - Rp 300 Juta', 'Rp 300 Juta - Rp 600 Juta', 'Rp 600 Juta - Rp 1.5 Miliar', 'Rp 1.5 Miliar - Rp 3 Miliar', 'Di atas Rp 3 Miliar'] },
          { name: 'projectAddress', label: 'Alamat / Lokasi Proyek', type: 'text', placeholder: 'Masukan alamat lengkap lokasi rencana pembangunan' }
        ];
      case 'homeworks-interior':
        return [
          { name: 'interiorScope', label: 'Ruang yang Ingin Didesain', type: 'select', options: ['Satu Rumah Penuh', 'Kamar Tidur Utama', 'Dapur & Ruang Makan (Kitchen Set)', 'Ruang Tamu & Keluarga', 'Kantor / Cafe / Ruang Komersial'] },
          { name: 'designStyle', label: 'Gaya Desain yang Diminati', type: 'select', options: ['Modern Minimalis', 'Classic / Luxury Modern', 'Industrial / Japandi', 'Skandinavia / Warm Natural', 'Belum Tahu (Butuh Rekomendasi)'] },
          { name: 'furnitureNeed', label: 'Kebutuhan Furnitur', type: 'select', options: ['Full Kustom (Kitchen Set, Wardrobe, Backdrop)', 'Kombinasi Furnitur Jadi & Kustom', 'Desain Saja (Gambar 3D & Layout)'] }
        ];
      case 'homeworks-clean':
        return [
          { name: 'cleanType', label: 'Jenis Layanan Kebersihan', type: 'select', options: ['Deep Cleaning Rumah Tinggal', 'Deep Cleaning Kantor / Ruko', 'Pembersihan Pasca-Konstruksi / Renovasi', 'Pembersihan Tungau & Vakum Steril', 'Cuci Sofa / Springbed / Karpet'] },
          { name: 'cleanAreaSize', label: 'Perkiraan Luas Area Bersih', type: 'select', options: ['Kecil (< 100 sqm)', 'Sedang (100 - 250 sqm)', 'Besar (250 - 500 sqm)', 'Sangat Besar (> 500 sqm)'] },
          { name: 'frequency', label: 'Frekuensi Pembersihan', type: 'select', options: ['Satu Kali Saja (One-time Deep Clean)', 'Rutin Mingguan', 'Rutin Bulanan', 'Kontrak Berlangganan Kantor'] }
        ];
      case 'sofaworks':
        return [
          { name: 'coworkPlan', label: 'Pilihan Paket SofaWorks', type: 'select', options: ['Daily Hot Desk (Harian)', 'Monthly Shared Desk (Bulanan)', 'Private Office (Kantor Mandiri)', 'Meeting Room Booking (Per Jam)', 'Virtual Office / Domisili Bisnis'] },
          { name: 'paxCount', label: 'Jumlah Tim / Orang', type: 'select', options: ['1 Orang (Individu)', '2-4 Orang', '5-8 Orang', 'Lebih dari 8 Orang'] },
          { name: 'industry', label: 'Bidang Usaha / Profesi', type: 'text', placeholder: 'Contoh: IT, Agensi Kreatif, Mahasiswa, Freelancer' }
        ];
      case 'raja-sofa':
        return [
          { name: 'sofaType', label: 'Tipe Sofa Rajasofa.id', type: 'select', options: ['Sofa L-Shape Premium', 'Sofa Minimalis 2-Seater / 3-Seater', 'Sofa Bed Serbaguna', 'Sofa Kustom Desain Sendiri', 'Service / Ganti Kulit Sofa Lama'] },
          { name: 'sofaMaterial', label: 'Pilihan Bahan Kain/Kulit', type: 'select', options: ['Kain Beludru Halus Premium', 'Kulit Sintetis Premium (Mudah Dibersihkan)', 'Kain Canvas/Linen Mewah', 'Kulit Sapi Asli (Genuine Leather)'] },
          { name: 'deliveryArea', label: 'Area Pengiriman Sofa', type: 'text', placeholder: 'Masukan kota/kecamatan tujuan pengiriman' }
        ];
      default:
        return [
          { name: 'generalInquiry', label: 'Pesan / Pertanyaan Detail', type: 'textarea', placeholder: 'Tuliskan kebutuhan spesifik Anda di sini...' }
        ];
    }
  };

  const fields = getDivisionFields(service.id);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };



  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 stroke-[1.5]" />;
    }
    return <Icons.HelpCircle className="w-8 h-8 stroke-[1.5]" />;
  };

  // Generate customized WhatsApp Link
  const getWhatsAppLink = () => {
    let text = `Halo Admin HomeWorks Group! Saya tertarik dengan divisi *${service.title}*.\n\n`;
    fields.forEach(f => {
      const val = formData[f.name];
      if (val) {
        text += `• *${f.label}*: ${val}\n`;
      }
    });
    if (formData.clientName) text += `• *Nama*: ${formData.clientName}\n`;
    if (formData.clientPhone) text += `• *No. WhatsApp*: ${formData.clientPhone}\n`;
    
    text += `\nMohon informasi estimasi biaya dan konsultasi lebih lanjut bersama tim ahli. Terima kasih!`;
    return `https://wa.me/6285181052950?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-36 md:pt-40 min-h-screen bg-brand-beige">
      {/* Editorial Breadcrumb & Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between border-b border-brand-bronze/10 relative z-50">
        <button
          id="service-page-back-btn"
          onClick={onBackToHome}
          className="text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-bronze flex items-center gap-2 group cursor-pointer"
        >
          <Icons.ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </button>
        <span className="text-[10px] font-mono tracking-widest text-brand-bronze uppercase">
          Layanan Spesifik / {service.title}
        </span>
      </div>

      {/* Hero Banner Section */}
      <div className="relative h-[450px] overflow-hidden bg-brand-charcoal">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/65 to-transparent" />
        
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 bg-brand-beige/10 backdrop-blur-md text-brand-beige px-4 py-2 rounded-xl border border-brand-beige/20 shadow-lg">
              <div className="text-brand-bronze">
                {renderIcon(service.iconName)}
              </div>
              <span className="text-[10px] font-bold tracking-fashion-widest uppercase">
                HomeWorks Group Division Spec
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-beige tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-brand-beige/85 leading-relaxed font-light max-w-3xl text-justify">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Visi, Misi & Detail Specifications */}
        <div className="lg:col-span-7 space-y-12">
          {/* Visi & Misi Block */}
          {(service.visi || service.misi) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 border border-brand-bronze/10 rounded-2xl p-8 backdrop-blur-sm shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {service.visi && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-bronze">
                    <Icons.Eye className="w-5 h-5" />
                    <h4 className="text-sm font-bold uppercase tracking-wider font-sans">
                      Visi Divisi
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                    {service.visi}
                  </p>
                </div>
              )}
              {service.misi && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-bronze">
                    <Icons.Compass className="w-5 h-5" />
                    <h4 className="text-sm font-bold uppercase tracking-wider font-sans">
                      Misi Divisi
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                    {service.misi}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Mengapa Memilih Section */}
          {service.whyChooseUs && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-bronze uppercase block mb-1">
                  EXCELLENCE & TRUST
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-charcoal">
                  Mengapa Memilih {service.title}?
                </h3>
                <div className="h-0.5 w-12 bg-brand-bronze mt-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-brand-charcoal/5 shadow-sm"
                  >
                    <div className="p-1.5 bg-brand-bronze/10 text-brand-bronze rounded-lg mt-0.5">
                      <Icons.ShieldCheck className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Layanan Kami (Services List) */}
          {service.servicesList && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-bronze uppercase block mb-1">
                  OUR SERVICES
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-charcoal">
                  Layanan Kami
                </h3>
                <div className="h-0.5 w-12 bg-brand-bronze mt-3" />
              </div>
              <div className="space-y-6">
                {service.servicesList.map((serviceCat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white border border-brand-charcoal/5 rounded-2xl shadow-sm space-y-4"
                  >
                    <h4 className="text-lg font-serif font-bold text-brand-charcoal flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-brand-bronze rounded" />
                      {serviceCat.category}
                    </h4>
                    {serviceCat.description && (
                      <p className="text-xs text-brand-bronze bg-brand-bronze/5 px-3 py-2.5 rounded-xl font-light leading-relaxed border border-brand-bronze/10 italic">
                        💡 {serviceCat.description}
                      </p>
                    )}
                    {serviceCat.items && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {serviceCat.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center gap-2 text-xs sm:text-sm text-brand-charcoal/80">
                            <Icons.Sparkles className="w-3.5 h-3.5 text-brand-bronze/60 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Paket Layanan */}
          {service.packages && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-bronze uppercase block mb-1">
                  SERVICE PACKAGES
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-charcoal">
                  Paket Layanan
                </h3>
                <div className="h-0.5 w-12 bg-brand-bronze mt-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-brand-charcoal/5 border border-brand-bronze/10 hover:border-brand-bronze/35 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <h4 className="text-base font-serif font-bold text-brand-charcoal tracking-wide border-b border-brand-charcoal/10 pb-2">
                        📦 {pkg.name}
                      </h4>
                      <ul className="space-y-2">
                        {pkg.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-brand-charcoal/85">
                            <Icons.CheckCircle2 className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Core Specifications & Features List (Fallback if new fields aren't populated) */}
          {!service.whyChooseUs && !service.servicesList && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-bronze uppercase block mb-1">
                  DAFTAR KEUNGGULAN & SPESIFIKASI
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-charcoal">
                  Apa Saja yang Anda Dapatkan?
                </h3>
                <div className="h-0.5 w-12 bg-brand-bronze mt-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3.5 p-4 bg-white hover:bg-brand-beige/40 rounded-xl border border-brand-charcoal/5 transition-colors group"
                  >
                    <div className="p-1.5 bg-brand-bronze/10 text-brand-bronze rounded-lg mt-0.5 group-hover:bg-brand-bronze group-hover:text-white transition-colors">
                      <Icons.Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-charcoal/90 font-medium leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Interactive Inquiry Form Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-white border border-brand-bronze/15 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="text-center space-y-1.5">
              <span className="text-[9px] font-mono tracking-widest text-brand-bronze uppercase block">
                KONSULTASI KHUSUS DIVISI
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-brand-charcoal">
                Formulir Rencana Proyek
              </h3>
              <p className="text-xs text-brand-charcoal/60 font-light leading-relaxed">
                Lengkapi spesifikasi kebutuhan Anda di bawah ini untuk terhubung dengan arsitek & tim teknis kami.
              </p>
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-brand-bronze to-transparent mx-auto mt-3" />
            </div>

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmitForm}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {/* Common Client Info */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70">
                        Nama Lengkap Anda
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-brand-beige/30 border border-brand-charcoal/10 focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze rounded-xl px-4 py-3 text-sm transition-all outline-none"
                        placeholder="Contoh: Budi Santoso"
                        onChange={(e) => handleInputChange('clientName', e.target.value)}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70">
                        No. WhatsApp (Aktif)
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-brand-beige/30 border border-brand-charcoal/10 focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze rounded-xl px-4 py-3 text-sm transition-all outline-none"
                        placeholder="Contoh: 081234567890"
                        onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                      />
                    </div>

                    {/* Division Specific Questions */}
                    {fields.map((field) => (
                      <div key={field.name} className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70">
                          {field.label}
                        </label>
                        
                        {field.type === 'select' && (
                          <select
                            required
                            className="w-full bg-brand-beige/30 border border-brand-charcoal/10 focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze rounded-xl px-4 py-3 text-sm transition-all outline-none cursor-pointer"
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            defaultValue=""
                          >
                            <option value="" disabled>Pilih opsi kebutuhan...</option>
                            {field.options?.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        )}

                        {field.type === 'text' && (
                          <input
                            type="text"
                            required
                            className="w-full bg-brand-beige/30 border border-brand-charcoal/10 focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze rounded-xl px-4 py-3 text-sm transition-all outline-none"
                            placeholder={field.placeholder}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                          />
                        )}

                        {field.type === 'number' && (
                          <input
                            type="number"
                            required
                            className="w-full bg-brand-beige/30 border border-brand-charcoal/10 focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze rounded-xl px-4 py-3 text-sm transition-all outline-none"
                            placeholder={field.placeholder}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                          />
                        )}

                        {field.type === 'textarea' && (
                          <textarea
                            required
                            rows={3}
                            className="w-full bg-brand-beige/30 border border-brand-charcoal/10 focus:border-brand-bronze focus:ring-1 focus:ring-brand-bronze rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                            placeholder={field.placeholder}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    id="submit-division-spec-btn"
                    type="submit"
                    className="w-full mt-4 bg-brand-charcoal hover:bg-brand-bronze text-brand-beige font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-bronze/10 cursor-pointer"
                  >
                    Kirim Form & Jadwalkan Konsultasi
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8 space-y-5"
                >
                  <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#25D366]/20">
                    <Icons.CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-serif font-bold text-brand-charcoal">
                      Rencana Proyek Siap!
                    </h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light px-2">
                      Spesifikasi konsultasi divisi *{service.title}* Anda telah dirangkum secara otomatis. Silakan klik tombol di bawah untuk meneruskan data langsung ke WhatsApp tim ahli arsitek.
                    </p>
                  </div>

                  <div className="space-y-3 pt-3">
                    <a
                      id="whatsapp-direct-submit-btn"
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      <Icons.MessageCircle className="w-4.5 h-4.5 fill-white" />
                      Kirim Ke WhatsApp (Konsultan)
                    </a>
                    
                    <button
                      id="reset-spec-form-btn"
                      onClick={() => setFormSubmitted(false)}
                      className="text-[10px] font-bold text-brand-bronze hover:text-brand-charcoal uppercase tracking-widest cursor-pointer transition-colors"
                    >
                      Isi Kembali Formulir
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>


          </div>
        </div>
      </div>
    </div>
  );
}
