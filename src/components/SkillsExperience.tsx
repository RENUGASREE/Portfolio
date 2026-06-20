'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Database, BrainCircuit, Terminal, Globe, ArrowRight } from 'lucide-react';

const skillGroups = [
  {
    category: "Programming",
    icon: <Terminal className="w-5 h-5 text-blue-500" />,
    skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript"]
  },
  {
    category: "Data & AI",
    icon: <BrainCircuit className="w-5 h-5 text-blue-500" />,
    skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "NLP", "Computer Vision", "Machine Learning", "Deep Learning"]
  },
  {
    category: "Visualization",
    icon: <Database className="w-5 h-5 text-blue-500" />,
    skills: ["Power BI", "Matplotlib", "Seaborn", "Excel"]
  },
  {
    category: "Frontend",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    skills: ["React (Vite)", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    skills: ["Django", "Flask", "REST APIs"]
  },
  {
    category: "Tools & Other",
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    skills: ["GitHub", "Docker", "Kubernetes (Basics)", "Jupyter Notebook", "Prompt Engineering", "Agile Methodologies"]
  }
];

const experiences = [
  {
    role: "Data Science Trainee",
    company: "Besant Technologies",
    period: "Recent",
    points: [
      "Completed training in Python, SQL, Advanced Excel, and cloud computing fundamentals.",
      "Built interactive dashboards using Power BI to visualize insights.",
      "Worked on real-world case studies to apply data science concepts.",
      "Applied Agile methodologies during project workflows.",
      "Gained exposure to Docker and Kubernetes."
    ]
  },
  {
    role: "AI & Development Intern",
    company: "VaultofCodes",
    period: "Past",
    points: [
      "Worked on AI, Prompt Engineering, Python, Java, and REST APIs.",
      "Built frontend and backend applications to support project requirements.",
      "Used Docker for containerization and environment consistency.",
      "Participated in cloud deployment workflows.",
      "Collaborated effectively in Agile development teams."
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical <br /><span className="text-blue-500">Skills</span></h2>
              <p className="text-white/50 text-lg leading-relaxed">
                A solid foundation in programming, data science, and modern full-stack technologies.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Professional <br /><span className="text-blue-500">Experience</span></h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Practical training and internships focused on AI, data science, and software development.
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
