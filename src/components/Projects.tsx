'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Paintbrush, Globe, LayoutDashboard } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

const projects = [
  {
    title: "Reyan Luxe",
    description: "Premium e-commerce platform focusing on high-end user experience and seamless product discovery. Built with a focus on product thinking and conversion optimization.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    problem: "Generic e-commerce templates fail to convey brand luxury and exclusivity.",
    solution: "Developed a custom design system with signature micro-interactions and smooth transitions.",
    outcome: "Achieved 95+ Lighthouse performance scores and premium brand alignment.",
    github: "https://github.com/RENUGASREE",
    icon: <Paintbrush className="w-6 h-6 text-pink-400" />
  },
  {
    title: "SASC E-Learning",
    description: "A comprehensive student curriculum analysis platform that tracks performance and provides analytical insights to educators.",
    tech: ["Django", "React", "PostgreSQL"],
    problem: "Manual tracking of student progress is fragmented and prone to error.",
    solution: "Automated data pipelines and real-time visualization of performance metrics.",
    outcome: "Reduced reporting overhead by 40% for educational administrators.",
    github: "https://github.com/RENUGASREE",
    icon: <Database className="w-6 h-6 text-green-400" />
  },
  {
    title: "Legacy Portfolio",
    description: "A record of my engineering evolution. This project showcases the journey from fundamental web development to complex AI systems.",
    tech: ["HTML", "CSS", "JS"],
    problem: "Documenting long-term technical growth and evolution.",
    solution: "Maintained a versioned record of core web development skills.",
    outcome: "Serves as a proof-of-work for continuous learning over a 3+ year span.",
    github: "https://github.com/RENUGASREE",
    icon: <Code className="w-6 h-6 text-orange-400" />
  }
];

export default function Projects() {
  return (
    <section id="projects-grid" className="py-32 grid-pattern border-y border-white/5 bg-[#0a0a0a]/50">
      <div className="section-container">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Engineering Showcase</h2>
            <p className="text-muted-foreground text-lg">Practical applications of AI, data science, and full-stack development.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Production Ready</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col h-full border-white/5 hover:border-blue-500/20 transition-all group relative"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block w-fit group-hover:bg-blue-500/10 transition-colors">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-6 mb-10 flex-grow">
                <div className="relative pl-4 border-l-2 border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold block mb-1">Problem</span>
                  <p className="text-xs text-white/80">{project.problem}</p>
                </div>
                <div className="relative pl-4 border-l-2 border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-green-500 font-bold block mb-1">Solution</span>
                  <p className="text-xs text-white/80">{project.solution}</p>
                </div>
                <div className="relative pl-4 border-l-2 border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-orange-500 font-bold block mb-1">Outcome</span>
                  <p className="text-xs text-white/80">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/10 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="secondary" className="w-full py-2.5 text-xs" icon={<GithubIcon className="w-4 h-4" />}>
                    Source
                  </Button>
                </a>
                <a href="#" className="flex-1">
                  <Button variant="secondary" className="w-full py-2.5 text-xs" icon={<ExternalLink className="w-4 h-4" />}>
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
