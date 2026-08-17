import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-theme bg-surface py-16 text-muted-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-theme">
          
          {/* Brand Col (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl p-[1.5px] bg-gradient-to-br from-[var(--accent-cool)] to-[var(--accent-warm)] shadow-sm">
                <div className="w-full h-full bg-surface-card rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-hero-gradient">
                    {PERSONAL_INFO.initials}
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-lg text-primary-theme">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted-theme max-w-sm leading-relaxed font-normal">
              {PERSONAL_INFO.subRoles}
            </p>

            <div className="flex items-center gap-2 text-xs text-accent-warm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-warm)] animate-ping"></span>
              <span className="font-bold">{PERSONAL_INFO.statusBadge}</span>
              <span className="text-subtle-theme">•</span>
              <span className="text-muted-theme flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-cool" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary-theme">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-primary-theme transition-colors">Overview</a></li>
              <li><a href="#about" className="hover:text-primary-theme transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary-theme transition-colors">Competencies & Stack</a></li>
              <li><a href="#pipeline" className="hover:text-primary-theme transition-colors">AI Pipeline</a></li>
              <li><a href="#experience" className="hover:text-primary-theme transition-colors">Milestones</a></li>
              <li><a href="#projects" className="hover:text-primary-theme transition-colors">Case Studies</a></li>
              <li><a href="#certifications" className="hover:text-primary-theme transition-colors">Credentials</a></li>
            </ul>
          </div>

          {/* Direct Channels (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary-theme">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-2 hover:text-primary-theme transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-cool" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phoneClean}`} 
                className="flex items-center gap-2 hover:text-primary-theme transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent-warm" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a 
                href={PERSONAL_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-primary-theme transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-accent-warm" />
                <span>WhatsApp Message</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.linkedInDisplay}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle-theme">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & TypeScript.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-surface-alt hover:bg-surface text-muted-theme hover:text-primary-theme transition-colors flex items-center gap-1.5 border border-theme"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
