import React from 'react';
import { ShieldCheck, MessageSquare, Banknote, Smartphone, Clock, History, ArrowUpRight, FileText, Lock, CheckCircle2, AlertCircle, ChevronRight, Check } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <>
      {/* Problem / Core Value Section - Cinematic Image Cards */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-8 text-proofly-black">
              What installers get <br/> with Proofly.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              The average installer loses 4 hours a week chasing payments and details. We built the tool to stop that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Get paid instantly",
                desc: "Turn completed work into cash immediately. Photo proof and digital sign-offs trigger payments on the spot, eliminating the chase.",
                icon: Banknote,
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
                accent: "from-blue-600/90 to-blue-950/90"
              },
              {
                title: "Capture every decision",
                desc: "From the exact tile shade to the faucet style. Document every client choice in a permanent visual timeline to prevent rework.",
                icon: MessageSquare,
                image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
                accent: "from-purple-600/90 to-purple-950/90"
              },
              {
                title: "Legal protection",
                desc: "Every action is timestamped and geo-tagged. If a dispute ever arises, you have an undeniable audit trail ready to go.",
                icon: ShieldCheck,
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
                accent: "from-emerald-600/90 to-emerald-950/90"
              }
            ].map((item, i) => (
              <div key={i} className="group relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent transform hover:-translate-y-1 cursor-pointer">
                {/* Background Image with Cinematic Zoom */}
                <div className="absolute inset-0 bg-gray-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] grayscale group-hover:grayscale-0" 
                  />
                </div>
                
                {/* Stronger Gradient Overlay for Readability */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                  {/* Icon with Microinteraction */}
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-white/20 group-hover:shadow-xl origin-center">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Content Container - shifts up slightly on hover */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-3xl font-bold tracking-tight mb-4 text-white leading-tight">{item.title}</h3>
                    
                    {/* Description - Slide Up & Fade In */}
                    <p className="text-gray-100 leading-relaxed text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0 font-light">
                      {item.desc}
                    </p>
                    
                    {/* Hover Action Indicator - Staggered Delay */}
                    <div className="mt-6 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0">
                       <span className="text-sm font-bold uppercase tracking-wider">Learn more</span>
                       <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Benefits Section - Neo Style Dark Mode with High-Fidelity Mockups */}
      <section id="benefits" className="py-24 lg:py-32 bg-proofly-black text-white relative overflow-hidden">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 noise-texture pointer-events-none opacity-30 mix-blend-overlay"></div>
        
        {/* Radial Glow Top Left */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
              Run a tighter ship. <br/>
              <span className="text-gray-600">Professional results.</span>
            </h2>
            <div className="hidden md:block h-px bg-gradient-to-r from-white/20 to-transparent flex-1 mx-12 mb-4"></div>
            <div className="text-right">
               <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-1">System Status</p>
               <div className="flex items-center gap-2 justify-end">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></div>
                 <span className="text-emerald-500 font-bold text-sm tracking-wide font-mono">OPERATIONAL</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto] gap-6">
            
            {/* Card 1: Mobile Approvals (Large) */}
            <div className="md:col-span-4 neo-card bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 relative group hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8">
              <div className="relative z-20 max-w-xs flex flex-col justify-between h-full">
                <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-2xl flex items-center justify-center mb-8 text-white border border-white/10 shadow-inner">
                    <Smartphone size={22} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Approvals on-the-go</h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                    Customers receive a secure link to view photos and click 'Approve' from any device. No apps required.
                    </p>
                </div>
                <div className="mt-8 flex flex-col gap-1 text-sm text-gray-500 font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>v2.4_IOS_ANDROID</span>
                    </div>
                    <div className="text-[10px] text-emerald-500/70">// SECURE_LINK_GENERATED</div>
                </div>
              </div>
              
              {/* UI Mockup: 3D Rotated Phone Slice */}
              <div className="flex-1 relative h-[300px] md:h-auto perspective-1000">
                 <div className="absolute top-0 right-[-40px] w-[280px] h-[500px] bg-white rounded-[2.5rem] border-[6px] border-zinc-800 shadow-2xl transform rotate-y-[-15deg] rotate-z-[5deg] group-hover:rotate-y-[-5deg] group-hover:rotate-z-[2deg] transition-transform duration-700 overflow-hidden">
                    
                    {/* Screen Content */}
                    <div className="bg-gray-50 w-full h-full flex flex-col">
                        <div className="h-12 bg-white border-b border-gray-100 flex items-center px-4 justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                              <div className="ml-3 w-16 h-2 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-green-400/20 border border-green-400"></div>
                        </div>
                        <div className="p-4">
                            <div className="aspect-[4/3] bg-zinc-200 rounded-xl mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[8px] font-mono px-1 rounded">IMG_04.RAW</div>
                            </div>
                            <div className="w-full h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-sm mt-auto shadow-xl hover:bg-gray-900 transition-colors cursor-pointer">
                                Confirm & Pay
                            </div>
                        </div>
                    </div>
                    
                    {/* Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none z-20"></div>
                 </div>
              </div>
            </div>

            {/* Card 2: More Billable Hours (Tall) */}
            <div className="md:col-span-2 neo-card bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
              <div className="relative z-20">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10 shadow-inner">
                  <Clock size={22} />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Auto-Documentation</h3>
                <p className="text-gray-400 font-light">Automatic logs and work-done reports.</p>
              </div>

              {/* UI Mockup: Log List */}
              <div className="mt-8 space-y-3 relative z-10">
                <div className="text-[10px] font-mono text-gray-600 mb-2 flex justify-between">
                  <span>[LOGGING_STARTED]</span>
                  <span>PID: 203</span>
                </div>
                {[
                    { t: 'Socket Install', time: '10:42:12' },
                    { t: 'Safety Check', time: '11:15:45' },
                    { t: 'Site Cleanup', time: '12:30:01' }
                ].map((item, i) => (
                    <div key={i} className="bg-zinc-800/60 p-3.5 rounded-xl border border-white/5 flex items-center justify-between group/item hover:bg-zinc-800 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center border border-white/5">
                                <FileText size={12} className="text-emerald-500" />
                            </div>
                            <span className="text-sm font-medium text-gray-200">{item.t}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500">{item.time}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* Card 3: Security (Standard) */}
            <div className="md:col-span-3 neo-card bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 group hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              <div className="relative z-20">
                 <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10 shadow-inner">
                  <Lock size={22} />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Bank-grade security</h3>
                <p className="text-gray-400 font-light max-w-sm">Your data is stored with 256-bit encryption and backed up daily.</p>
              </div>
              
              {/* Abstract Code Background */}
              <div className="absolute right-0 bottom-0 p-8 opacity-40 pointer-events-none font-mono text-xs text-emerald-500 leading-relaxed text-right">
                  <span className="text-blue-400">const</span> secure = <span className="text-yellow-400">true</span>;<br/>
                  <span className="text-purple-400">await</span> encrypt(data);<br/>
                  <span className="text-gray-500">// AES-256-GCM</span>
              </div>
            </div>

            {/* Card 4: Disputes (Standard) */}
            <div className="md:col-span-3 neo-card bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 group hover:border-white/20 transition-all duration-500 relative overflow-hidden min-h-[320px]">
              <div className="flex items-start justify-between mb-6 relative z-20">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-black rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-inner">
                  <History size={22} />
                </div>
                <div className="px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.1)] font-mono">
                  Log: Active
                </div>
              </div>
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Fewer disputes</h3>
                <p className="text-gray-400 font-light max-w-xs">A shared history creates trust and transparency.</p>
              </div>
              
              {/* UI Mockup: Chat Bubbles */}
              <div className="absolute top-20 right-6 flex flex-col gap-3 w-[200px]">
                  <div className="text-[8px] font-mono text-gray-600 text-right mb-1">// DISPUTE_RESOLUTION_MODE</div>
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-tr-sm border border-white/5 shadow-lg self-end">
                     <div className="h-2 w-24 bg-zinc-600 rounded-full mb-1.5"></div>
                     <div className="h-2 w-16 bg-zinc-600 rounded-full"></div>
                  </div>
                  <div className="bg-blue-900/30 p-3 rounded-2xl rounded-tl-sm border border-blue-500/20 shadow-lg self-start">
                     <div className="h-2 w-20 bg-blue-400/40 rounded-full mb-1.5"></div>
                     <div className="h-2 w-28 bg-blue-400/40 rounded-full"></div>
                  </div>
                  <div className="flex justify-end">
                     <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check size={8} className="text-black" strokeWidth={4} />
                     </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};