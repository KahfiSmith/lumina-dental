"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star, ShieldCheck, MapPin, Scan, Clock } from "lucide-react";

export function Hero() {

  return (
    <section className="relative bg-[#F9F9FB] pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E5E7EB] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#12151A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12151A] text-white text-[11px] font-mono tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00D284] animate-pulse" />
                <span>Modern Smile Culture : Surabaya Studio</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E5E7EB] text-[11px] font-mono text-[#64748B] tracking-wider uppercase">
                <MapPin className="w-3 h-3 text-[#1D4ED8]" />
                <span>Mayjen Sungkono 88</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E6FBF2] border border-[#00D284]/30 text-[11px] font-mono font-bold text-[#00A868] tracking-wider uppercase">
                <ShieldCheck className="w-3 h-3 text-[#00A868]" />
                <span>Resmi PBDI</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold tracking-tighter text-[#12151A] uppercase leading-[0.93] font-sans">
              Smile
              <span className="block text-[#1D4ED8] mt-1">Like You</span>
              <span className="block mt-1">Mean It.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl font-normal">
              Perawatan gigi kontemporer yang menggabungkan akurasi pemindaian optik 3D, dokter spesialis berempati, dan ruang studio tenang tanpa aroma rumah sakit lama.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#booking"
                className="inline-flex h-13 items-center justify-center gap-3 bg-[#12151A] hover:bg-[#1D4ED8] px-8 text-xs font-bold text-white tracking-widest uppercase transition-all shadow-md group"
              >
                <span>Book A Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#layanan"
                className="inline-flex h-13 items-center justify-center gap-2.5 bg-white hover:bg-[#F1F3F7] border border-[#E5E7EB] px-7 text-xs font-bold text-[#12151A] tracking-widest uppercase transition-all"
              >
                <span>Explore Smile Menu</span>
                <ArrowUpRight className="w-4 h-4 text-[#1D4ED8]" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 pt-1">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9FB] overflow-hidden relative bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                    alt="Pasien Lumina Dental Studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9FB] overflow-hidden relative bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                    alt="Pasien Lumina Dental Studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9FB] overflow-hidden relative bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                    alt="Pasien Lumina Dental Studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9FB] bg-[#12151A] text-white text-[11px] font-mono font-bold flex items-center justify-center">
                  +380
                </div>
              </div>

              <div className="text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-[#12151A]">
                  <div className="flex text-[#FF5A36]">
                    <Star className="w-3.5 h-3.5 fill-[#FF5A36]" />
                    <Star className="w-3.5 h-3.5 fill-[#FF5A36]" />
                    <Star className="w-3.5 h-3.5 fill-[#FF5A36]" />
                    <Star className="w-3.5 h-3.5 fill-[#FF5A36]" />
                    <Star className="w-3.5 h-3.5 fill-[#FF5A36]" />
                  </div>
                  <span>4.9 / 5.0 Rating</span>
                </div>
                <span className="text-[11px] text-[#64748B]">Berdasarkan 380+ ulasan pasien terverifikasi</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E7EB] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div className="border-l-2 border-[#00D284] pl-3">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">01 : METHOD</span>
                <span className="font-bold text-[#12151A]">Gentle Touch</span>
                <span className="text-[10px] text-slate-500 block">Ramah Cemas & Tenang</span>
              </div>

              <div className="border-l-2 border-[#00D284] pl-3">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">02 : SCANNING</span>
                <span className="font-bold text-[#12151A]">Digital 3D</span>
                <span className="text-[10px] text-slate-500 block">Bebas Mual Adonan</span>
              </div>

              <div className="border-l-2 border-[#00D284] pl-3">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">03 : FACULTY</span>
                <span className="font-bold text-[#12151A]">Spesialis Sp.</span>
                <span className="text-[10px] text-slate-500 block">Dokter Resmi PBDI</span>
              </div>

              <div className="border-l-2 border-[#00D284] pl-3">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">04 : STUDIO</span>
                <span className="font-bold text-[#12151A]">Mayjen Sungkono</span>
                <span className="text-[10px] text-slate-500 block">Surabaya Barat</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00D284]/20 via-transparent to-[#1D4ED8]/15 -rotate-1 hidden sm:block pointer-events-none border border-[#E5E7EB]" />

              <div className="relative border-2 border-[#12151A] bg-white p-3 sm:p-4 shadow-2xl">
                <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#E5E7EB] font-mono text-[10px] text-slate-500 mb-2">
                  <span className="text-[#1D4ED8] font-bold">CAMPAIGN 01 : EDITORIAL SMILE</span>
                  <span>VOL. 26</span>
                </div>

                <div className="relative h-[420px] sm:h-[480px] w-full bg-[#12151A] overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
                    alt="Perawatan gigi modern Lumina Dental Studio Surabaya"
                    fill
                    priority
                    className="object-cover object-center contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151A]/85 via-transparent to-transparent opacity-90" />

                  <div className="absolute top-3 left-3 bg-[#12151A]/90 text-[#00D284] font-mono text-[10px] px-2.5 py-1 border border-slate-700 uppercase tracking-wider">
                    REAL PATIENT MOMENT
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 text-[#12151A] font-mono text-[10px] font-bold px-2.5 py-1 border border-[#E5E7EB] uppercase tracking-wider">
                    SURABAYA : SBY
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-4 border border-[#E5E7EB] font-sans">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#12151A]">
                          Your Smile, Upgraded.
                        </div>
                        <p className="text-[11px] text-[#4B5563] mt-0.5 leading-snug">
                          Tanpa tekanan, tanpa prosedur berlebihan. Preservasi enamel gigi asli dengan panduan teknologi presisi.
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#E6FBF2] flex items-center justify-center shrink-0 text-[#00A868] font-bold text-xs border border-[#00D284]/30">
                        4.9
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 py-2 text-[10px] font-mono text-slate-500 mt-1">
                  <span>INTENTIONAL DENTISTRY</span>
                  <span>SURABAYA : MAYJEN SUNGKONO 88</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 bg-white border-2 border-[#12151A] p-3 shadow-xl z-20 max-w-[250px]">
                <div className="w-9 h-9 rounded-none bg-[#12151A] text-[#00D284] flex items-center justify-center shrink-0">
                  <Scan className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-mono uppercase text-[#12151A]">
                    Digital 3D Optical Scan
                  </div>
                  <div className="text-[10px] text-[#64748B] font-mono">
                    0% cetak adonan mual
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 bg-[#12151A] text-white border border-[#12151A] px-3 py-1.5 shadow-xl z-20 font-mono text-[10px]">
                <Clock className="w-3.5 h-3.5 text-[#00D284]" />
                <span className="uppercase tracking-wider">Konsultasi Hari Ini Tersedia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
