'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
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
      
      const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
      let current = 'Home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
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
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 px-5 sm:px-6 md:px-12",
        scrolled ? "bg-navbar-bg backdrop-blur-xl border-b border-navbar-border py-3 shadow-lg" : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg">
          <Logo />
        </a>

        {/* Desktop Nav - Centered Capsule */}
        <div className="hidden lg:flex items-center gap-1 p-1 bg-surface-soft backdrop-blur-md rounded-full border border-border shadow-inner">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                activeSection === link.name ? "text-foreground" : "text-muted hover:text-foreground"
              )}
            >
              {activeSection === link.name && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-surface rounded-full border border-border shadow-sm"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Desktop Controls (Theme Toggle + Resume) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="/Portfolio/resume.pdf" download className="group">
            <Button variant="outline" className="px-5 py-2 text-xs md:text-sm h-10 border-primary/40 text-primary hover:bg-chip-bg hover:border-primary" icon={<FileText className="w-4 h-4" />}>
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Controls (Theme Toggle + Menu Button) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle className="w-9 h-9" />
          <button 
            type="button"
            className={cn(
              "p-2 rounded-xl border border-border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer",
              isOpen ? "bg-surface text-foreground" : "bg-surface-soft text-muted"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[64px] bg-navbar-bg backdrop-blur-2xl border-b border-navbar-border p-6 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-chip-bg text-foreground transition-colors"
                >
                  <span className="text-base font-medium">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-border flex items-center gap-3">
              <a href="/Portfolio/resume.pdf" download className="w-full">
                <Button variant="primary" className="w-full py-3 text-sm justify-center" icon={<FileText className="w-4 h-4" />}>
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
