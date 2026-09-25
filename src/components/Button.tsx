import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon'
  icon?: React.ReactNode
  children?: React.ReactNode
}

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
  }

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed group text-xs sm:text-sm md:text-base cursor-pointer";
  
  if (variant === 'icon') {
    return (
      <button 
        className={cn(variants.icon, "relative transition-all duration-200", className)} 
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
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
  )
}
