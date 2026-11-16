// string = paragraf, { subjudul } = judul bagian di tengah artikel
export type Blok = string | { subjudul: string };

export type Artikel = {
  slug: string;
  kategori: "Nasional" | "Olahraga" | "Teknologi";
  judul: string;
  ringkasan: string;
  gambar: string;
  tanggal: string; // ISO: YYYY-MM-DD
  penulis: string;
  menitBaca: number;
  kutipan?: string;
  isi: Blok[];
};

export const filterKategori = [
  "Semua",
  "Nasional",
  "Olahraga",
  "Teknologi",
] as const;

export const formatTanggal = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const artikel: Artikel[] = [
  {
    slug: "crane-proyek-hotel-mega-kuningan-patah",
    kategori: "Nasional",
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
  return [...sama, ...beda].slice(0, jumlah);
};
