import Image from "next/image";
import { clinicData } from "@/data/dental";
import { Clock, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

export function Cases() {
  const { cases, contact } = clinicData;

  return (
    <section id="hasil" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E7490] block mb-2">
            Dokumentasi Klinis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Transformasi Senyum Pasien
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Hasil perawatan nyata yang dirancang proporsional dengan profil wajah dan senyuman Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-md text-[10px] font-bold text-[#0E7490] shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0E7490]" aria-hidden="true" />
                    <span>{c.treatmentType}</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {c.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#0E7490]" aria-hidden="true" />
                      <span>{c.durationText}</span>
                    </span>
                    <span>•</span>
                    <span>{c.patientAge}</span>
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-50 text-[11px] text-emerald-800 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-tight">{c.resultHighlight}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Lumina Dental, saya melihat hasil ${c.title}. Saya ingin konsultasi apakah kasus gigi saya bisa dirawat seperti ini?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Konsultasi Kasus Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
