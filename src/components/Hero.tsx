'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Terminal, Code2 } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808] pt-20">
      
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid-large" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#7A313A" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-large)" />
        </svg>
      </div>

      {/* Subtle Champagne Glow near heading (left) */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#E5C79A]/20 blur-[150px] rounded-full pointer-events-none" 
      />

      {/* Subtle Burgundy Glow near portrait (right) */}
      <motion.div 
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-32 w-[700px] h-[700px] bg-[#5A1720]/30 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="section-container relative z-10 w-full pb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center justify-between pt-10">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left order-1"
          >
            {/* Identity Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase border border-[#D5A66A]/30 rounded-full bg-[#D5A66A]/5 text-[#D5A66A] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5A66A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5A66A]"></span>
              </span>
              RENUGA SREE S
            </motion.div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1] md:leading-[1.1]">
              <span className="text-[#D5A66A] block lg:inline">Artificial Intelligence &</span><br className="hidden lg:block" />
              <span className="text-[#F3EEE7]"> Data Science </span><br className="hidden lg:block" />
              <span className="text-[#F3EEE7]">Graduate</span>
            </h1>
            
            {/* Supporting Line */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#E5C79A] mb-6 font-bold tracking-wide">
              Data Analytics • AI/ML • Full-Stack Development
            </p>

            {/* Introduction */}
            <p className="text-base md:text-lg text-[#A8A29B] mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build data-driven applications, adaptive learning systems, and full-stack platforms by combining Artificial Intelligence, Data Science, analytics, and modern web development.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-4 text-sm md:text-base bg-[#D5A66A] text-[#0B0B0B] hover:bg-[#E5C79A] border-transparent shadow-[0_0_20px_rgba(213,166,106,0.15)]" icon={<ArrowRight className="w-5 h-5 text-[#0B0B0B]" />}>
                  View Projects
                </Button>
              </a>
              
              <a href="/Portfolio/resume.pdf" download className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm md:text-base border-[rgba(213,166,106,0.5)] text-[#F3EEE7] hover:bg-[#D5A66A]/10 hover:border-[#D5A66A]" icon={<FileText className="w-5 h-5 text-[#D5A66A]" />}>
                  Download Resume
                </Button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-sm md:text-base border-transparent text-[#A8A29B] hover:text-[#F3EEE7] hover:bg-white/5">
                  Contact Me
                </Button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Premium Profile Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-md mx-auto lg:max-w-none order-2"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square flex items-center justify-center lg:justify-end">
              
              {/* Profile Card Container */}
              <div className="relative w-full max-w-sm lg:w-[90%] xl:w-[85%] h-full rounded-[2.5rem] bg-[rgba(255,255,255,0.02)] border border-[rgba(213,166,106,0.15)] shadow-2xl p-6 flex flex-col justify-end overflow-hidden group">
                
                {/* Decorative Background Layer inside Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[#5A1720]/10 mix-blend-overlay z-0 pointer-events-none" />
                
                {/* Portrait Image Placeholder */}
                {/* Fallback gradient if image not found */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1c1613] to-[#2a1719] transition-transform duration-700 group-hover:scale-105" />
                <img 
                  src="/Portfolio/banner.png" 
                  alt="Renuga Sree S - Portrait" 
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />

                {/* Content Overlay */}
                <div className="relative z-20 w-full pt-20">
                  <h3 className="text-2xl font-bold text-[#F3EEE7] tracking-tight mb-1">Renuga Sree S</h3>
                  <p className="text-sm font-semibold text-[#D5A66A] uppercase tracking-widest mb-4">AI & Data Science Graduate</p>
                  
                  {/* Subtle Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-[rgba(213,166,106,0.5)] to-transparent mb-4" />
                  
                  {/* Minimal Labels */}
                  <div className="flex flex-wrap gap-2 text-[11px] font-bold text-[#A8A29B] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Code2 className="w-3 h-3 text-[#5A1720]" /> Python</span>
                    <span>•</span>
                    <span>SQL</span>
                    <span>•</span>
                    <span>Power BI</span>
                    <span>•</span>
                    <span className="text-[#E5C79A]">AI/ML</span>
                  </div>
                </div>

                {/* Decorative Gold Accents */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#D5A66A] shadow-[0_0_10px_#D5A66A]" />
                <div className="absolute top-6 left-6 w-8 h-[1px] bg-[#D5A66A]/30" />
                <div className="absolute top-6 left-6 w-[1px] h-8 bg-[#D5A66A]/30" />
                <div className="absolute bottom-6 right-6 w-8 h-[1px] bg-[#D5A66A]/30" />
                <div className="absolute bottom-6 right-6 w-[1px] h-8 bg-[#D5A66A]/30" />
              </div>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
