'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Cpu, Database, LayoutDashboard, Terminal, BrainCircuit, Globe, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#800000]/10 blur-[150px] rounded-full pointer-events-none" 
      />
      
      {/* Engineering Aesthetic Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="grid-large" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-large)" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase border border-[#800000]/30 rounded-full bg-[#800000]/5 text-[#C19A6B] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C19A6B]"></span>
              </span>
              Renuga Sree S
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1] md:leading-[1]">
              <span className="text-[#C19A6B] italic">Artificial Intelligence</span> &<br />
              Data Science Graduate
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 mb-6 font-bold tracking-wide">
              Data Analytics • AI/ML • Full-Stack Development
            </p>

            <p className="text-base md:text-lg text-white/50 mb-10 leading-relaxed max-w-xl">
              I build intelligent applications, adaptive learning systems, and scalable web platforms by combining Artificial Intelligence, Data Science, and Modern Full-Stack Development.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects">
                <Button className="px-8 py-4 text-sm md:text-base bg-[#800000] hover:bg-[#600000] border-transparent shadow-[#800000]/20" icon={<ArrowRight className="w-5 h-5" />}>
                  View Projects
                </Button>
              </a>
              
              <a href="/Portfolio/resume.pdf" download>
                <Button variant="secondary" className="px-8 py-4 text-sm md:text-base border-[#C19A6B]/20 hover:border-[#C19A6B]/50 hover:bg-[#C19A6B]/10" icon={<FileText className="w-5 h-5 text-[#C19A6B]" />}>
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="px-8 py-4 text-sm md:text-base hover:border-[#C19A6B]/50 hover:bg-[#800000]/10" icon={<Terminal className="w-5 h-5" />}>
                  Contact Me
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Visual / Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:mr-0"
          >
            {/* The warm maroon/cream decorative frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#800000]/20 to-transparent rounded-[3rem] rotate-3 blur-md transform-gpu" />
            <div className="absolute inset-0 bg-[#050505] rounded-[3rem] border border-[#C19A6B]/20 shadow-2xl overflow-hidden flex flex-col items-center justify-center relative group">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              
              {/* Inner Decorative Elements */}
              <div className="w-full h-full p-8 flex flex-col justify-between z-10 relative">
                <div className="flex justify-between items-start w-full opacity-50">
                  <Cpu className="w-8 h-8 text-[#C19A6B]" />
                  <Database className="w-8 h-8 text-[#C19A6B]" />
                </div>
                
                <div className="text-center space-y-4 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#800000] to-[#C19A6B] rounded-full blur-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <BrainCircuit className="w-20 h-20 text-[#C19A6B] mx-auto relative z-10" />
                  <h3 className="text-[#C19A6B] font-mono tracking-widest text-sm uppercase relative z-10">Production Ready</h3>
                </div>

                <div className="flex justify-between items-end w-full opacity-50">
                  <Globe className="w-8 h-8 text-[#C19A6B]" />
                  <LayoutDashboard className="w-8 h-8 text-[#C19A6B]" />
                </div>
              </div>
            </div>
            
            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 glass px-4 py-2 rounded-xl border-[#C19A6B]/20 flex items-center gap-2 shadow-lg"
            >
              <Terminal className="w-4 h-4 text-[#C19A6B]" />
              <span className="text-xs font-bold">Python</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-1/4 glass px-4 py-2 rounded-xl border-[#800000]/30 flex items-center gap-2 shadow-lg"
            >
              <Code2 className="w-4 h-4 text-[#800000]" />
              <span className="text-xs font-bold">React</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
