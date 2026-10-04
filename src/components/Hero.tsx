import { useState, useEffect } from 'react';
import { personalInfo } from '../data';
import { ArrowRight, Sparkles, Terminal, Cpu, Cloud, Award } from 'lucide-react';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = [
    'Leading Developer Relations across JAPAC',
    'Pioneering Generative AI Blueprints',
    'Orchestrating Production-Grade AI Agents',
    'Architecting Multi-Modal Cloud Pipelines'
  ];

  const typingSpeed = 70;
  const deletingSpeed = 40;
  const pauseDelay = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = taglines[currentTextIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex]);

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Gradients and Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl" />
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* Status Chip */}
            <div className="inline-flex items-center space-x-2 self-center lg:self-start px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span>Based in {personalInfo.location.split(' (')[0]}</span>
            </div>

            {/* Title / Name */}
            <div className="space-y-2">
              <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                Hi, I'm <br />
                <span className="font-extrabold bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-indigo bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              {/* Dynamic Tagline Typing */}
              <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start font-mono text-base md:text-xl text-slate-400">
                <Terminal className="h-5 w-5 text-brand-cyan mr-2 flex-shrink-0 animate-pulse" />
                <span className="text-white border-r-2 border-brand-cyan pr-1 animate-typing-cursor">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="font-sans text-slate-400 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Developer Advocate & System Architect specializing in **Generative AI, Autonomous Agent orchestration, and Cloud engineering**. 
              Driving developer enablement and strategic advocacy across Japan and Asia-Pacific at **Google Cloud**.
            </p>

            {/* Core Specialties Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-xs font-medium text-brand-cyan flex items-center gap-1">
                <Cpu className="h-3.5 w-3.5" /> Generative AI
              </span>
              <span className="px-3 py-1 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg text-xs font-medium text-brand-indigo flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5" /> AI Agents
              </span>
              <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-xs font-medium text-brand-blue flex items-center gap-1">
                <Cloud className="h-3.5 w-3.5" /> Cloud Platform
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleScrollToPortfolio}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 font-sans font-semibold text-sm rounded-xl hover:opacity-90 shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center group cursor-pointer"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 border border-slate-800 text-white font-sans font-medium text-sm rounded-xl hover:bg-slate-800 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Console Preview Column */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
            {/* Terminal Mockup */}
            <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-500 select-none">gcloud-ai-session.sh</span>
                <div className="w-6" /> {/* spacer */}
              </div>
              {/* Body */}
              <div className="p-6 font-mono text-xs text-slate-300 space-y-4">
                <div className="space-y-1">
                  <p className="text-slate-500">$ curl -s https://api.ksprashu.dev/profile</p>
                  <p className="text-emerald-400">{'['}</p>
                  <p className="pl-4">"name": <span className="text-cyan-400">"{personalInfo.name}"</span>,</p>
                  <p className="pl-4">"role": <span className="text-cyan-400">"JAPAC Developer Relations"</span>,</p>
                  <p className="pl-4">"org": <span className="text-cyan-400">"Google Cloud"</span>,</p>
                  <p className="pl-4">"focus": <span className="text-yellow-400">["Generative_AI", "Agentic_Workflows", "RAG"]</span></p>
                  <p className="text-emerald-400">{']'}</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-slate-500">$ gcloud ai models list --focus=gemini</p>
                  <p className="text-slate-400">Loading active agent session...</p>
                  <p className="text-brand-cyan flex items-center gap-1 animate-pulse">
                    <Sparkles className="h-3 w-3" /> Gemini 1.5 Pro: ONLINE (2M Context)
                  </p>
                  <p className="text-brand-blue flex items-center gap-1">
                    <Cloud className="h-3 w-3" /> Vertex AI Engine: ACTIVE
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-3 space-y-1">
                  <p className="text-slate-500">$ cat ~/.skills</p>
                  <p className="text-slate-400">Python, TS, Go, Kubernetes, RAG, LangGraph</p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-800/60">
                  <span className="flex items-center gap-1"><Award className="h-3.5 w-3.5 text-yellow-500/80" /> Google Developer Relations</span>
                  <span>v1.5.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
