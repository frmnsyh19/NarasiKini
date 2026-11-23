"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import SearchModal from "./SearchMenu";
import type { IconType } from "react-icons";
import {
  FaHome,
  FaFlag,
  FaFutbol,
  FaMicrochip,
  FaBullhorn,
} from "react-icons/fa";
import {
  daftarKategori,
  getArtikel,
  getTerbaruByKategori,
  type Kategori,
} from "@/data/arikel";

import { FcMediumPriority } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
type Menu = {
  label: string;
  href: string;
  kategori: Kategori | null;
  ikon: IconType; // komponen ikon
};

const ikonKategori: Record<Kategori, IconType> = {
  Nasional: FaFlag,
  Olahraga: FaFutbol,
  Teknologi: FaMicrochip,
  Peristiwa: FaBullhorn,
};

// tiap kategori mengarah ke berita TERBARU di kategori itu
// (kategori yang belum punya berita tidak ditampilkan)
const kategoriMenu: Menu[] = daftarKategori.flatMap((k) => {
  const terbaru = getTerbaruByKategori(k);
  return terbaru
    ? [
        {
          label: k,
          href: `/berita/${terbaru.slug}`,
          kategori: k,
          ikon: ikonKategori[k],
        },
      ]
    : [];
});

const menus: Menu[] = [
  { label: "Beranda", href: "/", kategori: null, ikon: FaHome },
  ...kategoriMenu,
];

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (menu: Menu) => {
    if (!menu.kategori) return pathname === "/";

    // halaman detail berita: /berita/[slug]
    if (!pathname.startsWith("/berita/")) return false;
    const slug = pathname.split("/")[2];
    return getArtikel(slug)?.kategori === menu.kategori;
  };

  return (
    <header className="w-full">
      {/* ===== BARIS ATAS: logo + search ===== */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="shrink-0">
          <img
            src="/logo.png"
            alt="Narasi Kini"
            className="h-10 w-auto md:h-14"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <SearchModal />
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 rounded-md bg-[#c0392b] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#a93226] md:hidden">
            <FaRegUserCircle className="h-4 w-4 shrink-0" />
            Profile
          </Link>
        </div>
      </div>

      {/* ===== BARIS MENU ===== */}
      <nav className="border-y border-neutral-300 pb-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          {/* menu bisa digeser horizontal di layar kecil */}
          <ul className="flex items-center gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden">
            {menus.map((menu) => {
              const active = isActive(menu);
              const Ikon = menu.ikon; // huruf besar, supaya dibaca sebagai komponen

              return (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className={`flex items-center gap-2 border-b-[3px] py-3 text-base font-bold transition-colors md:text-lg ${
                      active
                        ? "border-[#c0392b] text-[#c0392b]"
                        : "border-transparent text-neutral-900 hover:text-[#c0392b]"
                    }`}>
                    <Ikon className="h-4 w-4 shrink-0" />
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-md bg-[#c0392b] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#a93226]">
              <FaRegUserCircle className="h-4 w-4 shrink-0" />
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
