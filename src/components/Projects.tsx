'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Paintbrush, Globe, LayoutDashboard, ArrowUpRight, ShoppingBag, BrainCircuit } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

const projects = [
  {
    id: "01",
    title: "Renu's Collection — Full-Stack Fashion & Jewelry",
    description: "A responsive full-stack e-commerce platform featuring customer-facing and administrative functionality, demonstrating end-to-end product development.",
    features: ["Product & Category Management", "Wishlist & Cart", "Razorpay & COD", "Order & Inventory Management", "JWT Auth & Admin Dashboard"],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Vite", "Render"],
    github: "https://github.com/RENUGASREE",
    demo: "https://renu-s-collection-6lui.onrender.com/",
    icon: <ShoppingBag className="w-6 h-6 text-pink-400" />
  },
  {
    id: "02",
    title: "SASC — Smart Analysis of Students Curriculum",
    description: "A student curriculum analysis system for monitoring academic performance, featuring role-based access and data visualizations for identifying academic risk.",
    features: ["Role-Based Access Control", "Performance Trend Dashboards", "Academic Risk Indicators", "Interactive Analytics"],
    tech: ["FastAPI", "SQLite", "React", "JWT Authentication"],
    github: "https://github.com/RENUGASREE",
    demo: "#",
    icon: <Database className="w-6 h-6 text-blue-400" />
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">More <br /><span className="text-[#C19A6B]">Projects</span></h2>
            <p className="text-white/50 text-xl leading-relaxed">Additional full-stack and analytical applications showcasing my ability to build complete products and design systems.</p>
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
              className="glass p-10 rounded-[2.5rem] flex flex-col h-full border-white/5 hover:border-[#C19A6B]/30 transition-all duration-500 group relative bg-white/[0.01]"
            >
              {/* Project Number */}
              <div className="absolute top-10 right-10 text-4xl font-black text-white/[0.03] group-hover:text-[#C19A6B]/10 transition-colors">
                {project.id}
              </div>

              <div className="mb-10 p-5 bg-white/5 rounded-[1.5rem] inline-block w-fit group-hover:bg-[#800000]/20 transition-all duration-500 group-hover:scale-110 shadow-lg">
                {project.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-6 group-hover:text-[#C19A6B] transition-colors duration-300 tracking-tight leading-tight">{project.title}</h3>
              <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="mb-10">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#C19A6B]/70 font-bold mb-4">Key Features</h4>
                <ul className="text-sm text-white/70 space-y-2 list-inside list-disc">
                  {project.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-12 flex-grow">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/40 group-hover:text-white/80 group-hover:border-[#C19A6B]/30 transition-colors uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-8 border-t border-white/5">
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                    <Button className="w-full py-4 text-xs tracking-widest uppercase h-12 bg-white/10 hover:bg-[#800000] border-transparent" icon={<ExternalLink className="w-4 h-4" />}>
                      Live Demo
                    </Button>
                  </a>
                )}
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
