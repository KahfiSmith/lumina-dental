import { clinicData } from "@/data/dental";
import { Star, CheckCircle, Quote } from "lucide-react";

export function Testimonials() {
  const { reviews } = clinicData;
  const primaryReview = reviews[1]; // Budi Santoso (focusing on overcoming fear/anxiety)
  const otherReviews = reviews.filter((r) => r.id !== primaryReview.id);

  return (
    <section id="ulasan" className="scroll-mt-24 py-20 sm:py-28 bg-[#F2EFE9] text-[#1E242B] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header with Google Score */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#E5DFD5]">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
              Ulasan &amp; Pengalaman Pasien
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
              Dipercaya ribuan pasien yang mengutamakan kenyamanan.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
              Mendengar langsung bagaimana kami membantu pasien mengatasi rasa takut dan memperoleh senyum sehat kembali.
            </p>
          </div>

          {/* Google Maps Score Card */}
          <div className="bg-white p-5 rounded-2xl border border-[#E5DFD5] shadow-xs flex items-center gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-[#246A60] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#246A60]" />
                ))}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-[#1E242B]">4.9</span>
                <span className="text-xs text-[#5E6773]">/ 5.0 Google Reviews</span>
              </div>
            </div>
            <div className="w-[1px] h-9 bg-[#E5DFD5]" />
            <div className="text-xs text-[#5E6773] max-w-[140px] leading-snug">
              Ulasan terverifikasi pasien di Surabaya
            </div>
          </div>
        </div>

        {/* Featured Large Hero Quote (Anxiety Relief) */}
        <div className="mt-12 rounded-3xl bg-white border border-[#E5DFD5] p-8 sm:p-12 lg:p-14 shadow-xs relative overflow-hidden">
          <div className="absolute top-6 right-6 text-[#E4EFEA] pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center gap-1 text-[#246A60]">
              {[...Array(primaryReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#246A60]" />
              ))}
              <span className="ml-2 text-xs font-semibold text-[#246A60] bg-[#E4EFEA] px-2.5 py-0.5 rounded-full">
                {primaryReview.treatment}
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1E242B] leading-snug">
              &ldquo;{primaryReview.comment}&rdquo;
            </blockquote>

            <div className="pt-2 flex items-center justify-between border-t border-[#EFEBE4]">
              <div>
                <p className="text-base font-bold text-[#1E242B]">
                  {primaryReview.author}
                </p>
                <p className="text-xs text-[#5E6773]">
                  Pasien Lumina Dental • {primaryReview.date}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#246A60] font-medium bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#E5DFD5]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{primaryReview.verifiedStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {otherReviews.map((rev) => (
            <article
              key={rev.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD5] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#246A60]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#246A60]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#246A60] bg-[#E4EFEA] px-2.5 py-0.5 rounded-full">
                    {rev.treatment}
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-[#1E242B] leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFEBE4] flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#1E242B]">{rev.author}</p>
                  <p className="text-[11px] text-[#5E6773]">{rev.date}</p>
                </div>
                <div className="flex items-center gap-1 text-[#246A60]">
                  <CheckCircle className="w-3.5 h-3.5" />
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
