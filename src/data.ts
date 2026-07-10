/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Service,
  WhyChooseUsItem,
  Project,
  ProcessStep,
  Testimonial,
  StatItem,
  TeamMember,
  FAQItem,
  BlogPost
} from './types';

// Slogan & Deskripsi Utama HomeWorks Group
export const brandSlogan = "Satu Atap, Jutaan Solusi untuk Properti dan Ruang Hidup Anda.";

export const brandDescription = "HomeWorks Group adalah ekosistem bisnis terintegrasi yang dirancang untuk memenuhi segala kebutuhan Anda seputar properti, konstruksi, interior, hingga ruang produktif. Kami percaya bahwa sebuah bangunan bukan sekadar struktur fisik, melainkan tempat di mana kehidupan, kenyamanan, dan bisnis berkembang.";

// Data Founder Profile (Tanpa Foto)
export const founderProfile = {
  name: "Ir. Alex T Mayezet",
  role: "Founder & CEO HomeWorks Group",
  quote: "Membangun dengan keahlian teknik, merawat dengan dedikasi penuh.",
  background: "HomeWorks Group didirikan dan dipimpin langsung oleh Ir. Alex T Mayezet, seorang profesional di bidang struktur dan konstruksi. Beliau merupakan lulusan Teknik Sipil Universitas Andalas (Unand), salah satu rumpun teknik sipil terbaik yang telah mencetak banyak infrastruktur dan tenaga ahli di Indonesia. Dengan latar belakang akademis kedirgantaraan/teknik sipil yang kuat dan gelar Insinyur (Ir.) resmi, beliau mengintegrasikan standar keamanan, presisi struktural, dan manajemen proyek yang ketat ke seluruh lini bisnis HomeWorks Group."
};

