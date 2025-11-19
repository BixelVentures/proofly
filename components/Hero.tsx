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

  // Shared image for the "Reality" background and the "Phone Capture"
  // Using a wooden/plywood bathroom aesthetic to match user's context
  const siteImage = "https://images.unsplash.com/photo-1594040226829-7124105c91c2?auto=format&fit=crop&q=80&w=1000";

  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-48 overflow-hidden bg-[#FAFAFA]">
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
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-[0.95] mb-8 text-proofly-black animate-fade-in-up">
              Job Done. <br/>
              Proof Saved. <br/>
              <span className="text-gray-300">Payment Unlocked.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light animate-fade-in-up-delay">
              Overdue invoices? Chaotic WhatsApp threads? <br className="hidden md:block"/>
              Proofly gives you instant documentation, clear approvals, and fast payments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up-delay">
              <Button onClick={scrollToJoin} size="lg" className="w-full sm:w-auto shadow-xl shadow-black/10 hover:shadow-black/20 transition-all">Get started</Button>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 text-proofly-black font-medium hover:text-gray-600 transition-colors px-6 py-3">
                See how it works <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Visual - Deconstructed Spatial Layout */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative h-[700px] flex items-center justify-center animate-fade-in-up-delay perspective-1000">
            
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/30 to-emerald-50/30 rounded-full blur-3xl -z-10 opacity-60" />

            {/* THE REALITY LAYER: Background Image "Being Captured" */}
            {/* Made SQUARE and rotated slightly less for better framing behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white/50 rotate-[-6deg] z-10 transition-transform hover:rotate-[-4deg] duration-700 group/scene bg-gray-100">
                <div className="absolute inset-0 bg-black/10 z-10"></div>
                <img 
                  src={siteImage} 
                  alt="Job Site Reality" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover/scene:scale-105"
                />
                
                {/* Augmented Reality Markers on the Background */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-white/40 rounded-full flex items-center justify-center z-20">
                   <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-dashed border-white/40 rounded-full flex items-center justify-center z-20">
                   <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                </div>
             </div>

            {/* Schematic Lines (SVG) - Engineered Look */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0" viewBox="0 0 600 600">
               <path d="M 150 150 L 450 450" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* CENTRAL HUB: The Mobile Interface */}
            {/* Pulled UP significantly (-translate-y) to show full phone */}
            <div className="absolute top-1/2 left-1/2 translate-x-[-10%] -translate-y-[20%] sm:translate-x-[15%] sm:-translate-y-[25%] w-[250px] sm:w-[270px] rotate-[8deg] z-30">
              <div className="bg-[#F9F9F9] rounded-[3rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3),0_0_0_8px_rgba(255,255,255,0.8),0_0_0_9px_rgba(0,0,0,0.05)] overflow-hidden transform transition-transform hover:scale-[1.02] hover:rotate-[6deg] duration-500 origin-bottom-right">
                
                {/* Screen reflection/gloss */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none z-30 mix-blend-overlay"></div>
                
                <div className="bg-gray-50 h-full min-h-[520px] flex flex-col relative z-10">
                  {/* Hardware Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-40 flex items-center justify-center gap-1.5 px-2">
                      <div className="w-1 h-1 rounded-full bg-blue-900/50"></div>
                      <div className="w-1 h-1 rounded-full bg-blue-800/30"></div>
                  </div>

                  {/* Header */}
                  <div className="bg-white/90 backdrop-blur-md pt-12 pb-3 border-b border-gray-100 sticky top-0 z-10 px-5">
                    <div className="flex items-start justify-between mb-1">
                       <div>
                          <h3 className="font-bold text-lg leading-tight text-gray-900 tracking-tight">Bath Reno</h3>
                          <p className="text-[9px] text-gray-400 font-mono font-medium mt-1 flex items-center gap-1">
                             <MapPin size={8} /> ID: 882-A
                          </p>
                       </div>
                       <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center text-[10px] font-bold shadow-lg">JD</div>
                    </div>
                  </div>

                  {/* Feed - LIVE ANIMATED */}
                  <div className="p-4 space-y-4 flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                    
                    {/* Date Divider */}
                    <div className="flex items-center justify-center gap-2 opacity-40">
                      <div className="h-px bg-gray-300 w-6"></div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400">Today</span>
                      <div className="h-px bg-gray-300 w-6"></div>
                    </div>

                    {/* Message 1 */}
                    <div className={`transition-all duration-700 ease-out transform ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="flex gap-3">
                        <div className="bg-white p-3 rounded-xl rounded-tl-sm border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs text-gray-600 leading-relaxed max-w-[90%]">
                          Framing complete. Check?
                          <span className="text-[9px] text-gray-300 mt-1 block font-mono">10:42 AM</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image Post */}
                    <div className={`transition-all duration-700 ease-out delay-100 transform ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                      <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                        <div className="aspect-video bg-zinc-100 rounded-xl mb-2 relative overflow-hidden group cursor-pointer">
                          <img src={siteImage} className="w-full h-full object-cover scale-125 transition-transform duration-700 group-hover:scale-150" alt="work" />
                          
                          {/* Metadata Overlay */}
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 flex justify-between items-end">
                              <div className="bg-black/40 backdrop-blur-md text-white text-[8px] px-1.5 py-0.5 rounded-md font-mono border border-white/10">
                                IMG_SITE.jpg
                              </div>
                              <div className="bg-emerald-500/90 backdrop-blur-md text-white p-1 rounded-full shadow-lg">
                                <Check size={8} strokeWidth={4} />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message 2 - Client Reply */}
                    <div className={`transition-all duration-700 ease-out delay-200 transform ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="flex gap-3 justify-end">
                        <div className="bg-blue-600 text-white p-2.5 px-4 rounded-xl rounded-tr-sm shadow-lg shadow-blue-600/20 text-xs font-medium tracking-tight">
                          Looks solid! Proceed.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-3 bg-white border-t border-gray-100/80 backdrop-blur-sm pb-6">
                    <div className="w-full bg-proofly-black text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl shadow-black/20 transform active:scale-[0.98] transition-transform cursor-pointer group">
                       <span className="w-4 h-4 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                          <Check size={10} className="opacity-0 group-hover:opacity-100 text-black transition-opacity" strokeWidth={4} />
                       </span>
                       Mark Job Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING ELEMENT 1: Location Pin (Left) - Higher up now */}
            <div className="absolute top-[15%] left-[0%] md:-left-[5%] animate-float z-40" style={{ animationDelay: '0.5s' }}>
               <div className="glass-panel pl-3 pr-4 py-2.5 rounded-full flex items-center gap-3 transform -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white bg-white/60 backdrop-blur-xl">
                 <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 ring-2 ring-white">
                    <MapPin size={14} strokeWidth={2.5} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1 font-mono">GPS Verified</span>
                    <span className="text-[10px] font-bold text-gray-900 font-mono bg-gray-100 px-1 rounded">14:02:05</span>
                 </div>
               </div>
            </div>

            {/* FLOATING ELEMENT 2: Payment Success (Right) - Moved to bottom of phone */}
            <div className="absolute top-[55%] right-[0%] md:right-[5%] lg:right-[0%] animate-float z-40" style={{ animationDelay: '2s' }}>
               <div className="glass-panel p-4 rounded-2xl flex items-center gap-3 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white bg-white/80 backdrop-blur-xl max-w-[200px] animate-heartbeat">
                 <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/50 flex-shrink-0">
                    <CreditCard size={20} />
                 </div>
                 <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest font-mono">Unlocked</div>
                    </div>
                    <div className="text-lg font-bold text-gray-900 tracking-tighter font-mono">$1,250.00</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};