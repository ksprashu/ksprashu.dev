import React, { useState } from 'react';
import { personalInfo } from '../data';
import { Mail, Linkedin, Github, BookOpen, Send, CheckCircle, ArrowRight, MessageSquare, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate server side request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto dismiss success toast
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full mt-3 mx-auto" />
          <p className="mt-4 font-sans text-slate-400 text-sm leading-relaxed">
            Interested in arranging a keynote speaking engagement, coordinating custom developer bootcamps, or debating AI Agent architectures? Ping me here.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-2xl text-white tracking-tight">
                Let's Build Something Together
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed">
                Whether you represent a developer community, startup incubator, or enterprise engineering board, I am always excited to connect and exchange perspectives on Generative intelligence.
              </p>
            </div>

            {/* Direct Connect Grid */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 bg-slate-900/40 border border-slate-900 rounded-2xl hover:border-slate-800 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-brand-cyan group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Address</div>
                  <div className="text-sm font-sans text-slate-300 group-hover:text-brand-cyan transition-colors">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-slate-900/40 border border-slate-900 rounded-2xl hover:border-slate-800 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-brand-blue group-hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn Account</div>
                  <div className="text-sm font-sans text-slate-300 group-hover:text-brand-blue transition-colors">/in/ksprashu</div>
                </div>
              </a>
            </div>

            {/* Social icons bottom row */}
            <div className="pt-4 border-t border-slate-900">
              <p className="font-sans text-xs text-slate-500 mb-3 uppercase tracking-wider">Alternative Channels</p>
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-xl transition-all"
                  title="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-xl transition-all"
                  title="Medium blog"
                >
                  <BookOpen className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card Panel */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/20 border border-slate-900 p-6 md:p-8 rounded-3xl relative overflow-hidden">
              <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-brand-cyan" />
                <span>Send a Direct Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-sans text-xs font-semibold text-slate-400">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl font-sans text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all disabled:opacity-50"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-sans text-xs font-semibold text-slate-400">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl font-sans text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all disabled:opacity-50"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="font-sans text-xs font-semibold text-slate-400">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl font-sans text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all disabled:opacity-50"
                    placeholder="Speaking invite / Workshop coordination / Partnership"
                  />
                </div>

                {/* Message Text area */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-sans text-xs font-semibold text-slate-400">Message Detail *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl font-sans text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-cyan transition-all resize-none disabled:opacity-50"
                    placeholder="Describe your proposal in brief..."
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue disabled:opacity-50 text-slate-950 font-sans font-semibold text-xs rounded-xl flex items-center justify-center space-x-1.5 hover:opacity-95 shadow-lg shadow-cyan-500/10 cursor-pointer disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-3 w-3 border-2 border-slate-950 border-t-transparent mr-2" />
                        <span>Transmission routing...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Notification Inline Dialog */}
              {submitSuccess && (
                <div className="absolute inset-x-6 bottom-6 bg-emerald-950 border border-emerald-900 p-4 rounded-xl flex items-start space-x-3 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h5 className="font-sans font-bold text-xs text-white">Transmission Successful</h5>
                    <p className="font-sans text-[11px] text-emerald-400 leading-normal">
                      Thank you! Your message has been routed correctly. I will respond to your email shortly.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
