'use client';

import { Layers, Server, Code2, ExternalLink, BrainCircuit, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { GithubIcon } from './Icons';

export default function FeaturedCaseStudy() {
  return (
    <section id="projects" className="py-28 md:py-32 bg-background relative overflow-hidden border-t border-border transition-colors duration-300">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-4 text-xs font-semibold tracking-[0.2em] text-primary uppercase border border-border rounded-full bg-surface-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Flagship AI &amp; Software Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Python Edition
          </h2>
          <p className="text-xl sm:text-2xl text-primary font-medium mb-5">
            Adaptive AI-Powered Interactive Learning Assistant
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-3xl leading-relaxed">
            An adaptive Python learning platform combining learner analytics, AI-assisted tutoring, coding practice, mastery tracking, and personalized learning paths.
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Systems & Architecture (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Features Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-surface border border-card-border shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-chip-bg flex items-center justify-center border border-border mb-4">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">Adaptive &amp; AI Intelligence</h3>
                <ul className="text-xs sm:text-sm text-muted space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Learner ability estimation &amp; analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Topic &amp; mastery tracking (IRT logic)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>AI-assisted tutoring &amp; contextual hints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Spaced-repetition revision scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-card-border shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-chip-bg flex items-center justify-center border border-border mb-4">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">Interactive Learning System</h3>
                <ul className="text-xs sm:text-sm text-muted space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>In-browser interactive Python coding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Placement assessment &amp; diagnostic quizzes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Dynamic coding challenges with tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Performance analytics &amp; streak tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Stack Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-card-border shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2.5 mb-4">
                <Layers className="w-4 h-4 text-primary" /> Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-chip-bg border border-border text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="https://python-edition.onrender.com" target="_blank" rel="noopener noreferrer" variant="primary" className="px-6 py-3.5 text-sm" icon={<ExternalLink className="w-4 h-4" />}>
                Live Project
              </Button>
              <Button href="https://github.com/RENUGASREE/Python_Edition" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-6 py-3.5 text-sm" icon={<GithubIcon className="w-4 h-4 text-primary" />}>
                View GitHub Repository
              </Button>
            </div>

          </div>

          {/* Right Column: Code & Architecture Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logic Sample Card - Code block stays dark in both themes for editor authenticity */}
            <div className="rounded-2xl border border-border bg-[#0D0D0D] overflow-hidden shadow-xl">
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5A1720]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7D4149]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D2A66D]" />
                </div>
                <span className="text-[11px] font-mono text-[#A8A29B]">adaptive_mastery.ts</span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#A8A29B]">
                <pre className="text-[#D2A66D]/90">
{`// Evaluate learner ability & update pathway
interface LearnerProfile {
  abilityTheta: number; // IRT Latent Ability
  masteryScore: Record<string, number>;
  repetitionInterval: number; // SM-2 Days
}

async function recommendNextChallenge(
  learner: LearnerProfile,
  topicId: string
) {
  const dueReviews = getSpacedRepetitionDue(learner);
  if (dueReviews.length > 0) return dueReviews[0];
  
  return getOptimalChallenge(learner.abilityTheta, topicId);
}`}
                </pre>
              </div>
            </div>

            {/* Architecture Highlights Card */}
            <div className="p-6 rounded-2xl bg-surface border border-card-border shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                <Server className="w-4 h-4 text-primary" />
                <span>Backend &amp; Data Persistence</span>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Utilizes Express.js APIs for user tracking, JWT authentication for secure session isolation, and MongoDB collections for persisting detailed attempt history and progressive learner competence graphs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