export const servicesData: Service[] = [
  {
    id: 'homeworks-realty',
    title: 'HomeWorks Realty',
    iconName: 'Building',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    description: 'Divisi agen properti tepercaya yang membantu klien dalam proses jual, beli, dan sewa properti (tanah, rumah, ruko, hingga gedung komersial) dengan legalitas yang aman dan transparan.',
    visi: 'Menjadi mitra pencarian properti paling tepercaya dan bernilai investasi tinggi bagi masyarakat.',
    misi: 'Menyediakan unit properti berkualitas, mempermudah proses transaksi hukum, dan memberikan konsultasi investasi properti yang akurat.',
    details: [
      'Proses jual/beli properti yang transparan & akuntabel',
      'Legalitas aman, legal, dan bebas sengketa',
      'Sewa-menyewa ruko, rumah, tanah, hingga gedung komersial',
      'Konsultasi investasi properti dengan analisis akurat'
    ],
    whyChooseUs: [
      'Legalitas 100% aman & terjamin',
      'Listing properti terverifikasi',
      'Konsultan properti berpengalaman',
      'Negosiasi transparan tanpa markup liar',
      'Pilihan properti prospektif investasi tinggi',
      'Jaringan buyer & seller yang luas'
    ],
    servicesList: [
      {
        category: 'Jual / Beli Properti',
        items: [
          'Rumah tinggal baru & bekas',
          'Ruko & komersial',
          'Tanah kavling strategis',
          'Gedung & ruang kantor'
        ]
      },
      {
        category: 'Sewa Properti',
        items: [
          'Rumah kontrakan / sewa',
          'Ruko usaha',
          'Kantor komersial',
          'Apartemen premium'
        ]
      },
      {
        category: 'Layanan Titip Jual',
        items: [
          'Pemasaran properti cepat',
          'Pembuatan materi promosi profesional',
          'Survei buyer terfilter'
        ]
      },
      {
        category: 'Konsultasi Investasi Properti',
        items: [
          'Analisis nilai pasar (appraisal)',
          'Proyeksi return on investment (ROI)',
          'Rekomendasi wilayah berkembang'
        ]
      }
    ],
    packages: [
      {
        name: 'Basic Realty',
        items: ['Listing properti di marketplace utama', 'Konsultasi awal gratis', 'Pembuatan janji survei']
      },
      {
        name: 'Investor Package',
        items: ['Laporan analisis ROI berkala', 'Akses listing off-market (eksklusif)', 'Pendampingan legalitas & notaris penuh']
      },
      {
        name: 'Seller Pro Package',
        items: ['Foto & video properti profesional', 'Iklan digital berbayar tertarget', 'Pengurusan berkas jual-beli lengkap']
      }
    ]
  },
  {
    id: 'homeworks-engineering',
    title: 'HomeWorks Engineering',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Konsultan teknik yang berfokus pada perencanaan struktur, analisis kelayakan bangunan, gambar kerja teknis, serta sistem mekanikal, elektrikal, dan plumbing (MEP) yang diawasi langsung oleh ahli teknik sipil.',
    visi: 'Menjadi pelopor konsultan teknik sipil yang mengutamakan keamanan, presisi, dan efisiensi material.',
    misi: 'Menghasilkan dokumen perencanaan yang akurat, aman sesuai standar nasional, dan berbasis teknologi konstruksi modern.',
    details: [
      'Perencanaan struktur bangunan kokoh & tahan gempa',
      'Analisis kelayakan struktur & audit teknis bangunan',
      'Pembuatan gambar kerja teknis (DED) lengkap',
      'Perencanaan sistem MEP (Mechanical, Electrical, Plumbing)'
    ],
    whyChooseUs: [
      'Diawasi langsung oleh Insinyur Sipil profesional (Ir. Alex T Mayezet)',
      'Perencanaan struktur presisi dan aman gempa (SNI terbaru)',
      'Optimalisasi material untuk mencegah pemborosan biaya (efisien)',
      'Gambar kerja DED sangat detail & mudah dipahami di lapangan',
      'Peralatan audit struktur modern & bersertifikat',
      'Garansi keakuratan hasil analisis teknis'
    ],
    servicesList: [
      {
        category: 'Perencanaan Struktur Bangunan',
        items: [
          'Desain struktur beton bertulang',
          'Desain struktur baja bentang lebar',
          'Desain fondasi dalam / dangkal',
          'Gambar detail penulangan besi'
        ]
      },
      {
        category: 'Audit & Analisis Struktur',
        items: [
          'Uji kelayakan kekuatan bangunan',
          'Pengujian Hammer Test & Core Drill',
          'Rekomendasi perbaikan struktur retak / miring'
        ]
      },
      {
        category: 'Pembuatan Dokumen DED',
        items: [
          'Gambar arsitektural lengkap',
          'Gambar struktural detail',
          'Gambar kerja mekanikal & elektrikal (MEP)',
          'Rencana Anggaran Biaya (RAB) teknis'
        ]
      },
      {
        category: 'MEP & Utilitas',
        items: [
          'Perencanaan sistem kelistrikan & panel',
          'Perencanaan instalasi air bersih & air kotor',
          'Perencanaan sistem proteksi kebakaran'
        ]
      }
    ],
    packages: [
      {
        name: 'DED Perencanaan',
        items: ['Gambar kerja DED lengkap', 'Rencana Anggaran Biaya (RAB)', 'Gambar 3D Arsitektural']
      },
      {
        name: 'Audit Struktur',
        items: ['Pengujian lapangan (Hammer Test)', 'Analisis kapasitas beban sisa', 'Laporan kelayakan ber-Sertifikat']
      },
      {
        name: 'MEP Design',
        items: ['Gambar instalasi listrik & air', 'Rencana kapasitas genset/panel', 'Desain pemadam kebakaran']
      }
    ]
  },
  {
    id: 'homeworks-build',
    title: 'HomeWorks Build',
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    description: 'Kontraktor konstruksi fisik yang melayani pembangunan dari nol hingga renovasi total untuk rumah tinggal, perkantoran, dan gedung bisnis dengan manajemen proyek yang tepat waktu dan transparan.',
    visi: 'Menjadi kontraktor pilihan utama yang dikenal karena kualitas bangunan yang kokoh dan ketepatan waktu eksekusi.',
    misi: 'Mewujudkan bangunan impian klien dengan material terbaik, pekerja terampil, dan manajemen anggaran yang efisien tanpa biaya tak terduga.',
    details: [
      'Pembangunan rumah, ruko, dan gedung dari nol',
      'Renovasi total dan penambahan lantai bangunan',
      'Manajemen proyek transparan dan tepat waktu',
      'Penggunaan material konstruksi berkualitas SNI'
    ],
    whyChooseUs: [
      'Manajemen proyek profesional dengan timeline ketat (tepat waktu)',
      'Penggunaan material berstandar SNI (no downgrade)',
      'Tukang terampil berpengalaman di bawah pengawasan insinyur',
      'RAB transparan, tanpa biaya tambahan tak terduga (no hidden fee)',
      'Garansi pemeliharaan bangunan pasca serah terima',
      'Pelaporan progress berkala (foto & video berkala)'
    ],
    servicesList: [
      {
        category: 'Pembangunan Fisik Baru',
        items: [
          'Bangun rumah tinggal kustom',
          'Bangun ruko / tempat usaha',
          'Bangun kantor & gedung komersial'
        ]
      },
      {
        category: 'Renovasi Bangunan',
        items: [
          'Renovasi sebagian (atap, kamar mandi, dapur)',
          'Renovasi total / rombak total',
          'Penambahan lantai (dak beton / tingkat)'
        ]
      },
      {
        category: 'Pekerjaan Struktur Fisik',
        items: [
          'Pengecoran fondasi & kolom praktis',
          'Pembuatan balok struktur bentang lebar',
          'Pekerjaan atap baja ringan'
        ]
      },
      {
        category: 'Finishing & Eksterior',
        items: [
          'Pemasaran / pemasangan lantai keramik & granit',
          'Pengecatan dinding interior & eksterior',
          'Pemasangan plafon gypsum estetik'
        ]
      }
    ],
    packages: [
      {
        name: 'Structural Package',
        items: ['Konstruksi fondasi', 'Pengecoran kolom & balok', 'Pemasangan dinding bata & atap']
      },
      {
        name: 'Finishing Package',
        items: ['Pengecatan premium', 'Pemasangan granit lantai', 'Pekerjaan plafon & kusen jendela']
      },
      {
        name: 'Turnkey Build',
        items: ['Pembangunan utuh dari nol (struktur + finishing)', 'Free pembersihan pasca-konstruksi', 'Garansi pemeliharaan 3 bulan']
      }
    ]
  },
  {
    id: 'homeworks-interior',
    title: 'HomeWorks Interior',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Layanan desain interior kustom dan space planning yang memadukan keindahan estetika dengan fungsi ruangan, menciptakan suasana hunian atau tempat kerja yang nyaman dan mencerminkan karakter pemiliknya.',
    visi: 'Menghadirkan transformasi ruang yang estetik, fungsional, dan meningkatkan kualitas hidup penghuninya.',
    misi: 'Merancang konsep interior inovatif, memanfaatkan ruang secara optimal, dan mengeksekusi interior dengan detail pengerjaan (craftsmanship) yang rapi.',
    details: [
      'Desain interior kustom premium untuk hunian & komersial',
      'Optimalisasi tata ruang (Space Planning) fungsional',
      'Pengerjaan furniture kustom (built-in wardrobe & kitchen set)',
      'Pemilihan material & warna berkelas yang harmonis'
    ],
    whyChooseUs: [
      'Desain kustom eksklusif yang menyesuaikan keinginan klien',
      'Workshop pembuatan furnitur mandiri (kontrol kualitas tinggi)',
      'Craftsmanship detail pengerjaan rapi dan presisi',
      'Visualisasi 3D rendering photorealistic sebelum pengerjaan',
      'Bahan dasar multiplek/blockboard kualitas tinggi (bukan serbuk kayu)',
      'Harga transparan berdasarkan volume pengerjaan'
    ],
    servicesList: [
      {
        category: 'Desain & Visualisasi 3D',
        items: [
          'Konsep layout tata ruang 2D',
          'Desain 3D photorealistic premium',
          'Pemilihan palet warna & material'
        ]
      },
      {
        category: 'Pembuatan Furniture Kustom',
        items: [
          'Custom Kitchen Set fungsional',
          'Custom Wardrobe / Lemari pakaian',
          'Backdrop TV mewah',
          'Meja kerja & partisi penyekat'
        ]
      },
      {
        category: 'Interior Hunian & Komersial',
        items: [
          'Penataan interior kamar tidur utama',
          'Desain interior ruang tamu / keluarga',
          'Interior cafe & resto estetik',
          'Interior kantor modern'
        ]
      },
      {
        category: 'Pekerjaan Pendukung',
        items: [
          'Pemasaran / pemasangan wallpaper & wall moulding',
          'Instalasi lampu drop ceiling estetik',
          'Pemasangan gorden kustom'
        ]
      }
    ],
    packages: [
      {
        name: 'Kitchen Dream Set',
        items: ['Cabinet atas & bawah premium', 'Top table granite kustom', 'Backsplash keramik / kaca']
      },
      {
        name: 'Bedroom Suite Package',
        items: ['Custom tempat tidur / headboard', 'Wardrobe tinggi plafon', 'Meja rias & backdrop TV']
      },
      {
        name: 'Corporate Office Space',
        items: ['Meja kerja partisi kustom', 'Ruang meeting terintegrasi', 'Backdrop resepsionis mewah']
      }
    ]
  },
  {
    id: 'homeworks-clean',
    title: 'HomeWorks Clean',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description: 'Layanan kebersihan profesional (deep cleaning) untuk rumah, kantor, sofa, serta pembersihan khusus pasca-konstruksi sebelum bangunan siap ditempati oleh pemiliknya.',
    visi: 'Menciptakan lingkungan ruang hidup dan ruang kerja yang higienis, sehat, dan menyegarkan.',
    misi: 'Menggunakan peralatan modern dan bahan pembersih yang aman, serta memberikan layanan pembersihan yang detail hingga ke sudut tersulit.',
    details: [
      'Deep cleaning menyeluruh untuk rumah & kantor',
      'Pembersihan khusus pasca-konstruksi / renovasi',
      'Layanan cuci sofa, springbed, dan soft furniture',
      'Peralatan modern & bahan pembersih ramah lingkungan'
    ],
    whyChooseUs: [
      'Teknisi berpengalaman',
      'Peralatan profesional',
      'Aman untuk anak dan hewan peliharaan',
      'Pembersih berkualitas',
      'Pengerjaan cepat dan rapi',
      'Harga transparan',
      'Bergaransi kepuasan'
    ],
    servicesList: [
      {
        category: 'Cuci Sofa',
        items: ['Sofa kain', 'Sofa beludru', 'Sofa kulit sintetis', 'Sofa L', 'Sofa recliner']
      },
      {
        category: 'Cuci Kasur',
        items: ['Spring bed', 'Latex', 'Foam', 'Kasur hotel']
      },
      {
        category: 'Cuci Karpet',
        items: ['Karpet rumah', 'Karpet kantor', 'Karpet masjid', 'Karpet dekorasi']
      },
      {
        category: 'Cuci Kursi Kantor',
        items: ['Office Chair', 'Meeting Chair', 'Kursi tunggu']
      },
      {
        category: 'Cuci Gorden',
        items: ['Gorden rumah', 'Gorden kantor', 'Blackout Curtain']
      },
      {
        category: 'Deep Cleaning Rumah',
        items: ['Lantai', 'Dinding', 'Kaca', 'Kamar mandi', 'Dapur', 'Teras']
      },
      {
        category: 'General Cleaning',
        items: ['Rumah', 'Ruko', 'Kantor', 'Apartemen', 'Gudang']
      },
      {
        category: 'Cleaning Setelah Renovasi',
        items: ['Debu semen', 'Bekas cat', 'Noda perekat', 'Kaca', 'Keramik'],
        description: 'Layanan ini sangat cocok dipadukan dengan HomeWorks Build setelah proyek renovasi selesai.'
      },
      {
        category: 'Cleaning Sebelum Rumah Ditempati',
        items: ['Rumah baru', 'Rumah bekas', 'Properti sewa'],
        description: 'Layanan ini melengkapi HomeWorks Realty sebelum serah terima kepada pemilik atau penyewa.'
      },
      {
        category: 'Poles Lantai',
        items: ['Granit', 'Marmer', 'Teraso', 'Homogeneous Tile']
      },
      {
        category: 'Fogging & Disinfeksi',
        items: ['Rumah', 'Kantor', 'Gudang', 'Tempat usaha']
      }
    ],
    packages: [
      {
        name: 'Basic Clean',
        items: ['Sofa', 'Karpet kecil', 'Vacuum']
      },
      {
        name: 'Family Package',
        items: ['Sofa', 'Kasur', 'Karpet']
      },
      {
        name: 'Move In Package',
        items: ['Deep Cleaning', 'Kamar mandi', 'Dapur', 'Kaca']
      },
      {
        name: 'Renovation Package',
        items: ['General Cleaning', 'Poles lantai', 'Pembersihan sisa material']
      }
    ]
  },
  {
    id: 'sofaworks',
    title: 'SofaWorks (Coworking Space)',
    iconName: 'Laptop',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    description: 'Ruang kerja bersama yang modern, produktif, dan fleksibel di Gedung Raja Sofa. Dilengkapi dengan fasilitas internet cepat, ruang rapat (meeting room), dan ekosistem yang mendukung pertumbuhan komunitas bisnis serta freelancer.',
    visi: 'Menjadi pusat ekosistem kreatif dan kolaboratif bagi para profesional, pengusaha, dan komunitas di wilayah sekitar.',
    misi: 'Menyediakan lingkungan kerja yang nyaman dan kondusif, memfasilitasi peluang jejaring (networking), serta memberikan pelayanan operasional kantor yang premium.',
    details: [
      'Internet serat optik super cepat & stabil',
      'Ruang rapat modern (meeting room) dengan multimedia',
      'Shared desk & private office ber-AC nyaman',
      'Ekosistem jejaring bisnis (networking) & free-flow beverage'
    ],
    whyChooseUs: [
      'Lokasi strategis di lantai atas Gedung Raja Sofa Pekanbaru',
      'Fasilitas premium ber-AC dengan internet serat optik super cepat',
      'Sofa kustom super nyaman langsung dari Rajasofa.id',
      'Lingkungan kerja yang tenang, produktif, dan bebas gangguan',
      'Free flow kopi, teh, dan air mineral berkualitas',
      'Fleksibilitas sewa harian, bulanan, hingga tahunan'
    ],
    servicesList: [
      {
        category: 'Hot Desk & Coworking Area',
        items: [
          'Meja kerja bersama nyaman',
          'Kursi ergonomis & sofa kustom',
          'Colokan listrik melimpah di setiap spot'
        ]
      },
      {
        category: 'Private Office Space',
        items: [
          'Ruang kantor pribadi untuk tim (3-8 orang)',
          'Pintu terkunci aman & AC mandiri',
          'Free kuota meeting room'
        ]
      },
      {
        category: 'Meeting Room Booking',
        items: [
          'Ruang rapat kedap suara',
          'Fasilitas TV presentasi & papan tulis',
          'Kapasitas hingga 12 orang'
        ]
      },
      {
        category: 'Virtual Office',
        items: [
          'Alamat domisili bisnis legal di Gedung Raja Sofa',
          'Layanan penanganan surat & paket masuk'
        ]
      }
    ],
    packages: [
      {
        name: 'Daily Pass',
        items: ['Akses hot desk 1 hari penuh', 'Free flow coffee & tea', 'High-speed internet']
      },
      {
        name: 'Monthly Dedicated',
        items: ['Meja kerja tetap bulanan', 'Free kuota meeting room 5 jam/bulan', 'Layanan loker penyimpanan']
      },
      {
        name: 'Private Office Monthly',
        items: ['Ruang kantor khusus untuk tim Anda', 'Akses 24/7 aman', 'Free kuota meeting room 15 jam/bulan']
      }
    ]
  },
  {
    id: 'raja-sofa',
    title: 'Raja Sofa',
    iconName: 'Armchair',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Sofa premium berkualitas tinggi yang dirancang khusus untuk kenyamanan dan keindahan maksimal ruang Anda. Dibuat dengan material berkualitas tinggi dan craftsmanship terbaik untuk menghiasi ruang hidup Anda secara mewah.',
    details: [
      'Koleksi sofa mewah & premium dari Rajasofa.id',
      'Kustomisasi ukuran, model, dan warna kain premium',
      'Material busa & rangka super kokoh bergaransi',
      'Craftsmanship detail pengerjaan rapi & eksklusif'
    ],
    whyChooseUs: [
      'Garansi rangka kayu kokoh dan busa tebal bergaransi',
      'Bahan kulit sintetis premium dan kain beludru impor berkualitas',
      'Custom model, ukuran, dan warna menyesuaikan ruangan Anda',
      'Craftsmanship berpengalaman di bengkel sofa Pekanbaru',
      'Free ongkir khusus wilayah Kota Pekanbaru',
      'Layanan service sofa lama menjadi baru kembali'
    ],
    servicesList: [
      {
        category: 'Sofa Kustom Baru',
        items: [
          'Sofa L-Shape minimalis & mewah',
          'Sofa 3-seater / 2-seater ruang tamu',
          'Sofa Bed multifungsi',
          'Sofa recliner super nyaman'
        ]
      },
      {
        category: 'Sofa Komersial',
        items: [
          'Sofa tunggu lobi hotel',
          'Sofa booth untuk restoran / cafe',
          'Sofa kantor & ruang meeting'
        ]
      },
      {
        category: 'Service & Upholstery Sofa',
        items: [
          'Ganti kain/kulit sofa lama yang rusak',
          'Tambah busa kualitas density tinggi',
          'Perbaikan rangka sofa yang patah'
        ]
      }
    ],
    packages: [
      {
        name: 'Home Suite Package',
        items: ['Sofa 3-seater + 1-seater kustom', 'Pilihan bahan kain beludru/canvas', 'Free bantal hias']
      },
      {
        name: 'Resto & Cafe Upholstery',
        items: ['Sofa booth panjang kustom', 'Kulit sintetis mudah dibersihkan', 'Desain kokoh tahan lama']
      },
      {
        name: 'Sofa Premium Restore',
        items: ['Ganti kulit sofa lama dengan kulit sintetis premium', 'Tambah busa density tinggi', 'Finishing ulang kaki kayu']
      }
    ],
    link: 'https://rajasofa.id'
  }
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 'ekosistem-terintegrasi',
    title: 'Ekosistem Bisnis Terintegrasi',
    description: 'Satu-satunya grup yang menawarkan solusi satu atap (one-stop solution) seputar properti, perencanaan struktur, pembangunan konstruksi, interior mewah, kebersihan profesional, hingga coworking space produktif.',
    iconName: 'Layers'
  },
  {
    id: 'keahlian-sipil',
    title: 'Keahlian Teknik Profesional',
    description: 'Dipimpin langsung oleh Ir. Alex T Mayezet (lulusan Teknik Sipil Unand) yang menjamin seluruh standar keamanan bangunan, analisis kelayakan struktur bangunan, dan manajemen proyek terkontrol secara presisi.',
    iconName: 'Award'
  },
  {
    id: 'transparansi-anggaran',
    title: 'Transparansi & Manajemen Ketat',
    description: 'Kami memberikan penawaran harga yang terperinci dan transparan tanpa ada biaya tak terduga (hidden cost), serta laporan progress berkala demi kepuasan mutlak klien.',
    iconName: 'DollarSign'
  },
  {
    id: 'craftsmanship',
    title: 'Craftsmanship & Standar Tinggi',
    description: 'Setiap lini ekosistem kami, mulai dari rancangan konstruksi, kerapian jahitan interior, hingga pembersihan menyeluruh, dieksekusi oleh tenaga ahli terampil berlisensi.',
    iconName: 'CheckSquare'
  }
];

