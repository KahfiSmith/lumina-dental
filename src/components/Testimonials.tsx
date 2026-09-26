import { clinicData } from "@/data/dental";
import { Star, MessageSquare } from "lucide-react";

export function Testimonials() {
  const { reviews } = clinicData;

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#0E7490] text-xs font-bold mb-3 border border-teal-200">
            <MessageSquare className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
            <span>Ulasan Pasien Google Maps</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pengalaman Pasien Kami
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" aria-hidden="true" />
              ))}
            </div>
            <span className="font-extrabold text-lg text-slate-900">4.9 / 5.0</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-500">
            Berdasarkan 380+ ulasan pasien di Google Maps Surabaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-xs transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#0E7490] bg-teal-50 px-2 py-0.5 rounded-sm">
                    {rev.treatment}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-slate-900">{rev.author}</p>
                  <p className="text-[11px] text-slate-400">{rev.date}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Google Maps
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
