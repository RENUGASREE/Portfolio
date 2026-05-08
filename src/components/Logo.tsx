'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-3 group cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Engineering-inspired geometric frame */}
        <motion.div 
          className="absolute inset-0 border-[1.5px] border-blue-500/30 rounded-xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: 45 }}
          whileHover={{ rotate: 90, borderColor: 'rgba(59, 130, 246, 0.6)' }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />
        <motion.div 
          className="absolute inset-1 border-[1px] border-white/10 rounded-lg"
          initial={{ rotate: 0 }}
          animate={{ rotate: -45 }}
          whileHover={{ rotate: -90, borderColor: 'rgba(255, 255, 255, 0.3)' }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />
        
        {/* RS Initials - Clean & Technical */}
        <div className="relative flex items-center justify-center">
          <span className="text-lg font-bold tracking-tighter text-white">
            R
          </span>
          <span className="text-lg font-bold tracking-tighter text-blue-500 -ml-[1px]">
            S
          </span>
        </div>
        
        {/* Pulse Dot (AI Node) */}
        <motion.div 
          className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 0px rgba(96, 165, 250, 0)",
              "0 0 8px rgba(96, 165, 250, 0.6)",
              "0 0 0px rgba(96, 165, 250, 0)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="flex flex-col -space-y-1">
        <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
          RENUGA<span className="font-light text-white/70">SREE</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500/80">
          AI ENGINEER
        </span>
      </div>
    </motion.div>
  );
}