export const projectsData: Project[] = [
  {
    id: 'project-realty-villa',
    title: 'The Elite Residence',
    category: 'Villa',
    location: 'Padang, Sumatera Barat',
    area: '450 sqm',
    style: 'Classic Modern',
    year: 2026,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'Proyek hunian mewah terintegrasi hasil kolaborasi HomeWorks Realty, Engineering, Build, dan Interior. Menyuguhkan rancangan struktur aman gempa dengan estetika ruang tinggal berkelas tinggi.',
    keyFeatures: [
      'Struktur fondasi kokoh didesain oleh HomeWorks Engineering',
      'Pembangunan presisi tepat waktu oleh HomeWorks Build',
      'Desain interior kustom berkelas oleh HomeWorks Interior',
      'Pembersihan pasca-konstruksi steril dari HomeWorks Clean'
    ]
  },
  {
    id: 'project-sofaworks',
    title: 'Gedung Raja Sofa & SofaWorks',
    category: 'Office',
    location: 'Pusat Kota',
    area: '1,200 sqm',
    style: 'Industrial Modern',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'Transformasi ruang kerja kolaboratif SofaWorks di lantai atas Gedung Raja Sofa. Didesain dengan tata kelola akustik canggih dan furnitur sofa premium terintegrasi langsung.',
    keyFeatures: [
      'Penyediaan internet berkecepatan tinggi & area meeting',
      'Desain interior minimalis dengan sofa kustom Rajasofa.id',
      'Tata ruang kerja produktif & sirkulasi udara optimal',
      'Pembersihan teratur dan berkala oleh tim deep clean profesional'
    ]
  }
];

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    title: 'Konsultasi Ekosistem',
    description: 'Diskusi awal seputar kebutuhan properti Anda, apakah jual-beli realty, perencanaan sipil, renovasi fisik, interior, atau ruang kerja.'
  },
  {
    step: '02',
    title: 'Survei Lapangan & Analisis',
    description: 'Survei mendalam ke lokasi proyek oleh tim teknik sipil untuk mengukur ruang, memeriksa struktur awal, dan menganalisis kondisi lingkungan.'
  },
  {
    step: '03',
    title: 'Penyusunan Perencanaan & Desain',
    description: 'Tim arsitek dan struktur membuat gambar kerja teknis (DED), visualisasi 3D interior, serta anggaran biaya proyek yang transparan.'
  },
  {
    step: '04',
    title: 'Eksekusi & Konstruksi Fisik',
    description: 'Pengerjaan fisik bangunan oleh kontraktor HomeWorks Build dan penataan ruangan oleh tim interior dengan standar pengawasan ketat.'
  },
  {
    step: '05',
    title: 'Deep Cleaning Pasca-Konstruksi',
    description: 'Pembersihan menyeluruh secara steril oleh HomeWorks Clean agar ruangan bersih dari debu semen, sisa cat, dan siap untuk dihuni segera.'
  },
  {
    step: '06',
    title: 'Serah Terima Kunci',
    description: 'Inspeksi akhir bersama klien, penyerahan seluruh berkas legalitas dan dokumen perencanaan teknis, serta serah terima kunci bangunan.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Andi Pratama',
    company: 'Pemilik Villa Elite Residence',
    rating: 5,
    text: 'Sangat terbantu dengan konsep Satu Atap dari HomeWorks Group. Dari urusan legalitas tanah di Realty, perhitungan struktur aman di Engineering, pembangunan di Build, hingga interior diisi sofa dari Rajasofa, semuanya mulus tanpa repot!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Siti Rahma',
    company: 'CEO Startup Tech & Member SofaWorks',
    rating: 5,
    text: 'SofaWorks di Gedung Raja Sofa adalah coworking ter-nyaman yang pernah saya coba. Fasilitasnya sangat premium, internetnya kencang, suasananya kondusif sekali untuk networking bisnis.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const statsData: StatItem[] = [
  { id: 'stat-completed', label: 'Proyek Selesai', value: 150, suffix: '+' },
  { id: 'stat-experience', label: 'Tahun Pengalaman', value: 10, suffix: ' Tahun' },
  { id: 'stat-divisions', label: 'Divisi Bisnis', value: 6, suffix: ' Ekosistem' },
  { id: 'stat-clients', label: 'Klien Puas', value: 100, suffix: '%' }
];

