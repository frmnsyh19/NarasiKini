import type { NamaIkon } from "@/app/components/Ikon";

export type Penulis = {
  nama: string;
  jabatan: string;
  foto: string;
  fotoTentang: string;
  bio: string[];
  lahir: string;
  asal: string;
  email: string;
  keahlian: { label: string; ikon: NamaIkon }[];
  sosial: { nama: string; href: string; ikon: NamaIkon }[];
  tentang: string[];
  visi: string;
  misi: string[];
};

export const penulis: Penulis = {
  nama: "Maulana Ishaq",
  jabatan: "Editor & Content Creator",
  foto: "/profile.png",
  fotoTentang: "https://picsum.photos/seed/laptop/600/450",
  bio: [
    "Halo! Saya Maulana Ishaq, seorang jurnalis dan penulis berita di NARASI KINI. Saya memiliki ketertarikan besar pada dunia jurnalistik, informasi, dan teknologi, serta semangat untuk selalu belajar dan menyampaikan berita yang akurat, berimbang, dan bermanfaat bagi masyarakat.",
    "Melalui NARASI KINI, saya berkomitmen untuk menghadirkan informasi terkini dari berbagai bidang, mulai dari isu nasional, olahraga, dan teknologi, dengan gaya penulisan yang informatif dan mudah dipahami.",
  ],
  lahir: "19 Agustus 2002",
  asal: "Indonesia",
  email: "maulana.isaac19@gmail.com",
  keahlian: [
    { label: "Jurnalisme & Penulisan Berita", ikon: "pena" },
    { label: "Fotografi & Videografi", ikon: "kamera" },
    { label: "Editing Konten", ikon: "edit" },
    { label: "Riset & Analisis Data", ikon: "grafik" },
    { label: "Bahasa Indonesia & Inggris", ikon: "bahasa" },
  ],
  sosial: [
    { nama: "YouTube", href: "#", ikon: "youtube" },
    { nama: "Instagram", href: "#", ikon: "instagram" },
    { nama: "Facebook", href: "#", ikon: "facebook" },
    { nama: "X", href: "#", ikon: "x" },
    { nama: "TikTok", href: "#", ikon: "tiktok" },
  ],
  tentang: [
    "NARASI KINI adalah sebuah portal berita digital yang saya rancang sebagai media penyampaian informasi kepada masyarakat. Portal ini menyajikan berbagai jenis berita, baik hard news maupun soft news, dengan topik seperti nasional, olahraga, teknologi, dan peristiwa. Tujuan saya membangun NARASI KINI adalah menghadirkan informasi yang aktual, faktual, dan mudah dipahami oleh masyarakat. Saya menggunakan slogan Mengabarkan Fakta, Menghadirkan Cerita karena ingin menjadikan NARASI KINI sebagai media yang tidak hanya menyampaikan peristiwa, tetapi juga menghadirkan cerita dan informasi yang memiliki nilai bagi pembaca.",
  ],
  visi: "Menjadi jurnalis yang profesional, kreatif, dan berintegritas dalam menyampaikan informasi untuk masyarakat.",
  misi: [
    "Menghadirkan berita yang akurat, faktual, dan berimbang.",
    "Menyampaikan informasi yang edukatif dan inspiratif.",
    "Terus belajar dan berinovasi dalam dunia jurnalistik digital.",
  ],
};
