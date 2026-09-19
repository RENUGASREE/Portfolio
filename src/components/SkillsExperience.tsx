'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Database, BrainCircuit, Terminal, Globe, ArrowRight, Award } from 'lucide-react';

const skillGroups = [
  {
    category: "Programming & Databases",
    icon: <Terminal className="w-5 h-5 text-[#C19A6B]" />,
    skills: ["Python", "SQL", "Java", "MongoDB", "SQLite"]
  },
  {
    category: "Data Analytics & Visualization",
    icon: <Database className="w-5 h-5 text-[#C19A6B]" />,
    skills: ["Power BI", "Microsoft Excel", "Data Analysis", "Data Visualization"]
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="w-5 h-5 text-[#C19A6B]" />,
    skills: ["Machine Learning", "Artificial Intelligence", "Deep Learning", "Generative AI"]
  },
  {
    category: "Web Development",
    icon: <Globe className="w-5 h-5 text-[#C19A6B]" />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "Tools & Platforms",
    icon: <Code2 className="w-5 h-5 text-[#C19A6B]" />,
    skills: ["Git", "GitHub", "VS Code"]
  }
];

const experiences = [
  {
    role: "Data Science Trainee",
    company: "Besant Technologies",
    period: "Jan 2026 – Jul 2026",
    location: "Chennai, Tamil Nadu",
    points: [
      "Completed six months of Data Science training with practical exposure to Python, SQL, Microsoft Excel, Power BI, Machine Learning, Artificial Intelligence, and Deep Learning.",
      "Worked with data preparation, analysis, visualization, database querying, and analytical problem solving using Python and SQL.",
      "Used Power BI and Microsoft Excel to analyze structured data and present findings through reports and visualizations."
    ]
  },
  {
    role: "Software Development Intern",
    company: "VaultofCodes",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    points: [
      "Completed a two-month internship program covering AI & Prompt Engineering, Java Programming, Python Programming, and Web Development.",
      "Applied Python and Java programming fundamentals, web development concepts, and Artificial Intelligence techniques through practical tasks and project-based learning."
    ]
  }
];

const certifications = [
  { title: "Data Fundamentals", issuer: "IBM SkillsBuild", date: "Aug 2026" },
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", date: "Jan 2026" },
  { title: "Explore Emerging Tech", issuer: "IBM SkillsBuild", date: "Jul 2025" },
  { title: "AWS Educate Machine Learning Foundations", issuer: "Amazon Web Services", date: "Jul 2025" },
  { title: "MongoDB Basics for Students", issuer: "MongoDB", date: "Aug 2025" }
];

export default function SkillsExperience() {
  return (
    <section id="skills" className="py-40 bg-[#050505] relative">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#800000]/10 blur-[150px] rounded-full pointer-events-none" />

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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Technical <br /><span className="text-[#C19A6B]">Skills</span></h2>
              <p className="text-white/50 text-lg leading-relaxed">
                A solid foundation in data science, artificial intelligence, and full-stack development technologies.
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
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C19A6B]/80 mb-6 flex items-center gap-3">
                    {group.icon} {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-5 py-2.5 bg-white/[0.03] rounded-xl text-sm font-bold border border-white/5 hover:border-[#800000]/30 hover:bg-[#800000]/10 transition-all cursor-default text-white/70 hover:text-white"
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Professional <br /><span className="text-[#C19A6B]">Experience</span></h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Practical training and internships focused on AI, data science, and software development.
              </p>
            </motion.div>

            <div className="space-y-20 relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#800000]/50 via-white/5 to-transparent" />

              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#050505] border-2 border-[#C19A6B] shadow-[0_0_10px_rgba(193,154,107,0.6)] group-hover:scale-125 transition-transform duration-300 z-10" />
                  
                  <div className="mb-10">
                    <span className="text-[#C19A6B] text-xs font-bold mb-3 block tracking-[0.2em]">{exp.period}</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-[#800000] transition-colors duration-300 tracking-tight">{exp.role}</h3>
                    <p className="text-xl text-white/60 font-bold tracking-tight">{exp.company} <span className="text-white/30 text-sm font-normal ml-2">— {exp.location}</span></p>
                  </div>

                  <ul className="space-y-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-white/60 leading-relaxed flex items-start gap-5 group/item">
                        <ArrowRight className="w-4 h-4 text-[#800000]/40 group-hover/item:text-[#C19A6B] transition-colors mt-1.5 shrink-0" />
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
                    <GraduationCap className="w-6 h-6 text-[#C19A6B]" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C19A6B]/70">Academic Foundation</h4>
                </div>
                <div className="relative pl-12 mb-16">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white/10 bg-[#050505]" />
                    <span className="text-white/40 text-xs font-bold mb-3 block tracking-widest">2022 - 2026</span>
                    <h3 className="text-2xl font-bold text-white/90 mb-1">B.Tech, Artificial Intelligence & Data Science</h3>
                    <p className="text-white/40 font-medium">Grace College of Engineering, Anna University</p>
                </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-white/5"
            >
                <div className="flex items-center gap-4 mb-8">
                    <Award className="w-6 h-6 text-[#C19A6B]" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C19A6B]/70">Certifications</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#800000]/30 transition-colors">
                      <h5 className="text-sm font-bold text-white/90 mb-2">{cert.title}</h5>
                      <div className="flex justify-between items-center text-xs text-white/40">
                        <span>{cert.issuer}</span>
                        <span className="text-[#C19A6B]/80">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
