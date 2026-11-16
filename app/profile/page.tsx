import { Ikon } from "@/app/components/Ikon";
import { penulis as data } from "@/data/penulis";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: `${data.nama} | Narasi Kini`,
};

export default function ProfilePage() {
  const info = [
    { ikon: "user", label: "Nama Lengkap", nilai: data.nama },
    { ikon: "kalender", label: "Tanggal Lahir", nilai: data.lahir },
    { ikon: "lokasi", label: "Asal", nilai: data.asal },
    { ikon: "email", label: "Email", nilai: data.email },
  ] as const;

  return (
    <main>
      <Navbar />
      {/* ===== HERO ===== */}
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#0b1b3a] bg-[url('/hero-about.jpeg')] bg-cover bg-[position:75%_center] md:bg-center">
        {/* lapisan gelap tipis supaya teks tetap terbaca di atas peta */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3a]/80 via-[#0b1b3a]/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            About Me
          </h1>
          <span className="mt-3 block h-0.5 w-16 bg-[#f0b429]" />
          <p className="mt-3 text-white/85">Mengenal Lebih Dekat dengan Saya</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* ===== PROFIL + SIDEBAR ===== */}
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* kartu profil */}
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* foto dengan aksen emas */}
              <div className="relative mx-auto w-56 shrink-0 md:mx-0 md:w-60">
                <span className="absolute -left-3 bottom-10 top-20 w-6 rounded-md bg-[#f0b429]" />
                <img
                  src={data.foto}
                  alt={data.nama}
                  className="relative aspect-[5/6] w-full rounded-lg object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1b3a]">
                  {data.nama}
                </h2>
                <p className="mt-1 font-bold text-[#d99a1c]">{data.jabatan}</p>

                <div className="mt-4 space-y-3 leading-relaxed text-neutral-700">
                  {data.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* strip info */}
            <dl className="mt-6 grid grid-cols-1 gap-4 rounded-lg bg-slate-100 p-4 sm:grid-cols-2 xl:grid-cols-4">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-[#0b1b3a]">
                    <Ikon nama={item.ikon} />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs text-neutral-500">{item.label}</dt>
                    <dd className="break-words text-sm font-bold text-neutral-900">
                      {item.nilai}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* sidebar */}
          <aside className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
            <div className="rounded-xl bg-[#0b1b3a] p-6 text-white">
              <h3 className="text-xl font-extrabold">Keahlian Saya</h3>
              <ul className="mt-4">
                {data.keahlian.map((k) => (
                  <li
                    key={k.label}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-sm last:border-b-0">
                    <Ikon
                      nama={k.ikon}
                      className="h-4 w-4 shrink-0 text-white/80"
                    />
                    {k.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#0b1b3a] p-6 text-white">
              <h3 className="text-xl font-extrabold">Media Sosial</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {data.sosial.map((s) => (
                  <a
                    key={s.nama}
                    href={s.href}
                    aria-label={s.nama}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-[#f0b429] hover:text-[#0b1b3a]">
                    <Ikon nama={s.ikon} className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ===== TENTANG SAYA + VISI & MISI ===== */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
            <h3 className="border-l-4 border-[#f0b429] pl-3 text-xl font-extrabold text-[#0b1b3a]">
              Tentang Saya
            </h3>

            <div className="mt-5 flex flex-col gap-5 sm:flex-row">
              <img
                src={data.fotoTentang}
                alt=""
                className="aspect-[4/3] w-full rounded-lg object-cover sm:w-52 sm:shrink-0"
              />
              <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
                {data.tentang.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
            <h3 className="border-l-4 border-[#f0b429] pl-3 text-xl font-extrabold text-[#0b1b3a]">
              Visi &amp; Misi
            </h3>

            <div className="mt-5 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1b3a] text-[#f0b429]">
                  <Ikon nama="target" className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-extrabold text-[#0b1b3a]">Visi</h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                    {data.visi}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1b3a] text-[#f0b429]">
                  <Ikon nama="roket" className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="font-extrabold text-[#0b1b3a]">Misi</h4>
                  <ol className="mt-1 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
                    {data.misi.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
