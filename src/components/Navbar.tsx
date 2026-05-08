'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, FileText, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Improved Scroll Spy Logic
      const sections = ['projects', 'skills', 'experience', 'contact'];
      let current = 'Home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for better trigger point
          if (rect.top <= 150) {
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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-700 px-6 py-5 md:px-12",
        scrolled ? "bg-background/70 backdrop-blur-2xl border-b border-white/5 py-3 md:py-4 shadow-2xl" : "bg-transparent py-6 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav - Centered Capsule */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 bg-white/[0.03] backdrop-blur-md rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full",
                activeSection === link.name ? "text-white" : "text-white/40 hover:text-white/80"
              )}
            >
              {activeSection === link.name && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600/20 rounded-full border border-blue-500/30"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <a href="/resume.pdf" download className="group">
            <Button variant="secondary" className="px-6 py-2.5 text-sm h-11" icon={<FileText className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />}>
              Resume
            </Button>
          </a>
          <a href="#contact">
            <Button className="px-6 py-2.5 text-sm h-11 shadow-blue-500/10">
              Contact
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-3 rounded-xl transition-all duration-300",
            isOpen ? "bg-white/10 text-white" : "bg-white/5 text-white/70"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Premium Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="lg:hidden fixed inset-0 w-full h-screen bg-background/98 backdrop-blur-3xl z-[110] flex flex-col p-8 pt-24"
          >
            {/* Background Aesthetic */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid-pattern" />
            
            <div className="flex flex-col gap-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-end gap-4"
                >
                  <span className="text-sm font-mono text-blue-500/50 group-hover:text-blue-400 mb-2">0{i+1}</span>
                  <span className="text-5xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-8 h-8 text-white/0 group-hover:text-blue-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 mb-2" />
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto flex flex-col gap-4 pb-12 relative z-10"
            >
              <div className="h-[1px] w-full bg-white/5 mb-6" />
              <div className="flex flex-col gap-4">
                <a href="/resume.pdf" download className="w-full">
                  <Button variant="secondary" className="w-full py-5 text-lg" icon={<FileText className="w-5 h-5" />}>
                    Download Resume
                  </Button>
                </a>
                <a href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button className="w-full py-5 text-lg">
                    Get in Touch
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
