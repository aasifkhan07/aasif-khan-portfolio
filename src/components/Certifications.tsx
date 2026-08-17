import React from 'react';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  Building, 
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-accent-cool" />
            <span>Credentials & Education</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight mb-4">
            Certifications & Academic Foundation
          </h2>
          <p className="text-sm sm:text-base text-muted-theme font-normal">
            Officially verified Google, Analytics, and Digital Marketing qualifications alongside academic computer science background.
          </p>
        </div>

        {/* Dual-Spectrum Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display text-lg font-bold text-primary-theme flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-accent-cool" />
              Industry Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => {
                const isCool = cert.spectrum === 'cool';
                const badgeClass = isCool ? 'badge-cool' : 'badge-warm';
                const textAccent = isCool ? 'text-accent-cool' : 'text-accent-warm';

                return (
                  <div
                    key={cert.title}
                    className="card-theme p-6 rounded-3xl card-hover-smooth flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${badgeClass}`}>
                          <CheckCircle2 className="w-3 h-3" />
                          {cert.status}
                        </span>
                        <span className="text-[11px] font-semibold text-subtle-theme">
                          {cert.issuer}
                        </span>
                      </div>

                      <h4 className="font-display text-sm font-bold text-primary-theme group-hover:text-[var(--accent-cool)] transition-colors mb-2 leading-snug">
                        {cert.title}
                      </h4>
                      {cert.certificateId && (
                        <p className="text-[10px] text-subtle-theme font-mono-data mb-2">
                          ID: {cert.certificateId}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-theme flex items-center justify-between text-xs text-muted-theme">
                      <span className="flex items-center gap-1">
                        <Calendar className={`w-3 h-3 ${textAccent}`} />
                        {cert.validity}
                      </span>
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-[11px] font-bold ${textAccent} flex items-center gap-1 hover:underline`}
                        >
                          Verified Credential ↗
                        </a>
                      ) : (
                        <span className={`text-[11px] font-bold ${textAccent}`}>Verified</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-lg font-bold text-primary-theme flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-accent-warm" />
              Academic Background
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="card-theme p-6 rounded-3xl card-hover-smooth space-y-3 group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-base font-bold text-primary-theme group-hover:text-[var(--accent-warm)] transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-muted-theme mt-0.5 flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-accent-cool" />
                        {edu.institution}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-xl bg-surface-alt border border-theme text-[11px] font-mono-data font-bold text-subtle-theme shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-muted-theme leading-relaxed font-normal">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
