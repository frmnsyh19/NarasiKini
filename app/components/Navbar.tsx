"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchMenu";
import { artikel, getArtikel } from "@/data/arikel";
import { FaRegUserCircle } from "react-icons/fa";

// const menus = [
//   { label: "Beranda", href: "/" },
//   { label: "Nasional", href: "/#terkini" },
//   { label: "Olahraga", href: "/#terkini" },
//   { label: "Teknologi", href: "/#terkini" },
// ];

type Menu = { label: string; href: string; kategori: string | null };

// tiap kategori mengarah ke berita pertama di kategori itu
const kategoriMenu: Menu[] = (
  ["Nasional", "Olahraga", "Teknologi"] as const
).flatMap((k) => {
  const pertama = artikel.find((a) => a.kategori === k);
  return pertama
    ? [{ label: k, href: `/berita/${pertama.slug}`, kategori: k }]
    : [];
});

const menus: Menu[] = [
  { label: "Beranda", href: "/", kategori: null },
  ...kategoriMenu,
];

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (menu: Menu) => {
    if (!menu.kategori) return pathname === "/";

    // pathname detail berita: /berita/[slug]
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

          <button className="rounded-md bg-[#c0392b] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#a93226] md:hidden">
            Profile
            <FaRegUserCircle />
          </button>
        </div>
      </div>

      {/* ===== BARIS MENU ===== */}
      <nav className="border-y border-neutral-300 pb-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          {/* menu bisa digeser horizontal di layar kecil */}
          <ul className="flex items-center gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden">
            {menus.map((menu) => {
              const active = isActive(menu); // sebelumnya: isActive(menu.href)

              return (
                <li key={menu.label}>
                  <Link
                    href={menu.href}
                    className={`block border-b-[3px]  py-3 text-base font-bold transition-colors md:text-lg ${
                      active
                        ? "border-[#c0392b] text-[#c0392b]"
                        : "border-transparent text-neutral-900 hover:text-[#c0392b]"
                    }`}>
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:inline">
            <button className="shrink-0 rounded-md bg-[#c0392b] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#a93226] md:px-4 md:py-2">
              Profile
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
