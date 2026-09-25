"use client";

import { useState, useEffect } from "react";
import { getClinicHoursStatus, ClinicHoursStatus } from "@/utils/clinicHours";

interface LiveClinicStatusProps {
  className?: string;
  variant?: "pill" | "text";
}

export function LiveClinicStatus({ className = "", variant = "pill" }: LiveClinicStatusProps) {
  const [status, setStatus] = useState<ClinicHoursStatus | null>(null);

  useEffect(() => {
    setStatus(getClinicHoursStatus());
    const interval = setInterval(() => {
      setStatus(getClinicHoursStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <span className={`inline-flex items-center gap-2 text-xs text-slate-500 ${className}`}>
        <span className="w-2 h-2 rounded-full bg-slate-300" aria-hidden="true" />
        <span>Praktek Buka Hari Ini (09:00 - 21:00 WIB)</span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-emerald-600" : "bg-slate-400"
          }`}
          aria-hidden="true"
        />
        <span className={status.isOpen ? "text-slate-800" : "text-slate-600"}>
          {status.statusText}
        </span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${
        status.isOpen
          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
          : "bg-slate-100 text-slate-700 border-slate-200"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-emerald-600" : "bg-slate-400"
        }`}
        aria-hidden="true"
      />
      <span>{status.badgeLabel}</span>
      <span className="text-slate-400">·</span>
      <span className="font-normal">{status.scheduleText}</span>
    </div>
  );
}
