import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  KEY_PROJECTS, 
  CERTIFICATIONS, 
  EDUCATION, 
  SKILL_CATEGORIES 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-surface-card rounded-3xl border border-theme shadow-2xl overflow-hidden my-6 print:border-none print:shadow-none print:my-0 print:bg-white print:text-black">
        
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-surface-card/95 backdrop-blur-lg border-b border-theme flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-warm)]"></span>
            <span className="font-display font-bold text-sm text-primary-theme">
              Aasif Khan — Professional Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:opacity-90 transition-opacity"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-surface-alt hover:bg-surface text-muted-theme hover:text-primary-theme transition-colors border border-theme"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 print:p-4 print:space-y-4 print:text-black text-primary-theme">
          
          {/* Header */}
          <div className="border-b border-theme print:border-slate-300 pb-6 print:pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-theme print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-muted-theme print:text-slate-700 mt-0.5">
                  {PERSONAL_INFO.subRoles}
                </p>
              </div>
              <div className="text-xs text-muted-theme print:text-slate-600 space-y-1 sm:text-right font-normal">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-accent-cool print:text-black" /> {PERSONAL_INFO.location}
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-accent-cool print:text-black" /> {PERSONAL_INFO.email}
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3 h-3 text-accent-warm print:text-black" /> {PERSONAL_INFO.phone}
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <span>LinkedIn:</span> {PERSONAL_INFO.linkedInDisplay}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent-cool print:text-blue-800 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-theme print:text-slate-800 font-normal">
              {PERSONAL_INFO.aboutSummary}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent-warm print:text-orange-800 mb-3">
              Core Skills & Tools Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-surface-alt print:bg-slate-100 border border-theme print:border-slate-200">
                  <span className="font-bold text-primary-theme print:text-black block mb-1">{cat.title}:</span>
                  <span className="text-muted-theme print:text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent-cool print:text-blue-800 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.company} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-primary-theme print:text-black text-sm">{exp.role}</span>
                      <span className="text-accent-warm print:text-orange-700 font-semibold"> — {exp.company}</span>
                    </div>
                    <span className="text-muted-theme print:text-slate-600 font-medium">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-theme print:text-slate-700 pl-1 font-normal">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Campaign Case Studies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent-warm print:text-orange-800 mb-3">
              Key Client Projects & Campaign Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {KEY_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-surface-alt print:bg-slate-100 border border-theme print:border-slate-200 space-y-1">
                  <div className="font-bold text-primary-theme print:text-black flex justify-between">
                    <span>{proj.title}</span>
                    <span className="text-accent-cool font-mono-data font-bold">{proj.headlineMetric}</span>
                  </div>
                  <p className="text-[11px] text-subtle-theme print:text-slate-600">{proj.category} ({proj.timeline})</p>
                  <p className="text-muted-theme print:text-slate-700 text-[11.5px] font-normal">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent-cool print:text-blue-800 mb-2">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-muted-theme print:text-slate-700">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.title} className="flex items-start gap-1.5">
                    <span className="text-accent-cool font-bold">•</span>
                    <span><strong>{c.title}</strong> — {c.issuer} ({c.validity})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent-warm print:text-orange-800 mb-2">
                Education
              </h2>
              <ul className="space-y-1.5 text-xs text-muted-theme print:text-slate-700">
                {EDUCATION.map((edu) => (
                  <li key={edu.degree} className="flex items-start gap-1.5">
                    <span className="text-accent-warm font-bold">•</span>
                    <span><strong>{edu.degree}</strong> — {edu.institution} ({edu.period})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
