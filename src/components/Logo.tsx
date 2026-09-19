'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <div className="flex items-center gap-4 group">
      {/* Animated Cube Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 border border-[#D5A66A]/20 rounded-xl" />
          
          {/* Inner Floating Square */}
          <motion.div
            animate={{ 
              rotate: [-180, 180],
              scale: [0.8, 1, 0.8]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-1 border-[1.5px] border-[#D5A66A]/40 rounded-xl"
          />
        </motion.div>

        {/* Center Dot with Pulse */}
        <div className="relative z-10 w-2.5 h-2.5 bg-[#D5A66A] rounded-full shadow-[0_0_15px_rgba(213,166,106,0.8)]">
          <div className="absolute inset-0 bg-[#D5A66A] rounded-full animate-ping opacity-50" />
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-bold tracking-tighter text-[#F3EEE7]">
            RENUGA
          </span>
          <span className="text-lg font-bold tracking-tighter text-[#D5A66A] -ml-[1px]">
            SREE
          </span>
          
          {/* Online Indicator */}
          <div className="relative w-2 h-2 ml-1 hidden sm:block">
            <div className="absolute inset-0 bg-[#D5A66A] rounded-full opacity-40 animate-ping" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#E5C79A] rounded-full" />
          </div>
        </div>
        
        {/* Animated Subtitle Component */}
        <div className="h-[14px] overflow-hidden relative">
          <motion.div
            animate={{
              y: [0, -14, -28, -42, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
            className="flex flex-col text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            <span className="h-[14px] flex items-center text-[#A8A29B]">
              AI & DATA SCIENCE
            </span>
            <span className="h-[14px] flex items-center text-[#D5A66A]/80">
              PYTHON EXPERT
            </span>
            <span className="h-[14px] flex items-center text-[#A8A29B]">
              FULL-STACK DEV
            </span>
            <span className="h-[14px] flex items-center text-[#D5A66A]/80">
              AI & DATA SCIENCE
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
