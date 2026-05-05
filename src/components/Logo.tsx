'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Geometric Background Element */}
        <motion.div 
          className="absolute inset-0 bg-blue-500/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"
        />
        <motion.div 
          className="absolute inset-0 border border-blue-500/40 rounded-lg group-hover:rotate-12 transition-transform duration-500"
        />
        
        {/* Initials */}
        <span className="relative text-xl font-bold tracking-tighter text-white">
          RS
        </span>
        
        {/* AI/Data Inspired Node */}
        <motion.div 
          className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="hidden sm:block">
        <span className="text-lg font-bold tracking-tight text-white">Renuga<span className="text-blue-500">Sree</span></span>
      </div>
    </motion.div>
  );
}
