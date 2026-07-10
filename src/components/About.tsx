import { motion } from 'motion/react';
import { Award, Compass, ShieldCheck, BookOpen, User, Quote, ArrowLeft } from 'lucide-react';
import { clientLogos, awardsData } from '../data';


interface AboutProps {
  onBackToHome?: () => void;
}

export default function About({ onBackToHome }: AboutProps) {
  return (
    <div className={onBackToHome ? "pt-36 md:pt-40 min-h-screen bg-brand-beige" : ""}>
      {onBackToHome && (
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between border-b border-brand-bronze/10 mb-10 relative z-50">
          <button
            id="about-page-back-btn"
            onClick={onBackToHome}
            className="text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-bronze flex items-center gap-2 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </button>
          <span className="text-[10px] font-mono tracking-widest text-brand-bronze uppercase">
            Profil Founder
          </span>
        </div>
      )}
      <section id="about" className={`py-24 bg-brand-beige ${onBackToHome ? "" : "border-b border-brand-charcoal/5"} relative overflow-hidden`}>
      {/* Decorative background vectors for a classy blueprint / structural design feel */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-bronze/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-brand-forest/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Layout */}
        <div className="space-y-8">
          
          {/* Editorial Typography & Founder Profile */}
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <span className="text-[10px] font-bold tracking-fashion-widest uppercase text-brand-bronze block">
                LEADERSHIP PROFILE
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif text-brand-charcoal leading-tight tracking-tight">
                Profile Founder & Owner
              </h2>
              <div className="h-[1.5px] w-20 bg-brand-bronze mx-auto" />
            </div>

            {/* Founder Identity Card */}
            <div className="border border-brand-bronze/15 bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl luxury-glow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-charcoal/5 pb-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal tracking-tight">
                    Ir. Alex T Mayezet
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-bronze mt-1">
                    Founder & CEO HomeWorks Group
                  </p>
                </div>
                <div className="px-4 py-2 bg-brand-bronze/10 text-brand-bronze rounded-full border border-brand-bronze/20 text-[10px] font-bold tracking-widest uppercase w-fit">
                  Insinyur (Ir.)
                </div>
              </div>

              {/* Masterpiece Quote Block */}
              <div className="relative pl-6 sm:pl-8 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-bronze via-[#E5C185] to-transparent rounded" />
                <Quote className="absolute -top-3 -left-1 w-8 h-8 text-brand-bronze/10 rotate-180 pointer-events-none" />
                <p className="font-serif italic text-lg sm:text-xl text-brand-charcoal/90 leading-relaxed">
                  "Membangun dengan keahlian teknik, merawat dengan dedikasi penuh."
                </p>
              </div>

              {/* Latar Belakang & Ringkasan */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-brand-bronze font-bold text-xs tracking-wider uppercase">
                  <BookOpen className="w-4 h-4" />
                  <span>📑 Ringkasan Profil & Latar Belakang</span>
                </div>
                <p className="text-sm text-brand-charcoal/85 leading-relaxed font-light">
                  HomeWorks Group didirikan dan dipimpin langsung oleh <strong className="font-semibold text-brand-charcoal">Ir. Alex T Mayezet</strong>, seorang profesional di bidang struktur dan konstruksi. Beliau merupakan lulusan Teknik Sipil Universitas Andalas (Unand), salah satu rumpun teknik sipil terbaik yang telah mencetak banyak infrastruktur dan tenaga ahli di Indonesia.
                </p>
                <p className="text-sm text-brand-charcoal/85 leading-relaxed font-light">
                  Dengan latar belakang akademis kedirgantaraan/teknik sipil yang kuat dan gelar Insinyur (Ir.) resmi, beliau mengintegrasikan standar keamanan, presisi struktural, dan manajemen proyek yang ketat ke seluruh lini bisnis HomeWorks Group.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    </div>
  );
}

