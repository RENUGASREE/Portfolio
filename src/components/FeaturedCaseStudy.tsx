'use client';

import { Layers, Server, Code2, ExternalLink, BrainCircuit, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { GithubIcon } from './Icons';

export default function FeaturedCaseStudy() {
  return (
    <section id="projects" className="py-28 md:py-32 bg-[#080808] relative overflow-hidden border-t border-[rgba(210,166,109,0.12)]">
      {/* Background Subtle Burgundy Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5A1720]/15 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-4 text-xs font-semibold tracking-[0.2em] text-[#D2A66D] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2A66D]" />
            Flagship AI &amp; Software Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3EF] mb-4">
            Python Edition
          </h2>
          <p className="text-xl sm:text-2xl text-[#D2A66D] font-medium mb-5">
            Adaptive AI-Powered Interactive Learning Assistant
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#A8A29B] max-w-3xl leading-relaxed">
            An adaptive Python learning platform combining learner analytics, AI-assisted tutoring, coding practice, mastery tracking, and personalized learning paths.
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Systems & Architecture (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Features Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]">
                <div className="w-10 h-10 rounded-xl bg-[rgba(90,23,32,0.2)] flex items-center justify-center border border-[rgba(210,166,109,0.3)] mb-4">
                  <BrainCircuit className="w-5 h-5 text-[#D2A66D]" />
                </div>
                <h3 className="text-base font-bold text-[#F5F3EF] mb-3">Adaptive &amp; AI Intelligence</h3>
                <ul className="text-xs sm:text-sm text-[#A8A29B] space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>Learner ability estimation &amp; analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>Topic &amp; mastery tracking (IRT logic)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>AI-assisted tutoring &amp; contextual hints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>Spaced-repetition revision scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]">
                <div className="w-10 h-10 rounded-xl bg-[rgba(90,23,32,0.2)] flex items-center justify-center border border-[rgba(210,166,109,0.3)] mb-4">
                  <Code2 className="w-5 h-5 text-[#D2A66D]" />
                </div>
                <h3 className="text-base font-bold text-[#F5F3EF] mb-3">Interactive Learning System</h3>
                <ul className="text-xs sm:text-sm text-[#A8A29B] space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>In-browser interactive Python coding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>Placement assessment &amp; diagnostic quizzes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>Dynamic coding challenges with tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0" />
                    <span>Performance analytics &amp; streak tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Stack Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.2)]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#D2A66D] flex items-center gap-2.5 mb-5">
                <Layers className="w-4 h-4 text-[#D2A66D]" /> Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[rgba(210,166,109,0.08)] border border-[rgba(210,166,109,0.25)] text-[#F5F3EF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://python-edition.onrender.com" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-6 py-3.5 text-sm" icon={<ExternalLink className="w-4 h-4" />}>
                  Live Project
                </Button>
              </a>
              <a href="https://github.com/RENUGASREE/Python_Edition" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="px-6 py-3.5 text-sm" icon={<GithubIcon className="w-4 h-4 text-[#D2A66D]" />}>
                  View GitHub Repository
                </Button>
              </a>
            </div>

          </div>

          {/* Right Column: Code & Architecture Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logic Sample Card */}
            <div className="rounded-2xl border border-[rgba(210,166,109,0.2)] bg-[#0D0D0D] overflow-hidden shadow-xl">
              <div className="px-5 py-3 border-b border-[rgba(210,166,109,0.16)] flex items-center justify-between bg-[rgba(255,255,255,0.02)]">
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
            <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#D2A66D] mb-3">
                <Server className="w-4 h-4 text-[#D2A66D]" />
                <span>Backend &amp; Data Persistence</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8A29B] leading-relaxed">
                Utilizes Express.js APIs for user tracking, JWT authentication for secure session isolation, and MongoDB collections for persisting detailed attempt history and progressive learner competence graphs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
