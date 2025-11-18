import React from 'react';
import { Button } from './Button';
import { Check, MessageSquare, Camera, FileText, ArrowRight, ShieldCheck, ChevronRight, CreditCard } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFAFA]">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none select-none" />
      
      {/* Ambient Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white via-transparent to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Installers & Teams (1–12)</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[0.95] mb-8 text-proofly-black animate-fade-in-up">
              From chaos <br/>
              <span className="text-gray-300">to paid.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light animate-fade-in-up-delay">
              Overdue invoices? Chaotic WhatsApp threads? <br className="hidden md:block"/>
              Proofly gives you instant documentation, clear approvals, and fast payments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up-delay">
              <Button onClick={scrollToJoin} size="lg" className="w-full sm:w-auto shadow-xl shadow-black/5">Join early access</Button>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-2 text-proofly-black font-medium hover:text-gray-600 transition-colors px-6 py-3">
                See how it works <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Visual - Floating Stack Concept */}
          <div className="flex-1 w-full max-w-[540px] lg:max-w-none relative perspective-1000 animate-fade-in-up-delay">
            
            {/* The "Stack" Container */}
            <div className="relative transform transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]">
              
              {/* Layer 1 (Bottom): The Job Context */}
              <div className="absolute top-8 left-4 right-4 h-[400px] bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 z-10 opacity-60 transform scale-95 origin-bottom"></div>

              {/* Layer 2 (Middle): The Evidence */}
              <div className="absolute top-4 left-2 right-2 h-[420px] bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 z-20 opacity-80 transform scale-[0.98] origin-bottom"></div>

              {/* Layer 3 (Top): The Active Interface */}
              <div className="relative bg-white border border-gray-200 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] z-30 overflow-hidden">
                
                {/* UI Header */}
                <div className="h-16 border-b border-gray-100 flex items-center justify-between px-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                       <span className="font-bold text-xs">JD</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-none">John Doe</div>
                      <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mt-1">Customer</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-50 rounded-md border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                    Job Active
                  </div>
                </div>

                {/* UI Body */}
                <div className="p-8 pb-24 space-y-6 bg-gray-50/50 min-h-[400px]">
                  
                  {/* Chat Bubble */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[260px]">
                      <p className="text-sm text-gray-600">Can we move the outlet to the left wall?</p>
                    </div>
                  </div>

                  {/* Photo Proof Card */}
                  <div className="flex flex-col gap-2 items-end">
                    <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm max-w-[280px] w-full">
                      <div className="relative aspect-video bg-zinc-800 rounded-xl overflow-hidden mb-3 group">
                         <div className="absolute inset-0 flex items-center justify-center opacity-40">
                           <Camera className="text-white" />
                         </div>
                         {/* Overlay Data */}
                         <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white font-mono">
                           14:02 • 51.5072° N
                         </div>
                      </div>
                      <div className="px-2 pb-1">
                        <p className="text-xs font-medium text-gray-900">Outlet moved as requested</p>
                        <p className="text-[10px] text-gray-400">Added to invoice: +$85.00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                       <Check size={12} className="text-blue-500" /> Sent
                    </div>
                  </div>

                </div>

                {/* Floating Action / Unlock Payment */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t border-white/50">
                   <div className="bg-proofly-black text-white rounded-2xl p-4 flex items-center justify-between shadow-lg cursor-pointer hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black">
                          <Check size={20} strokeWidth={3} />
                        </div>
                        <div>
                           <div className="text-sm font-bold">Mark job complete</div>
                           <div className="text-xs text-gray-400">Notify customer & unlock pay</div>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-gray-500" />
                   </div>
                </div>

              </div>
            </div>
            
            {/* Decorative blurry blobs behind */}
            <div className="absolute -right-20 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -left-20 bottom-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

          </div>
        </div>
      </div>
    </section>
  );
};