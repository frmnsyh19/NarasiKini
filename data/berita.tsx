export type Berita = {
  id: number;
  kategori: string;
  judul: string;
  gambar: string;
  menitBaca?: number;
};

export type BeritaTerkini = {
  id: number;
  kategori: "Kota" | "Ekonomi" | "Olahraga";
  judul: string;
  ringkasan: string;
  gambar: string;
  tanggal: string; // format ISO: YYYY-MM-DD
};

export const filterKategori = ["Semua", "Kota", "Ekonomi", "Olahraga"] as const;

export const beritaTerkini: BeritaTerkini[] = [
  {
    id: 1,
    kategori: "Ekonomi",
    judul:
      "Harga pangan di pasar mulai bergerak, pedagang berharap pasokan stabil",
    ringkasan:
      "Pedagang dan pembeli sama-sama menanti kepastian pasokan menjelang akhir pekan.",
    gambar: "https://picsum.photos/seed/pangan/800/500",
    tanggal: "2026-11-14",
  },
  {
    id: 2,
    kategori: "Kota",
    judul:
      "Layanan publik kota dibenahi, warga minta proses yang makin sederhana",
    ringkasan:
      "Pembaruan layanan digital dinilai perlu dibarengi pendampingan bagi warga.",
    gambar: "https://picsum.photos/seed/layananpublik/800/500",
    tanggal: "2026-11-13",
  },
  {
    id: 3,
    kategori: "Olahraga",
    judul: "Timnas jaga fokus jelang laga penting, dukungan suporter mengalir",
    ringkasan:
      "Persiapan intensif dan kekompakan tim menjadi perhatian utama pelatih.",
    gambar: "https://picsum.photos/seed/timnasfokus/800/500",
    tanggal: "2026-11-13",
  },
];

// Slider Berita Utama (foto + judul saja)
export const beritaUtama: Berita[] = [
  {
    id: 1,
    kategori: "Kota",
    judul: "Wajah baru transportasi Jakarta: lebih cepat, lebih nyaman",
    gambar: "https://picsum.photos/seed/kota/1200/700",
  },
  {
    id: 2,
    kategori: "Teknologi",
    judul: "Startup lokal luncurkan asisten AI berbahasa Indonesia",
    gambar: "https://picsum.photos/seed/teknologi/1200/700",
  },
  {
    id: 3,
    kategori: "Olahraga",
    judul: "Final bulu tangkis nasional berlangsung dramatis, juara baru lahir",
    gambar: "https://picsum.photos/seed/olahraga/1200/700",
  },
];

// Sidebar Pilihan Redaksi
export const pilihanRedaksi: Berita[] = [
  {
    id: 1,
    kategori: "Ekonomi",
    judul:
      "Harga pangan di pasar mulai bergerak, pedagang berharap pasokan stabil",
    gambar: "https://picsum.photos/seed/pasar/300/300",
    menitBaca: 4,
  },
  {
    id: 2,
    kategori: "Kota",
    judul:
      "Layanan publik kota dibenahi, warga minta proses yang makin sederhana",
    gambar: "https://picsum.photos/seed/layanan/300/300",
    menitBaca: 6,
  },
  {
    id: 3,
    kategori: "Olahraga",
    judul: "Timnas jaga fokus jelang laga penting, dukungan suporter mengalir",
    gambar: "https://picsum.photos/seed/timnas/300/300",
    menitBaca: 3,
  },
];
