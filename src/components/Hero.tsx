"use client";

import Image from "next/image";
import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Smile,
  Zap,
} from "lucide-react";

export function Hero() {
  const { contact } = clinicData;

  const quickServices = [
    {
      title: "Painless Scaling",
      desc: "Pembersihan karang gigi getaran ultrasonik lembut tanpa rasa ngilu.",
      icon: ShieldCheck,
      badge: "Mulai Rp 250rb",
      href: "#layanan",
    },
    {
      title: "Veneer & Whitening",
      desc: "Senyum putih cerah alami dalam 1 jam dengan LED cold light.",
      icon: Sparkles,
      badge: "Hasil Instan",
      href: "#layanan",
    },
    {
      title: "Behel & Aligners 3D",
      desc: "Perapian susunan gigi dengan behel sapphire atau plastik transparan.",
      icon: Smile,
      badge: "Spesialis Ortodonti",
      href: "#layanan",
    },
    {
      title: "Implan Gigi Permanen",
      desc: "Penggantian gigi hilang dengan titanium presisi menyerupai gigi asli.",
      icon: Zap,
      badge: "Solusi Seumur Hidup",
      href: "#layanan",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 overflow-hidden">
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <LiveClinicStatus variant="pill" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
                Surabaya Barat (Mayjen Sungkono)
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Senyum Sehat &amp; Percaya Diri,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] to-cyan-600">
                Tanpa Rasa Cemas
              </span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Klinik dokter gigi spesialis dengan teknologi pemindaian digital 3D, anestesi tanpa rasa sakit, dan ruang perawatan privat yang menenangkan.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#0E7490] hover:bg-[#155E75] rounded-xl transition-all shadow-md shadow-cyan-900/15 min-h-[48px]"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Pilih Jadwal Dokter</span>
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Lumina Dental, saya ingin konsultasi mengenai keluhan gigi dan jadwal dokter."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all min-h-[48px] shadow-2xs"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Chat Resepsionis (WA)</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                <span className="font-semibold text-slate-800">4 Dokter Gigi Spesialis PBDI</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                <span className="font-semibold text-slate-800">100% Steril Standar Eropa</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1200&auto=format&fit=crop"
                  alt="Ruang perawatan klinik gigi Lumina Dental yang modern dan menenangkan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                      Ruang Perawatan Privat
                    </span>
                    <p className="text-sm font-medium leading-snug">
                      Dental chair ergonomis dengan aromaterapi menenangkan dan hiburan TV selama perawatan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Painless Care</p>
                  <p className="text-[11px] text-slate-500">Perawatan lembut bebas rasa cemas</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-100 items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#0E7490] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-slate-900">Digital 3D Scan</p>
                  <p className="text-[10px] text-slate-500">Tanpa cetak pasta konvensional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490]">
              Layanan Utama yang Tersedia di Lumina:
            </span>
            <a href="#layanan" className="text-xs font-bold text-slate-700 hover:text-[#0E7490] flex items-center gap-1">
              <span>Lihat Semua Layanan</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quickServices.map((qs, idx) => {
              const IconComp = qs.icon;
              return (
                <a
                  key={idx}
                  href={qs.href}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0E7490]/50 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#0E7490] flex items-center justify-center group-hover:bg-[#0E7490] group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {qs.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#0E7490] transition-colors">
                      {qs.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {qs.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0E7490]">
                    <span>Pilih Layanan</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
