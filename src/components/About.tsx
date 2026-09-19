'use client';

import { motion } from 'framer-motion';
import { User, Cpu, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-[#800000]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Header/Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-[#C19A6B] uppercase mb-6"
            >
              <span className="w-12 h-[1.5px] bg-[#800000]" /> Professional Summary
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              Driven by <br />
              <span className="text-[#C19A6B] italic">Data & AI</span>
            </motion.h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-8 md:p-10 rounded-[2rem] border-[#C19A6B]/10 shadow-xl bg-white/[0.02]"
            >
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Artificial Intelligence and Data Science graduate with six months of Data Science training and hands-on experience in Python, SQL, Power BI, Machine Learning, Artificial Intelligence, Deep Learning, and web development.
                </p>
                <p>
                  Experienced in developing data-driven, AI-based, and full-stack applications, including adaptive learning platforms, student curriculum analytics, and customizable e-commerce systems.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#800000]/20 flex items-center justify-center border border-[#800000]/40">
                    <User className="w-5 h-5 text-[#C19A6B]" />
                  </div>
                  <h4 className="text-white font-bold text-sm">Full-Stack Dev</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#800000]/20 flex items-center justify-center border border-[#800000]/40">
                    <Cpu className="w-5 h-5 text-[#C19A6B]" />
                  </div>
                  <h4 className="text-white font-bold text-sm">AI Integration</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#800000]/20 flex items-center justify-center border border-[#800000]/40">
                    <Code2 className="w-5 h-5 text-[#C19A6B]" />
                  </div>
                  <h4 className="text-white font-bold text-sm">Data Science</h4>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
