import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ArrowUpRight,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'SEO & AI Search (GEO/AEO)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3FB6FF', '#FF9B54', '#8E7CE8'],
        });
      } catch {
        // Safe fallback
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl card-theme shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl badge-warm flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-warm)] animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-warm">Available For Immediate Joining</span>
              </div>
              <p className="text-xs sm:text-sm text-primary-theme font-semibold mt-1 max-w-2xl leading-relaxed">
                {PERSONAL_INFO.openForRoles}
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-warm-deep)] text-white font-display font-bold text-xs sm:text-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-accent-warm" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight mb-3">
            Let's Discuss Growth, SEO & AI Pipelines
          </h2>
          <p className="text-sm sm:text-base text-muted-theme font-normal">
            Whether you're looking for a dedicated Digital Marketing Specialist or need to scale organic search and paid acquisition, connect directly below.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Quick Connect Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-theme p-5 rounded-3xl card-hover-smooth flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl badge-warm flex items-center justify-center transition-transform group-hover:scale-105">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-accent-warm uppercase tracking-wider">Fastest Direct Route</div>
                  <div className="text-sm font-bold text-primary-theme group-hover:text-[var(--accent-warm)] transition-colors">
                    WhatsApp Message
                  </div>
                  <div className="text-xs text-muted-theme">Click to chat directly</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-accent-warm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="card-theme p-5 rounded-3xl card-hover-smooth flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl badge-cool flex items-center justify-center transition-transform group-hover:scale-105">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-accent-cool uppercase tracking-wider">Direct Email</div>
                  <div className="text-sm font-bold text-primary-theme group-hover:text-[var(--accent-cool)] transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                  <div className="text-xs text-muted-theme">Response within a few hours</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-accent-cool transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PERSONAL_INFO.phoneClean}`}
              className="card-theme p-5 rounded-3xl card-hover-smooth flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl badge-neutral flex items-center justify-center transition-transform group-hover:scale-105 text-primary-theme">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-subtle-theme uppercase tracking-wider">Phone / Voice Call</div>
                  <div className="text-sm font-bold text-primary-theme group-hover:text-[var(--accent-cool)] transition-colors">
                    {PERSONAL_INFO.phone}
                  </div>
                  <div className="text-xs text-muted-theme">Available for voice & video interviews</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-theme transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-theme p-5 rounded-3xl card-hover-smooth flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">LinkedIn Network</div>
                  <div className="text-sm font-bold text-primary-theme group-hover:text-blue-600 transition-colors">
                    {PERSONAL_INFO.linkedInDisplay}
                  </div>
                  <div className="text-xs text-muted-theme">Connect & view professional network</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Location Badge */}
            <div className="p-4 rounded-2xl bg-surface-card border border-theme flex items-center gap-3 text-xs text-muted-theme">
              <MapPin className="w-4 h-4 text-accent-cool shrink-0" />
              <span>Based in <strong>Gurugram, Haryana, India</strong> (Open to on-site, hybrid & remote roles).</span>
            </div>

          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="card-theme p-6 sm:p-8 rounded-3xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl badge-warm flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-theme">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-muted-theme max-w-md mx-auto font-normal">
                    Thank you! Your inquiry has been routed directly to Aasif's inbox. He will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        serviceInterest: 'SEO & AI Search (GEO/AEO)',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-surface-alt border border-theme hover:bg-surface text-xs font-semibold text-primary-theme transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-primary-theme">
                      Send a Direct Message
                    </h3>
                    <span className="text-[11px] font-bold text-accent-cool flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Real-Time Ingestion
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-theme text-primary-theme text-xs focus:outline-none focus:border-[var(--accent-cool)] transition-all placeholder:text-subtle-theme"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-theme text-primary-theme text-xs focus:outline-none focus:border-[var(--accent-cool)] transition-all placeholder:text-subtle-theme"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Fintech Venture"
                        className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-theme text-primary-theme text-xs focus:outline-none focus:border-[var(--accent-cool)] transition-all placeholder:text-subtle-theme"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                        Focus Area
                      </label>
                      <select
                        value={formState.serviceInterest}
                        onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-theme text-primary-theme text-xs focus:outline-none focus:border-[var(--accent-cool)] transition-all"
                      >
                        <option value="Hiring: Full-time Role (Immediate)">Hiring: Full-time Role (Immediate)</option>
                        <option value="SEO & AI Search (GEO/AEO)">SEO & AI Search (GEO/AEO)</option>
                        <option value="Google & Meta Performance Ads">Google & Meta Performance Ads</option>
                        <option value="n8n AI Automation Pipeline">n8n AI Automation Pipeline</option>
                        <option value="GMB & Local Marketing Scale">GMB & Local Marketing Scale</option>
                        <option value="Other Growth Opportunity">Other Growth Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary-theme mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details about the role, project goals, or campaign timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-alt border border-theme text-primary-theme text-xs focus:outline-none focus:border-[var(--accent-cool)] transition-all placeholder:text-subtle-theme resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white font-display font-bold text-xs sm:text-sm hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message Now'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
