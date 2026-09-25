'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Terminal, Database, BrainCircuit, Globe } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080808] pt-24 pb-16 lg:pt-28 lg:pb-20">
      
      {/* Subtle Technical Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%">
          <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#7D4149" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Subtle Burgundy Ambient Glow (Right/Center) */}
      <div className="absolute top-1/4 right-5 lg:right-1/4 w-[500px] h-[500px] bg-[#5A1720]/15 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Subtle Champagne Glow (Top/Left) */}
      <div className="absolute top-1/6 left-5 lg:left-1/6 w-[450px] h-[450px] bg-[#D2A66D]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 w-full py-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center justify-between">
          
          {/* LEFT SIDE - Content (~58% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[58%] text-left order-1"
          >
            {/* Small Eyebrow Identity */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)] text-[#D2A66D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2A66D]" />
              RENUGA SREE S
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.08]">
              <span className="text-[#D2A66D]">Artificial Intelligence &amp;</span>
              <br />
              <span className="text-[#F5F3EF]">Data Science Graduate</span>
            </h1>
            
            {/* Supporting Line */}
            <p className="text-base sm:text-lg md:text-xl text-[#D2A66D]/90 font-medium mb-5 tracking-wide">
              Data Analytics • AI/ML • Full-Stack Development
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#A8A29B] mb-8 leading-relaxed max-w-2xl">
              I build data-driven applications, adaptive learning systems, and full-stack platforms by combining Artificial Intelligence, Data Science, analytics, and modern web development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a href="#projects">
                <Button variant="primary" className="px-6 py-3 text-sm sm:text-base" icon={<ArrowRight className="w-4 h-4" />}>
                  View Projects
                </Button>
              </a>
              
              <a href="/Portfolio/resume.pdf" download>
                <Button variant="secondary" className="px-6 py-3 text-sm sm:text-base" icon={<FileText className="w-4 h-4 text-[#D2A66D]" />}>
                  Download Resume
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" className="px-6 py-3 text-sm sm:text-base" icon={<Mail className="w-4 h-4 text-[#D2A66D]" />}>
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Minimal Capabilities Row */}
            <div className="pt-6 border-t border-[rgba(210,166,109,0.16)] flex flex-wrap items-center gap-y-2 gap-x-5 sm:gap-x-7 text-xs sm:text-sm font-medium text-[#A8A29B]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D2A66D]" />
                <span className="text-[#F5F3EF]">Python &amp; SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#D2A66D]" />
                <span className="text-[#F5F3EF]">Data Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-[#D2A66D]" />
                <span className="text-[#F5F3EF]">AI &amp; Machine Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D2A66D]" />
                <span className="text-[#F5F3EF]">Full-Stack Development</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Premium Portrait/Profile Composition (~42% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[42%] flex justify-center lg:justify-end order-2"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Outer Glow & Editorial Border Frame */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-[#5A1720]/40 via-[rgba(210,166,109,0.2)] to-[#080808] blur-md opacity-70" />
              
              <div className="relative rounded-[2rem] overflow-hidden border border-[rgba(210,166,109,0.25)] bg-[#0D0D0D] shadow-2xl">
                {/* Portrait container with custom crop focusing on Renuga */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141414]">
                  <img 
                    src="/Portfolio/renuga-data-science-profile.png" 
                    alt="Renuga Sree S - Portrait"
                    className="w-full h-full object-cover object-[18%_center] transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
                </div>

                {/* Minimal Editorial Card Footer */}
                <div className="p-5 bg-[#0D0D0D] border-t border-[rgba(210,166,109,0.16)] flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-[#F5F3EF] leading-tight">Renuga Sree S</h2>
                    <p className="text-xs font-semibold text-[#D2A66D] tracking-wider uppercase mt-0.5">AI &amp; Data Science</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(90,23,32,0.2)] border border-[rgba(210,166,109,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D2A66D]" />
                    <span className="text-[10px] font-semibold text-[#F5F3EF]">Available</span>
                  </div>
                </div>

                {/* Corner Details */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D2A66D]/60" />
                <div className="absolute top-3 left-3 w-4 h-[1px] bg-[#D2A66D]/40" />
                <div className="absolute top-3 left-3 w-[1px] h-4 bg-[#D2A66D]/40" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
