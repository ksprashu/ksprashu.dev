import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { personalInfo } from './data';
import { Heart, Copyright, ArrowUp, Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to detect active sections for the header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'achievements', 'portfolio', 'blog', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for accuracy

      // Find the first section that is visible on screen
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Handle visibility of scroll to top button
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/25 selection:text-cyan-400">
      
      {/* Dynamic Glassmorphism Header */}
      <Header activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Achievements />
        <Portfolio />
        <Blog />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Beautiful Dark-Mode Footer */}
      <footer id="app-footer" className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Branding details */}
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-brand-cyan">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                ksprashu<span className="text-brand-cyan">.dev</span>
              </span>
            </div>

            {/* Copyright and signature */}
            <div className="flex flex-col items-center md:items-end gap-1.5 text-xs text-slate-500 font-sans">
              <p className="flex items-center gap-1">
                <Copyright className="h-3.5 w-3.5" /> {new Date().getFullYear()} Prashanth Subrahmanyam. All Rights Reserved.
              </p>
              <p className="flex items-center gap-1.5">
                Designed with <Heart className="h-3.5 w-3.5 text-rose-500 fill-current animate-pulse" /> for the Google Cloud JAPAC Developer Community.
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* Float Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 z-40 p-3 bg-slate-900 hover:bg-slate-800 text-brand-cyan border border-slate-800 rounded-xl shadow-2xl transition-all hover:scale-105 duration-200 cursor-pointer animate-bounce"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
