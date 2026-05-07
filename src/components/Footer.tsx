'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Button from './Button';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Contact Section Integrated */}
      <div className="section-container relative z-10 mb-32">
        <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl border-white/5 text-center bg-white/[0.02]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex p-3 bg-blue-500/10 rounded-xl mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to build <br />
              <span className="gradient-text">something intelligent?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              I'm always open to discussing AI/ML projects, data engineering challenges, or full-stack opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:renugasree@example.com" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-4" icon={<Mail className="w-4 h-4" />}>
                  Send an Email
                </Button>
              </a>
              <a href="https://linkedin.com/in/renugasree" target="_blank" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto px-8 py-4" icon={<Linkedin className="w-4 h-4" />}>
                  LinkedIn Profile
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Traditional Footer Part */}
      <div className="section-container border-t border-white/5 pt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Renuga Sree</h2>
            <p className="text-muted-foreground max-w-xs text-sm">
              AI/ML Engineer & Data Scientist building the future of intelligent systems.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/RENUGASREE" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                <GithubIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/renugasree" target="_blank" rel="noopener noreferrer">
              <Button variant="icon">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
            </a>
            <a href="mailto:renugasree@example.com">
              <Button variant="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2024 Renuga Sree. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
