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
      <span className={`inline-flex items-center gap-2 text-xs text-[#6E7178] ${className}`}>
        <span className="w-2 h-2 rounded-full bg-[#A6A49F]" aria-hidden="true" />
        <span>Praktek Buka Hari Ini (09:00 - 21:00 WIB)</span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-[#2E6F40]" : "bg-[#A6A49F]"
          }`}
          aria-hidden="true"
        />
        <span className={status.isOpen ? "text-[#1C1D1F]" : "text-[#6E7178]"}>
          {status.statusText}
        </span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
        status.isOpen
          ? "bg-[#F5F3EF] text-[#1C1D1F] border-[#E8E5DF]"
          : "bg-[#F5F3EF] text-[#6E7178] border-[#E8E5DF]"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-[#2E6F40]" : "bg-[#A6A49F]"
        }`}
        aria-hidden="true"
      />
      <span className="font-semibold">{status.badgeLabel}</span>
      <span className="text-[#A6A49F]">·</span>
      <span className="font-normal text-[#6E7178]">{status.scheduleText}</span>
    </div>
  );
}
