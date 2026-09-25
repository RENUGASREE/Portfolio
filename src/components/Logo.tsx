'use client';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group">
      {/* Editorial Emblem */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-border bg-secondary/15 flex items-center justify-center transition-colors duration-300 group-hover:border-primary">
        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors duration-200">
            RENUGA
          </span>
          <span className="text-base sm:text-lg font-bold tracking-tight text-primary transition-colors duration-200">
            SREE
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-muted mt-1 transition-colors duration-200">
          AI &amp; DATA SCIENCE
        </span>
      </div>
    </div>
  );
}
