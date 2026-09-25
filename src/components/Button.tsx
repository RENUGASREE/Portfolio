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
    primary: "bg-[#D2A66D] text-[#080808] font-bold shadow-[0_0_20px_rgba(210,166,109,0.2)] hover:bg-[#E5C79A] hover:shadow-[0_0_25px_rgba(210,166,109,0.35)] border-transparent hover:-translate-y-0.5",
    secondary: "bg-[rgba(255,255,255,0.03)] text-[#F5F3EF] hover:bg-[rgba(210,166,109,0.08)] border border-[rgba(210,166,109,0.25)] hover:border-[#D2A66D] hover:-translate-y-0.5",
    outline: "bg-transparent text-[#F5F3EF] border border-[rgba(210,166,109,0.3)] hover:bg-[rgba(210,166,109,0.08)] hover:border-[#D2A66D] hover:-translate-y-0.5",
    icon: "p-3 rounded-full border border-[rgba(210,166,109,0.2)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(210,166,109,0.12)] hover:border-[#D2A66D]/50 text-[#A8A29B] hover:text-[#D2A66D] hover:-translate-y-0.5"
  }

  const baseStyles = "relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D2A66D]/40 disabled:opacity-50 disabled:cursor-not-allowed group text-sm md:text-base cursor-pointer";
  
  // Specific style for icon-only variant
  if (variant === 'icon') {
    return (
      <button 
        className={cn(variants.icon, "relative transition-all duration-300", className)} 
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
        <span className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300 text-current">
          {icon}
        </span>
      )}
    </button>
  )
}
