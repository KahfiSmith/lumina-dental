import { ShieldCheck, Sparkles, Wind, Eye } from "lucide-react";

export function Sterilization() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Sterilisasi Autoclave Kelas B",
      desc: "Standar rumah sakit Eropa dengan uap 134°C. Kantong steril baru digunting langsung di hadapan Anda.",
      tag: "Higienis Mutlak",
    },
    {
      icon: Sparkles,
      title: "Painless Care & Ruang Privat",
      desc: "Anestesi tanpa rasa sakit, dental chair ergonomis, TV hiburan, dan aromaterapi bebas bau obat.",
      tag: "Bebas Cemas",
    },
    {
      icon: Eye,
      title: "Pemindaian Gigi 3D Digital",
      desc: "Kamera intraoral presisi tinggi menampilkan kondisi gigi di layar monitor tanpa cetak pasta yang mual.",
      tag: "Teknologi Terkini",
    },
    {
      icon: Wind,
      title: "Udara Bersih Medis HEPA H14",
      desc: "Sirkulasi udara ruang periksa disaring terus menerus untuk membasmi aerosol kuman dan droplet.",
      tag: "Udara Murni",
    },
  ];

  return (
    <section id="sterilisasi" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E7490] block mb-2">
            Standar Fasilitas &amp; Higienitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Kenyamanan &amp; Keamanan Pasien
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Kami menghilangkan segala hal yang membuat orang takut ke dokter gigi.
          </p>
        </div>

        {/* 4-Bento Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0E7490]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#0E7490] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#0E7490]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
