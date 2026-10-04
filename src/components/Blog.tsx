import React, { useState } from 'react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, Copy, Check, Share2 } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShareClick = (e: React.MouseEvent, post: BlogPost) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.origin + `?article=${post.id}`);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="blog" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Technical Articles & Insights
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto" />
          <p className="mt-4 font-sans text-slate-400 text-sm leading-relaxed">
            Deep-dives exploring generative intelligence patterns, multi-agent orchestrations, and practical cloud-native implementations.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-slate-900/30 border border-slate-900 hover:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Article Header Category */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-mono font-medium text-brand-cyan uppercase">
                  <Sparkles className="h-3 w-3" />
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white tracking-tight group-hover:text-brand-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt Summary */}
                <p className="font-sans text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 bg-slate-900/40 border-t border-slate-900/60 flex items-center justify-between">
                <span className="text-xs font-sans font-semibold text-brand-cyan group-hover:text-white transition-colors flex items-center gap-1">
                  Read Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Share Button */}
                <button
                  onClick={(e) => handleShareClick(e, post)}
                  className="p-1.5 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:bg-slate-800 text-slate-500 transition-all cursor-pointer"
                  title="Copy link to clipboard"
                >
                  {copiedId === post.id ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Reader Modal Overlay */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
              
              {/* Sticky reader header controls */}
              <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
                <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-brand-cyan" /> {selectedPost.date}</span>
                  <span className="text-slate-700">•</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-brand-blue" /> {selectedPost.readTime}</span>
                </div>
                
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Full Article Text typography wrapper */}
              <div className="p-6 md:p-10 space-y-6">
                
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 bg-slate-950 text-brand-cyan border border-slate-800 rounded-lg text-[10px] font-mono uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>

                {/* Sub-summary card */}
                <div className="p-4 bg-slate-950 border-l-2 border-brand-cyan bg-slate-950/40 rounded-r-xl">
                  <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed italic">
                    "{selectedPost.summary}"
                  </p>
                </div>

                {/* Main article markup */}
                <div className="font-sans text-sm text-slate-300 leading-relaxed space-y-4 whitespace-pre-line border-t border-slate-900 pt-6">
                  {selectedPost.content}
                </div>

                {/* Footer tags list */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-900">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-950 text-slate-400 border border-slate-800/80 rounded-lg text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Callout of real articles link */}
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
                  <span className="text-slate-400 text-center sm:text-left">Read more deep-dives and full publications on Medium.</span>
                  <a
                    href="https://medium.com/@ksprashu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center space-x-1.5 transition-all border border-slate-700 cursor-pointer"
                  >
                    <span>Visit Medium Channel</span>
                    <BookOpen className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
