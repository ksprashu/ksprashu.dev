import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { Search, Github, Star, GitFork, ExternalLink, X, ArrowUpRight, Sparkles, Code, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'GenAI', 'AI Agents', 'Cloud Architecture'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Project Portfolio
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto" />
          <p className="mt-4 font-sans text-slate-400 text-sm leading-relaxed">
            Hands-on boilerplate templates, reference architectures, and developer actions addressing production-grade LLM implementation bottlenecks.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-900">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-slate-950 border-transparent shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search by title, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl font-sans text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
            />
          </div>
        </div>

        {/* Portfolio Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/20 border border-slate-900 hover:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-6 md:p-8 space-y-4">
                  {/* Card category and meta */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono font-medium text-brand-cyan tracking-wider uppercase flex items-center gap-1">
                      {project.category === 'AI Agents' && <Cpu className="h-3 w-3" />}
                      {project.category === 'GenAI' && <Sparkles className="h-3 w-3" />}
                      {project.category === 'Cloud Architecture' && <Code className="h-3 w-3" />}
                      {project.category}
                    </span>
                    
                    {/* Stars / Forks metrics */}
                    <div className="flex items-center space-x-3 text-slate-500 text-xs font-mono">
                      {project.stars && (
                        <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          {project.stars}
                        </span>
                      )}
                      {project.forks && (
                        <span className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                          <GitFork className="h-3.5 w-3.5" />
                          {project.forks}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-900/60 text-slate-400 border border-slate-800/40 rounded-md text-[10px] font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 bg-slate-900/40 border-t border-slate-900 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-sans font-semibold text-slate-400 group-hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    Details & Architecture <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-lg transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/10 border border-dashed border-slate-900 rounded-2xl">
            <p className="font-sans text-sm text-slate-500">No projects found matching the criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-sans font-semibold text-white rounded-xl transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Detailed Project Information Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              {/* Header */}
              <div className="sticky top-0 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
                <span className="px-2 py-0.5 bg-slate-800 text-brand-cyan border border-slate-700 rounded-md text-[10px] font-mono">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-slate-500 text-xs font-mono">
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-current text-yellow-500/80" /> {selectedProject.stars} stars</span>
                    <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5 text-brand-blue" /> {selectedProject.forks} forks</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-sm text-slate-200">PROJECT OVERVIEW</h4>
                  <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Tech stack section */}
                <div className="space-y-3">
                  <h4 className="font-sans font-bold text-sm text-slate-200">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated Deployment Link details */}
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs font-sans">
                  <span className="text-slate-400">Source code is fully documented.</span>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-brand-cyan hover:opacity-90 text-slate-950 font-semibold rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <span>Github Repo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
