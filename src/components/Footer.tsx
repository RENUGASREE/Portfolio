'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Button from './Button';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-40 pb-20 overflow-hidden bg-[#050505]">
      {/* Visual Depth Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Contact Section Integrated - Unified Card */}
      <div className="section-container relative z-10 mb-40">
        <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[3rem] border-white/5 text-center bg-white/[0.01] shadow-2xl overflow-hidden relative">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-pattern" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex p-5 bg-blue-500/10 rounded-2xl mb-10 border border-blue-500/20 shadow-blue-500/10 shadow-lg">
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1]">
              Ready to build <br />
              <span className="gradient-text italic">something intelligent?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/40 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
              I'm always open to discussing AI/ML projects, data engineering challenges, or full-stack opportunities. <span className="text-white/70 italic">Let's build the future together.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:renugasree@example.com" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-12 py-5 text-lg shadow-blue-600/20" icon={<Mail className="w-5 h-5" />}>
                  Send an Email
                </Button>
              </a>
              <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto px-12 py-5 text-lg h-16" icon={<FileDown className="w-5 h-5" />}>
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Traditional Footer Part */}
      <div className="section-container border-t border-white/5 pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <div className="space-y-6">
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold tracking-tighter text-white">RENUGA<span className="text-blue-500">SREE</span></h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/60">AI Engineer</span>
            </div>
            <p className="text-white/40 max-w-sm text-base font-medium leading-relaxed">
              Architecting end-to-end intelligent systems with a focus on production reliability and seamless UX.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="https://github.com/RENUGASREE" target="_blank" rel="noopener noreferrer">
              <Button variant="icon" className="w-14 h-14">
                <GithubIcon className="w-6 h-6" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/renugasree" target="_blank" rel="noopener noreferrer">
              <Button variant="icon" className="w-14 h-14">
                <LinkedinIcon className="w-6 h-6" />
              </Button>
            </a>
            <a href="mailto:renugasree@example.com">
              <Button variant="icon" className="w-14 h-14">
                <Mail className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
          <p>© 2024 RENUGA SREE. PRODUCT ENGINEERED IN INDIA.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-blue-500 transition-colors duration-300">Privacy Protocol</a>
            <a href="#" className="hover:text-blue-500 transition-colors duration-300">System Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
