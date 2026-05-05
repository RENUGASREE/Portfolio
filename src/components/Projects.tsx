'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Palette } from 'lucide-react';

const projects = [
  {
    title: "Reyan Luxe",
    description: "Premium e-commerce platform focusing on high-end user experience and seamless product discovery. Built with a focus on product thinking and conversion optimization.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    problem: "Generic e-commerce templates fail to convey brand luxury.",
    solution: "Developed a custom design system with micro-interactions.",
    github: "https://github.com/RENUGASREE",
    icon: <Palette className="w-6 h-6 text-pink-400" />
  },
  {
    title: "SASC E-Learning",
    description: "A comprehensive student curriculum analysis platform that tracks performance and provides analytical insights to educators.",
    tech: ["Django", "React", "PostgreSQL"],
    problem: "Manual tracking of student progress is error-prone.",
    solution: "Automated data pipelines for student performance metrics.",
    github: "https://github.com/RENUGASREE",
    icon: <Database className="w-6 h-6 text-green-400" />
  },
  {
    title: "Legacy Portfolio",
    description: "A record of my engineering evolution. This project showcases the journey from fundamental web development to complex AI systems.",
    tech: ["HTML", "CSS", "JS"],
    problem: "Documenting growth over time.",
    solution: "Maintained as a versioned proof of continuous learning.",
    github: "https://github.com/RENUGASREE",
    icon: <Code2 className="w-6 h-6 text-orange-400" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 grid-pattern border-y border-white/5">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering Showcase</h2>
          <p className="text-muted-foreground">Practical applications of AI, data science, and full-stack development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl flex flex-col h-full border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl inline-block w-fit group-hover:bg-blue-500/10 transition-colors">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">Problem</span>
                  <p className="text-xs text-white/80">{project.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">Solution</span>
                  <p className="text-xs text-white/80">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold hover:text-blue-400 transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="flex items-center gap-2 text-xs font-semibold hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
