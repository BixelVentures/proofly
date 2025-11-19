import React, { useState } from 'react';
import { Button } from './Button';
import { TeamSize } from '../types';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

export const JoinForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: TeamSize.SOLO
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="join" className="py-32 bg-[#050505] text-white flex items-center justify-center min-h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="text-center p-8 animate-fade-in relative z-10">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">You're on the list.</h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg">Thanks for getting started. We'll be in touch shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 noise-texture opacity-20 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20 relative z-10">
        
        <div className="flex-1 space-y-8">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            Limited Spots Available
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
            Join the installers <br/>shaping Proofly.
          </h2>
          <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            Get early access, influence the roadmap, and lock in founder pricing. 
          </p>
          
          <div className="flex items-center gap-4 pt-8 border-t border-white/10 mt-8">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050505] overflow-hidden">
                    <img src={src} alt="User" className="w-full h-full object-cover grayscale opacity-70" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold">140+ installers</span>
                <span className="text-sm text-gray-500">joined this week</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:border-white/40 focus:bg-black/60 outline-none transition-all text-white text-lg placeholder-gray-700"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:border-white/40 focus:bg-black/60 outline-none transition-all text-white text-lg placeholder-gray-700"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="company" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:border-white/40 focus:bg-black/60 outline-none transition-all text-white text-lg placeholder-gray-700"
                  placeholder="Acme Electric"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Team Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.values(TeamSize).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({...formData, size})}
                      className={`py-3 px-2 text-sm font-medium rounded-xl border transition-all duration-200 ${
                        formData.size === size 
                          ? 'bg-white border-white text-black font-bold shadow-lg' 
                          : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="lg" className="w-full bg-white text-black hover:bg-gray-200 rounded-2xl h-16 text-lg font-bold transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : <span className="flex items-center">Get started <ArrowRight className="ml-2 w-5 h-5" /></span>}
              </Button>

              <p className="text-xs text-center text-gray-600 mt-6">
                No credit card. We’ll notify you when your spot is ready.
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};