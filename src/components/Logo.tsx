'use client';

export default function Logo() {
  return (
    <div className="flex items-center gap-3.5 group">
      {/* Editorial Emblem */}
      <div className="relative w-9 h-9 rounded-lg border border-[rgba(210,166,109,0.3)] bg-[rgba(90,23,32,0.15)] flex items-center justify-center transition-colors duration-300 group-hover:border-[#D2A66D]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#D2A66D] shadow-[0_0_10px_rgba(210,166,109,0.5)]" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF]">
            RENUGA
          </span>
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#D2A66D]">
            SREE
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A8A29B] mt-1">
          AI & DATA SCIENCE
        </span>
      </div>
    </div>
  );
}
