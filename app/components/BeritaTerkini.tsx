"use client";

import { useState } from "react";
import Link from "next/link";
import { artikel, filterKategori, formatTanggal } from "@/data/arikel";

export default function BeritaTerkini() {
  const [aktif, setAktif] = useState<(typeof filterKategori)[number]>("Semua");

  const daftar =
    aktif === "Semua" ? artikel : artikel.filter((b) => b.kategori === aktif);

  return (
    <section id="terkini">
      <div className="mx-auto max-w-7xl border-t border-neutral-300 px-4 py-4 lg:px-6 lg:py-6">
        {/* header + filter */}
        <div className="flex flex-col gap-6 border-b border-neutral-300 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c0392b]">
              Baca lebih lanjut
            </p>
            <h2 className="mt-1 text-4xl font-extrabold text-neutral-900">
              Berita terkini
            </h2>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex w-max items-center gap-1 lg:w-auto lg:gap-2">
              {filterKategori.map((kategori) => (
                <button
                  key={kategori}
                  onClick={() => setAktif(kategori)}
                  className={`shrink-0 whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                    aktif === kategori
                      ? "bg-[#c0392b] text-white"
                      : "text-neutral-900 hover:text-[#c0392b]"
                  }`}>
                  {kategori}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* grid berita */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {daftar.map((item) => (
            <Link
              key={item.slug}
              href={`/berita/${item.slug}`}
              className="group block">
              <article>
                <div className="overflow-hidden">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-wide text-[#c0392b]">
                  {item.kategori}
                  <span className="mx-2 text-neutral-400">/</span>
                  {formatTanggal(item.tanggal).toUpperCase()}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold leading-snug text-neutral-900 group-hover:text-[#c0392b]">
                  {item.judul}
                </h3>

                <p className="mt-2 line-clamp-2 text-neutral-600">
                  {item.ringkasan}
                </p>
              </article>
            </Link>
          ))}
        </div>

        {daftar.length === 0 && (
          <p className="py-12 text-center text-neutral-500">
            Belum ada berita di kategori ini.
          </p>
        )}
      </div>
    </section>
  );
}
