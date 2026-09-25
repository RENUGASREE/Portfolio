'use client';

import { GraduationCap, Code2, Database, BrainCircuit, Terminal, Globe, Award, CheckCircle2 } from 'lucide-react';

const skillGroups = [
  {
    category: "Programming & Databases",
    icon: <Terminal className="w-4 h-4 text-[#D2A66D]" />,
    skills: ["Python", "SQL", "Java", "MongoDB", "SQLite"]
  },
  {
    category: "Data Analytics & Visualization",
    icon: <Database className="w-4 h-4 text-[#D2A66D]" />,
    skills: ["Power BI", "Microsoft Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "Data Visualization"]
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="w-4 h-4 text-[#D2A66D]" />,
    skills: ["Machine Learning", "Artificial Intelligence", "Deep Learning", "Generative AI", "scikit-learn", "K-Means Clustering", "RFM Analysis"]
  },
  {
    category: "Web Development",
    icon: <Globe className="w-4 h-4 text-[#D2A66D]" />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "Tools & Platforms",
    icon: <Code2 className="w-4 h-4 text-[#D2A66D]" />,
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
  }
];

const experiences = [
  {
    role: "Data Science Trainee",
    company: "Besant Technologies",
    location: "Velachery, Chennai, Tamil Nadu",
    period: "Jan 2026 – Jul 2026",
    points: [
      "Completed six months of Data Science training with practical exposure to Python, SQL, Microsoft Excel, Power BI, Machine Learning, Artificial Intelligence, and Deep Learning.",
      "Worked with data preparation, analysis, visualization, database querying, and analytical problem solving using Python and SQL.",
      "Used Power BI and Microsoft Excel to analyze structured data and present findings through reports and visualizations."
    ]
  },
  {
    role: "Software Development Intern",
    company: "VaultofCodes",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Completed a two-month internship program covering AI & Prompt Engineering, Java Programming, Python Programming, and Web Development.",
      "Applied Python and Java programming fundamentals, web-development concepts, and Artificial Intelligence techniques through practical tasks and project-based learning."
    ]
  }
];

const certifications = [
  {
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Aug 2026"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jan 2026"
  },
  {
    title: "Explore Emerging Tech",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025"
  },
  {
    title: "AWS Educate Machine Learning Foundations – Training Badge",
    issuer: "Amazon Web Services",
    date: "Jul 2025"
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "Aug 2025"
  }
];

export default function SkillsExperience() {
  return (
    <section id="skills" className="py-28 md:py-32 bg-[#080808] relative overflow-hidden border-t border-[rgba(210,166,109,0.12)]">
      
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#5A1720]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Main Grid: Skills (Left 5 cols) & Experience + Education + Certifications (Right 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Technical Skills (5 cols) */}
          <div className="lg:col-span-5">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-[0.2em] text-[#D2A66D] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)]">
                Core Competencies
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3EF] mb-3">
                Technical Skills
              </h2>
              <p className="text-sm text-[#A8A29B] leading-relaxed">
                Structured domain skills across Data Analytics, AI/ML engineering, databases, and full-stack software development.
              </p>
            </div>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div 
                  key={group.category}
                  className="p-5 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D2A66D] mb-3">
                    {group.icon}
                    <span>{group.category}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(210,166,109,0.16)] text-[#F5F3EF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Experience, Education & Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-12" id="experience">
            
            {/* Experience Section */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold tracking-[0.2em] text-[#D2A66D] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)]">
                  Practical Track Record
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F3EF] mb-3">
                  Professional Experience
                </h2>
                <p className="text-sm text-[#A8A29B] leading-relaxed">
                  Real-world data science training and hands-on software development internship experience.
                </p>
              </div>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div 
                    key={exp.role + exp.company}
                    className="p-6 sm:p-7 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.18)]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#F5F3EF]">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono font-semibold text-[#D2A66D]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-[#D2A66D]/90 mb-4">
                      {exp.company} • <span className="text-[#A8A29B]">{exp.location}</span>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#A8A29B]">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="pt-6 border-t border-[rgba(210,166,109,0.16)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D2A66D] mb-4">
                <GraduationCap className="w-4 h-4 text-[#D2A66D]" />
                <span>Education</span>
              </div>

              <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.18)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-lg font-bold text-[#F5F3EF]">
                    B.Tech in Artificial Intelligence and Data Science
                  </h3>
                  <span className="text-xs font-mono font-semibold text-[#D2A66D]">
                    2022 – 2026
                  </span>
                </div>
                <p className="text-sm font-medium text-[#D2A66D]/90 mb-1">
                  Grace College of Engineering, Thoothukudi
                </p>
                <p className="text-xs text-[#A8A29B]">
                  Anna University
                </p>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="pt-6 border-t border-[rgba(210,166,109,0.16)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D2A66D] mb-4">
                <Award className="w-4 h-4 text-[#D2A66D]" />
                <span>Verified Certifications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifications.map((cert) => (
                  <div 
                    key={cert.title}
                    className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)] hover:border-[#D2A66D]/40 transition-colors"
                  >
                    <h4 className="text-xs sm:text-sm font-semibold text-[#F5F3EF] mb-1.5 leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-[#A8A29B]">
                      <span>{cert.issuer}</span>
                      <span className="text-[#D2A66D] font-mono text-[11px]">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
