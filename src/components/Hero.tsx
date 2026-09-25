'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Terminal, Database, BrainCircuit, Globe, TrendingUp, Cpu, Sparkles } from 'lucide-react';
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
              <a href="#projects">
                <Button variant="primary" className="px-6 py-3 text-sm sm:text-base" icon={<ArrowRight className="w-4 h-4" />}>
                  View Projects
                </Button>
              </a>
              
              <a href="/Portfolio/resume.pdf" download>
                <Button variant="secondary" className="px-6 py-3 text-sm sm:text-base" icon={<FileText className="w-4 h-4 text-primary" />}>
                  Download Resume
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" className="px-6 py-3 text-sm sm:text-base" icon={<Mail className="w-4 h-4 text-primary" />}>
                  Contact Me
                </Button>
              </a>
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

          {/* RIGHT SIDE - Restrained Professional Profile & Analytics Motif (~42% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[42%] flex justify-center lg:justify-end order-2"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-secondary/20 via-primary/15 to-transparent blur-md opacity-60" />
              
              <div className="relative rounded-[2rem] overflow-hidden border border-card-border bg-surface p-7 shadow-xl">
                
                {/* Header with verified identity */}
                <div className="flex items-center justify-between pb-5 border-b border-border mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-border bg-secondary/15 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-foreground">Renuga Sree S</h2>
                      <p className="text-[11px] font-medium text-primary uppercase tracking-wider">AI &amp; Data Science</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-chip-bg text-primary border border-border">
                    Verified Profile
                  </span>
                </div>

                {/* Technical Core Metrics Motif */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">Customer Intelligence</div>
                        <div className="text-[10px] text-muted">RFM &amp; K-Means Analytics</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary">541K+ Rows</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BrainCircuit className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">Adaptive Learning Logic</div>
                        <div className="text-[10px] text-muted">IRT &amp; SM-2 Assistant</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary">Python Edition</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-soft border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">Full-Stack Architecture</div>
                        <div className="text-[10px] text-muted">React, Node.js &amp; MongoDB</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary">Production Ready</span>
                  </div>
                </div>

                {/* Primary Skill Stack Badges */}
                <div className="pt-4 border-t border-border">
                  <div className="text-[10px] uppercase font-semibold text-muted tracking-wider mb-2.5">
                    Core Technical Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs font-medium">
                    {["Python", "SQL", "Power BI", "Machine Learning", "React", "Node.js", "MongoDB"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-chip-bg border border-border text-foreground text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary/50" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-primary/50" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
