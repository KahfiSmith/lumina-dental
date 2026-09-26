import Image from "next/image";
import { ShieldCheck, Heart, Sparkles, Wind, Eye, CheckCircle2 } from "lucide-react";

export function PatientComfort() {
  const comfortPoints = [
    {
      icon: Heart,
      title: "Ruang Periksa Privat & Tenang",
      desc: "Setiap ruang periksa berinsulasi kedap suara, dilengkapi aromaterapi alami dan musik relaksasi, bebas aroma obat rumah sakit.",
    },
    {
      icon: Sparkles,
      title: "Pendekatan Lembut & Minim Nyeri",
      desc: "Dokter kami mengutamakan kenyamanan psikologis pasien dengan teknik anestesi terarah dan komunikasi yang menenangkan.",
    },
    {
      icon: Eye,
      title: "Pemindaian Gigi Digital 3D",
      desc: "Pemeriksaan kontur gigi secara instan menggunakan pemindai optik presisi tinggi tanpa rasa mual dari cetakan pasta konvensional.",
    },
    {
      icon: ShieldCheck,
      title: "Sterilisasi Autoclave Kelas B",
      desc: "Standar medis tertinggi Eropa dengan uap 134°C. Segel kantong instrumen baru dibuka dan digunting langsung di hadapan Anda.",
    },
    {
      icon: Wind,
      title: "Udara Murni HEPA H14",
      desc: "Sistem filtrasi udara medis aktif menyaring 99.97% partikel aerosol mikroskopis di seluruh penjuru ruangan klinik.",
    },
    {
      icon: CheckCircle2,
      title: "Penjelasan Transparan Tanpa Kejutan",
      desc: "Dokter memperlihatkan foto intraoral kondisi gigi Anda dan mendiskusikan opsi serta estimasi biaya sebelum tindakan dilakukan.",
    },
  ];

  return (
    <section id="kenyamanan" className="scroll-mt-24 py-20 sm:py-28 bg-[#FAF8F5] text-[#1E242B] border-b border-[#E5DFD5]">
      {/* Anchor for legacy link */}
      <span id="sterilisasi" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Comfort Features */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
              Kenyamanan Pasien
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B] leading-snug">
              Ruang perawatan yang dirancang untuk meredakan rasa cemas.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
              Banyak orang menunda perawatan gigi karena rasa takut atau pengalaman masa lalu yang kurang menyenangkan. Di Lumina Dental, kami menciptakan lingkungan yang mengayomi, steril, dan menghargai ketenangan Anda.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {comfortPoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs flex flex-col justify-between hover:border-[#246A60]/40 transition-all"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#E4EFEA] text-[#246A60] flex items-center justify-center mb-3">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#1E242B]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#5E6773] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interior & Authentic Clinic Imagery */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden border border-[#E5DFD5] bg-[#F2EFE9] shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                alt="Suasana ruang klinik gigi Lumina Dental Surabaya yang tenang dan ramah"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E242B]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3.5 border border-[#E5DFD5] text-xs">
                <span className="font-semibold text-[#1E242B] block">
                  Peralatan Medis Terkalibrasi &amp; Teruji
                </span>
                <span className="text-[11px] text-[#5E6773] mt-0.5 block">
                  Izin Operasional Resmi Dinas Kesehatan Surabaya No. 503/412/KP/Dinkes-Sby/2023
                </span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#E4EFEA] border border-[#BCD9D2]">
              <h3 className="text-sm font-bold text-[#1E242B]">
                Ada Pertanyaan tentang Prosedur Tindakan?
              </h3>
              <p className="mt-1.5 text-xs text-[#5E6773] leading-relaxed">
                Anda dapat berkonsultasi mengenai keluhan gigi Anda secara online terlebih dahulu. Resepsionis medis kami akan menjelaskan tahapan dan perkiraan waktu dengan ramah.
              </p>
              <div className="mt-4">
                <a
                  href="#booking"
                  className="inline-flex h-9 items-center justify-center rounded-full bg-[#246A60] hover:bg-[#1B524A] px-4 text-xs font-semibold text-white transition-all shadow-xs"
                >
                  Tanya Jadwal &amp; Prosedur
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
