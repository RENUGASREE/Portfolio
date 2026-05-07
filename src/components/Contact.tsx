'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-3xl border-white/5 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl mb-8">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to build <br />
              <span className="gradient-text">something intelligent?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to discussing AI/ML projects, data engineering challenges, or full-stack opportunities. 
              Let's connect and build the future together.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="mailto:renugasree@example.com" className="w-full md:w-auto">
                <Button className="w-full md:w-auto px-10 py-5 text-lg" icon={<Mail className="w-5 h-5" />}>
                  Send an Email
                </Button>
              </a>
              <a href="https://linkedin.com/in/renugasree" target="_blank" className="w-full md:w-auto">
                <Button variant="secondary" className="w-full md:w-auto px-10 py-5 text-lg">
                  LinkedIn Profile
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
