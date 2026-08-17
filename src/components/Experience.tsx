import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2
} from 'lucide-react';
import { WORK_EXPERIENCE, type ExperienceItem } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-accent-cool" />
            <span>Career Milestones</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight mb-4">
            Hands-On Experience & Impact
          </h2>
          <p className="text-sm sm:text-base text-muted-theme font-normal">
            A chronological trajectory across FinTech and technology verticals, engineering organic search scale, full-funnel paid media ROAS, and automated AI workflow pipelines.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent-cool)] before:to-[var(--accent-warm)]">
          {WORK_EXPERIENCE.map((exp: ExperienceItem) => {
            const isWarm = exp.spectrum === 'warm';
            const badgeClass = isWarm ? 'badge-warm' : 'badge-cool';
            const accentText = isWarm ? 'text-accent-warm' : 'text-accent-cool';

            return (
              <div key={exp.company} className="relative group">
                
                {/* Timeline Marker Node */}
                <div className={`absolute -left-[29px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-surface-card border-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm z-10 ${isWarm ? 'border-[var(--accent-warm)]' : 'border-[var(--accent-cool)]'}`}>
                  <span className={`w-2 h-2 rounded-full ${isWarm ? 'bg-[var(--accent-warm)]' : 'bg-[var(--accent-cool)]'}`}></span>
                </div>

                {/* Experience Card */}
                <div className="card-theme p-6 sm:p-8 rounded-3xl card-hover-smooth space-y-6">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-theme">
                    <div>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg mb-2 ${badgeClass}`}>
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-theme">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-theme">
                      <span className="flex items-center gap-1.5 bg-surface-alt px-3 py-1.5 rounded-xl border border-theme">
                        <Calendar className="w-3.5 h-3.5 text-accent-cool" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-surface-alt px-3 py-1.5 rounded-xl border border-theme">
                        <MapPin className="w-3.5 h-3.5 text-accent-warm" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Key Metric Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {exp.metrics.map((m) => {
                      const mWarm = m.spectrum === 'warm';
                      const mAccent = mWarm ? 'text-accent-warm' : 'text-accent-cool';
                      return (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-2xl bg-surface-alt border border-theme flex flex-col"
                        >
                          <span className="text-[10.5px] text-subtle-theme font-medium truncate">{m.label}</span>
                          <span className={`font-mono-data text-lg sm:text-xl font-extrabold mt-0.5 ${mAccent}`}>
                            {m.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* 100% Neutral Bullet Copy */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-theme leading-relaxed font-normal">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accentText}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags Footer */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-theme">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-surface-alt text-subtle-theme border border-theme"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
