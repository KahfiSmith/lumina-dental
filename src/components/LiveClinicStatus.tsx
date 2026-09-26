"use client";

import { useSyncExternalStore } from "react";
import { getClinicHoursStatus, ClinicHoursStatus } from "@/utils/clinicHours";

interface LiveClinicStatusProps {
  className?: string;
  variant?: "pill" | "text";
}

let cachedStatusString = "";
let lastCheckedMinute = 0;

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 60000);
  return () => clearInterval(interval);
}

function getSnapshot(): string {
  const currentMinute = Math.floor(Date.now() / 60000);
  if (currentMinute !== lastCheckedMinute || !cachedStatusString) {
    lastCheckedMinute = currentMinute;
    cachedStatusString = JSON.stringify(getClinicHoursStatus());
  }
  return cachedStatusString;
}

function getServerSnapshot(): string {
  return "";
}

export function LiveClinicStatus({ className = "", variant = "pill" }: LiveClinicStatusProps) {
  const rawStatus = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const status: ClinicHoursStatus | null = rawStatus ? (JSON.parse(rawStatus) as ClinicHoursStatus) : null;

  if (!status) {
    return (
      <span className={`inline-flex items-center gap-2 text-xs text-[#5E6773] ${className}`}>
        <span className="w-2 h-2 rounded-full bg-[#5E6773]" aria-hidden="true" />
        <span>Praktik Buka Hari Ini (09:00 - 21:00 WIB)</span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-[#246A60]" : "bg-[#8C95A0]"
          }`}
          aria-hidden="true"
        />
        <span className={status.isOpen ? "text-[#1E242B]" : "text-[#5E6773]"}>
          {status.statusText}
        </span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
        status.isOpen
          ? "bg-[#E4EFEA] text-[#246A60] border-[#BCD9D2]"
          : "bg-[#FAF8F5] text-[#5E6773] border-[#E5DFD5]"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-[#246A60] animate-pulse" : "bg-[#8C95A0]"
        }`}
        aria-hidden="true"
      />
      <span className="font-semibold">{status.badgeLabel}</span>
      <span className="text-[#8C95A0]">·</span>
      <span className="font-normal text-[#5E6773]">{status.scheduleText}</span>
    </div>
  );
}
