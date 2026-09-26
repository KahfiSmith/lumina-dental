import Image from "next/image";
import { clinicData } from "@/data/dental";
import { Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Cases() {
  const { cases, contact } = clinicData;

  return (
    <section id="hasil" className="py-24 sm:py-32 bg-[#F5F3EF] text-[#1C1D1F] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8F6E4D]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8F6E4D]">
              04 / Dokumentasi Klinis
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1D1F] tracking-tight leading-[1.15] mb-5">
            Presisi Hasil &amp; Transformasi Senyum.
          </h2>

          <p className="text-base sm:text-lg text-[#6E7178] leading-relaxed font-normal max-w-2xl">
            Setiap perawatan dirancang proporsional dengan profil anatomis wajah, integritas biologis enamel, dan fungsi kunyah jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cases.map((c, index) => (
            <article
              key={c.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E5DF] flex flex-col justify-between group transition-all duration-300 hover:border-[#8F6E4D]/40 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0EDE8] mb-5">
                  <span className="text-[11px] font-mono tracking-widest text-[#8F6E4D] uppercase">
                    Kasus {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F5F3EF] text-[11px] font-medium text-[#1C1D1F] border border-[#E8E5DF]">
                    {c.treatmentType}
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#EFECE6] mb-6">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[11px]">
                      <Clock className="w-3 h-3 text-[#EFECE6]" aria-hidden="true" />
                      <span>{c.durationText}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[11px]">
                      Pasien: {c.patientAge}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1D1F] leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-sm text-[#6E7178] leading-relaxed">
                    {c.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#FBFBFA] border border-[#E8E5DF] text-xs text-[#1C1D1F] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8F6E4D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed font-medium">{c.resultHighlight}</span>
                  </div>

                  <p className="text-[11px] text-[#A6A49F]">
                    Dokter Penanggung Jawab: <span className="text-[#1C1D1F] font-medium">{c.doctorInCharge}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EDE8]">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Lumina Dental Studio, saya melihat dokumentasi kasus ${c.title}. Saya ingin konsultasi apakah kondisi gigi saya dapat dirawat dengan prosedur serupa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-[#F5F3EF] hover:bg-[#1C1D1F] text-[#1C1D1F] hover:text-white text-xs font-semibold tracking-wide transition-all group/btn"
                >
                  <span>Konsultasi Kasus Ini via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8F6E4D] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
