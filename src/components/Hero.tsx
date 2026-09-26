"use client";

import Image from "next/image";
import { clinicData } from "@/data/dental";
import { CalendarCheck, MessageCircle, ShieldCheck, HeartHandshake, ChevronRight } from "lucide-react";

export function Hero() {
  const { contact } = clinicData;

  const keyComforts = [
    {
      title: "Ruang Periksa Privat",
      desc: "Suasana tenang, kedap suara, dan bebas aroma obat rumah sakit.",
    },
    {
      title: "Pemeriksaan Digital 3D",
      desc: "Pemindaian optik instan tanpa cetakan adonan pasta mual.",
    },
    {
      title: "Anestesi & Tindakan Lembut",
      desc: "Protokol ramah cemas agar setiap tindakan bebas rasa sakit.",
    },
    {
      title: "Transparansi Biaya",
      desc: "Penjelasan diagnosis dan estimasi biaya jelas sebelum tindakan.",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E5DFD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Hero Split Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative, and CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E242B] leading-[1.2]">
              Perawatan gigi yang dirancang untuk kenyamanan Anda.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#5E6773] leading-relaxed font-normal">
              Kami hadir untuk menghilangkan rasa takut ke dokter gigi. Nikmati perawatan modern dengan dokter spesialis berpengalaman, teknologi pemindaian 3D tanpa mual, dan sentuhan yang lembut di setiap tahapan.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#246A60] hover:bg-[#1B524A] px-7 text-sm font-semibold text-white transition-all shadow-sm"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Pilih Jadwal Kunjungan</span>
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Lumina Dental, saya ingin konsultasi mengenai keluhan gigi dan jadwal dokter yang tersedia."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white hover:bg-[#F2EFE9] border border-[#E5DFD5] px-6 text-sm font-semibold text-[#1E242B] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#246A60]" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Sub-link */}
            <div className="mt-5">
              <a
                href="#layanan"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#246A60] hover:underline"
              >
                <span>Lihat katalog lengkap perawatan &amp; estimasi biaya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 pt-8 border-t border-[#E5DFD5] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-[#1E242B]">
                  10+ Thn
                </span>
                <span className="text-xs text-[#5E6773] mt-0.5 block">
                  Pengalaman Praktik
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-[#246A60]">
                  5.000+
                </span>
                <span className="text-xs text-[#5E6773] mt-0.5 block">
                  Pasien Terlayani
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-[#1E242B]">
                  4.9 / 5.0
                </span>
                <span className="text-xs text-[#5E6773] mt-0.5 block">
                  Ulasan Pasien Google
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Warm Photography & Ambient Badge */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-3xl overflow-hidden border border-[#E5DFD5] bg-[#F2EFE9] shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1400&auto=format&fit=crop"
                alt="Ruang perawatan klinik gigi Lumina Dental Surabaya yang tenang dan ramah cemas"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle ambient light gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E242B]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating reassurance card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#E5DFD5] shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E4EFEA] text-[#246A60] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#1E242B]">
                        Ruang Periksa Privat Bebas Suara Bising
                      </span>
                      <span className="hidden sm:inline-block text-[10px] font-semibold text-[#246A60] bg-[#E4EFEA] px-2 py-0.5 rounded-full">
                        Higienis
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#5E6773] leading-relaxed">
                      Dilengkapi sirkulasi udara medis HEPA H14, musik relaksasi, dan dental chair ergonomis untuk kenyamanan maksimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Pillars (Anxiety Relief) */}
        <div className="mt-16 pt-10 border-t border-[#E5DFD5]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyComforts.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F2EFE9]/60 border border-[#E5DFD5]/80 hover:bg-white hover:border-[#246A60]/30 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#246A60] mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#5E6773] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
