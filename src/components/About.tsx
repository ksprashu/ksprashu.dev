import { personalInfo } from '../data';
import { MapPin, Mail, Sparkles, ExternalLink, ShieldAlert, Laptop, Award } from 'lucide-react';

export default function About() {
  const focusAreas = [
    {
      title: 'Generative AI Engineering',
      desc: 'Expertise in building systems with Gemini, implementing semantic models, prompt refinement, and context routing.',
      icon: <Sparkles className="h-5 w-5 text-cyan-400" />
    },
    {
      title: 'AI Agents & Orchestration',
      desc: 'Developing stateful, goal-directed autonomous agents using LangGraph and function-calling parameters.',
      icon: <Laptop className="h-5 w-5 text-indigo-400" />
    },
    {
      title: 'DevRel & Global Advocacy',
      desc: 'Fostering massive global tech communities, curating high-impact open-source documentation, and speaking.',
      icon: <Award className="h-5 w-5 text-blue-400" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Professional Summary
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto md:mx-0" />
          <p className="mt-4 font-sans text-slate-400 text-sm md:text-base leading-relaxed">
            A snapshot of my professional mission, core domains of expertise, and advocacy driving cloud ecosystems across Japan and the Asia-Pacific.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left bio column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-white tracking-tight">
              Leading the Developer Journey into the GenAI Era
            </h3>
            
            <p className="font-sans text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
              {personalInfo.bio}
            </p>

            {/* Quick Contact metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-900">
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
                  <MapPin className="h-4 w-4 text-brand-cyan" />
                </div>
                <span className="text-sm font-sans">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
                  <Mail className="h-4 w-4 text-brand-blue" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-sans hover:text-brand-cyan transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Cards Focus Area Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-all" />
              
              <h4 className="font-display text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <ShieldAlert className="h-5 w-5 text-brand-cyan" />
                <span>Strategic Core Focus</span>
              </h4>

              <div className="space-y-6">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-sans font-semibold text-sm text-white">
                        {area.title}
                      </h5>
                      <p className="font-sans text-xs text-slate-400 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left space-y-1">
                <p className="font-sans font-medium text-sm text-slate-300">Looking for my official resume?</p>
                <p className="font-sans text-xs text-slate-500">Access my professional profile anytime online.</p>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs font-semibold rounded-xl flex items-center justify-center space-x-1 border border-slate-700 transition-all cursor-pointer"
              >
                <span>View LinkedIn</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
