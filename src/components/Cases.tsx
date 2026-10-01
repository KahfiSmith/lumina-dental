"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { SlidersHorizontal, ArrowUpRight } from "lucide-react";

export function Cases() {
  const { cases, contact } = clinicData;
  const [sliderPos, setSliderPos] = useState<number>(50);

  const featuredCase = cases[1];
  const sideCases = cases.filter((c) => c.id !== featuredCase.id);

  return (
    <section id="hasil" className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB]">
      <span id="kasus" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3">
                <span className="font-bold">SECTION 05</span>
                <span>/</span>
                <span>CLINICAL EVIDENCE</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans">
                Real Smiles.
                <br />
                Real Results.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Dokumentasi klinis autentik sebelum dan sesudah perawatan. Tanpa manipulasi digital kecantikan, mengedepankan keselarasan fungsional dan estetika natural.
            </p>
          </div>
        </div>

        <div className="bg-[#F9F9FB] border border-[#E5E7EB] p-6 sm:p-10 mb-16">
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#E5E7EB] font-mono text-xs text-slate-500">
            <span className="font-bold text-[#1D4ED8] uppercase">
              FEATURED COMPARISON : {featuredCase.treatmentType}
            </span>
            <span>TIMELINE: {featuredCase.durationText}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="relative aspect-16/10 w-full overflow-hidden select-none bg-black border border-[#E5E7EB]">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
                  alt="Hasil sesudah perawatan teeth whitening Lumina Dental"
                  fill
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop"
                    alt="Kondisi sebelum perawatan teeth whitening Lumina Dental"
                    fill
                    className="object-cover filter contrast-90 brightness-95 saturate-80"
                  />
                </div>

                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#12151A] text-white flex items-center justify-center text-xs font-mono border border-white">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#12151A]/90 px-3 py-1 font-mono text-[10px] text-white uppercase tracking-widest">
                  BEFORE
                </div>

                <div className="absolute bottom-4 right-4 bg-[#00D284] px-3 py-1 font-mono text-[10px] text-[#12151A] uppercase tracking-widest font-bold">
                  AFTER
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full accent-[#12151A] cursor-ew-resize h-1.5 bg-[#E5E7EB] rounded-lg"
                  aria-label="Geser untuk perbandingan sebelum dan sesudah"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#00A868] font-bold mb-1">
                  CASE ARCHIVE 01
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-[#12151A] mb-2 font-sans">
                  {featuredCase.title}
                </h3>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-6 font-light">
                  {featuredCase.description}
                </p>

                <div className="space-y-3 font-mono text-xs p-4 bg-white border border-[#E5E7EB]">
                  <div>
                    <span className="text-[9px] uppercase text-slate-400 block font-bold">
                      PROSEDUR TINDAKAN:
                    </span>
                    <span className="text-slate-800 font-sans text-xs">
                      {featuredCase.treatmentType}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#E5E7EB]">
                    <span className="text-[9px] uppercase text-slate-400 block font-bold">
                      HASIL KLINIS:
                    </span>
                    <span className="text-slate-800 font-sans text-xs">
                      {featuredCase.resultHighlight}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#E5E7EB]">
                    <span className="text-[9px] uppercase text-slate-400 block font-bold">
                      DOKTER PENANGGUNG JAWAB:
                    </span>
                    <span className="text-[#1D4ED8] font-sans text-xs font-semibold">
                      {featuredCase.doctorInCharge}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  `Halo Lumina Dental, saya ingin konsultasi mengenai prosedur ${featuredCase.treatmentType}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Konsultasikan Kasus Serupa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sideCases.map((c, idx) => (
            <div
              key={c.id}
              className="p-6 bg-[#F9F9FB] border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1D4ED8] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                  <span className="text-[#00A868] font-bold">CASE RECORD 0{idx + 2}</span>
                  <span>{c.durationText}</span>
                </div>

                <h4 className="text-lg font-bold uppercase tracking-tight text-[#12151A] mb-2 font-sans">
                  {c.title}
                </h4>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-4 font-light">
                  {c.description}
                </p>

                <div className="p-3 bg-white border border-[#E5E7EB] font-mono text-xs space-y-1 mb-4">
                  <div className="text-[10px] text-slate-400">TINDAKAN: {c.treatmentType}</div>
                  <div className="text-[10px] text-slate-400">DOKTER: {c.doctorInCharge}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{c.resultHighlight}</span>
                <span className="text-[#00A868] font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
