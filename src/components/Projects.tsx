'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Paintbrush, Globe, LayoutDashboard, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

const projects = [
  {
    id: "01",
    title: "Reyan Luxe – Customizable Jewelry E-Commerce",
    description: "A full-stack jewelry e-commerce platform featuring advanced product customization, secure payments, inventory management, customer reviews, and a complete admin dashboard.",
    features: ["Product Personalization", "Razorpay Integration", "Order & Inventory Management", "Admin Dashboard"],
    tech: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "REST APIs", "JWT", "Render"],
    github: "https://github.com/RENUGASREE/Reyan_Luxe",
    demo: "https://renugasree.github.io/Reyan_Luxe/",
    icon: <ShoppingBag className="w-6 h-6 text-pink-400" />
  },
  {
    id: "02",
    title: "Personal Portfolio Website",
    description: "A modern portfolio website built to showcase projects, technical skills, experience, and achievements through a recruiter-focused design system.",
    features: ["Responsive Design", "Dark Mode", "Smooth Animations", "SEO Optimization", "Project Showcase"],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/RENUGASREE/Portfolio",
    demo: "https://renugasree.github.io/Portfolio/",
    icon: <Code className="w-6 h-6 text-blue-400" />
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">More <br /><span className="text-blue-500">Projects</span></h2>
            <p className="text-white/50 text-xl leading-relaxed">Additional full-stack applications showcasing my ability to build complete products and design systems.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col h-full border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative bg-white/[0.01]"
            >
              {/* Project Number */}
              <div className="absolute top-10 right-10 text-4xl font-black text-white/[0.03] group-hover:text-blue-500/10 transition-colors">
                {project.id}
              </div>

              <div className="mb-10 p-5 bg-white/5 rounded-[1.5rem] inline-block w-fit group-hover:bg-blue-500/10 transition-all duration-500 group-hover:scale-110 shadow-lg">
                {project.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors duration-300 tracking-tight leading-tight">{project.title}</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="mb-10">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">Key Features</h4>
                <ul className="text-sm text-white/70 space-y-2 list-inside list-disc">
                  {project.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-12 flex-grow">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/40 group-hover:text-white/80 group-hover:border-blue-500/30 transition-colors uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-8 border-t border-white/5">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                  <Button className="w-full py-4 text-xs tracking-widest uppercase h-12" icon={<ExternalLink className="w-4 h-4" />}>
                    Live Demo
                  </Button>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                  <Button variant="secondary" className="w-full py-4 text-xs tracking-widest uppercase h-12" icon={<GithubIcon className="w-4 h-4" />}>
                    GitHub
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
