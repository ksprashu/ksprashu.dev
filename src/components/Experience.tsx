import { experiences } from '../data';
import { Briefcase, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto" />
          <p className="mt-4 font-sans text-slate-400 text-sm leading-relaxed">
            My career track records designing platforms, speaking at developer workshops, and managing DevRel operations across global territories.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-900">
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline center bubble node indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-10 w-8 h-8 rounded-full bg-slate-950 border-2 border-brand-cyan flex items-center justify-center text-brand-cyan shadow-lg shadow-cyan-500/20">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>

                {/* Left/Right empty gap spacers for desktop layout */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card Panel */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 relative">
                  <div className="bg-slate-900/30 border border-slate-900 hover:border-slate-800/60 p-6 rounded-2xl shadow-xl transition-all relative group">
                    {/* Glowing highlight indicator on active role */}
                    {index === 0 && (
                      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
                    )}

                    {/* Timeline Role Header details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[10px] font-mono text-brand-cyan font-bold uppercase tracking-wider">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-semibold text-base md:text-lg text-white">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-1 text-slate-500 text-xs font-sans">
                        <MapPin className="h-3.5 w-3.5 text-slate-600" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Brief paragraph introduction */}
                    <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed mb-4 pb-4 border-b border-slate-800/80">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights List */}
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs text-slate-400 font-sans leading-relaxed">
                          <ChevronRight className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0 mt-0.5 mr-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
}
