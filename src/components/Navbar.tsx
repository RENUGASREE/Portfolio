'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, FileText } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Scroll Spy Logic
      const sections = ['projects', 'skills', 'experience'];
      let current = 'Home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section.charAt(0).toUpperCase() + section.slice(1);
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1.5 p-1 bg-white/5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                activeSection === link.name ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              {activeSection === link.name && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-500/20 rounded-full border border-blue-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="./resume.pdf" target="_blank">
            <Button variant="secondary" className="px-5 py-2 text-sm" icon={<FileText className="w-4 h-4" />}>
              Resume
            </Button>
          </a>
          <a href="mailto:renugasree@example.com">
            <Button className="px-5 py-2 text-sm" icon={<Mail className="w-4 h-4" />}>
              Contact
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full bg-background/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-white" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 w-full px-12 mt-8"
            >
              <a href="mailto:renugasree@example.com" className="w-full">
                <Button className="w-full text-lg py-4" icon={<Mail className="w-5 h-5" />}>
                  Get in Touch
                </Button>
              </a>
              <a href="./resume.pdf" target="_blank" className="w-full">
                <Button variant="secondary" className="w-full text-lg py-4" icon={<FileText className="w-5 h-5" />}>
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
