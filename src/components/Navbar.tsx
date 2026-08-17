import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  FileText, 
  Send, 
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'AI Pipeline', href: '#pipeline' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3 bg-surface/90 backdrop-blur-xl border-b border-theme shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Aasif Khan - Home"
          >
            <div className="relative w-10 h-10 rounded-xl p-[1.5px] bg-gradient-to-br from-[var(--accent-cool)] to-[var(--accent-warm)] transition-transform duration-200 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full bg-surface-card rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-sm tracking-wider text-hero-gradient">
                  {PERSONAL_INFO.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-primary-theme group-hover:text-[var(--accent-cool)] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-medium text-accent-warm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-warm)] animate-ping"></span>
                {PERSONAL_INFO.statusBadge}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-surface-card border border-theme backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-muted-theme hover:text-primary-theme hover:bg-surface-alt rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Switch */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-muted-theme hover:text-primary-theme bg-surface-card border border-theme hover:bg-surface-alt transition-colors shadow-sm"
              aria-label="Toggle dark/light theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold rounded-xl text-primary-theme bg-surface-card border border-theme hover:bg-surface-alt transition-all flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-accent-cool" />
              <span>Resume</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5 font-display shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-surface-card border border-theme text-muted-theme"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface-card border border-theme text-muted-theme hover:text-primary-theme"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-surface-card border border-theme shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-theme hover:bg-surface-alt hover:text-primary-theme transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-theme flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-surface-alt text-primary-theme border border-theme flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-accent-cool" />
                View / Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
