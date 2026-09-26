import { clinicData } from "@/data/dental";
import { Star, CheckCircle } from "lucide-react";

export function Testimonials() {
  const { reviews } = clinicData;

  return (
    <section className="py-24 sm:py-32 bg-[#FBFBFA] text-[#1C1D1F] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#8F6E4D]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8F6E4D]">
                05 / Pengalaman Pasien
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1D1F] tracking-tight leading-[1.15]">
              Kisah &amp; Kenyamanan Pasien.
            </h2>
          </div>

          <div className="bg-[#F5F3EF] p-5 sm:p-6 rounded-2xl border border-[#E8E5DF] flex items-center gap-5 shrink-0">
            <div>
              <div className="flex items-center gap-1.5 text-[#8F6E4D] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8F6E4D]" aria-hidden="true" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-serif font-bold text-[#1C1D1F]">4.9</span>
                <span className="text-xs text-[#6E7178]">/ 5.0 Skor Google</span>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-[#E8E5DF]" />
            <div className="text-xs text-[#6E7178] max-w-[160px] leading-relaxed">
              Berdasarkan 380+ ulasan terverifikasi di Google Maps Surabaya
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <article
              key={rev.id}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E8E5DF] flex flex-col justify-between transition-all duration-300 hover:border-[#8F6E4D]/40 hover:shadow-xs"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#8F6E4D]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#8F6E4D]" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#8F6E4D] bg-[#F5F3EF] px-2.5 py-1 rounded-full uppercase">
                    {rev.treatment}
                  </span>
                </div>

                <blockquote className="font-serif text-lg sm:text-xl text-[#1C1D1F] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EDE8] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-[#1C1D1F]">{rev.author}</p>
                  <p className="text-[11px] text-[#A6A49F]">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#8F6E4D]">
                  <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Google Maps</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
