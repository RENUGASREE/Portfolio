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
    primary: "bg-[#D5A66A] text-[#0B0B0B] shadow-[0_0_20px_rgba(213,166,106,0.15)] hover:shadow-[0_0_30px_rgba(213,166,106,0.3)] border-transparent",
    secondary: "bg-white/5 text-[#F3EEE7] hover:bg-white/10 border-white/10",
    outline: "bg-transparent text-[#F3EEE7] border-[rgba(213,166,106,0.5)] hover:bg-[#D5A66A]/10 hover:border-[#D5A66A]",
    icon: "p-3 rounded-full border border-white/10 glass hover:bg-[#D5A66A]/10 hover:border-[#D5A66A]/40 text-[#A8A29B] hover:text-[#D5A66A]"
  }

  const baseStyles = "relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold tracking-tight transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#D5A66A]/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group text-sm md:text-base";
  
  // Specific style for icon-only variant
  if (variant === 'icon') {
    return (
      <button 
        className={cn(variants.icon, "relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#D5A66A]/50 transition-all duration-300", className)} 
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-[#D5A66A]/0 group-hover:bg-[#D5A66A]/10 transition-colors duration-500 rounded-full" />
      </button>
    )
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Premium Hover Glow Effect */}
      <div className="absolute inset-0 bg-[#D5A66A]/0 group-hover:bg-[#D5A66A]/10 transition-colors duration-500" />
      
      {/* Animated Gradient Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
      </div>

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {icon && (
        <span className="relative z-10 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-current">
          {icon}
        </span>
      )}
      
      {/* Edge Highlight for Premium Feel */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D5A66A]/0 group-hover:bg-[#D5A66A]/50 transition-all duration-500 blur-[2px]" />
    </button>
  )
}
