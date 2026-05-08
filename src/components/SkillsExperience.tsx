'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Database, BrainCircuit, Terminal, Globe, ArrowRight } from 'lucide-react';

const skillGroups = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5 text-blue-500" />,
    skills: ["Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    category: "Intelligence & AI",
    icon: <BrainCircuit className="w-5 h-5 text-blue-500" />,
    skills: ["Scikit-learn", "PyTorch", "NLP", "CV", "Deep Learning"]
  },
  {
    category: "Data Systems",
    icon: <Database className="w-5 h-5 text-blue-500" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"]
  },
  {
    category: "Core Backend",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    skills: ["Django", "Flask", "REST APIs", "FastAPI"]
  },
  {
    category: "Core Frontend",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Engineering Ops",
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    skills: ["Docker", "Git", "GitHub Actions", "AWS Architecture"]
  }
];

const experiences = [
  {
    role: "AI/ML Engineering Lead",
    company: "SASC Production Platform",
    period: "2023 - PRESENT",
    points: [
      "Engineered high-performance ML inference pipelines, reducing prediction latency by 45% using optimized mastery vector logic.",
      "Architected real-time visualization dashboards to derive actionable business insights from student performance datasets.",
      "Spearheaded the migration to a containerized Docker environment, ensuring 99.9% deployment consistency across stages."
    ]
  },
  {
    role: "Full Stack AI Developer (Freelance)",
    company: "Reyan Product Suite",
    period: "2022 - 2023",
    points: [
      "Built premium full-stack interfaces for luxury AI-integrated brands, focusing on high-performance product discovery engines.",
      "Integrated secure authentication systems and optimized database queries for complex 100+ SKU product catalogs.",
      "Achieved industry-leading Lighthouse performance scores (98+) through advanced state management and lazy loading."
    ]
  }
];

export default function SkillsExperience() {
  return (
    <section id="skills" className="py-40 bg-[#050505] relative">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          
          {/* Left: Skills Grid (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical <br /><span className="text-blue-500">Infrastructure</span></h2>
              <p className="text-white/50 text-lg leading-relaxed">
                A robust stack designed for building, scaling, and deploying intelligent products.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
              {skillGroups.map((group, i) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-3">
                    {group.icon} {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-5 py-2.5 bg-white/[0.03] rounded-xl text-sm font-bold border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all cursor-default text-white/70 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Engineering Journey (7 cols) */}
          <div className="lg:col-span-7" id="experience">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Engineering <br /><span className="text-blue-500">Journey</span></h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Transforming complex data challenges into production-ready software solutions.
              </p>
            </motion.div>

            <div className="space-y-20 relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-blue-500/50 via-white/5 to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#050505] border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300 z-10" />
                  
                  <div className="mb-10">
                    <span className="text-blue-500 text-xs font-bold mb-3 block tracking-[0.2em]">{exp.period}</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">{exp.role}</h3>
                    <p className="text-xl text-white/40 font-bold tracking-tight">{exp.company}</p>
                  </div>

                  <ul className="space-y-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-white/60 leading-relaxed flex items-start gap-5 group/item">
                        <ArrowRight className="w-4 h-4 text-blue-500/30 group-hover/item:text-blue-500 transition-colors mt-1.5 shrink-0" />
                        <span className="text-base font-medium group-hover/item:text-white/90 transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Academic Milestone */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 pt-16 border-t border-white/5"
            >
                <div className="flex items-center gap-4 mb-8">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Academic Foundation</h4>
                </div>
                <div className="relative pl-12">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white/10 bg-[#050505]" />
                    <span className="text-white/30 text-xs font-bold mb-3 block tracking-widest">2022 - 2026</span>
                    <h3 className="text-2xl font-bold text-white/90">B.Tech, Artificial Intelligence & Data Science</h3>
                    <p className="text-white/40 font-medium">Grace College of Engineering</p>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
