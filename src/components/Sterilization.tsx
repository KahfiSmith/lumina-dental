export function Sterilization() {
  const standards = [
    {
      number: "01",
      badge: "Sterilisasi Mutlak",
      title: "Autoclave Medis Kelas B Eropa",
      desc: "Setiap instrumen disterilisasi menggunakan uap bertekanan tinggi 134°C standar medis Eropa. Segel kantong steril baru dibuka dan digunting langsung di hadapan Anda sebelum tindakan.",
    },
    {
      number: "02",
      badge: "Bebas Rasa Cemas",
      title: "Painless Care & Dental Suite Privat",
      desc: "Ruang periksa individu kedap suara dengan dental chair ergonomis, musik relaksasi, dan aromaterapi alami bebas bau obat rumah sakit untuk memastikan kunjungan Anda berlangsung tenang.",
    },
    {
      number: "03",
      badge: "Presisi Digital",
      title: "Pemindaian Gigi 3D Tanpa Cetak Pasta",
      desc: "Pemindai intraoral optik digital menangkap kontur gigi dengan akurasi mikron dalam hitungan detik. Anda dapat melihat simulasi kondisi gigi di layar tanpa sensasi mual cetak adonan konvensional.",
    },
    {
      number: "04",
      badge: "Udara Murni",
      title: "Filtrasi Udara Medis HEPA H14",
      desc: "Sistem sirkulasi udara terpadu dengan filter HEPA grade medis H14 membersihkan partikel droplet dan aerosol kuman di seluruh ruangan secara terus-menerus.",
    },
  ];

  return (
    <section id="sterilisasi" className="scroll-mt-24 py-24 sm:py-32 bg-[#FBFBFA] text-[#1C1D1F] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E5E0D8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#8F6E4D] uppercase">
              Standar Fasilitas &amp; Keamanan
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#1C1D1F] sm:text-4xl lg:text-5xl uppercase">
              A Space Designed for Your Comfort
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6E7178] font-light">
            Kami menghapus ketakutan tradisional terhadap klinik gigi dengan menciptakan lingkungan medis yang tenang, higienis, dan mengayomi.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#E5E0D8] border-y border-[#E5E0D8]">
          {standards.map((item) => (
            <div
              key={item.number}
              className="grid items-baseline gap-6 py-12 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-2">
                <span className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-[#D4CDBC]">
                  {item.number}
                </span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.2em] text-[#8F6E4D] uppercase">
                  {item.badge}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[#1C1D1F] uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs sm:text-sm text-[#6E7178] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
