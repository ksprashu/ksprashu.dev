import { skills } from '../data';
import { Sparkles, Cloud, Code2, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Generative AI & Agentic Orchestration',
      description: 'Building autonomous ecosystems, hybrid retrieval mechanisms, and context routing workflows.',
      icon: <Sparkles className="h-5 w-5 text-cyan-400" />,
      items: skills.ai
    },
    {
      title: 'Cloud Platforms & Infrastructure',
      description: 'Scaling containers, configuring cloud native databases, and managing robust deployment environments.',
      icon: <Cloud className="h-5 w-5 text-indigo-400" />,
      items: skills.cloud
    },
    {
      title: 'Languages & Core Technologies',
      description: 'Full-stack software engineering languages and scripting standards.',
      icon: <Code2 className="h-5 w-5 text-blue-400" />,
      items: skills.languages
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Specialized Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto" />
          <p className="mt-4 font-sans text-slate-400 text-sm leading-relaxed">
            A comprehensive overview of my daily development stack, software frameworks, cloud native resources, and specialized AI models.
          </p>
        </div>

        {/* Categories Stack Card list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/20 border border-slate-900/80 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-slate-800 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card top details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl flex-shrink-0 text-brand-cyan">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-base text-white">
                    {cat.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-slate-400 leading-relaxed pb-4 border-b border-slate-900">
                  {cat.description}
                </p>

                {/* Grid list of tech skills chips */}
                <div className="grid grid-cols-1 gap-2 pt-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2.5 py-1.5 px-3 bg-slate-900/40 border border-slate-900/60 rounded-xl hover:bg-slate-900/80 hover:border-slate-800/80 transition-all text-xs text-slate-300 font-mono"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative accent footer line */}
              <div className="mt-6 h-1 w-12 bg-slate-800 group-hover:bg-brand-cyan group-hover:w-full rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
