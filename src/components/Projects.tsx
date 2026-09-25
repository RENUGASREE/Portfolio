'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function Projects() {
  return (
    <section className="py-28 md:py-32 bg-background relative overflow-hidden border-t border-border transition-colors duration-300">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-4 text-xs font-semibold tracking-[0.2em] text-primary uppercase border border-border rounded-full bg-surface-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            FULL-STACK PRODUCT DEVELOPMENT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Full-Stack Project
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Full-stack e-commerce architecture engineered with custom administrative workflows, authenticated operations, and real-time inventory synchronization.
          </p>
        </div>

        {/* Single Wide Premium Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-surface border border-card-border shadow-md hover:border-primary/40 transition-colors duration-300 relative group"
        >
          {/* Top Badge & Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-chip-bg flex items-center justify-center border border-border">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-primary block">
                  Production Application
                </span>
                <span className="text-sm font-bold text-foreground">
                  E-Commerce &amp; Admin Suite
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-chip-bg border border-border text-xs text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Live Deployment on Render</span>
            </div>
          </div>

          {/* Grid: Left capabilities / Right stack & CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Summary & Capabilities (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
                  Renu&apos;s Collection — Full-Stack Fashion &amp; Jewelry
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Responsive full-stack e-commerce platform with customer and administrative functionality, delivering seamless shopping, custom catalog controls, and secured checkout workflows.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Key Product Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-muted">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Catalog &amp; subcategory inventory control</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Wishlist, cart &amp; item customization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Razorpay gateway &amp; Cash on Delivery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Live order management &amp; stock updates</span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Role-based admin dashboard secured with JWT authentication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stack & Actions (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-soft border border-border space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3">
                  Production Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Vite",
                    "Node.js",
                    "Express.js",
                    "MongoDB Atlas",
                    "JWT",
                    "Razorpay",
                    "Render"
                  ].map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-md bg-chip-bg border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                <Button 
                  href="https://renu-s-collection-6lui.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary" 
                  className="flex-1 w-full py-3.5 text-xs sm:text-sm" 
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Demo
                </Button>
                <Button 
                  href="https://github.com/RENUGASREE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="secondary" 
                  className="flex-1 w-full py-3.5 text-xs sm:text-sm" 
                  icon={<GithubIcon className="w-4 h-4 text-primary" />}
                >
                  GitHub Profile
                </Button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
