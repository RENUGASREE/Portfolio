'use client';

import { Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Button from './Button';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-28 pb-16 overflow-hidden bg-[#080808] border-t border-[rgba(210,166,109,0.12)]">
      {/* Visual Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#5A1720]/15 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Contact Section Box */}
      <div className="section-container relative z-10 mb-24">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-[rgba(210,166,109,0.2)] text-center bg-[#0D0D0D] shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-[0.2em] text-[#D2A66D] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)]">
            Open for Opportunities
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#F5F3EF]">
            Let&apos;s Build Something Meaningful
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-[#A8A29B] mb-10 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently exploring opportunities where I can apply my skills in Data Analytics, Artificial Intelligence, Machine Learning, and software development while continuing to grow professionally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a href="mailto:renugasree28@gmail.com" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto px-7 py-3.5 text-sm" icon={<Mail className="w-4 h-4" />}>
                Email Me
              </Button>
            </a>

            <a 
              href="https://www.linkedin.com/in/renuga-sree-64b8342a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full sm:w-auto px-6 py-3.5 text-sm" icon={<LinkedinIcon className="w-4 h-4 text-[#D2A66D]" />}>
                LinkedIn
              </Button>
            </a>

            <a 
              href="https://github.com/RENUGASREE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full sm:w-auto px-6 py-3.5 text-sm" icon={<GithubIcon className="w-4 h-4 text-[#D2A66D]" />}>
                GitHub
              </Button>
            </a>

            <a href="/Portfolio/resume.pdf" download className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-6 py-3.5 text-sm" icon={<FileDown className="w-4 h-4 text-[#D2A66D]" />}>
                Download Resume
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-container border-t border-[rgba(210,166,109,0.12)] pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <div className="text-lg font-bold tracking-tight text-[#F5F3EF]">
              RENUGA <span className="text-[#D2A66D]">SREE S</span>
            </div>
            <p className="text-xs text-[#A8A29B] mt-1">
              Artificial Intelligence &amp; Data Science Graduate
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/RENUGASREE" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button variant="icon">
                <GithubIcon className="w-4 h-4" />
              </Button>
            </a>
            <a 
              href="https://www.linkedin.com/in/renuga-sree-64b8342a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button variant="icon">
                <LinkedinIcon className="w-4 h-4" />
              </Button>
            </a>
            <a 
              href="mailto:renugasree28@gmail.com"
              aria-label="Send Email"
            >
              <Button variant="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </a>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(210,166,109,0.08)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#A8A29B]/70">
          <p>© {new Date().getFullYear()} Renuga Sree S. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
}
