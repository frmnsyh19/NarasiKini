"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { artikel, formatTanggal } from "@/data/arikel";

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  // split dengan capture group: indeks ganjil = bagian yang cocok
  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="bg-[#c0392b]/15 text-inherit">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export default function SearchModal() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [aktif, setAktif] = useState(0);

  const q = query.trim().toLowerCase();

  // hasil pencarian: judul, ringkasan, kategori, dan isi berita
  const hasil = useMemo(() => {
    if (!q) return [];
    return artikel
      .filter((a) => {
        const isi = a.isi
          .map((b) => (typeof b === "string" ? b : b.subjudul))
          .join(" ");
        return [a.judul, a.ringkasan, a.kategori, isi].some((t) =>
          t.toLowerCase().includes(q),
        );
      })
      .sort(
        (a, b) =>
          Number(b.judul.toLowerCase().includes(q)) -
          Number(a.judul.toLowerCase().includes(q)),
      );
  }, [q]);

  // kalau belum mengetik, tampilkan beberapa berita sebagai saran
  const daftar = q ? hasil : artikel.slice(0, 3);

  const tutup = () => {
    setOpen(false);
    setQuery("");
    setAktif(0);
  };

  // shortcut: Ctrl/Cmd + K untuk buka, Esc untuk tutup
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") tutup();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // kunci scroll halaman + fokus ke input saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) inputRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (daftar.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setAktif((i) => (i + 1) % daftar.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setAktif((i) => (i - 1 + daftar.length) % daftar.length);
    } else if (e.key === "Enter") {
      router.push(`/berita/${daftar[aktif].slug}`);
      tutup();
    }
  };

  return (
    <>
      {/* tombol di navbar */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Cari berita"
        className="flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-md border border-neutral-300 text-sm text-neutral-600 transition-colors hover:border-[#c0392b] hover:text-[#c0392b] md:h-10 md:w-auto md:px-3">
        <SearchIcon className="h-4 w-4 md:h-5 md:w-5" />
        <span className="hidden md:inline">Cari berita…</span>
        <kbd className="hidden rounded border border-neutral-300 px-1.5 text-xs md:inline">
          Ctrl K
        </kbd>
      </button>

      {/* modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 md:p-6 md:pt-24"
          onClick={tutup}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Cari berita"
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full flex-col bg-[#f7f3ee] md:h-auto md:max-h-[70vh] md:max-w-2xl md:rounded-lg md:shadow-2xl">
            {/* input */}
            <div className="flex items-center gap-3 border-b border-neutral-300 px-4 py-3">
              <SearchIcon className="h-5 w-5 shrink-0 text-neutral-500" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setAktif(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Cari judul, kategori, atau isi berita…"
                className="min-w-0 flex-1 bg-transparent py-2 text-lg text-neutral-900 outline-none placeholder:text-neutral-400"
              />
              <button
                onClick={tutup}
                className="shrink-0 text-sm font-semibold text-neutral-600 hover:text-[#c0392b]">
                <span className="md:hidden">Batal</span>
                <kbd className="hidden rounded border border-neutral-300 px-1.5 py-0.5 text-xs md:inline">
                  Esc
                </kbd>
              </button>
            </div>

            {/* hasil */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              <p className="px-4 pb-1 pt-4 text-xs font-bold uppercase tracking-wide text-neutral-500">
                {q ? `${hasil.length} hasil` : "Berita terbaru"}
              </p>

              {q && hasil.length === 0 ? (
                <p className="px-4 py-10 text-center text-neutral-500">
                  Tidak ada berita untuk “{query.trim()}”.
                </p>
              ) : (
                <ul className="pb-2">
                  {daftar.map((item, i) => (
                    <li key={item.slug}>
                      <Link
                        href={`/berita/${item.slug}`}
                        onClick={tutup}
                        onMouseEnter={() => setAktif(i)}
                        className={`flex gap-4 px-4 py-3 ${
                          i === aktif ? "bg-neutral-900/5" : ""
                        }`}>
                        <img
                          src={item.gambar}
                          alt=""
                          className="h-16 w-16 shrink-0 object-cover md:h-20 md:w-20"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wide text-[#c0392b]">
                            {item.kategori}
                            <span className="mx-2 text-neutral-400">/</span>
                            {formatTanggal(item.tanggal)}
                          </p>
                          <h3 className="mt-0.5 line-clamp-2 font-bold leading-snug text-neutral-900">
                            <Highlight text={item.judul} query={q} />
                          </h3>
                          <p className="mt-0.5 hidden line-clamp-1 text-sm text-neutral-500 md:block">
                            <Highlight text={item.ringkasan} query={q} />
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* petunjuk keyboard, hanya desktop */}
            <div className="hidden items-center gap-4 border-t border-neutral-300 px-4 py-2 text-xs text-neutral-500 md:flex">
              <span>↑↓ pilih</span>
              <span>Enter buka</span>
              <span>Esc tutup</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
