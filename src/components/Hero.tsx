"use client";

import Image from "next/image";
import { clinicData } from "@/data/dental";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const { contact } = clinicData;

  const quickServices = [
    {
      number: "01",
      title: "Painless Scaling & Airflow",
      desc: "Pembersihan karang getaran ultrasonik lembut tanpa rasa ngilu, mengembalikan kesehatan gusi alami.",
      badge: "Mulai Rp 250rb",
      href: "#layanan",
    },
    {
      number: "02",
      title: "Veneer & Teeth Whitening",
      desc: "Koreksi bentuk, celah gigi, dan pemutihan LED cold-light dalam 1 jam untuk senyum cerah natural.",
      badge: "Hasil Instan",
      href: "#layanan",
    },
    {
      number: "03",
      title: "Behel Sapphire & Aligners 3D",
      desc: "Perapian susunan gigi presisi dengan simulasi digital 3D oleh dokter gigi spesialis ortodonti.",
      badge: "Spesialis Ortodonti",
      href: "#layanan",
    },
    {
      number: "04",
      title: "Implan Gigi Titanium",
      desc: "Restorasi permanen pengganti akar dan mahkota gigi dengan kekuatan kunyah menyerupai gigi asli.",
      badge: "Solusi Permanen",
      href: "#layanan",
    },
  ];

  return (
    <section className="relative bg-[#FBFBFA] pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6 text-[11px] font-mono tracking-[0.25em] text-[#6E7178] uppercase">
          <span>Surabaya Barat &bull; Mayjen Sungkono</span>
          <span className="hidden sm:inline">Izin Praktik: 503/412/KP/Dinkes-Sby</span>
          <span>Atelier Perawatan Gigi Modern</span>
        </div>

        <div className="mt-12 lg:mt-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#8F6E4D] uppercase">
            Modern Healthcare Studio
          </span>

          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-[#1C1D1F] leading-[1.02]">
            SMILE, <br />
            <span className="italic font-light text-[#8F6E4D]">WITH CONFIDENCE.</span>
          </h1>
        </div>

        <div className="mt-12 lg:mt-16 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-base sm:text-lg text-[#6E7178] font-light leading-relaxed">
                Perawatan gigi modern yang mengutamakan ketelitian medis, kenyamanan tanpa rasa cemas,
                dan estetika senyum alami yang dirancang proporsional untuk Anda.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#booking"
                  className="inline-flex h-12 items-center justify-center border border-[#8F6E4D] bg-[#8F6E4D] px-7 text-xs font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:bg-transparent hover:text-[#8F6E4D]"
                >
                  Pilih Jadwal Konsultasi &rarr;
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    "Halo Lumina Dental Studio, saya ingin konsultasi mengenai keluhan gigi dan jadwal dokter."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#1C1D1F] uppercase transition-colors hover:text-[#8F6E4D]"
                >
                  <span>Konsultasi WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#E5E0D8] pt-8 font-mono">
              <div>
                <span className="block font-[family-name:var(--font-display)] text-2xl font-bold text-[#1C1D1F] sm:text-3xl">
                  10+ THN
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#6E7178] uppercase">
                  Pengalaman
                </span>
              </div>
              <div>
                <span className="block font-[family-name:var(--font-display)] text-2xl font-bold text-[#8F6E4D] sm:text-3xl">
                  5.000+
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#6E7178] uppercase">
                  Pasien Terlayani
                </span>
              </div>
              <div>
                <span className="block font-[family-name:var(--font-display)] text-2xl font-bold text-[#1C1D1F] sm:text-3xl">
                  4.9 / 5.0
                </span>
                <span className="mt-1 block text-[10px] tracking-[0.2em] text-[#6E7178] uppercase">
                  Ulasan Google
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#E5E0D8] bg-[#EFECE6]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1400&auto=format&fit=crop"
                alt="Ruang perawatan privat Lumina Dental Studio Surabaya"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1F]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 border border-white/30 bg-[#FBFBFA]/90 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#6E7178] uppercase">
                  <span>Ruang Perawatan Privat 01</span>
                  <span className="text-[#8F6E4D] font-bold">Bebas Bau Obat</span>
                </div>
                <p className="mt-2 font-[family-name:var(--font-display)] text-sm font-semibold tracking-wider text-[#1C1D1F] uppercase">
                  Dental Suite Tenang &amp; Steril
                </p>
                <p className="mt-1 text-xs text-[#6E7178]">
                  Dilengkapi pemindaian intraoral 3D digital dan sirkulasi udara medis HEPA H14.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="layanan" className="mt-28 scroll-mt-24 border-t border-[#E5E0D8] pt-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-[#8F6E4D] uppercase">
                Fokus Spesialisasi
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#1C1D1F] sm:text-4xl uppercase">
                Perawatan Gigi Komprehensif
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#6E7178] font-light">
              Setiap tindakan mengedepankan pendekatan invasif minimal untuk melestarikan jaringan gigi asli Anda secara optimal.
            </p>
          </div>

          <div className="mt-12 grid divide-y divide-[#E5E0D8] border-y border-[#E5E0D8]">
            {quickServices.map((qs) => (
              <a
                key={qs.number}
                href={qs.href}
                className="group grid items-center gap-6 py-8 transition-colors duration-300 hover:bg-[#F5F3EF] lg:grid-cols-12 lg:gap-8 px-4 sm:px-6"
              >
                <div className="flex items-center gap-4 lg:col-span-4">
                  <span className="font-mono text-sm font-bold text-[#8F6E4D]">
                    {qs.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1C1D1F] uppercase group-hover:text-[#8F6E4D] transition-colors">
                    {qs.title}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-[#6E7178] lg:col-span-5 font-light">
                  {qs.desc}
                </p>

                <div className="flex items-center justify-between gap-4 lg:col-span-3 lg:justify-end font-mono">
                  <span className="text-xs font-semibold text-[#8F6E4D]">
                    {qs.badge}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center border border-[#E5E0D8] text-[#6E7178] transition-all duration-300 group-hover:border-[#8F6E4D] group-hover:text-[#8F6E4D] group-hover:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
