'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className, 
  icon,
  ...props 
}: ButtonProps) {
  
  const variants = {
    primary: "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] border-transparent",
    secondary: "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20",
    icon: "p-3 glass rounded-full hover:bg-blue-500/20 transition-all border-white/5"
  };

  const baseStyles = "relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        variant === 'icon' ? "p-3 rounded-full flex items-center justify-center transition-all border border-white/5 glass hover:bg-blue-500/20" : baseStyles,
        variant !== 'icon' && variants[variant],
        className
      )}
      {...props}
    >
      {/* Subtle Glow Effect for Primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1 duration-300">{icon}</span>}
    </motion.button>
  );
}
