'use client';

import { motion } from 'framer-motion';
import { User, Cpu, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Header/Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-6"
            >
              <span className="w-12 h-[1.5px] bg-blue-600" /> About Me
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              Building <br />
              <span className="gradient-text italic">Intelligent Software</span>
            </motion.h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 md:p-10 rounded-[2rem] border-white/10 shadow-xl bg-white/[0.02]"
            >
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  I am an aspiring <strong className="text-white">AI/ML Engineer and Full-Stack Developer</strong> currently pursuing a B.Tech in Artificial Intelligence & Data Science.
                </p>
                <p>
                  My interests lie in building intelligent software systems that combine machine learning, adaptive learning methodologies, and modern web technologies to solve real-world problems.
                </p>
                <p>
                  I enjoy working across the entire development lifecycle—from designing user experiences and backend architectures to integrating AI models and deploying scalable applications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold text-sm">Full-Stack Dev</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-white font-bold text-sm">AI Integration</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <Code2 className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-white font-bold text-sm">System Design</h4>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
