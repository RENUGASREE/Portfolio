import React from 'react';
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({ 
  variant = 'primary', 
  icon, 
  children, 
  className,
  ...props 
}: ButtonProps) {
  
  const variants = {
    primary: "bg-primary text-primary-contrast font-bold shadow-md hover:bg-primary-soft hover:shadow-lg border-transparent hover:-translate-y-0.5",
    secondary: "bg-surface text-foreground hover:bg-chip-bg border border-border hover:border-primary hover:-translate-y-0.5 shadow-sm",
    outline: "bg-transparent text-foreground border border-border hover:bg-chip-bg hover:border-primary hover:-translate-y-0.5",
    icon: "p-2.5 sm:p-3 rounded-full border border-border bg-surface hover:bg-chip-bg hover:border-primary/50 text-muted hover:text-primary hover:-translate-y-0.5 shadow-sm"
  };

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed group text-xs sm:text-sm md:text-base cursor-pointer text-center no-underline";
  
  // Icon-only variant
  if (variant === 'icon') {
    if ('href' in props && props.href) {
      const { href, ...anchorProps } = props as ButtonAsAnchor;
      return (
        <a 
          href={href}
          className={cn(variants.icon, "relative inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer no-underline", className)} 
          {...anchorProps}
        >
          <span className="relative z-10 flex items-center justify-center">{children}</span>
        </a>
      );
    }

    const buttonProps = props as ButtonAsButton;
    return (
      <button 
        className={cn(variants.icon, "relative inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer", className)} 
        {...buttonProps}
      >
        <span className="relative z-10 flex items-center justify-center">{children}</span>
      </button>
    );
  }

  // Anchor / Link mode
  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a 
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        {...anchorProps}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {icon && (
          <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-200 text-current">
            {icon}
          </span>
        )}
      </a>
    );
  }

  // Default Button mode
  const buttonProps = props as ButtonAsButton;
  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...buttonProps}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {icon && (
        <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-200 text-current">
          {icon}
        </span>
      )}
    </button>
  );
}
