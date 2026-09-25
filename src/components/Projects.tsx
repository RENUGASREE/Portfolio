'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Database, ShoppingBag, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

const projects = [
  {
    id: "01",
    title: "Renu's Collection — Full-Stack Fashion & Jewelry",
    type: "Full-Stack E-Commerce Platform",
    description: "Responsive full-stack e-commerce platform with customer and administrative functionality, delivering seamless shopping and inventory control.",
    features: [
      "Product & category/subcategory catalog management",
      "Wishlist, shopping cart & product customization",
      "Integrated Razorpay gateway & Cash on Delivery (COD)",
      "Secure order processing & live inventory tracking",
      "Role-based administrative dashboard with JWT authentication"
    ],
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Razorpay", "Render"],
    github: "https://github.com/RENUGASREE",
    demo: "https://renu-s-collection-6lui.onrender.com/",
    icon: <ShoppingBag className="w-5 h-5 text-[#D2A66D]" />
  },
  {
    id: "02",
    title: "SASC — Smart Analysis of Students Curriculum",
    type: "Academic Analytics Platform",
    description: "Student curriculum analysis system for monitoring academic performance, visualizing trends, and identifying students requiring attention.",
    features: [
      "Academic analytics & student performance trend dashboards",
      "Proactive academic risk indicators for early intervention",
      "Hierarchical role-based access control (RBAC)",
      "Dedicated views for Chairman, Principal, HOD & Teachers",
      "Interactive data charts and grade metric visualizations"
    ],
    tech: ["React", "FastAPI", "SQLite", "JWT", "Tailwind CSS"],
    github: "https://github.com/RENUGASREE",
    demo: null,
    icon: <Database className="w-5 h-5 text-[#D2A66D]" />
  }
];

export default function Projects() {
  return (
    <section className="py-28 md:py-32 bg-[#080808] relative overflow-hidden border-t border-[rgba(210,166,109,0.12)]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#5A1720]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-4 text-xs font-semibold tracking-[0.2em] text-[#D2A66D] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2A66D]" />
            Full-Stack &amp; Application Development
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F3EF] mb-4">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-[#A8A29B] max-w-2xl leading-relaxed">
            Full-stack applications and administrative systems engineered for production stability, role-based workflows, and seamless user experiences.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-7 sm:p-9 rounded-3xl flex flex-col h-full bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)] hover:border-[#D2A66D]/40 transition-colors duration-300 relative group"
            >
              {/* Card Number */}
              <div className="absolute top-8 right-8 text-3xl font-mono font-bold text-[rgba(210,166,109,0.15)] group-hover:text-[rgba(210,166,109,0.3)] transition-colors">
                {project.id}
              </div>

              {/* Icon & Type */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[rgba(90,23,32,0.2)] flex items-center justify-center border border-[rgba(210,166,109,0.3)]">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#D2A66D]">
                  {project.type}
                </span>
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#F5F3EF] tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A8A29B] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features List */}
              <div className="mb-6 flex-grow">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#D2A66D] mb-3">
                  Key Capabilities
                </h4>
                <ul className="text-xs sm:text-sm text-[#A8A29B] space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D2A66D] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-[rgba(210,166,109,0.12)]">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-md bg-[rgba(210,166,109,0.06)] border border-[rgba(210,166,109,0.18)] text-[#F5F3EF]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[130px]">
                    <Button variant="primary" className="w-full py-3 text-xs sm:text-sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                      Live Demo
                    </Button>
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={project.demo ? "flex-1 min-w-[130px]" : "w-full"}>
                  <Button variant="secondary" className="w-full py-3 text-xs sm:text-sm" icon={<GithubIcon className="w-3.5 h-3.5 text-[#D2A66D]" />}>
                    GitHub Repository
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