export const teamMembersData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ir. Alex T Mayezet',
    role: 'Founder & CEO',
    experience: '15+ Tahun',
    specialization: 'Struktur, Konstruksi & Manajemen Sipil',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80' // default placeholders used elegantly
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apa itu HomeWorks Group?',
    answer: 'HomeWorks Group adalah penyedia layanan terpadu (One-Stop Solution) untuk semua kebutuhan properti dan ruang kerja Anda. Kami melayani mulai dari jual-beli properti, perencanaan teknik, kontraktor bangunan, desain interior, perawatan teknis rumah, jasa kebersihan, hingga penyediaan coworking space.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa memesan layanan secara terpisah (misalnya hanya jasa pembersihan saja)?',
    answer: 'Bisa! Anda bebas memilih layanan yang Anda butuhkan saja, baik itu hanya deep cleaning (HomeWorks Clean), perbaikan (HomeWorks Care), maupun pembuatan (HomeWorks Interior).',
    category: 'Process'
  },
  {
    id: 'faq-3',
    question: 'Siapa saja yang bisa menggunakan layanan HomeWorks Group?',
    answer: 'Layanan kami dirancang untuk semua kalangan. Kami melayani kebutuhan korporat/bisnis, pasangan muda yang baru menikah dan ingin merenovasi rumah, hingga mahasiswa atau anak kos yang membutuhkan jasa pindahan, pembersihan kamar, atau ruang kerja harian.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Bagaimana cara melakukan konsultasi atau pemesanan layanan?',
    answer: 'Sangat mudah. Anda tinggal klik tombol WhatsApp yang ada di website ini, dan tim Customer Service kami akan langsung membantu Anda menjadwalkan survei atau konsultasi gratis.',
    category: 'Process'
  },
  {
    id: 'faq-5',
    question: 'Di mana lokasi kantor pusat HomeWorks Group?',
    answer: 'Seluruh divisi operasional kami berpusat di satu markas yang sama, yaitu di Gedung Raja Sofa Pekanbaru. Anda bisa datang langsung ke kantor kami untuk konsultasi tatap muka.',
    category: 'General'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Mengapa Presisi Struktur Sangat Penting Sebelum Membangun Rumah',
    excerpt: 'Ir. Alex T Mayezet menguraikan betapa krusialnya perhitungan kekuatan beton dan fondasi bangunan demi investasi properti jangka panjang.',
    content: 'Membangun sebuah rumah bukan hanya soal tampilan visual yang estetik di luar, melainkan keamanan mutlak seluruh penghuni di dalamnya. Sebagai lulusan rumpun sipil terbaik, kami mengintegrasikan analisis pembebanan gempa dan struktur mekanika tanah yang detail sebelum peletakan batu pertama.',
    readTime: '5 min read',
    category: 'Engineering & Struktur',
    date: 'Juli 05, 2026',
    image: 'https://images.unsplash.com/photo-1503387762-592dedbd82d2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blog-2',
    title: 'Transformasi Desain Interior: Memaksimalkan Ruang Hunian yang Estetik',
    excerpt: 'Tips dari divisi HomeWorks Interior seputar pemilihan warna mewah, tata letak fungsional, dan sofa kustom premium.',
    content: 'Setiap sudut ruangan harus memiliki fungsi optimal yang meningkatkan kualitas hidup penghuninya. Dengan pemilihan material, layout space planning, dan sentuhan sofa kustom dari Rajasofa.id, rumah Anda akan memancarkan kemewahan yang fungsional.',
    readTime: '4 min read',
    category: 'Interior & Tips',
    date: 'Juni 28, 2026',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  }
];

export const clientLogos = [
  { name: 'Unand', logo: 'TEKNIK SIPIL UNAND' },
  { name: 'RajaSofa', logo: 'RAJASOFA.ID' },
  { name: 'HomeWorks', logo: 'HOMEWORKS GROUP' }
];

export const awardsData = [
  { year: 'Resmi', title: 'Gelar Insinyur (Ir.)', org: 'Persatuan Insinyur Indonesia' },
  { year: 'Alumni', title: 'Teknik Sipil Unand', org: 'Rumpun Teknik Sipil Terbaik Indonesia' },
  { year: 'Inovasi', title: 'Ekosistem Properti Terintegrasi', org: 'Satu Atap Jasa Konstruksi & Realty' }
];
