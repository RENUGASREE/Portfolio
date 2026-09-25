/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Terminal, Database, BrainCircuit, Globe } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16 lg:pt-28 lg:pb-20 transition-colors duration-300">
      
      {/* Subtle Technical Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%">
          <pattern id="hero-grid" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M 70 0 L 0 0 0 70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-secondary opacity-30" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 right-5 lg:right-1/4 w-[450px] h-[450px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/6 left-5 lg:left-1/6 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase border border-border rounded-full bg-surface-soft text-primary shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              RENUGA SREE S
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.08]">
              <span className="text-primary block sm:inline">Artificial Intelligence &amp;</span>
              <br className="hidden sm:block" />
              <span className="text-foreground"> Data Science Graduate</span>
            </h1>
            
            {/* Supporting Line */}
            <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-5 tracking-wide">
              Data Analytics • AI/ML • Full-Stack Development
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted mb-8 leading-relaxed max-w-2xl">
              I build data-driven applications, adaptive learning systems, and full-stack platforms by combining Artificial Intelligence, Data Science, analytics, and modern web development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Button href="#projects" variant="primary" className="px-6 py-3 text-sm sm:text-base" icon={<ArrowRight className="w-4 h-4" />}>
                View Projects
              </Button>
              
              <Button href="/Portfolio/resume.pdf" download variant="secondary" className="px-6 py-3 text-sm sm:text-base" icon={<FileText className="w-4 h-4 text-primary" />}>
                Download Resume
              </Button>

              <Button href="#contact" variant="outline" className="px-6 py-3 text-sm sm:text-base" icon={<Mail className="w-4 h-4 text-primary" />}>
                Contact Me
              </Button>
            </div>

            {/* Minimal Capabilities Row */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-y-2.5 gap-x-5 sm:gap-x-7 text-xs sm:text-sm font-medium text-muted">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground">Python &amp; SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground">Data Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground">AI &amp; Machine Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground">Full-Stack Development</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Premium Executive Dark Portrait (~42% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[42%] flex justify-center lg:justify-end order-2"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-br from-secondary/30 via-primary/20 to-transparent blur-lg opacity-70" />
              
              <div className="relative rounded-[2rem] overflow-hidden border border-card-border bg-surface shadow-2xl group">
                {/* 4:5 Executive Studio Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-soft">
                  <img 
                    src="/Portfolio/renuga-dark.jpg" 
                    alt="Renuga Sree S - AI & Data Science Graduate"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Subtle Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Editorial Card Footer */}
                <div className="p-4 sm:p-5 bg-surface border-t border-border flex items-center justify-between">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-foreground leading-tight">Renuga Sree S</h2>
                    <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-0.5">AI &amp; Data Science Graduate</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-chip-bg border border-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-semibold text-foreground">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
