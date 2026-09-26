import Image from "next/image";
import { clinicData } from "@/data/dental";
import { Calendar, FileCheck2, Clock } from "lucide-react";

export function Doctors() {
  const { doctors } = clinicData;

  return (
    <section id="dokter" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E7490] block mb-2">
            Tenaga Medis Berpengalaman
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Tim Dokter Gigi Spesialis
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Seluruh tindakan dilakukan langsung oleh dokter spesialis dengan izin resmi PBDI dan pendekatan ramah pasien.
          </p>
        </div>

        {/* Doctor Grid: 4-Column Clean Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Portrait Photo */}
                <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  {doc.isTodayOnDuty && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-emerald-600/95 text-white text-[10px] font-bold shadow-xs">
                      Praktek Hari Ini
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2.5">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0E7490] mt-0.5">
                      {doc.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <FileCheck2 className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>{doc.sipNumber}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {doc.bio}
                  </p>

                  {/* Focus Chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {doc.focusTags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Schedule & Action Footer */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 mb-3 flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0E7490] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-tight">{doc.schedule}</span>
                </div>

                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white text-xs font-bold transition-colors min-h-[44px]"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Pilih Dokter Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
