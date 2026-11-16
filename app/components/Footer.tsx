"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { artikel, formatTanggal } from "@/data/arikel";

// tiap kategori mengarah ke berita pertama di kategori itu
const kategoriLinks = (["Nasional", "Olahraga", "Teknologi"] as const).flatMap(
  (k) => {
    const pertama = artikel.find((a) => a.kategori === k);
    return pertama ? [{ label: k, href: `/berita/${pertama.slug}` }] : [];
  },
);

// 3 berita dengan tanggal paling baru
const terbaru = [...artikel]
  .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
  .slice(0, 3);

const informasi = [
  { label: "Tentang Kami", href: "#" },
  { label: "Redaksi", href: "#" },
  { label: "Pedoman Media Siber", href: "#" },
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Kontak", href: "#" },
];

const sosial = [
  {
    nama: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>
    ),
    gaya: "stroke",
  },
  {
    nama: "X",
    href: "#",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    gaya: "fill",
  },
  {
    nama: "Facebook",
    href: "#",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    ),
    gaya: "fill",
  },
  {
    nama: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" />
      </>
    ),
    gaya: "stroke",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [terkirim, setTerkirim] = useState(false);
  const [tahun, setTahun] = useState(2026); // nilai awal sama di server dan browser

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: sambungkan ke API newsletter
    setTerkirim(true);
    setEmail("");
  };

  // useEffect(() => {
  //   setTahun(new Date().getFullYear());
  // }, []);

  return (
    <footer className="mt-16">
      {/* ===== STRIP NEWSLETTER ===== */}
      <div className="bg-[#eeaf14]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              Jangan ketinggalan berita penting
            </h2>
            <p className="mt-2 text-white/85">
              Ringkasan berita pilihan redaksi langsung ke email kamu, setiap
              pagi.
            </p>
          </div>

          {terkirim ? (
            <p className="rounded-md bg-white/15 px-5 py-3 font-semibold text-white">
              Terima kasih, kamu sudah terdaftar ✓
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row md:max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email kamu"
                aria-label="Alamat email"
                className="min-w-0 flex-1 rounded-md bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="rounded-md bg-neutral-900 px-6 py-3 font-bold text-white transition-colors hover:bg-black">
                Berlangganan
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ===== KOLOM UTAMA ===== */}
      <div className="bg-neutral-900 text-neutral-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* brand */}
          <div>
            <Link href="/" className="text-3xl font-extrabold text-white">
              Narasi<span className="text-[#eeaf14]">Kini</span>
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed">
              Menyajikan kabar terkini dari Nasional, Olahraga, hingga Teknologi
              dengan bahasa yang ringkas dan mudah dipahami.
            </p>

            <div className="mt-6 flex gap-3">
              {sosial.map((s) => (
                <a
                  key={s.nama}
                  href={s.href}
                  aria-label={s.nama}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-[#c0392b] hover:bg-[#c0392b] hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill={s.gaya === "fill" ? "currentColor" : "none"}
                    stroke={s.gaya === "stroke" ? "currentColor" : "none"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* kategori */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Kategori
            </h3>
            <ul className="mt-5 space-y-3">
              {kategoriLinks.map((k) => (
                <li key={k.label}>
                  <Link
                    href={k.href}
                    className="transition-colors hover:text-white">
                    {k.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* informasi */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Informasi
            </h3>
            <ul className="mt-5 space-y-3">
              {informasi.map((i) => (
                <li key={i.label}>
                  <Link
                    href={i.href}
                    className="transition-colors hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* berita terbaru */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Berita Terbaru
            </h3>
            <ul className="mt-5 space-y-5">
              {terbaru.map((item) => (
                <li key={item.slug}>
                  <Link href={`/berita/${item.slug}`} className="group block">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#eeaf14]">
                      {item.kategori}
                      <span className="mx-2 text-neutral-600">/</span>
                      {formatTanggal(item.tanggal)}
                    </p>
                    <p className="mt-1 line-clamp-2 font-semibold leading-snug text-neutral-200 transition-colors group-hover:text-white">
                      {item.judul}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== BAR BAWAH ===== */}
        <div className="border-t border-neutral-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm md:flex-row">
            <p>© 2026 Narasi Kini. Hak cipta dilindungi.</p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-semibold text-neutral-300 transition-colors hover:text-white">
              ↑ Kembali ke atas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
