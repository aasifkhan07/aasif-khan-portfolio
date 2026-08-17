import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  Award, 
  Cpu, 
  TrendingUp, 
  Target, 
  Zap,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'GEO & AI Search Architecture',
      description: 'Pioneering Generative Engine Optimization (GEO) & AEO strategies ensuring top brand citations across Google AI Overviews & Perplexity.',
      spectrum: 'cool',
      badgeClass: 'badge-cool',
      textAccent: 'text-accent-cool',
    },
    {
      icon: TrendingUp,
      title: 'Performance & Paid Media',
      description: 'Managing full-funnel Google Ads (Search, Display, Remarketing) and Meta Ads with relentless focus on CPL reduction and ROAS scaling.',
      spectrum: 'warm',
      badgeClass: 'badge-warm',
      textAccent: 'text-accent-warm',
    },
    {
      icon: Zap,
      title: 'AI Automation & CRM Pipelines',
      description: 'Integrating n8n, Antigravity, Make, and Zapier with HubSpot & Salesforce to eliminate lead leakage and trigger instant WhatsApp engagement.',
      spectrum: 'dual',
      badgeClass: 'badge-cool',
      textAccent: 'text-accent-cool',
    },
    {
      icon: Target,
      title: 'Hyperlocal & Multi-Location GMB',
      description: 'Dominating Local 3-Packs and driving verified footfall and inbound calls through structured local citation and review velocity systems.',
      spectrum: 'warm',
      badgeClass: 'badge-warm',
      textAccent: 'text-accent-warm',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cool)]"></span>
            <span>Background & Trajectory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight">
            Engineering Digital Growth Through Data & AI
          </h2>
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary Card & Fast Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-theme p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-theme shadow-md"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary-theme">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-muted-theme font-medium">
                    {PERSONAL_INFO.role}
                  </p>
                  <p className="text-xs text-subtle-theme flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-accent-cool" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* 100% Neutral Body Summary */}
              <p className="text-sm text-muted-theme leading-relaxed mb-6 font-normal">
                {PERSONAL_INFO.aboutSummary}
              </p>

              {/* Fast Spec Sheet */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-theme">
                <div className="p-3.5 rounded-xl bg-surface-alt border border-theme">
                  <div className="text-[11px] text-subtle-theme font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-accent-cool" /> Experience
                  </div>
                  <div className="text-xs font-bold text-primary-theme mt-1">
                    Aug 2024 – Jun 2026
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-alt border border-theme">
                  <div className="text-[11px] text-subtle-theme font-medium flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-accent-warm" /> Verticals
                  </div>
                  <div className="text-xs font-bold text-primary-theme mt-1">
                    FinTech, IT, Services
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-alt border border-theme">
                  <div className="text-[11px] text-subtle-theme font-medium flex items-center gap-1">
                    <Award className="w-3 h-3 text-accent-cool" /> Credentials
                  </div>
                  <div className="text-xs font-bold text-primary-theme mt-1">
                    GAIQ & Google Ads AI
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-alt border border-theme">
                  <div className="text-[11px] text-subtle-theme font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-accent-warm" /> Status
                  </div>
                  <div className="text-xs font-bold text-accent-warm mt-1">
                    Immediate Joiner
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Competency Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="card-theme p-6 rounded-2xl card-hover-smooth flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 ${pillar.badgeClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-base font-bold text-primary-theme mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-theme leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t border-theme flex items-center text-[11px] font-semibold gap-1 ${pillar.textAccent}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Production-Proven
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
