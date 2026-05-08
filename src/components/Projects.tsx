'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Paintbrush, Database, Code, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

const projects = [
  {
    id: "01",
    title: "Reyan Luxe Platform",
    description: "Architected a premium high-performance e-commerce engine for luxury product discovery, focusing on signature UI micro-interactions and seamless conversion funnels.",
    tech: ["Next.js 14", "Tailwind", "Framer Motion"],
    problem: "Generic storefront templates dilute brand exclusivity and reduce conversion rates for luxury goods.",
    solution: "Developed a custom design system with signature fluid physics and optimized state management.",
    outcome: "Achieved 99 Lighthouse performance metrics and significantly enhanced brand alignment.",
    github: "https://github.com/RENUGASREE",
    icon: <Paintbrush className="w-6 h-6 text-pink-400" />
  },
  {
    id: "02",
    title: "SASC Intelligence Engine",
    description: "A comprehensive student curriculum analysis ecosystem that leverages real-time data tracking to provide high-fidelity analytical insights to educational administrators.",
    tech: ["Django", "React", "PostgreSQL", "Docker"],
    problem: "Legacy educational tracking is fragmented, making performance bottlenecks difficult to identify and fix.",
    solution: "Automated ETL pipelines and interactive telemetry visualization for holistic student tracking.",
    outcome: "Reduced administrative reporting overhead by 40% and improved intervention accuracy.",
    github: "https://github.com/RENUGASREE",
    icon: <Database className="w-6 h-6 text-green-400" />
  },
  {
    id: "03",
    title: "Legacy Project Vault",
    description: "A curated record of technical evolution, showcasing the transition from fundamental web development to complex production-grade AI systems.",
    tech: ["JS", "CSS", "Python"],
    problem: "Documenting long-term engineering growth and foundational skill mastery.",
    solution: "Maintained a versioned record of core product engineering and early-stage ML experiments.",
    outcome: "Serves as definitive proof-of-work for continuous technical learning over a 3-year timeline.",
    github: "https://github.com/RENUGASREE",
    icon: <Code className="w-6 h-6 text-orange-400" />
  }
];

export default function Projects() {
  return (
    <section id="projects-grid" className="py-40 bg-[#080808] relative overflow-hidden">
      {/* Background Grid Aesthetic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-pattern" />

      <div className="section-container relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Engineering <br /><span className="text-blue-500">Showcase</span></h2>
            <p className="text-white/50 text-xl leading-relaxed">Practical applications of AI, data systems, and product engineering. Each project is a deep dive into problem-solving.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md flex items-center gap-4 group"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Production Grade Portfolio</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] flex flex-col h-full border-white/5 hover:border-blue-500/20 transition-all duration-500 group relative bg-white/[0.01]"
            >
              {/* Project Number */}
              <div className="absolute top-10 right-10 text-4xl font-black text-white/[0.03] group-hover:text-blue-500/10 transition-colors">
                {project.id}
              </div>

              <div className="mb-10 p-5 bg-white/5 rounded-[1.5rem] inline-block w-fit group-hover:bg-blue-500/10 transition-all duration-500 group-hover:scale-110">
                {project.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors duration-300 tracking-tight leading-tight">{project.title}</h3>
              <p className="text-white/40 text-base mb-10 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="space-y-8 mb-12 flex-grow">
                <div className="relative pl-5 border-l-[1.5px] border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold block mb-2">Problem</span>
                  <p className="text-sm text-white/70 font-medium leading-relaxed">{project.problem}</p>
                </div>
                <div className="relative pl-5 border-l-[1.5px] border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold block mb-2 group-hover:text-blue-400/70">Solution</span>
                  <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">{project.solution}</p>
                </div>
                <div className="relative pl-5 border-l-[1.5px] border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold block mb-2 group-hover:text-blue-400/70">Outcome</span>
                  <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-12">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="secondary" className="w-full py-4 text-xs tracking-widest uppercase h-12" icon={<GithubIcon className="w-4 h-4" />}>
                    Source
                  </Button>
                </a>
                <a href="#" className="flex-1">
                  <Button variant="secondary" className="w-full py-4 text-xs tracking-widest uppercase h-12" icon={<ArrowUpRight className="w-4 h-4" />}>
                    Demo
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
