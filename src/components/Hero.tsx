'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Cpu, Database, LayoutDashboard, Terminal, BrainCircuit, Globe } from 'lucide-react';
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
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" 
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

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase border border-blue-500/20 rounded-full bg-blue-500/5 text-blue-400 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for AI/ML Engineering Opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-[0.95] md:leading-[0.95]">
            Building <span className="gradient-text italic">Intelligent</span> <br />
            Systems & Products
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/60 mb-12 leading-relaxed font-medium">
            I specialize in architecting end-to-end ML solutions, from <span className="text-white">model training</span> to <span className="text-white">production-grade deployment</span>. Bridging the gap between raw data and scalable AI products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#projects">
              <Button className="px-10 py-5 text-lg" icon={<ArrowRight className="w-5 h-5" />}>
                Explore My Work
              </Button>
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/RENUGASREE" target="_blank" rel="noopener noreferrer">
                <Button variant="icon">
                  <GithubIcon className="w-7 h-7" />
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button variant="secondary" className="px-8 py-5 text-lg" icon={<FileText className="w-5 h-5" />}>
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Technical Capabilities / Tech Stack */}
        <motion.div 
          className="mt-28 flex flex-wrap justify-center gap-10 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="flex flex-col items-center gap-3">
             <Terminal className="w-6 h-6" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Systems Logic</span>
          </div>
          <div className="flex flex-col items-center gap-3">
             <BrainCircuit className="w-6 h-6" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Neural Architectures</span>
          </div>
          <div className="flex flex-col items-center gap-3">
             <Database className="w-6 h-6" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Data Engineering</span>
          </div>
          <div className="flex flex-col items-center gap-3">
             <Globe className="w-6 h-6" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Scalable Deployment</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
