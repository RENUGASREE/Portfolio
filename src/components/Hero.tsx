'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Cpu, Database, LayoutDashboard } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      {/* Background System Diagram Aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" className="w-full h-full">
          <pattern id="lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 50 L 100 50 M 50 0 L 50 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400">
            AI/ML Engineer | Data Scientist
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building <span className="gradient-text">Intelligent Systems</span> <br />
            with AI & Scalable Engineering
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            I specialize in architecting end-to-end ML solutions, from model training to production-grade deployment. 
            Bridging the gap between raw data and scalable AI products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects">
              <Button className="px-8 py-4" icon={<ArrowRight className="w-5 h-5" />}>
                View Work
              </Button>
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/RENUGASREE" target="_blank" rel="noopener noreferrer">
                <Button variant="icon">
                  <GithubIcon className="w-6 h-6" />
                </Button>
              </a>
              <a href="./resume.pdf" target="_blank">
                <Button variant="secondary" className="px-6 py-4" icon={<FileText className="w-5 h-5" />}>
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Floating Pills */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="flex items-center gap-2"><Cpu className="w-5 h-5" /> <span>PyTorch</span></div>
          <div className="flex items-center gap-2"><Database className="w-5 h-5" /> <span>PostgreSQL</span></div>
          <div className="flex items-center gap-2"><LayoutDashboard className="w-5 h-5" /> <span>Django</span></div>
          <div className="flex items-center gap-2"><GithubIcon className="w-5 h-5" /> <span>CI/CD</span></div>
        </motion.div>
      </div>
    </section>
  );
}
