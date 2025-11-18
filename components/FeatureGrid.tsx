import React from 'react';
import { ShieldCheck, MessageSquare, Banknote, Smartphone, Clock, History, FileText, Lock, Check, ChevronRight } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <>
      {/* Problem / Core Value Section - Cinematic Image Cards */}
      <section className="py-24 lg:py-32 bg-[#F2F0EB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-[#1A1C1E] font-sans">
              What installers get <br/> with Proofly.
            </h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed font-sans">
              The average installer loses 4 hours a week chasing payments and details. We built the tool to stop that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "Get paid instantly",
                desc: "Photo proof and customer sign-off unlock payment on the spot.",
                icon: Banknote,
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
                accent: "from-blue-900 to-slate-900"
              },
              {
                id: "02",
                title: "One place for jobs",
                desc: "No more hunting through WhatsApp chats, emails, and camera rolls.",
                icon: MessageSquare,
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
                accent: "from-purple-900 to-slate-900"
              },
              {
                id: "03",
                title: "Legal protection",
                desc: "Every photo and message is timestamped. Disputes don't stand a chance.",
                icon: ShieldCheck,
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
                accent: "from-emerald-900 to-slate-900"
              }
            ].map((item, i) => (
              <div key={i} className="group relative h-[520px] rounded-[24px] overflow-hidden border border-[#E0DDD5] hover:border-[#1A1C1E] transition-all duration-500 cursor-pointer shadow-sm">
                
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0" 
                  />
                </div>
                
                {/* Gradient Overlay - Always visible for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-[#1A1C1E]/60 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  
                  {/* Top Label (Number) */}
                  <div className="absolute top-8 left-8 text-white/40 font-sans font-bold text-xl tracking-widest">
                    {item.id}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white border border-white/20 group-hover:bg-white group-hover:text-[#1A1C1E] transition-all duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold tracking-tight mb-4 text-white font-sans">{item.title}</h3>
                    
                    {/* Visual Divider */}
                    <div className="h-px w-12 bg-white/30 mb-4 group-hover:w-full transition-all duration-500"></div>
                    
                    {/* Description - Always Visible */}
                    <p className="text-gray-300 leading-relaxed text-lg font-sans font-light">
                      {item.desc}
                    </p>
                    
                    {/* Hover Action */}
                    <div className="mt-6 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                       <span className="text-sm uppercase tracking-wider">Details</span>
                       <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Benefits Section */}
      <section id="benefits" className="py-24 lg:py-32 bg-[#1A1C1E] text-white relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-sans">
              Run a tighter ship. <br/>
              <span className="text-gray-500">Professional results.</span>
            </h2>
            <div className="text-right hidden md:block">
               <p className="text-gray-500 text-xs font-sans font-bold uppercase tracking-widest mb-1">Platform Status</p>
               <div className="flex items-center gap-2 justify-end">
                 <div className="w-2 h-2 rounded-full bg-[#4A6F58] animate-pulse"></div>
                 <span className="text-[#4A6F58] font-bold text-sm tracking-wide font-sans">LIVE</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto] gap-6">
            
            {/* Card 1: Mobile Approvals (Large) */}
            <div className="md:col-span-4 bg-[#232529] border border-white/5 rounded-[24px] p-10 relative group hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8">
              <div className="relative z-20 max-w-xs flex flex-col justify-between h-full">
                <div>
                    <div className="w-12 h-12 bg-[#1A1C1E] rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                    <Smartphone size={20} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight font-sans">Approvals on-the-go</h3>
                    <div className="h-px w-8 bg-white/20 mb-4"></div>
                    <p className="text-gray-400 text-lg leading-relaxed font-sans">
                    Customers receive a secure link to view photos and click 'Approve' from any device. No apps required.
                    </p>
                </div>
              </div>
              
              {/* UI Mockup: 3D Rotated Phone Slice */}
              <div className="flex-1 relative h-[300px] md:h-auto">
                 <div className="absolute top-6 right-[-20px] w-[280px] bg-white rounded-[24px] border-[4px] border-[#1A1C1E] shadow-2xl transform rotate-6 group-hover:rotate-2 transition-transform duration-500 overflow-hidden">
                    {/* Screen Content */}
                    <div className="bg-[#F2F0EB] w-full h-full p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
                            <span className="text-xs font-bold text-[#1A1C1E] uppercase">Review</span>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Socket" />
                        </div>
                        <div className="w-full py-3 bg-[#1A1C1E] text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-lg">
                            Approve Work
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Card 2: More Billable Hours (Tall) */}
            <div className="md:col-span-2 bg-[#232529] border border-white/5 rounded-[24px] p-10 flex flex-col justify-between group hover:border-white/10 transition-all duration-500 relative overflow-hidden">
              <div className="relative z-20">
                <div className="w-12 h-12 bg-[#1A1C1E] rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight font-sans">Auto-Documentation</h3>
                <p className="text-gray-400 font-sans">Automatic logs and work-done reports.</p>
              </div>

              {/* UI Mockup: Log List */}
              <div className="mt-8 space-y-2 relative z-10">
                {[
                    { t: 'Socket Install', time: '10:42' },
                    { t: 'Safety Check', time: '11:15' },
                    { t: 'Cleanup', time: '12:30' }
                ].map((item, i) => (
                    <div key={i} className="bg-[#1A1C1E] p-3 rounded-lg border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FileText size={12} className="text-[#4A6F58]" />
                            <span className="text-xs font-medium text-gray-200">{item.t}</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-500">{item.time}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* Card 3: Security */}
            <div className="md:col-span-3 bg-[#232529] border border-white/5 rounded-[24px] p-10 group hover:border-white/10 transition-all duration-500 relative overflow-hidden min-h-[280px]">
              <div className="relative z-20">
                 <div className="w-12 h-12 bg-[#1A1C1E] rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                  <Lock size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight font-sans">Bank-grade security</h3>
                <p className="text-gray-400 max-w-sm font-sans">256-bit encryption. Backups every hour. Your data is yours.</p>
              </div>
            </div>

            {/* Card 4: Disputes */}
            <div className="md:col-span-3 bg-[#232529] border border-white/5 rounded-[24px] p-10 group hover:border-white/10 transition-all duration-500 relative overflow-hidden min-h-[280px]">
              <div className="flex items-start justify-between mb-6 relative z-20">
                <div className="w-12 h-12 bg-[#1A1C1E] rounded-full flex items-center justify-center text-white border border-white/10">
                  <History size={20} />
                </div>
              </div>
              <div className="relative z-20 mt-auto">
                <h3 className="text-xl font-bold mb-2 tracking-tight font-sans">Fewer disputes</h3>
                <p className="text-gray-400 max-w-xs font-sans">A shared history creates trust and transparency.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};