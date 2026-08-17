import React from 'react';
import { 
  Camera, 
  Stethoscope, 
  DoorClosed, 
  TrendingUp, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Target, 
  Zap
} from 'lucide-react';
import { KEY_PROJECTS, type ProjectItem } from '../data/portfolioData';

// Custom Industry Motif Shapes
const IndustryGeometricBadge: React.FC<{ type: string; badgeClass: string }> = ({ type, badgeClass }) => {
  if (type === 'camera') {
    return (
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${badgeClass}`}>
        <Camera className="w-7 h-7" />
      </div>
    );
  }
  if (type === 'clinic') {
    return (
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${badgeClass}`}>
        <Stethoscope className="w-7 h-7" />
      </div>
    );
  }
  if (type === 'door') {
    return (
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${badgeClass}`}>
        <DoorClosed className="w-7 h-7" />
      </div>
    );
  }
  return (
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${badgeClass}`}>
      <TrendingUp className="w-7 h-7" />
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5 text-accent-warm" />
              <span>Proven Results</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight">
              Featured Client Campaign Results
            </h2>
            <p className="text-sm sm:text-base text-muted-theme mt-2 max-w-2xl font-normal">
              Four real-world campaign engagements across international Geo SEO, healthcare lead automation, high-ticket manufacturing scale, and rapid ranking acceleration.
            </p>
          </div>
        </div>

        {/* Asymmetric Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {KEY_PROJECTS.map((project: ProjectItem, idx: number) => {
            const isWarm = project.spectrum === 'warm';
            const badgeClass = isWarm ? 'badge-warm' : 'badge-cool';
            const textAccent = isWarm ? 'text-accent-warm' : 'text-accent-cool';
            const cardClass = isWarm ? 'card-theme-warm' : 'card-theme-cool';
            const colSpan = idx % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                className={`${colSpan} ${cardClass} p-7 sm:p-9 rounded-3xl card-hover-smooth flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  {/* Top Bar: Category Pill & Location */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badgeClass}`}>
                      <Sparkles className="w-3 h-3" />
                      {project.category}
                    </span>
                    <span className="text-xs text-subtle-theme flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-cool" />
                      {project.location}
                    </span>
                  </div>

                  {/* Header Row: Title & Geometric Motif Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-theme group-hover:text-[var(--accent-cool)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-theme mt-1 font-medium">
                        {project.client}
                      </p>
                    </div>

                    <IndustryGeometricBadge type={project.iconType} badgeClass={badgeClass} />
                  </div>

                  {/* Dominant Tabular Headline Metric Block */}
                  <div className="p-6 rounded-2xl bg-surface-alt border border-theme mb-6 flex items-center justify-between shadow-inner">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-subtle-theme">
                        Dominant Campaign Metric
                      </div>
                      <div className={`font-mono-data text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${textAccent}`}>
                        {project.headlineMetric}
                      </div>
                      <div className="text-xs font-semibold text-primary-theme mt-0.5">
                        {project.headlineLabel}
                      </div>
                    </div>

                    <div className={`p-3 rounded-xl ${badgeClass}`}>
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  {/* 100% Neutral Body Description */}
                  <p className="text-xs sm:text-sm text-muted-theme leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* 3-Column Results Breakdown */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {project.results.map((res) => (
                      <div
                        key={res.label}
                        className="p-3 rounded-xl bg-surface-alt border border-theme flex flex-col"
                      >
                        <span className="text-[10px] text-subtle-theme font-medium truncate">{res.label}</span>
                        <span className={`font-mono-data text-xs sm:text-sm font-bold mt-1 ${textAccent}`}>
                          {res.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Pills & Timeline */}
                <div className="pt-4 border-t border-theme flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-surface-alt text-primary-theme border border-theme"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-subtle-theme flex items-center gap-1 mt-2 sm:mt-0">
                    <Calendar className="w-3.5 h-3.5 text-accent-cool" />
                    {project.timeline}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
