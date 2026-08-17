import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Users, 
  Cpu, 
  MapPin, 
  BarChart3, 
  Check, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES, type SkillCategory } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Users,
  Cpu,
  MapPin,
  BarChart3,
};

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cool' | 'warm' | 'featured'>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeFilter === 'featured') return cat.featured;
    if (activeFilter === 'cool') return cat.spectrum === 'cool' || cat.spectrum === 'dual';
    if (activeFilter === 'warm') return cat.spectrum === 'warm' || cat.spectrum === 'dual';
    return true;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-accent-cool" />
              <span>Competencies & Stack</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight">
              Marketing Execution & AI Stack
            </h2>
            <p className="text-sm sm:text-base text-muted-theme mt-2 max-w-2xl font-normal">
              Structured across technical search & automation engineering and human-driven performance growth.
            </p>
          </div>

          {/* Interactive Spectrum Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-surface-card border border-theme shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white shadow-sm'
                  : 'text-muted-theme hover:text-primary-theme'
              }`}
            >
              All Stack
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'featured'
                  ? 'badge-neutral text-primary-theme font-bold'
                  : 'text-muted-theme hover:text-primary-theme'
              }`}
            >
              Core Differentiators
            </button>
            <button
              onClick={() => setActiveFilter('cool')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'cool'
                  ? 'badge-cool font-bold'
                  : 'text-muted-theme hover:text-primary-theme'
              }`}
            >
              AI & Tech
            </button>
            <button
              onClick={() => setActiveFilter('warm')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'warm'
                  ? 'badge-warm font-bold'
                  : 'text-muted-theme hover:text-primary-theme'
              }`}
            >
              Growth & CRM
            </button>
          </div>
        </div>

        {/* Bento-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredCategories.map((category: SkillCategory) => {
            const Icon = iconMap[category.iconName] || Search;
            const isFeatured = category.featured;
            const isCool = category.spectrum === 'cool';
            const cardClass = isFeatured 
              ? 'md:col-span-6 card-theme p-7 sm:p-8' 
              : isCool 
              ? 'md:col-span-6 lg:col-span-3 card-theme-cool p-6'
              : 'md:col-span-6 lg:col-span-3 card-theme-warm p-6';

            const badgeClass = isCool ? 'badge-cool' : 'badge-warm';
            const accentText = isCool ? 'text-accent-cool' : 'text-accent-warm';

            return (
              <div
                key={category.id}
                className={`${cardClass} rounded-3xl card-hover-smooth flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${badgeClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {category.differentiator ? (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full badge-neutral">
                        {category.differentiator}
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-subtle-theme">
                        {category.skills.length} Skills
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary-theme mb-2">
                    {category.title}
                  </h3>

                  <p className="text-xs text-muted-theme mb-6 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Skill Pill Tags (Clean Neutral Tags) */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface-alt border border-theme text-primary-theme flex items-center gap-1.5"
                      >
                        <Check className={`w-3 h-3 shrink-0 ${accentText}`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-theme flex items-center justify-between text-[11px] text-subtle-theme">
                  <span className={`flex items-center gap-1 font-semibold ${accentText}`}>
                    <Sparkles className="w-3 h-3" /> Production-Verified
                  </span>
                  <span>Verbatim Scope</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
