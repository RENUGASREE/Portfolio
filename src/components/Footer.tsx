'use client';

import { Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Button from './Button';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-16 overflow-hidden bg-background border-t border-border transition-colors duration-300">
      {/* Visual Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Contact Section Box */}
      <div className="section-container relative z-10 mb-20">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 md:p-14 rounded-[2.5rem] border border-card-border text-center bg-surface shadow-xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold tracking-[0.2em] text-primary uppercase border border-border rounded-full bg-chip-bg">
            Open for Opportunities
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight text-foreground">
            Let&apos;s Build Something Meaningful
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-muted mb-9 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently exploring opportunities where I can apply my skills in Data Analytics, Artificial Intelligence, Machine Learning, and software development while continuing to grow professionally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
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
              <Button variant="secondary" className="w-full sm:w-auto px-6 py-3.5 text-sm" icon={<LinkedinIcon className="w-4 h-4 text-primary" />}>
                LinkedIn
              </Button>
            </a>

            <a 
              href="https://github.com/RENUGASREE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" className="w-full sm:w-auto px-6 py-3.5 text-sm" icon={<GithubIcon className="w-4 h-4 text-primary" />}>
                GitHub
              </Button>
            </a>

            <a href="/Portfolio/resume.pdf" download className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-6 py-3.5 text-sm" icon={<FileDown className="w-4 h-4 text-primary" />}>
                Download Resume
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-container border-t border-border pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <div className="text-lg font-bold tracking-tight text-foreground">
              RENUGA <span className="text-primary">SREE S</span>
            </div>
            <p className="text-xs text-muted mt-1">
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

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Renuga Sree S. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
}
