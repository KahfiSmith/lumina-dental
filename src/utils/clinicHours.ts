export interface ClinicHoursStatus {
  isOpen: boolean;
  badgeLabel: string;
  statusText: string;
  scheduleText: string;
}

export function getClinicHoursStatus(date: Date = new Date()): ClinicHoursStatus {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    hour12: false,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value || "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
  const currentMinutes = hour * 60 + minute;

  const isSunday = weekday === "Sun";
  const openMinutes = isSunday ? 10 * 60 : 9 * 60; // 10:00 on Sunday, 09:00 Mon-Sat
  const closeMinutes = isSunday ? 17 * 60 : 21 * 60; // 17:00 on Sunday, 21:00 Mon-Sat
  const closeTimeLabel = isSunday ? "17:00 WIB" : "21:00 WIB";

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    return {
      isOpen: true,
      badgeLabel: "Praktek Buka",
      statusText: `Buka Hari Ini · Selesai pukul ${closeTimeLabel}`,
      scheduleText: `Sedang Melayani Pasien (Tutup ${closeTimeLabel})`,
    };
  }

  const opensToday = currentMinutes < openMinutes;
  const nextOpenTime = isSunday ? "10:00 WIB" : "09:00 WIB";
  const nextOpenText = opensToday
    ? `Mulai praktek hari ini pukul ${nextOpenTime}`
    : "Buka kembali besok pukul 09:00 WIB";

  return {
    isOpen: false,
    badgeLabel: "Tutup Sementara",
    statusText: `Praktek Selesai · ${nextOpenText}`,
    scheduleText: nextOpenText,
  };
}
