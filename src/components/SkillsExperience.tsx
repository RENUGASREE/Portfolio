'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Database, BrainCircuit, Terminal, Globe } from 'lucide-react';

const skillGroups = [
  {
    category: "Languages",
    icon: <Terminal className="w-4 h-4" />,
    skills: ["Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    category: "ML / AI",
    icon: <BrainCircuit className="w-4 h-4" />,
    skills: ["Scikit-learn", "PyTorch", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    category: "Data",
    icon: <Database className="w-4 h-4" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"]
  },
  {
    category: "Backend",
    icon: <Code2 className="w-4 h-4" />,
    skills: ["Django", "Flask", "REST APIs", "FastAPI"]
  },
  {
    category: "Frontend",
    icon: <Globe className="w-4 h-4" />,
    skills: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "DevOps",
    icon: <Briefcase className="w-4 h-4" />,
    skills: ["Docker", "Git", "GitHub Actions", "AWS (Basic)"]
  }
];

const experiences = [
  {
    role: "AI/ML Engineer Intern",
    company: "SASC Platform",
    period: "2023 - Present",
    points: [
      "Built interactive dashboards to derive actionable business insights from datasets, reducing reporting time by 40%.",
      "Developed an adaptive curriculum engine using mastery vector logic to personalize learning paths for 500+ student profiles.",
      "Optimized ML model deployment pipelines using Docker, ensuring consistent environments across development and production stages."
    ]
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Project Reyan",
    period: "2022 - 2023",
    points: [
      "Engineered high-performance e-commerce interfaces for premium luxury brands using Next.js and Tailwind.",
      "Integrated secure payment gateways and optimized state management for complex product catalogs with 100+ SKUs.",
      "Achieved 95+ Lighthouse performance scores through aggressive lazy loading and image optimization strategies."
    ]
  }
];

export default function SkillsExperience() {
  return (
    <section id="skills" className="py-32 bg-[#050505]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Skills Section (5 cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
               Technical <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Toolkit</span>
            </h2>
            <div className="grid grid-cols-1 gap-10">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5 flex items-center gap-2">
                    {group.icon} {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-white/5 rounded-xl text-sm border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default text-white/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section (7 cols) */}
          <div className="lg:col-span-7" id="experience">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
               Engineering <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Journey</span>
            </h2>
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-10 border-l border-white/10"
                >
                  <div className="absolute -left-[6px] top-0 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                  
                  <div className="mb-8">
                    <span className="text-blue-400 text-xs font-mono mb-2 block tracking-widest uppercase">{exp.period}</span>
                    <h3 className="text-3xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-xl text-muted-foreground font-medium">{exp.company}</p>
                  </div>

                  <ul className="space-y-5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-4">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                        <span className="text-white/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education Placeholder */}
            <div className="mt-20 pt-16 border-t border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Education
                </h4>
                <div className="relative pl-10 border-l border-white/10">
                    <div className="absolute -left-[6px] top-0 w-3 h-3 rounded-full border-2 border-blue-500 bg-[#050505]" />
                    <span className="text-blue-400 text-xs font-mono mb-2 block tracking-widest uppercase">2022 - 2026</span>
                    <h3 className="text-xl font-bold">B.Tech, Artificial Intelligence & Data Science</h3>
                    <p className="text-muted-foreground">Grace College of Engineering</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
