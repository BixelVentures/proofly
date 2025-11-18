import React, { useState } from 'react';
import { Button } from './Button';
import { TeamSize } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const JoinForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: TeamSize.SOLO
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <section id="join" className="py-32 bg-proofly-black text-white flex items-center justify-center min-h-[600px]">
        <div className="text-center p-8 animate-fade-in">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-900/20">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">You're on the list.</h2>
          <p className="text-gray-400 max-w-md mx-auto text-lg">Thanks for joining early access. We'll be in touch shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-32 bg-proofly-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-20">
        
        <div className="flex-1 space-y-8">
          <div className="inline-block px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-xs font-medium text-gray-300 mb-4">
            Limited Spots Available
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
            Join the installers shaping Proofly.
          </h2>
          <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            Get early access, influence the roadmap, and lock in founder pricing. 
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-4 border-proofly-black"></div>
              ))}
            </div>
            <span className="text-sm text-gray-500">Joined by 140+ installers this week</span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-all text-white text-xl placeholder-gray-800"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-all text-white text-xl placeholder-gray-800"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="company" className="block text-sm font-medium text-gray-500 mb-2 transition-colors group-focus-within:text-white">Company Name</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-700 focus:border-white outline-none transition-all text-white text-xl placeholder-gray-800"
                  placeholder="Acme Electric"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-4">Team Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.values(TeamSize).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({...formData, size})}
                      className={`py-3 px-2 text-sm rounded-xl border transition-all duration-300 ${
                        formData.size === size 
                          ? 'bg-white border-white text-black font-bold' 
                          : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" className="w-full bg-white text-black hover:bg-gray-200 rounded-2xl h-16 text-lg">
                Join early access <ArrowRight className="ml-2 w-5 h-5" />
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