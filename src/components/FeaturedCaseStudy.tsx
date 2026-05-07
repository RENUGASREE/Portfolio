'use client';

import { motion } from 'framer-motion';
import { Layers, Server, Shield, Activity, Code2, Globe, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function FeaturedCaseStudy() {
  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="section-container">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm font-bold tracking-widest text-blue-500 uppercase mb-4"
          >
            <span className="w-8 h-[1px] bg-blue-500" /> Featured Case Study
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Adaptive AI Learning Assistant
          </motion.h3>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            An elite personalized education engine that dynamically adjusts curriculum difficulty 
            based on real-time user performance metrics and mastery mapping. 
            <span className="text-white"> Bridging the gap between raw student data and personalized growth.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Problem & Architecture (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                  <Shield className="w-5 h-5 text-blue-400" /> The Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Traditional e-learning platforms use a static, linear progression. This creates a "personalized learning gap" where fast learners get bored and struggling learners get left behind. We needed a system that "thinks" alongside the student.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /> The Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Developed an AI-driven adaptive learning engine using mastery vector logic. The system analyzes every interaction to adjust the next lesson's difficulty in real-time, ensuring optimal cognitive load.
                </p>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
              <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" /> Full-Stack System Architecture
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Frontend</span>
                  <p className="text-sm font-medium">React + Tailwind</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Backend</span>
                  <p className="text-sm font-medium">Django REST</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Intelligence</span>
                  <p className="text-sm font-medium">Mastery Logic</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Database</span>
                  <p className="text-sm font-medium">PostgreSQL</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Infrastructure</span>
                  <p className="text-sm font-medium">Docker + AWS</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">CI/CD</span>
                  <p className="text-sm font-medium">GitHub Actions</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a href="/Portfolio/resume.pdf" target="_blank">
                <Button className="px-10 py-5 text-lg" icon={<ExternalLink className="w-5 h-5" />}>
                  Deep Dive Documentation
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Visualizer / Live Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Live Status Mock */}
            <div className="glass p-6 rounded-3xl border-white/5 bg-blue-500/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-tighter">Production System Live</span>
                    </div>
                    <Cpu className="w-4 h-4 text-blue-400" />
                </div>
                <div className="space-y-4">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                        />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase">
                        <span>Model Confidence</span>
                        <span>85%</span>
                    </div>
                </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-blue-400 transition-colors">mastery_engine.py</span>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0a0a0a]">
                <pre className="text-blue-300">
{`class AdaptiveLearningEngine:
    def __init__(self, user_id):
        self.vector = self.load_mastery(user_id)
        
    def get_next_lesson(self, module):
        # Calculate proficiency gap
        gap = self.calculate_gap(module)
        
        if gap > THRESHOLD:
            return self.serve_advanced()
            
        return self.serve_remedial()`}
                </pre>
              </div>
              <div className="p-8 pt-0 border-t border-white/5 bg-[#0a0a0a]">
                 <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                        <div className="text-2xl font-bold text-blue-400 tracking-tighter">98%</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Accuracy</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                        <div className="text-2xl font-bold text-blue-400 tracking-tighter">0.4s</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Latency</div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
