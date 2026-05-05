'use client';

import { motion } from 'framer-motion';
import { Layers, Server, Shield, Activity, Code2, Globe, ExternalLink } from 'lucide-react';
import Button from './Button';

export default function FeaturedCaseStudy() {
  return (
    <section id="featured" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="section-container">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4"
          >
            Featured Case Study
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Adaptive AI Learning Assistant
          </motion.h3>
          <p className="text-xl text-muted-foreground max-w-3xl">
            An elite personalized education engine that dynamically adjusts curriculum difficulty 
            based on real-time user performance metrics and mastery mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Context & Architecture */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" /> The Problem
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Traditional e-learning platforms use a static, linear progression. This creates a "personalized learning gap" where fast learners get bored and struggling learners get left behind. We needed a system that "thinks" alongside the student.
              </p>
            </div>

            <div className="p-8 glass rounded-2xl border-l-4 border-l-blue-500">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" /> System Architecture
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-sm font-medium">Frontend</span>
                  <span className="text-sm text-blue-300">React (Vite) + Tailwind</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-sm font-medium">Backend</span>
                  <span className="text-sm text-blue-300">Django REST Framework</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-sm font-medium">Intelligence</span>
                  <span className="text-sm text-blue-300">Custom Mastery Vector Logic</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-sm font-medium">Database</span>
                  <span className="text-sm text-blue-300">PostgreSQL</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-sm font-medium">Infrastructure</span>
                  <span className="text-sm text-blue-300">Docker + AWS</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" /> Engineering Highlights
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Implemented a custom <strong>Mastery Vector</strong> algorithm to track student proficiency across 10+ sub-domains.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Engineered an <strong>Adaptive API</strong> that serves content variants based on real-time difficulty scoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>Optimized database queries for millisecond-latency performance tracking.</span>
                </li>
              </ul>
              <div className="pt-6">
                <Button className="px-8 py-4" icon={<ExternalLink className="w-5 h-5" />}>
                  Exploration Live System
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Visualizer / Code Style */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">mastery_engine.py</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-blue-300">
{`class AdaptiveLearningEngine:
    def __init__(self, user_id):
        self.vector = self.load_mastery(user_id)
        
    def get_next_lesson(self, current_module):
        # Calculate proficiency gap
        gap = self.calculate_gap(current_module)
        
        if gap > PROFICIENCY_THRESHOLD:
            return self.serve_advanced_track()
        return self.serve_reinforcement()`}
                </pre>
              </div>
              <div className="p-6 pt-0">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                        <div className="text-2xl font-bold text-blue-400">98%</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Prediction Accuracy</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                        <div className="text-2xl font-bold text-blue-400">0.4s</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Avg Latency</div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
