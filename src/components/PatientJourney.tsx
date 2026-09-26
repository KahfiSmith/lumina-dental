import { ArrowRight } from "lucide-react";

export function PatientJourney() {
  const steps = [
    {
      step: "01",
      title: "Konsultasi Ramah",
      subtitle: "Mendengarkan Keluhan Anda",
      desc: "Ceritakan kebutuhan, keluhan gigi, atau rasa cemas Anda dengan leluasa. Dokter kami mendengarkan dengan penuh perhatian tanpa terburu-buru.",
    },
    {
      step: "02",
      title: "Pemeriksaan Digital 3D",
      subtitle: "Visualisasi Nyata Tanpa Mual",
      desc: "Pemindaian optik intraoral resolusi tinggi menangkap kondisi rongga mulut Anda secara instan. Hasil dapat langsung Anda lihat di layar monitor.",
    },
    {
      step: "03",
      title: "Rencana Perawatan",
      subtitle: "Transparan Tanpa Tekanan",
      desc: "Dokter menjelaskan opsi tindakan terbaik, estimasi waktu, serta rincian biaya secara jelas. Anda memiliki kendali penuh untuk memutuskan.",
    },
    {
      step: "04",
      title: "Tindakan Nyaman",
      subtitle: "Pendampingan Hingga Tuntas",
      desc: "Perawatan dilakukan dengan anestesi lembut dan sentuhan yang cermat, diikuti panduan pemulihan serta kemudahan komunikasi via WhatsApp.",
    },
  ];

  return (
    <section id="alur" className="scroll-mt-24 py-20 sm:py-28 bg-[#F2EFE9] text-[#1E242B] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
            Alur Kunjungan Pasien
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
            Kunjungan Anda, dibuat tenang dan sederhana.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
            Dari saat Anda melangkah masuk hingga selesai perawatan, setiap tahap dirancang agar Anda merasa aman, paham, dan terlayani dengan tulus.
          </p>
        </div>

        {/* Steps Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EFEBE4]">
                  <span className="text-2xl font-bold text-[#246A60] font-mono">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium text-[#5E6773] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E5DFD5]">
                    Langkah {idx + 1}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#1E242B]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#246A60] mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#5E6773] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFEBE4] text-[11px] text-[#5E6773] flex items-center justify-between">
                <span>Tahap Terarah</span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#246A60] hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
