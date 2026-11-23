"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { artikel, formatTanggal } from "@/data/arikel";
// 3 berita terbaru (tanggal terbaru di atas)
const terbaru = [...artikel]
  .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
  .slice(0, 3);

const beritaUtama = terbaru; // slider
const pilihanRedaksi = terbaru; // sidebar

export default function HeroBerita() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = beritaUtama.length;
  const active = beritaUtama[index];

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // autoplay tiap 5 detik, berhenti saat di-hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const paragrafPertama = active.isi.find(
    (b): b is string => typeof b === "string",
  );

  const cuplikan = paragrafPertama?.replace(/^[^—]{0,40}—\s*/, "");

  return (
    <section id="beranda" className="">
      <div className="w-full flex flex-col">
        <div className="w-full flex px-6 py-4 flex-col border gap-1 border-t-white border-b-gray-300 border-r-white border-l-white">
          <span className=" font-bold text-lg text-[#c0392b]">
            Edisi Hari ini
          </span>
          <span className=" text-3xl lg:text-5xl font-bold ">
            Kabar terbaru, sudut pandang baru.
          </span>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-6 lg:grid-cols-[1fr_380px]">
          {/* ===== KIRI: SLIDER BERITA UTAMA ===== */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            <div className="relative overflow-hidden">
              {/* track gambar */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}>
                {beritaUtama.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/berita/${item.slug}`}
                    className="block w-full shrink-0">
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </Link>
                ))}
              </div>

              {/* badge */}
              <span className="absolute left-6 top-6 bg-[#c0392b] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">
                Berita Utama · {active.kategori}
              </span>

              {/* tombol prev / next */}
              <button
                onClick={prev}
                aria-label="Sebelumnya"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white hover:bg-black/70">
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Berikutnya"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white hover:bg-black/70">
                ›
              </button>

              {/* dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {beritaUtama.map((item, i) => (
                  <button
                    key={item.slug}
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-white" : "w-2.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* judul */}
            {/* <p
              key={active.slug}
              className="mt-5 text-2xl font-extrabold leading-tight text-neutral-900 md:text-3xl">
              <Link
                href={`/berita/${active.slug}`}
                className="hover:text-[#c0392b]">
                {active.judul}
              </Link>
            </p> */}

            {/* tanggal + judul + cuplikan + baca selengkapnya */}
            <Link
              key={active.slug}
              href={`/berita/${active.slug}`}
              className="group mt-5 block">
              <p className="text-sm font-bold uppercase tracking-wide text-[#c0392b]">
                {formatTanggal(active.tanggal)}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-neutral-900 transition-colors group-hover:text-orange-500 md:text-3xl">
                {active.judul}
              </h2>

              <p className="mt-3 line-clamp-3 text-neutral-600 md:text-lg">
                {cuplikan}
              </p>

              <span className="mt-3 inline-block font-bold text-[#c0392b]">
                Baca selengkapnya{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>

          {/* ===== KANAN: PILIHAN REDAKSI ===== */}
          <aside className="lg:border-l lg:border-neutral-300 lg:pl-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Pilihan Redaksi
              </h3>
              <span className="text-sm font-bold uppercase tracking-wide text-[#c0392b]">
                Terbaru
              </span>
            </div>

            <ul>
              {pilihanRedaksi.map((item, i) => (
                <li
                  key={item.slug}
                  className="border-b border-neutral-300 py-5 first:pt-0 last:border-b-0">
                  <Link
                    href={`/berita/${item.slug}`}
                    className="group flex gap-4">
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="h-28 w-28 shrink-0 object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-[#c0392b]">
                        {String(i + 1).padStart(2, "0")} · {item.kategori}
                      </p>
                      <h4 className="mt-1 text-lg font-bold leading-snug text-neutral-900 group-hover:text-[#c0392b]">
                        {item.judul}
                      </h4>
                      <p className="mt-1 text-sm text-neutral-500">
                        {item.menitBaca} menit baca
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
