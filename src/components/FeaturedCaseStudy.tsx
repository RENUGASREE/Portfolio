'use client';

import { motion } from 'framer-motion';
import { Layers, Server, Shield, Activity, Code2, Globe, ExternalLink, Cpu, CheckCircle2, FileDown } from 'lucide-react';
import Button from './Button';

export default function FeaturedCaseStudy() {
  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-6"
          >
            <span className="w-12 h-[1.5px] bg-blue-600" /> Featured Project
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]"
          >
            Adaptive AI <br />
            <span className="gradient-text">Learning Assistant</span>
          </motion.h3>
          <p className="text-xl md:text-2xl text-white/50 max-w-4xl leading-relaxed font-medium">
            A personalized education platform that provides an adaptive learning experience. <span className="text-white">Built with a modern full-stack architecture and deployed using Docker.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Product Thinking & Systems (7 cols) */}
          <div className="lg:col-span-7 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                    <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">The Goal</h4>
                <p className="text-white/60 leading-relaxed">
                  To create a learning platform that goes beyond static progression, allowing users to experience a more personalized journey while tracking their progress effectively.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">The Approach</h4>
                <p className="text-white/60 leading-relaxed">
                  Developed an adaptive learning system using <span className="text-blue-400 font-mono italic text-sm">React and Django REST API</span>. The platform tracks user interaction and updates their learning path dynamically.
                </p>
              </div>
            </div>

            <div className="p-10 glass rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-2xl relative group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
              
              <h4 className="text-xl font-bold mb-10 flex items-center gap-3">
                <Layers className="w-5 h-5 text-blue-400" /> Technical Architecture
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">Frontend</span>
                  <p className="text-sm font-bold text-white/90">React + TypeScript</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">Backend API</span>
                  <p className="text-sm font-bold text-white/90">Django REST</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">Database</span>
                  <p className="text-sm font-bold text-white/90">PostgreSQL</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">Containerization</span>
                  <p className="text-sm font-bold text-white/90">Docker</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">Logic</span>
                  <p className="text-sm font-bold text-white/90">Python / Adaptive Flow</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">Styling</span>
                  <p className="text-sm font-bold text-white/90">Tailwind CSS</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a href="https://github.com/RENUGASREE" target="_blank" rel="noopener noreferrer">
                <Button className="px-10 py-5" icon={<ExternalLink className="w-5 h-5" />}>
                  View Repository
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Project Details */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] border-white/10 bg-blue-500/[0.03] shadow-xl"
            >
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">System Components</span>
                    </div>
                    <Server className="w-4 h-4 text-blue-400" />
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h5 className="text-sm font-bold text-white">Full-Stack Integration</h5>
                        <p className="text-xs text-white/60 leading-relaxed">Connected a responsive React frontend with a robust Django REST API backend to manage user states.</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-sm font-bold text-white">Data Persistence</h5>
                        <p className="text-xs text-white/60 leading-relaxed">Utilized PostgreSQL for reliable storage of user profiles, progress, and adaptive learning paths.</p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="text-sm font-bold text-white">Deployment Ready</h5>
                        <p className="text-xs text-white/60 leading-relaxed">Packaged the application using Docker to ensure consistent environments across development and testing.</p>
                    </div>
                </div>
            </motion.div>

            {/* Code Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#0c0c0c] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative"
            >
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest italic">learning_flow.py</span>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-[#080808]">
                <pre className="text-blue-200/80">
{`def get_next_lesson(student_id):
    # Fetch current progress
    progress = db.get_user_progress(student_id)
    
    # Determine next module based on performance
    if progress.score > 80:
        return load_module(level='advanced')
    elif progress.score < 50:
        return load_module(level='review')
    else:
        return load_module(level='standard')`}
                </pre>
              </div>
              <div className="absolute bottom-4 right-6 opacity-20 pointer-events-none">
                 <Code2 className="w-20 h-20 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
