'use client';

export default function Logo() {
  return (
    <div className="flex items-center gap-3.5 group select-none cursor-pointer">
      {/* Unique AI & Data Science Neural Monogram Emblem */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
        {/* Subtle Ambient Radial Glow on Hover */}
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

        {/* Custom Hand-Crafted SVG Emblem */}
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            {/* Dynamic Theme Gradients */}
            <linearGradient id="rs-border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
            </linearGradient>
            
            <linearGradient id="rs-mark-gradient" x1="10%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--primary-soft)" />
            </linearGradient>

            <linearGradient id="rs-inner-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--surface)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--surface-soft)" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Outer Rounded Squircle Frame */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="12"
            fill="url(#rs-inner-bg)"
            stroke="url(#rs-border-gradient)"
            strokeWidth="1.5"
            className="transition-all duration-300 group-hover:stroke-primary"
          />

          {/* Interlocking 'R' & 'S' Neural Lattice */}
          {/* Path 1: Stem & Loop of 'R' transitioning into 'S' continuous curve */}
          <path
            d="M 14 31 L 14 13 C 14 13, 22 11, 26 15 C 29 18, 27 23, 21 24 C 27 25, 29 29, 29 31"
            stroke="url(#rs-mark-gradient)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Path 2: Intertwined 'S' curvature anchor */}
          <path
            d="M 30 15 C 27 13.5, 23 13.5, 20 15.5 C 16 18, 17 21.5, 21 23 C 25.5 24.5, 27.5 27, 24 30 C 20.5 32.5, 16 30.5, 15 28.5"
            stroke="var(--secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-75 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Data Science / Neural Nodes */}
          {/* Node 1: Top-left input node */}
          <circle cx="14" cy="13" r="2.2" fill="var(--primary)" />
          {/* Node 2: Central AI convergence nexus */}
          <circle cx="21" cy="24" r="2.5" fill="var(--primary-soft)" />
          {/* Node 3: Bottom-left terminal node */}
          <circle cx="14" cy="31" r="2.2" fill="var(--primary)" />
          {/* Node 4: Bottom-right output node */}
          <circle cx="29" cy="31" r="2.2" fill="var(--primary)" />

          {/* Central Neural Pulse Spark */}
          <polygon
            points="21,21 23,24 21,27 19,24"
            fill="var(--primary)"
            className="transition-transform duration-300 group-hover:scale-125 origin-center"
          />
        </svg>
      </div>

      {/* Typography Lockup: RENUGA SREE S */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors duration-200">
            RENUGA
          </span>
          <span className="text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors duration-200">
            SREE
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-primary transition-colors duration-200">
            S
          </span>
        </div>
        
        {/* Subtitle with Real-time Data Indicator */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] text-muted transition-colors duration-200">
            AI &amp; DATA SCIENCE
          </span>
        </div>
      </div>
    </div>
  );
}
