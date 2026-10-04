import { achievements } from '../data';
import { Globe, Cpu, Mic, Code, LucideIcon } from 'lucide-react';

export default function Achievements() {
  // Safe dynamic icon mapping
  const iconMap: Record<string, LucideIcon> = {
    Globe: Globe,
    Cpu: Cpu,
    Mic: Mic,
    Code: Code,
  };

  return (
    <section id="achievements" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Key Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto" />
          <p className="mt-4 font-sans text-slate-400 text-sm leading-relaxed">
            Leading advocacy initiatives, creating open-source software structures, and driving developer engagement throughout the JAPAC ecosystem.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach) => {
            const IconComponent = iconMap[ach.iconName] || Globe;
            return (
              <div
                key={ach.id}
                className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 hover:border-slate-800 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                {/* Icon wrapper */}
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl inline-flex items-center justify-center text-brand-cyan mb-5 relative z-10">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Metric count */}
                <div className="text-3xl font-display font-bold text-white tracking-tight mb-2">
                  {ach.metric}
                </div>

                {/* Achievement Name */}
                <h3 className="font-sans font-bold text-sm text-slate-200 mb-2">
                  {ach.title}
                </h3>

                {/* Subtext description */}
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
