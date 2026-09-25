'use client';

import { BarChart3, TrendingUp, ArrowRight, CheckCircle2, PieChart } from 'lucide-react';
import Button from './Button';
import { GithubIcon } from './Icons';

const metrics = [
  {
    value: "541,909",
    label: "Transactions Audited",
    detail: "Full raw dataset audited for quality & deduplication"
  },
  {
    value: "4,338",
    label: "Customers Profiled",
    detail: "Identified positive-sales behavioral profiles"
  },
  {
    value: "RFM + K-Means",
    label: "Customer Segmentation",
    detail: "Recency, Frequency, Monetary clustering model"
  },
  {
    value: "2",
    label: "Meaningful Segments",
    detail: "Lower-Engagement (61.6%) vs Higher-Engagement (38.4%)"
  }
];

const pipelineSteps = [
  "Raw Transactions",
  "Data Quality Audit",
  "Cleaning & Prep",
  "Exploratory Analysis",
  "RFM Features",
  "Scaling & Log1p",
  "K-Means (k=2)",
  "Customer Profiling",
  "Business Recommendations"
];

export default function FeaturedAnalyticsCaseStudy() {
  return (
    <section className="py-28 md:py-32 bg-[#0D0D0D] relative overflow-hidden border-t border-[rgba(210,166,109,0.12)]">
      {/* Background Wine Glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#7D4149]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-4 text-xs font-semibold tracking-[0.2em] text-[#D2A66D] uppercase border border-[rgba(210,166,109,0.3)] rounded-full bg-[rgba(90,23,32,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2A66D]" />
            Featured Data Analytics Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3EF] mb-4">
            AI-Powered E-Commerce Customer Intelligence &amp; Sales Analytics
          </h2>
          <p className="text-xl sm:text-2xl text-[#D2A66D] font-medium mb-5">
            End-to-end e-commerce analytics and customer segmentation using Python, RFM analysis, K-Means clustering, and business-focused insight generation.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#A8A29B] max-w-3xl leading-relaxed">
            Conducted on real e-commerce transactional data spanning 541,909 records, delivering commercial intelligence across sales patterns, revenue concentration, customer lifetime behavior, and targeted retention strategies.
          </p>
        </div>

        {/* 4 Primary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {metrics.map((item) => (
            <div 
              key={item.label}
              className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.2)] shadow-sm hover:border-[#D2A66D]/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#D2A66D] tracking-tight mb-2">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-[#F5F3EF] mb-1.5">
                {item.label}
              </div>
              <p className="text-xs text-[#A8A29B] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Analytical Pipeline Bar */}
        <div className="mb-14 p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2A66D] mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#D2A66D]" />
            End-to-End Analytical Pipeline
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#F5F3EF]">
            {pipelineSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[rgba(210,166,109,0.08)] border border-[rgba(210,166,109,0.2)] text-[#F5F3EF]">
                  {step}
                </span>
                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#D2A66D]/60 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Grid: Key Findings & Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Core Findings & Commercial Insights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]">
              <h3 className="text-base font-bold text-[#F5F3EF] mb-4 flex items-center gap-2.5">
                <BarChart3 className="w-5 h-5 text-[#D2A66D]" />
                Key Data Findings &amp; Business Intelligence
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#A8A29B] mb-5">
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[rgba(210,166,109,0.12)]">
                  <span className="block text-[#D2A66D] font-bold text-base mb-1">£10,642,110.80</span>
                  <span>Total positive sales revenue generated across 19,960 invoices and 5.57M units.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[rgba(210,166,109,0.12)]">
                  <span className="block text-[#D2A66D] font-bold text-base mb-1">84.59% UK Share</span>
                  <span>United Kingdom accounted for the overwhelming majority of total business revenue.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[rgba(210,166,109,0.12)]">
                  <span className="block text-[#D2A66D] font-bold text-base mb-1">61.45% Concentration</span>
                  <span>Top 10% highest-spending customers generated over 61% of total enterprise sales.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[rgba(210,166,109,0.12)]">
                  <span className="block text-[#D2A66D] font-bold text-base mb-1">Nov 2011 Peak</span>
                  <span>Highest grossing revenue month at £1,503,866.78 leading into holiday seasonality.</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#A8A29B]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0 mt-0.5" />
                  <span><strong>Segment 0 (Lower-Engagement, 61.60%):</strong> 2,672 accounts requiring automated re-engagement, targeted discounts, and win-back sequences.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D2A66D] shrink-0 mt-0.5" />
                  <span><strong>Segment 1 (Higher-Engagement, 38.40%):</strong> 1,666 accounts driving recurring volume, suitable for VIP loyalty incentives and early access programs.</span>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.2)]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D2A66D] mb-4">
                Analytics Stack &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Matplotlib",
                  "Seaborn",
                  "scikit-learn",
                  "K-Means Clustering",
                  "RFM Modeling",
                  "Google Colab / Jupyter",
                  "GitHub"
                ].map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-[rgba(210,166,109,0.08)] border border-[rgba(210,166,109,0.25)] text-[#F5F3EF]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Methodology & Segmentation Model (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(210,166,109,0.16)]">
              <h3 className="text-base font-bold text-[#F5F3EF] mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#D2A66D]" />
                Methodology &amp; Modeling Rigor
              </h3>
              <ul className="text-xs sm:text-sm text-[#A8A29B] space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D2A66D] mt-1.5 shrink-0" />
                  <span><strong>Audit &amp; Cleaning:</strong> Preserved raw dataset; deduplicated records down to 536,641 rows; removed negative/cancelled records for sales analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D2A66D] mt-1.5 shrink-0" />
                  <span><strong>Feature Engineering:</strong> Engineered Revenue = Quantity × UnitPrice; calculated Recency, Frequency, and Monetary value per customer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D2A66D] mt-1.5 shrink-0" />
                  <span><strong>Normalization:</strong> Handled heavy skewness using log1p transformation followed by StandardScaler for uniform feature distance calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D2A66D] mt-1.5 shrink-0" />
                  <span><strong>Cluster Evaluation:</strong> Assessed candidate clusters with Inertia and Silhouette scores to select the most stable, interpretable k = 2 grouping.</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-2">
              <a 
                href="https://github.com/RENUGASREE/RenugaSree_AI-Powered-E-Commerce-Customer-Intelligence-and-Sales-Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block"
              >
                <Button variant="primary" className="w-full sm:w-auto px-7 py-3.5 text-sm" icon={<GithubIcon className="w-4 h-4 text-[#080808]" />}>
                  View Full Analysis on GitHub
                </Button>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
