'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'icon' | 'outline';
  children?: React.ReactNode;
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
    primary: "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] border-transparent",
    secondary: "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
    outline: "bg-transparent text-white border-white/20 hover:border-blue-500/50 hover:bg-blue-500/5",
    icon: "p-3 rounded-full border border-white/10 glass hover:bg-blue-500/20 hover:border-blue-500/40 text-white/80 hover:text-white"
  };

  const baseStyles = "relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold tracking-tight transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group text-sm md:text-base";

  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        variant === 'icon' ? variants.icon : baseStyles + " " + variants[variant],
        className
      )}
      {...props}
    >
      {/* Shine Effect for Primary */}
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
        />
      )}

      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/5 transition-colors duration-500" />
      
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {icon && (
          <motion.span 
            className="transition-transform duration-300"
            variants={{
              hover: { x: 4 }
            }}
          >
            {icon}
          </motion.span>
        )}
      </span>
      
      {/* Subtle Bottom Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400/0 group-hover:bg-blue-400/50 transition-all duration-500 blur-[2px]" />
    </motion.button>
  );
}
