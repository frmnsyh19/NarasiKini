import Link from "next/link";
import { notFound } from "next/navigation";
import { artikel, getArtikel, getTerkait, formatTanggal } from "@/data/arikel";
import { Navbar } from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getArtikel(slug);
  return { title: data ? data.judul : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Next.js 15+, di 14 tanpa Promise/await
}) {
  const { slug } = await params;
  const data = getArtikel(slug);

  if (!data) notFound();

  const terkait = getTerkait(slug);
  const teksBagikan = encodeURIComponent(data.judul);

  return (
    <main className=" flex flex-col w-full flex justify-center items-center">
      <div className="w-11/12 flex justify-center items-center">
        <Navbar />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* breadcrumb */}
        <nav className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-[#c0392b]">
            Beranda
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-[#c0392b]">{data.kategori}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* ===== ARTIKEL ===== */}
          <article className="max-w-3xl">
            <span className="inline-block bg-[#c0392b] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {data.kategori}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-neutral-900 md:text-5xl">
              {data.judul}
            </h1>

            <p className="mt-4 text-lg text-neutral-600">{data.ringkasan}</p>

            {/* meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-neutral-300 py-4 text-sm text-neutral-600">
              <span className="font-bold text-neutral-900">
                oleh {data.penulis}
              </span>
              <span>{formatTanggal(data.tanggal)}</span>
              <span>{data.menitBaca} menit baca</span>
            </div>

            {/* gambar utama */}
            <figure className="mt-6">
              <img
                src={data.gambar}
                alt={data.judul}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="mt-2 text-sm text-neutral-500">
                Ilustrasi: {data.judul}
              </figcaption>
            </figure>

            {/* isi berita */}
            <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-800">
              {data.isi.map((blok, i) => {
                if (typeof blok !== "string") {
                  return (
                    <h2
                      key={i}
                      className="pt-4 text-2xl font-extrabold text-neutral-900">
                      {blok.subjudul}
                    </h2>
                  );
                }

                return (
                  <div key={i}>
                    <p>{blok}</p>

                    {/* kutipan (opsional) disisipkan setelah paragraf ke-2 */}
                    {i === 1 && data.kutipan && (
                      <blockquote className="my-8 border-l-4 border-[#c0392b] pl-6 text-2xl font-bold leading-snug text-neutral-900">
                        “{data.kutipan}”
                      </blockquote>
                    )}
                  </div>
                );
              })}
            </div>

            {/* bagikan */}
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-neutral-300 pt-6">
              <span className="text-sm font-bold uppercase tracking-wide text-neutral-900">
                Bagikan
              </span>
              <a
                href={`https://wa.me/?text=${teksBagikan}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold hover:border-[#c0392b] hover:text-[#c0392b]">
                WhatsApp
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${teksBagikan}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold hover:border-[#c0392b] hover:text-[#c0392b]">
                X / Twitter
              </a>
            </div>

            <Link
              href="/#terkini"
              className="mt-8 inline-block font-bold text-[#c0392b] hover:underline">
              ← Kembali ke berita terkini
            </Link>
          </article>

          {/* ===== SIDEBAR: BACA JUGA ===== */}
          <aside className="lg:border-l lg:border-neutral-300 lg:pl-8">
            <h2 className="mb-6 text-2xl font-extrabold text-neutral-900">
              Baca juga
            </h2>
            <ul>
              {terkait.map((item) => (
                <li
                  key={item.slug}
                  className="border-b border-neutral-300 py-5 first:pt-0 last:border-b-0">
                  <Link
                    href={`/berita/${item.slug}`}
                    className="group flex gap-4">
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="h-24 w-24 shrink-0 object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-[#c0392b]">
                        {item.kategori}
                      </p>
                      <h3 className="mt-1 font-bold leading-snug text-neutral-900 group-hover:text-[#c0392b]">
                        {item.judul}
                      </h3>
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
      <Footer />
    </main>
  );
}
