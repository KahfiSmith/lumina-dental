import { clinicData } from "@/data/dental";
import { ShieldCheck, CheckCircle2, Award, Sparkles, Wind } from "lucide-react";

export function Sterilization() {
  const { sterilizationSteps } = clinicData;

  return (
    <section id="sterilisasi" className="py-20 sm:py-28 bg-gradient-to-b from-white via-cyan-50/25 to-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Safety Mission & Accreditations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-[#0E7490] border border-cyan-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
              <span>Standar Keselamatan Medis Eropa</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Protokol Sterilisasi 4 Tahap Tanpa Kompromi
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kesehatan dan keselamatan pasien adalah prioritas mutlak kami. Setiap instrumen logam melalui 4 tahap dekontaminasi dan sterilisasi autoklaf uap bertekanan tinggi kelas B (134°C) dengan indikator verifikasi kimia mikron.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Segel Pouch Baru:</strong> Kantong alat steril baru digunting dan dibuka langsung di depan Anda sebelum kontak pertama.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Award className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Alat Sekali Pakai 100%:</strong> Jarum anestesi mikro, pelindung gigi (bib), dan suction tip langsung dimusnahkan secara medis.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Wind className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>Filtrasi Udara HEPA H14 &amp; UV-C:</strong> Sirkulasi udara ruang operasi klinis bebas droplet, aerosol kuman, dan bau obat.</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Pipeline Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sterilizationSteps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-cyan-400 hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-black text-[#0E7490] group-hover:text-cyan-600 transition-colors">
                    {step.number}
                  </span>
                  <span className="p-1.5 rounded-lg bg-cyan-50 text-[#0E7490]">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {step.standardDetail && (
                  <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                    {step.standardDetail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
