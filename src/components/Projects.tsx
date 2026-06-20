'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Paintbrush, Globe, LayoutDashboard, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

const projects = [
  {
    id: "01",
    title: "Reyan Luxe Platform",
    description: "Developing a modern full-stack jewelry platform using React, Django, and PostgreSQL with a strong focus on user experience and product presentation.",
    tech: ["React", "Django", "PostgreSQL", "Tailwind"],
    problem: "Providing an elegant and responsive online shopping experience for jewelry.",
    solution: "Building a full-stack application with a clean frontend and reliable backend API.",
    outcome: "A functional prototype demonstrating full-stack integration and responsive design.",
    github: "https://github.com/RENUGASREE",
    icon: <Paintbrush className="w-6 h-6 text-pink-400" />
  },
  {
    id: "02",
    title: "E-Learning Platform Prototype",
    description: "Built a responsive learning platform with interactive lessons and quizzes using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    problem: "Creating an accessible web interface for educational content delivery.",
    solution: "Developed a responsive, interactive UI for navigating lessons and taking quizzes.",
    outcome: "A lightweight, functional frontend application ready for backend integration.",
    github: "https://github.com/RENUGASREE",
    icon: <Globe className="w-6 h-6 text-green-400" />
  },
  {
    id: "03",
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive portfolio website to showcase projects, technical skills, and professional growth.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    problem: "Presenting projects and skills in a professional, structured digital format.",
    solution: "Created a modern portfolio using Next.js and Tailwind with responsive layouts.",
    outcome: "A complete, deployed personal brand website representing technical capabilities.",
    github: "https://github.com/RENUGASREE/Portfolio",
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Project <br /><span className="text-blue-500">Showcase</span></h2>
            <p className="text-white/50 text-xl leading-relaxed">A collection of web applications, AI integrations, and full-stack projects built to solve practical problems.</p>
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
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold block mb-2">Project Goal</span>
                  <p className="text-sm text-white/70 font-medium leading-relaxed">{project.problem}</p>
                </div>
                <div className="relative pl-5 border-l-[1.5px] border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold block mb-2 group-hover:text-blue-400/70">Approach</span>
                  <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">{project.solution}</p>
                </div>
                <div className="relative pl-5 border-l-[1.5px] border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold block mb-2 group-hover:text-blue-400/70">Result</span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
