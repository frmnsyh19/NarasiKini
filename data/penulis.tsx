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
    "Saya adalah pribadi yang selalu ingin berkembang, baik dalam bidang akademik, profesional, maupun kehidupan sehari-hari. Dengan latar belakang pendidikan di bidang komunikasi, saya percaya bahwa jurnalistik adalah jembatan untuk menyebarkan kebenaran dan membangun pemahaman yang lebih baik di masyarakat.",
    "Selain menulis, saya juga aktif dalam dunia digital, senang mengeksplorasi teknologi, dan tertarik pada berbagai isu terkini yang relevan dengan kehidupan masyarakat.",
  ],
  visi: "Menjadi jurnalis yang profesional, kreatif, dan berintegritas dalam menyampaikan informasi untuk masyarakat.",
  misi: [
    "Menghadirkan berita yang akurat, faktual, dan berimbang.",
    "Menyampaikan informasi yang edukatif dan inspiratif.",
    "Terus belajar dan berinovasi dalam dunia jurnalistik digital.",
  ],
};
