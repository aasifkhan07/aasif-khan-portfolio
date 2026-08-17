import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  MapPin, 
  TrendingUp, 
  Cpu, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Activity,
  MessageCircle,
  Search
} from 'lucide-react';
import { PERSONAL_INFO, HEADLINE_METRICS, type MetricItem } from '../data/portfolioData';
import { useCountUp } from '../hooks/useCountUp';


// Custom Mini Sparklines for each metric
const SparklineIcon: React.FC<{ type: string; color: string }> = ({ type, color }) => {
  if (type.includes('GMB') || type.includes('300')) {
    return (
      <svg className="w-12 h-6" viewBox="0 0 50 24" fill="none">
        <path d="M2 20L14 15L26 17L38 8L48 2" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 20L14 15L26 17L38 8L48 2V24H2V20Z" fill={color} fillOpacity="0.12"/>
      </svg>
    );
  }
  if (type.includes('PPC') || type.includes('25')) {
    return (
      <svg className="w-12 h-6" viewBox="0 0 50 24" fill="none">
        <path d="M2 18C10 18 16 10 26 10C36 10 40 4 48 3" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M2 18C10 18 16 10 26 10C36 10 40 4 48 3V24H2V18Z" fill={color} fillOpacity="0.12"/>
      </svg>
    );
  }
  if (type.includes('WhatsApp') || type.includes('45')) {
    return (
      <svg className="w-12 h-6" viewBox="0 0 50 24" fill="none">
        <path d="M2 22L12 16L24 18L34 7L48 4" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="48" cy="4" r="3" fill={color}/>
      </svg>
    );
  }
  return (
    <svg className="w-12 h-6" viewBox="0 0 50 24" fill="none">
      <rect x="4" y="14" width="6" height="8" rx="2" fill={color} fillOpacity="0.4"/>
      <rect x="16" y="10" width="6" height="12" rx="2" fill={color} fillOpacity="0.6"/>
      <rect x="28" y="6" width="6" height="16" rx="2" fill={color} fillOpacity="0.8"/>
      <rect x="40" y="2" width="6" height="20" rx="2" fill={color}/>
    </svg>
  );
};

const StatCard: React.FC<{ metric: MetricItem; idx: number }> = ({ metric, idx }) => {
  const { count, ref } = useCountUp(metric.number, 1800);
  const isWarm = metric.spectrum === 'warm';
  const accentColor = isWarm ? 'var(--accent-warm)' : 'var(--accent-cool)';
  const cardStyle = isWarm ? 'card-theme-warm' : 'card-theme-cool';
  const badgeStyle = isWarm ? 'badge-warm' : 'badge-cool';
  const textGrad = isWarm ? 'text-accent-warm' : 'text-accent-cool';
  const isFeatured = idx === 0 || idx === 2;

  return (
    <div
      className={`${cardStyle} ${
        isFeatured ? 'p-6 sm:p-7' : 'p-5 sm:p-6'
      } rounded-3xl relative overflow-hidden group card-hover-smooth flex flex-col justify-between`}
    >
      <div>
        {/* Top Label & Sparkline */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${badgeStyle}`}>
            {metric.badge}
          </span>
          <SparklineIcon type={metric.label} color={accentColor} />
        </div>

        {/* Tabular Metric Counter */}
        <div className="flex items-baseline gap-1 my-2">
          <span
            ref={ref}
            className={`font-mono-data text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${textGrad}`}
          >
            {metric.number === 3 && metric.suffix.includes('–') ? (
              `Top ${count}${metric.suffix}`
            ) : (
              `${count}${metric.suffix}`
            )}
          </span>
        </div>

        {/* Metric Title */}
        <h3 className="text-sm font-bold text-primary-theme mb-1">
          {metric.label}
        </h3>
      </div>

      <p className="text-xs text-muted-theme line-clamp-2 mt-2 pt-2 border-t border-theme">
        {metric.subtext}
      </p>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full card-theme backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-warm)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-warm)]"></span>
              </span>
              <span className="text-xs font-bold text-accent-warm">
                {PERSONAL_INFO.statusBadge}
              </span>
              <span className="text-subtle-theme">•</span>
              <span className="text-xs font-medium text-muted-theme flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-cool" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline with Strict 1-Accent Rule */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-theme leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-theme leading-snug max-w-2xl">
                Turning Search, Ads & AI Automation into{' '}
                <span className="text-hero-gradient">Measurable Growth</span>
              </div>
            </div>

            {/* 100% Neutral Body Bio (No inline colored words) */}
            <p className="text-base sm:text-lg text-muted-theme leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* Capability Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 text-xs font-semibold rounded-lg badge-cool flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                GEO & AEO Search
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-lg badge-warm flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Google & Meta Ads
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-lg badge-cool flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                n8n AI Pipelines
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-lg badge-warm flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Lead Automation
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white font-display font-bold text-sm hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 group shadow-sm"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-surface-card border border-theme text-primary-theme font-semibold text-sm hover:bg-surface-alt active:scale-95 transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-accent-cool" />
                <span>View Full Resume</span>
              </a>

              <a
                href="#pipeline"
                className="px-4 py-3.5 rounded-xl text-muted-theme hover:text-primary-theme text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <Activity className="w-4 h-4 text-accent-warm" />
                <span>Interactive Pipeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Headshot with Crisp Light/Dark Theme Framing */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[390px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-br from-[var(--accent-cool)] via-transparent to-[var(--accent-warm)] shadow-xl overflow-hidden card-theme">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-surface-card">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt="Aasif Khan - Digital Marketing Specialist"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-70"></div>

                  {/* On-image Name Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-surface-card/90 backdrop-blur-md border border-theme flex items-center justify-between shadow-md">
                    <div>
                      <div className="text-xs font-bold text-primary-theme font-display">Aasif Khan</div>
                      <div className="text-[11px] text-muted-theme font-medium">Growth Marketing & AI Systems</div>
                    </div>
                    <div className="p-1.5 rounded-lg badge-cool">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-3 sm:p-3.5 rounded-2xl card-theme shadow-xl flex items-center gap-3 animate-float card-hover-smooth z-20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-cool)] to-[var(--accent-cool-deep)] flex items-center justify-center text-white font-bold shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-theme">AI Search & GEO</div>
                  <div className="text-xs font-bold text-primary-theme flex items-center gap-1">
                    Organic Reach <span className="text-accent-cool">+40%</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-3 sm:p-3.5 rounded-2xl card-theme shadow-xl flex items-center gap-3 animate-float [animation-delay:2.5s] card-hover-smooth z-20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent-warm-deep)] flex items-center justify-center text-white font-bold shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-theme">WhatsApp Leads</div>
                  <div className="text-xs font-bold text-primary-theme flex items-center gap-1">
                    Direct Surge <span className="text-accent-warm">+45%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Asymmetric 4-Metric Counter Grid Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-theme">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HEADLINE_METRICS.map((metric, idx) => (
              <StatCard key={metric.label} metric={metric} idx={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
