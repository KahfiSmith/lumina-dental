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
      <span className={`inline-flex items-center gap-2 text-xs font-mono text-slate-500 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-slate-400" aria-hidden="true" />
        <span>Praktik Buka Hari Ini (09:00 - 21:00 WIB)</span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs font-mono font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-[#00D284] animate-pulse" : "bg-slate-400"
          }`}
          aria-hidden="true"
        />
        <span className={status.isOpen ? "text-[#12151A] font-bold" : "text-slate-500"}>
          {status.statusText}
        </span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono border ${
        status.isOpen
          ? "bg-[#E6FBF2] text-[#00A868] border-[#00D284]/40 font-bold"
          : "bg-white text-slate-500 border-[#E5E7EB]"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-[#00D284] animate-pulse" : "bg-slate-400"
        }`}
        aria-hidden="true"
      />
      <span>{status.badgeLabel}</span>
      <span className="text-slate-300">/</span>
      <span className="font-normal text-slate-600 font-sans">{status.scheduleText}</span>
    </div>
  );
}
