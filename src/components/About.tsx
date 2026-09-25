'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, Database, Layers } from 'lucide-react';

const capabilities = [
  {
    title: "Data Analysis & Visualization",
    skills: "Python • SQL • Power BI • Excel",
    icon: <BarChart3 className="w-5 h-5 text-[#5A1720]" />
  },
  {
    title: "Machine Learning & AI",
    skills: "Machine Learning • Deep Learning • Generative AI",
    icon: <Brain className="w-5 h-5 text-[#5A1720]" />
  },
  {
    title: "Data-Driven Applications",
    skills: "Analytics • Intelligent Systems • Databases",
    icon: <Database className="w-5 h-5 text-[#5A1720]" />
  },
  {
    title: "Full-Stack Development",
    skills: "React • Node.js • APIs • MongoDB",
    icon: <Layers className="w-5 h-5 text-[#5A1720]" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF6F0] text-[#1A1A1A] relative overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(210,166,109,0.12)] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(90,23,32,0.06)] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait / Editorial Image Frame (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-md">
              {/* Warm Editorial Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8E1D7]">
                  <img 
                    src="/Portfolio/renuga-data-science-profile.png" 
                    alt="Renuga Sree S - Data Science Graduate"
                    className="w-full h-full object-cover object-[18%_center]"
                  />
                </div>
                
                {/* Banner-inspired Subtle Caption Bar */}
                <div className="p-4 bg-white border-t border-[#E8E1D7] flex items-center justify-between text-xs text-[#5A1720] font-medium">
                  <span className="font-semibold tracking-wide">Renuga Sree S</span>
                  <span className="text-[#7D4149] italic">Better Data • Brighter Decisions</span>
                </div>
              </div>

              {/* Decorative Banner Quote Tag */}
              <div className="mt-4 text-center lg:text-left">
                <span className="font-serif italic text-sm text-[#7D4149] tracking-wider block">
                  Learning. Creating. Growing. ...Always
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Introduction & 4 Capability Rows (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small decorative label */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#7D4149] uppercase mb-3">
              <span className="w-8 h-[2px] bg-[#5A1720]" />
              Personal Profile &amp; Focus
            </div>

            {/* Primary Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#1A1A1A] leading-[1.15]">
              Turning Data, AI &amp; Code <br className="hidden sm:block" />
              <span className="text-[#5A1720] font-serif italic">Into Practical Solutions</span>
            </h2>

            {/* Content paragraph */}
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed mb-8 font-normal">
              Artificial Intelligence and Data Science graduate with six months of Data Science training and hands-on experience in Python, SQL, Power BI, Machine Learning, Artificial Intelligence, Deep Learning, and web development. I enjoy developing data-driven, AI-based, and full-stack applications that solve practical problems.
            </p>

            {/* Four Capability Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div 
                  key={cap.title}
                  className="p-4 rounded-2xl bg-white border border-[rgba(210,166,109,0.3)] shadow-sm hover:shadow-md hover:border-[#5A1720]/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] flex items-center justify-center border border-[#E8E1D7] mb-3">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-medium text-[#5A1720]">
                    {cap.skills}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
