import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Check, ChevronRight, CreditCard, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [step, setStep] = useState(0);

  // Simulate a live feed of activity
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000), // First message appears
      setTimeout(() => setStep(2), 2500), // Image uploads
      setTimeout(() => setStep(3), 4000), // Client approves
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      {/* Architectural Background Image with Fade */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-[0.02] grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/50 to-[#FAFAFA]"></div>
      </div>

      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none select-none opacity-40 mix-blend-multiply" />
      
      {/* Radial Gradient Fade for Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFA]/40 to-[#FAFAFA] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left z-20">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-8 animate-fade-in-up backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 font-mono">Systems Online</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] mb-8 text-proofly-black animate-fade-in-up">
              From chaos <br/>
              <span className="text-gray-300">to paid.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light animate-fade-in-up-delay">
              Overdue invoices? Chaotic WhatsApp threads? <br className="hidden md:block"/>
              Proofly gives you instant documentation, clear approvals, and fast payments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up-delay">
              <Button onClick={scrollToJoin} size="lg" className="w-full sm:w-auto shadow-xl shadow-black/10 hover:shadow-black/20 transition-all">Join early access</Button>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 text-proofly-black font-medium hover:text-gray-600 transition-colors px-6 py-3">
                See how it works <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Visual - Deconstructed Spatial Layout */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative h-[650px] flex items-center justify-center animate-fade-in-up-delay perspective-1000">
            
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/30 to-emerald-50/30 rounded-full blur-3xl -z-10 opacity-60" />

            {/* Schematic Lines (SVG) - Engineered Look */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 600 600">
               <path d="M 300 300 L 90 200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
               <path d="M 300 300 L 510 440" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
               <circle cx="300" cy="300" r="180" stroke="#e2e8f0" strokeWidth="1" fill="none" />
               <circle cx="300" cy="300" r="280" stroke="#f1f5f9" strokeWidth="1" fill="none" />
               
               {/* Connecting nodes */}
               <circle cx="90" cy="200" r="3" fill="#94a3b8" />
               <circle cx="510" cy="440" r="3" fill="#94a3b8" />
            </svg>

            {/* CENTRAL HUB: The Mobile Interface - Premium Ceramic Finish */}
            <div className="relative z-20 w-[300px] bg-[#F9F9F9] rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_0_0_10px_rgba(255,255,255,0.8),0_0_0_11px_rgba(0,0,0,0.05)] overflow-hidden transform transition-transform hover:scale-[1.02] duration-700">
              
              {/* Screen reflection/gloss */}
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none z-30 mix-blend-overlay"></div>
              
              <div className="bg-gray-50 h-full min-h-[580px] flex flex-col relative z-10">
                {/* Hardware Notch / Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-40 flex items-center justify-center gap-2 px-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-800/30"></div>
                </div>

                {/* Header */}
                <div className="bg-white/90 backdrop-blur-md pt-16 pb-4 border-b border-gray-100 sticky top-0 z-10 px-6">
                  <div className="flex items-start justify-between mb-2">
                     <div>
                        <h3 className="font-bold text-xl leading-tight text-gray-900 tracking-tight">Kitchen Reno</h3>
                        <p className="text-[10px] text-gray-400 font-mono font-medium mt-1 flex items-center gap-1">
                           <MapPin size={10} /> ID: 882-A
                        </p>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center text-xs font-bold shadow-lg">JD</div>
                  </div>
                </div>

                {/* Feed - LIVE ANIMATED */}
                <div className="p-5 space-y-6 flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                  
                  {/* Date Divider */}
                  <div className="flex items-center justify-center gap-2 opacity-40">
                    <div className="h-px bg-gray-300 w-8"></div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">Today</span>
                    <div className="h-px bg-gray-300 w-8"></div>
                  </div>

                  {/* Message 1 */}
                  <div className={`transition-all duration-700 ease-out transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex gap-3">
                      <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-sm text-gray-600 leading-relaxed max-w-[85%]">
                        New socket installed here. Ready for check?
                        <span className="text-[10px] text-gray-300 mt-2 block font-mono">10:42 AM</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Post - High Fidelity */}
                  <div className={`transition-all duration-700 ease-out delay-100 transform ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-white p-2.5 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                      <div className="aspect-video bg-zinc-100 rounded-2xl mb-3 relative overflow-hidden group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="work" />
                        
                        {/* Metadata Overlay on Image */}
                        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                            <div className="bg-black/40 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded-lg font-mono border border-white/10">
                              IMG_2024_SITE.jpg
                            </div>
                            <div className="bg-emerald-500/90 backdrop-blur-md text-white p-1.5 rounded-full shadow-lg">
                              <Check size={10} strokeWidth={4} />
                            </div>
                        </div>
                      </div>
                      
                      <div className="px-2 pb-1 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">Captured 10:43 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message 2 - Client Reply */}
                  <div className={`transition-all duration-700 ease-out delay-200 transform ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-blue-600 text-white p-3 px-5 rounded-2xl rounded-tr-sm shadow-lg shadow-blue-600/20 text-sm font-medium tracking-tight">
                        Looks good! Proceed.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-4 bg-white border-t border-gray-100/80 backdrop-blur-sm pb-8">
                  <div className="w-full bg-proofly-black text-white py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-black/20 transform active:scale-[0.98] transition-transform cursor-pointer group">
                     <span className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                        <Check size={12} className="opacity-0 group-hover:opacity-100 text-black transition-opacity" strokeWidth={4} />
                     </span>
                     Mark Job Complete
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING ELEMENT 1: Location Pin (Left) - Hardware Widget Look */}
            <div className="absolute top-24 left-0 md:-left-10 animate-float" style={{ animationDelay: '0.5s' }}>
               <div className="glass-panel pl-4 pr-6 py-3 rounded-full flex items-center gap-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white bg-white/60 backdrop-blur-xl">
                 <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 ring-2 ring-white">
                    <MapPin size={18} strokeWidth={2.5} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1 font-mono">GPS Verified</span>
                    <span className="text-xs font-bold text-gray-900 font-mono bg-gray-100 px-1 rounded">14:02:05</span>
                 </div>
               </div>
            </div>

            {/* FLOATING ELEMENT 2: Payment Success (Right) - Hardware Widget Look */}
            <div className="absolute bottom-32 -right-4 md:-right-16 animate-float" style={{ animationDelay: '2s' }}>
               <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white bg-white/80 backdrop-blur-xl max-w-[240px] animate-heartbeat">
                 <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/50 flex-shrink-0">
                    <CreditCard size={24} />
                 </div>
                 <div>
                    <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Unlocked</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 tracking-tighter font-mono">$1,250.00</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};