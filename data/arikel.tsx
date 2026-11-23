// string = paragraf, { subjudul } = judul bagian di tengah artikel
export type Blok =
  | string
  | { subjudul: string }
  | { foto: string; keterangan?: string };

export const filterKategori = [
  "Semua",
  "Nasional",
  "Olahraga",
  "Teknologi",
  "Peristiwa",
] as const;

export type Kategori = Exclude<(typeof filterKategori)[number], "Semua">;

export const daftarKategori = filterKategori.filter(
  (k): k is Kategori => k !== "Semua",
);

export type Artikel = {
  slug: string;
  kategori: Kategori;
  judul: string;
  ringkasan: string;
  gambar: string;
  tanggal: string; // ISO: YYYY-MM-DD
  penulis: string;
  menitBaca: number;
  kutipan?: string;
  isi: Blok[];
  keteranganGambar?: string; // caption foto utama (opsional)
};

export const formatTanggal = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const artikel: Artikel[] = [
  // new news
  {
    slug: "harga-cabai-rawit-merah-tembus-rp97-ribu-per-kg",
    kategori: "Nasional",
    judul:
      "Harga Cabai Rawit Merah Tembus Rp97 Ribu per Kg, Masyarakat Diminta Pantau Harga Pangan",
    ringkasan:
      "Berdasarkan data PIHPS Nasional Bank Indonesia, harga cabai rawit merah tercatat Rp97.550 per kilogram pada Senin (23/11/2026), sementara komoditas pangan lain ikut bergerak.",
    gambar: "/berita/cabai-1.jpg",
    keteranganGambar:
      "Cabai merah dan bawang merah di salah satu pasar tradisional.",
    tanggal: "2026-11-23",
    penulis: "Redaksi Narasi Kini",
    menitBaca: 1,
    isi: [
      "JAKARTA, NARASI KINI — Harga sejumlah bahan pangan pokok di pasar tradisional Indonesia mengalami pergerakan pada Senin (23/11/2026). Berdasarkan data Pusat Informasi Harga Pangan Strategis (PIHPS) Nasional Bank Indonesia, harga cabai rawit merah tercatat mencapai Rp97.550 per kilogram.",
      "Selain cabai rawit merah, harga bawang merah di tingkat pedagang eceran secara nasional tercatat sebesar Rp40.950 per kilogram, sedangkan bawang putih mencapai Rp40.200 per kilogram. Sementara itu, harga cabai merah keriting berada di angka Rp82.000 per kilogram.",
      "Untuk komoditas lainnya, harga daging ayam ras tercatat sebesar Rp38.500 per kilogram, telur ayam ras Rp29.250 per kilogram, dan beras kualitas medium berada pada kisaran Rp16.600 hingga Rp16.650 per kilogram.",
      "Pergerakan harga tersebut menunjukkan bahwa sejumlah komoditas pangan masih mengalami perubahan harga di tingkat pasar. Kondisi ini menjadi perhatian masyarakat, khususnya dalam memenuhi kebutuhan sehari-hari.",
      "Data harga tersebut dihimpun berdasarkan pemantauan PIHPS Nasional Bank Indonesia pada Senin (23/11/2026) pukul 10.00 WIB.",
      "Sumber: PIHPS Nasional Bank Indonesia melalui Pantau.com.",
    ],
  },
  {
    slug: "prabowo-serahkan-dua-nama-calon-wapres-ke-mpr",
    kategori: "Nasional",
    judul:
      "Prabowo Dijadwalkan Serahkan Dua Nama Calon Wapres ke MPR, Proses Pergantian Gibran Berlanjut",
    ringkasan:
      "Presiden Prabowo Subianto dikabarkan akan menyerahkan dua nama calon wakil presiden pengganti Gibran Rakabuming Raka kepada MPR pada Senin (23/11/2026).",
    gambar: "/berita/wapres-1.jpg",
    keteranganGambar:
      "Presiden Prabowo Subianto di podium, dengan Gibran Rakabuming Raka duduk di sisi kanan.",
    tanggal: "2026-11-23",
    penulis: "Redaksi Narasi Kini",
    menitBaca: 1,
    isi: [
      "JAKARTA, NARASI KINI — Presiden Prabowo Subianto dikabarkan akan menyerahkan secara langsung dua nama calon wakil presiden pengganti Gibran Rakabuming Raka kepada Majelis Permusyawaratan Rakyat (MPR) pada Senin (23/11/2026).",
      "Ketua MPR RI Ahmad Muzani menyampaikan bahwa pihaknya telah menerima informasi mengenai rencana kedatangan Presiden untuk menyerahkan usulan dua nama calon wakil presiden tersebut di Kompleks Parlemen, Senayan, Jakarta.",
      "Muzani menjelaskan bahwa penyerahan dua nama tersebut merupakan bagian dari tahapan pengisian jabatan wakil presiden yang saat ini sedang diproses oleh MPR. Namun, mengenai waktu pasti kedatangan Presiden, pihak MPR masih menunggu informasi lebih lanjut.",
      "Sebelumnya, MPR telah menggelar rapat gabungan untuk membahas mekanisme serta jadwal pelaksanaan sidang paripurna pemilihan dan pelantikan wakil presiden pengganti.",
      "Proses selanjutnya akan melibatkan pemeriksaan administrasi dan persyaratan terhadap calon yang diajukan sebelum memasuki tahapan pemilihan dalam sidang paripurna MPR.",
      "Hingga Senin (23/11/2026) siang, MPR masih menunggu kepastian penyerahan dua nama calon wakil presiden dari Presiden Prabowo Subianto.",
      "Sumber: CNBC Indonesia dan Tirto, 23 November 2026.",
    ],
  },
  {
    slug: "pon-pantai-2026-resmi-digelar-di-ancol-jakarta",
    kategori: "Olahraga",
    judul: "PON Pantai 2026 Resmi Digelar di Ancol, Jakarta",
    ringkasan:
      "PON Pantai 2026 diikuti sekitar seribu atlet dari 33 provinsi dan mempertandingkan 10 cabang olahraga pada 21–27 November 2026.",
    gambar: "/berita/ponpantai-1.jpg",
    keteranganGambar:
      "Para atlet berlomba di perairan laut dengan papan dayung.",
    tanggal: "2026-11-21",
    penulis: "Redaksi Narasi Kini",
    menitBaca: 1,
    isi: [
      "JAKARTA, NARASI KINI — Pekan Olahraga Nasional (PON) Pantai 2026 resmi diselenggarakan di kawasan wisata Ancol, Jakarta, pada Sabtu (21/11/2026). Ajang olahraga nasional tersebut diikuti oleh kontingen dari 33 provinsi dengan melibatkan sekitar seribu atlet yang akan bertanding dalam berbagai cabang olahraga pantai.",
      "Kementerian Pemuda dan Olahraga (Kemenpora) menyambut baik penyelenggaraan perdana PON Pantai tersebut. Deputi Pengembangan Industri Olahraga Kemenpora, Teuku Arlan Perkasa Lukman, menegaskan bahwa keselamatan atlet harus menjadi prioritas utama selama pertandingan berlangsung.",
      "Menurutnya, beberapa nomor pertandingan menggunakan laut sebagai arena perlombaan sehingga membutuhkan perhatian khusus dari panitia dan petugas terlatih untuk memastikan kondisi atlet tetap aman.",
      "PON Pantai 2026 mempertandingkan 10 cabang olahraga, di antaranya polo air, renang perairan terbuka, bola basket 3x3, bola voli pantai, bola tangan pantai, layar, rugby pantai, selam laut, teqball, dan triathlon.",
      "Ajang tersebut dijadwalkan berlangsung pada 21–27 November 2026. Selain menjadi wadah kompetisi atlet dari berbagai daerah, penyelenggaraan PON Pantai juga diharapkan mampu mendorong perkembangan industri olahraga dan perekonomian di wilayah tuan rumah.",
      "Sumber: Kementerian Pemuda dan Olahraga Republik Indonesia, 21 November 2026.",
    ],
  },
  {
    slug: "ai-agent-jadi-ancaman-baru-kemkomdigi-dan-bssn-perkuat-keamanan-siber",
    kategori: "Teknologi",
    judul:
      "AI Agent Jadi Ancaman Baru, Kemkomdigi dan BSSN Perkuat Keamanan Siber Nasional",
    ringkasan:
      "Kemkomdigi dan BSSN berkoordinasi mengantisipasi serangan siber yang memanfaatkan AI Agent, termasuk lewat simulasi serangan dan penguatan infrastruktur digital nasional.",
    gambar: "/berita/aiagent-1.jpg",
    keteranganGambar:
      "Suasana acara peluncuran fasilitas infrastruktur digital di Indonesia, 10 November 2026.",
    tanggal: "2026-11-10",
    penulis: "Redaksi Narasi Kini",
    menitBaca: 1,
    isi: [
      "JAKARTA, NARASI KINI — Kementerian Komunikasi dan Digital (Kemkomdigi) bersama Badan Siber dan Sandi Negara (BSSN) melakukan koordinasi untuk mengantisipasi ancaman serangan siber global yang memanfaatkan teknologi kecerdasan buatan atau Artificial Intelligence (AI). Koordinasi tersebut dilakukan pada Selasa (10/11/2026) sebagai langkah memperkuat perlindungan infrastruktur digital nasional.",
      "Wakil Menteri Komunikasi dan Digital Nezar Patria menjelaskan bahwa perkembangan teknologi AI memungkinkan munculnya pola serangan siber baru melalui penggunaan AI Agent yang mampu menjalankan berbagai tindakan secara otomatis.",
      "Menurut Nezar, teknologi tersebut berpotensi meningkatkan kompleksitas serangan digital karena sejumlah agen AI dapat bekerja secara terkoordinasi untuk melakukan serangan terhadap sistem tertentu.",
      "Dalam menghadapi ancaman tersebut, BSSN telah melakukan sejumlah langkah antisipasi, termasuk simulasi serangan dan penguatan ketahanan infrastruktur digital nasional.",
      "Kemkomdigi juga berkoordinasi dengan berbagai pihak dalam ekosistem digital untuk meningkatkan kesiapan menghadapi perkembangan ancaman keamanan siber.",
      "Sumber: Kementerian Komunikasi dan Digital, 10 November 2026.",
    ],
  },
  {
    slug: "antrean-shuttle-tmii-mengular-banyak-yang-jalan-kaki",
    kategori: "Peristiwa",
    judul:
      "Antrean Mobilitas di TMII Mengular, Banyak yang Akhirnya Jalan Kaki",
    ringkasan:
      "Antrean pengunjung mengular sekitar 50 meter di Shuttle Mobilitas TMII saat cuti bersama, setelah kendaraan pribadi dilarang berkeliling kawasan.",
    gambar: "/berita/tmii-1.jpeg",
    keteranganGambar:
      "Antrean pengunjung di Shuttle Mobilitas TMII, Minggu (22/11/2026).",
    tanggal: "2026-11-22",
    penulis: "Maulana Ishaq",
    menitBaca: 2,
    isi: [
      "JAKARTA, NARASI KINI — Antrean pengunjung terjadi di Shuttle Mobilitas gratis di Taman Mini Indonesia Indah (TMII), Cipayung, Jakarta Timur, pada hari Minggu (22/11/2026).",
      "Antrean ini terjadi karena jumlah pengunjung yang membeludak akibat cuti bersama setelah Idul Adha di TMII. Di sisi lain, pengelola TMII telah melarang kendaraan pribadi berkeliling di kawasan tersebut. Dengan begitu, satu-satunya opsi untuk berkeliling di TMII adalah menumpang transportasi yang tersedia atau berjalan kaki.",
      "Antrean itu mengular sepanjang kurang lebih 50 meter dengan membentuk dua banjar memanjang. Antrean baru sedikit terurai setelah dua unit transportasi TMII datang mengangkut penumpang. Para pengunjung kemudian berjalan perlahan menghampiri kursi transportasi tersebut dengan kapasitas terbatas. Para pengunjung menunjukkan wajah kecewa lantaran kursi tersebut telah penuh.",
      {
        foto: "/berita/tmii-2.jpeg",
        keterangan:
          "Pengunjung menunggu giliran naik transportasi TMII di sisi jalur antrean.",
      },
      "Adapun kebijakan melarang kendaraan pribadi berkeliling TMII ini baru diterapkan setelah tempat wisata itu rampung direnovasi. Ketentuan itu dibuat pada November 2022 lalu, yang mengharuskan pengunjung tidak memakai kendaraan pribadi ke setiap destinasi wisata di TMII.",
      "Seluruh kendaraan yang dibawa pengunjung harus diparkirkan di lokasi yang telah disediakan, yaitu elevated parking yang berada di sebelah Gedung Graha Wisata TMII.",
    ],
  },
  {
    slug: "jamaah-umrah-gagal-berangkat-siapa-yang-disalahkan",
    kategori: "Peristiwa",
    judul: "Jamaah Umrah Gagal Berangkat, Siapa yang Disalahkan?",
    ringkasan:
      "Ratusan jamaah umrah tertahan di Bandara Soekarno-Hatta karena miskomunikasi jadwal keberangkatan antara pihak travel dan jamaah.",
    gambar: "/berita/umrah-1.jpeg",
    keteranganGambar:
      "Rombongan jamaah umrah menunggu kepastian keberangkatan di Bandara Soekarno-Hatta, Banten.",
    tanggal: "2026-11-20",
    penulis: "Maulana Ishaq",
    menitBaca: 2,
    kutipan:
      "Untuk keberangkatan umrah pada hari Jumat tanggal 20 November 2026 dibatalkan dan kami akan mencari tanggal pengganti secepatnya.",
    isi: [
      "JAKARTA, NARASI KINI — Rombongan jamaah umrah dari sebuah perusahaan travel di Jakarta menunggu kepastian keberangkatan. Para jamaah sudah lama menunggu sejak pukul 07.00 WIB hingga 19.00 WIB, tanpa ada informasi lagi dari pihak travel tentang proses keberangkatan umrah yang sedang berlangsung.",
      "Alhasil, ratusan jamaah umrah menunggu di sekitar area Bandara Soekarno-Hatta dan tidak diizinkan masuk ke pesawat. Setelah menunggu informasi lebih lanjut, pihak travel akhirnya menjelaskan duduk persoalan kegagalan keberangkatan yang menjadi perbincangan dalam situasi ini.",
      "Pihak travel mengatakan, “Untuk keberangkatan umrah pada hari Jumat tanggal 20 November 2026 dibatalkan dan kami akan mencari tanggal pengganti untuk keberangkatan ini secepatnya.” Setelah diselidiki lebih lanjut, permasalahan ini terjadi karena adanya miskomunikasi dari pihak travel ke jamaah.",
      {
        foto: "/berita/umrah-2.jpeg",
        keterangan:
          "Petugas dan jamaah di area keberangkatan menunggu informasi lanjutan.",
      },
      "Ternyata informasi yang diberikan pihak travel tentang waktu keberangkatan terdapat kekeliruan, dan para jamaah tidak mengonfirmasi lebih lanjut. Akibatnya, jamaah terlambat melakukan boarding, sementara pihak maskapai sudah angkat tangan atas kelalaian yang terjadi.",
    ],
  },
  {
    slug: "crane-proyek-hotel-mega-kuningan-patah",
    kategori: "Peristiwa",
    judul:
      "Crane Proyek Hotel di Mega Kuningan Patah, Satu Pekerja Meninggal Dunia",
    ringkasan:
      "Tower crane di proyek hotel kawasan Mega Kuningan patah dan menimpa seorang pekerja. Polisi masih menyelidiki penyebabnya.",
    gambar: "/nasional.jpeg",
    tanggal: "2026-11-14",
    penulis: "Maulana Ishaq",
    menitBaca: 1,
    isi: [
      "JAKARTA, NARASI KINI — Kecelakaan kerja terjadi di sebuah proyek pembangunan hotel di kawasan Mega Kuningan, Setiabudi, Jakarta Selatan, Jumat (13/11/2026). Insiden tersebut terjadi setelah sebuah tower crane mengalami kerusakan hingga patah dan menimpa seorang pekerja.",
      "Berdasarkan keterangan Polda Metro Jaya, peristiwa terjadi ketika sejumlah pekerja sedang bersiap untuk beristirahat dan mengantre lift dari lantai enam menuju lantai dasar. Salah seorang pekerja berinisial FB (38) menjadi korban dalam kejadian tersebut.",
      "Korban sempat dievakuasi dan dibawa ke rumah sakit, tetapi nyawanya tidak tertolong.",
      "Kepolisian telah melakukan olah tempat kejadian perkara (TKP), memeriksa sejumlah saksi, serta berkoordinasi dengan Pusat Laboratorium Forensik (Puslabfor) untuk mengetahui penyebab pasti kecelakaan.",
      "Hingga Sabtu (14/11/2026), penyebab patahnya tower crane masih dalam penyelidikan.",
      "Sumber : CNN Indonesia, 13 November 2026",
    ],
  },
  {
    slug: "atlet-disabilitas-meriahkan-jalan-sehat-tmii",
    kategori: "Olahraga",
    judul:
      "Olahraga Tanpa Batas, Atlet Disabilitas Ikut Meriahkan Jalan Sehat di TMII",
    ringkasan:
      "Atlet NPCI Jakarta bersama karyawan IFG mengikuti Jalan Sehat Kebangsaan di TMII yang diikuti lebih dari 300 peserta.",
    gambar: "/olahraga.jpeg",
    tanggal: "2026-11-14",
    penulis: "Maulana Ishaq",
    menitBaca: 1,
    isi: [
      "JAKARTA, NARASI KINI — Olahraga menjadi salah satu kegiatan yang mampu menyatukan berbagai kalangan masyarakat tanpa memandang keterbatasan fisik. Semangat tersebut terlihat dalam kegiatan IFG Synergy Day 2026 yang diselenggarakan di Taman Mini Indonesia Indah (TMII), Jakarta, Sabtu (14/11/2026).",
      "Kegiatan tersebut melibatkan atlet disabilitas dari National Paralympic Committee of Indonesia (NPCI) Jakarta bersama karyawan Indonesia Financial Group (IFG) dan sejumlah pemangku kepentingan.",
      "Sebanyak lebih dari 300 peserta mengikuti Jalan Sehat Kebangsaan dengan jarak sekitar 2,5 kilometer. Kegiatan ini juga menjadi kesempatan untuk memberikan apresiasi kepada atlet paralimpik yang telah mengharumkan nama Indonesia melalui prestasi olahraga.",
      "Menariknya, dari 40 atlet paralimpik NPCI Jakarta yang diundang, sebanyak 24 atlet merupakan peraih medali di tingkat nasional maupun internasional.",
      "Selain aktivitas olahraga, kegiatan tersebut juga menghadirkan dialog inspiratif bersama atlet disabilitas dan berbagai kegiatan kebersamaan.",
      "Melalui kegiatan ini, olahraga tidak hanya menjadi sarana menjaga kesehatan, tetapi juga menjadi ruang untuk membangun kebersamaan, kesetaraan, dan semangat saling mendukung di tengah masyarakat.",
      "Sumber : investortrust.id, 14 November 2026",
    ],
  },
  {
    slug: "serangan-siber-sasar-sektor-perbankan-ojk",
    kategori: "Teknologi",
    judul:
      "Lebih dari 1,2 Juta Serangan Siber Sasar Sektor Perbankan Indonesia, OJK Minta Bank Tingkatkan Keamanan",
    ringkasan:
      "OJK meminta seluruh bank memperkuat keamanan setelah lebih dari 1,2 juta upaya serangan siber terdeteksi dalam 24 jam.",
    gambar: "/teknologi.jpeg",
    tanggal: "2026-11-10",
    penulis: "Maulana Ishaq",
    menitBaca: 2,
    isi: [
      "JAKARTA, NARASI KINI — Industri perbankan dan keuangan Indonesia menghadapi peningkatan ancaman serangan siber. Berdasarkan data FortiGuard Labs, lebih dari 1,2 juta upaya serangan siber terdeteksi menyasar sektor perbankan, keuangan, dan asuransi dalam kurun waktu 24 jam hingga Senin malam (9/11/2026).",
      "Peningkatan ancaman tersebut mendorong Otoritas Jasa Keuangan (OJK) meminta seluruh bank di Indonesia meningkatkan kewaspadaan dan memperkuat sistem keamanan teknologi informasi.",
      "Kepala Eksekutif Pengawas Perbankan OJK, Dian Ediana Rae, mengatakan pihaknya telah melakukan koordinasi dengan bagian teknologi informasi (IT) seluruh bank sejak Jumat (6/11/2026). Koordinasi tersebut bertujuan memastikan setiap bank melakukan langkah pencegahan terhadap potensi serangan siber.",
      "OJK juga telah mengirimkan surat kepada jajaran direksi perbankan agar meningkatkan pengawasan terhadap aktivitas transaksi yang mencurigakan.",
      "Salah satu langkah yang ditekankan adalah melakukan pemantauan terhadap transaksi bernilai signifikan serta menunda sementara transaksi yang terindikasi tidak wajar untuk proses verifikasi.",
      "Selain itu, bank diminta melakukan pengujian keamanan sistem atau penetration testing, simulasi serangan siber, serta audit teknologi secara berkala.",
      { subjudul: "Sejumlah Bank Perkuat Sistem Keamanan" },
      "Menanggapi meningkatnya ancaman tersebut, sejumlah bank di Indonesia mulai memperkuat sistem keamanan digital mereka.",
      "CIMB Niaga, misalnya, menyatakan terus melakukan pemantauan terhadap perkembangan ancaman siber melalui tim teknologi informasi dan keamanan sibernya.",
      "Sementara itu, SeaBank juga mengoperasikan sistem pemantauan keamanan siber selama 24 jam untuk melindungi data dan dana nasabah.",
      "Kedua bank tersebut menegaskan bahwa keamanan sistem, perlindungan data pribadi, dan kelancaran operasional menjadi prioritas utama.",
      { subjudul: "Masyarakat Diminta Waspada" },
      "Di tengah meningkatnya ancaman kejahatan digital, masyarakat juga diminta lebih berhati-hati ketika melakukan transaksi perbankan.",
      "Nasabah diimbau untuk tidak membagikan informasi rahasia seperti PIN, kata sandi, dan kode OTP kepada pihak lain.",
      "Masyarakat juga diminta menghindari tautan mencurigakan serta memastikan seluruh aktivitas perbankan dilakukan melalui aplikasi dan situs resmi masing-masing bank.",
      "Peningkatan ancaman siber ini menjadi pengingat bahwa keamanan digital bukan hanya tanggung jawab lembaga perbankan, tetapi juga membutuhkan kesadaran dan kewaspadaan dari seluruh nasabah.",
      "Sumber : infobanknews.com, 09 November 2026",
    ],
  },
];

export const getArtikel = (slug: string) =>
  artikel.find((a) => a.slug === slug);

// berita terkait: kategori sama dulu, lalu sisanya, tanpa artikel yang sedang dibuka
export const getTerkait = (slug: string, jumlah = 3) => {
  const sekarang = getArtikel(slug);
  const lain = artikel.filter((a) => a.slug !== slug);
  const sama = lain.filter((a) => a.kategori === sekarang?.kategori);
  const beda = lain.filter((a) => a.kategori !== sekarang?.kategori);
  return [...beda, ...sama].slice(0, jumlah);
};

export const getTerbaruByKategori = (kategori: Artikel["kategori"]) =>
  artikel
    .filter((a) => a.kategori === kategori)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal))[0];

// berita lain di kategori yang sama dengan artikel ini, terbaru dulu
export const getLainnyaSekategori = (slug: string) => {
  const sekarang = getArtikel(slug);
  return artikel
    .filter((a) => a.kategori === sekarang?.kategori && a.slug !== slug)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
};
