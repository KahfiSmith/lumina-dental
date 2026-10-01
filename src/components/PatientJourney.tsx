export function PatientJourney() {
  const steps = [
    {
      num: "01",
      title: "ARRIVE",
      label: "Studio Welcome",
      desc: "Disambut di lobi kontemporer yang tenang dengan alunan musik lembut, tanpa deru mesin bor yang bising.",
    },
    {
      num: "02",
      title: "CHECK",
      label: "3D Digital Scan",
      desc: "Pemindaian optik intraoral tanpa adonan cetak mual. Kondisi gigi langsung divisualisasikan di monitor di depan Anda.",
    },
    {
      num: "03",
      title: "TALK",
      label: "Clear Discussion",
      desc: "Diskusi santai dan transparan dengan dokter spesialis mengenai opsi tindakan, durasi, dan biaya tanpa tekanan.",
    },
    {
      num: "04",
      title: "TREAT",
      label: "Gentle Hands",
      desc: "Perawatan dengan anestesi lembut dan pendekatan minim nyeri, didampingi kacamata pelindung dan jeda saat Anda butuh.",
    },
    {
      num: "05",
      title: "SMILE",
      label: "Walk Out Confident",
      desc: "Selesai perawatan dengan instruksi pemulihan yang jelas serta kemudahan follow-up langsung via WhatsApp.",
    },
  ];

  return (
    <section id="alur" className="scroll-mt-24 py-20 sm:py-28 bg-[#F1F3F7] text-[#12151A] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3">
                <span className="font-bold">SECTION 02</span>
                <span>/</span>
                <span>THE DENTAL EXPERIENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans">
                What Happens
                <br />
                During Your Visit.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Lima tahapan kunjungan yang dirancang runtut, transparan, dan mengikis kecemasan Anda sejak detik pertama melangkah masuk studio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <div
              key={item.num}
              className="p-6 bg-white border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1D4ED8] transition-colors group relative"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 font-mono">
                  <span className="text-xs font-bold text-[#00D284]">
                    PHASE {item.num}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    0{idx + 1}/05
                  </span>
                </div>

                <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
                  {item.label}
                </div>

                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#12151A] mb-3 font-sans group-hover:text-[#1D4ED8] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4B5563] leading-relaxed font-light font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>STAGE COMPLETE</span>
                <span className="text-[#00A868] font-bold">READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
