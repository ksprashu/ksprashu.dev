import { useState, useEffect } from 'react';
import { personalInfo } from '../data';
import { Menu, X, Linkedin, Github, BookOpen, Terminal } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Articles', id: 'blog' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-lg flex items-center justify-center text-white shadow-md shadow-cyan-500/10 group-hover:shadow-cyan-500/20 transition-all">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors">
              ksprashu<span className="text-brand-cyan">.dev</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-slate-900 text-brand-cyan border border-slate-800/80 shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Socials / External links */}
          <div className="hidden lg:flex items-center space-x-3 border-l border-slate-800 pl-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Blog"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all"
            >
              <BookOpen className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-2 shadow-2xl transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-slate-900 text-brand-cyan border border-slate-800'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-900 flex items-center space-x-6 px-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-all"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm font-sans">LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-all"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm font-sans">GitHub</span>
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-all"
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-sans">Medium</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
