import Image from "next/image";
import { Navbar } from "./components/Navbar";
import HeroBerita from "./components/HeroBerita";
import BeritaTerkini from "./components/BeritaTerkini";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-[#c0392b] flex justify-center items-center py-2 px-2">
        <span className="text-white font-bold">
          Berita hari ini, lebih dekat dengan Anda
        </span>
      </div>
      <div className="w-full lg:w-11/12 lg:p-1 flex flex-col justify-center">
        <Navbar />
        <HeroBerita />
        <BeritaTerkini />
      </div>
      <Footer />
    </div>
  );
}
