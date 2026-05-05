'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    category: "ML/AI",
    skills: ["Scikit-learn", "PyTorch", "NLP", "Computer Vision", "Deep Learning"]
  },
  {
    category: "Data",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "ETL Pipelines"]
  },
  {
    category: "Backend",
    skills: ["Django", "Flask", "REST APIs", "FastAPI"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "DevOps",
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
      "Developed an adaptive curriculum engine using mastery vector logic to personalize learning paths.",
      "Optimized ML model deployment pipelines using Docker, ensuring consistent environments across dev and prod."
    ]
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Project Reyan",
    period: "2022 - 2023",
    points: [
      "Engineered high-performance e-commerce interfaces for premium luxury brands.",
      "Integrated secure payment gateways and optimized state management for complex product catalogs.",
      "Achieved 95+ Lighthouse performance scores through aggressive lazy loading and image optimization."
    ]
  }
];

export default function SkillsExperience() {
  return (
    <section id="skills" className="py-32 bg-[#050505]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Skills Section */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold mb-12">Technical <span className="text-blue-500">Toolkit</span></h2>
            <div className="grid grid-cols-1 gap-8">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 glass rounded-full text-sm border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="lg:col-span-7" id="experience">
            <h2 className="text-3xl font-bold mb-12">Engineering <span className="text-blue-500">Journey</span></h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  
                  <div className="mb-4">
                    <span className="text-blue-400 text-sm font-mono mb-1 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                  </div>

                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
