import React from 'react';
import { ShieldCheck, MessageSquare, Banknote, Smartphone, Clock, History, ArrowUpRight, FileText, Lock } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <>
      {/* Problem / Core Value Section */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                desc: "Photo proof and customer sign-off unlock payment on the spot.",
                icon: Banknote,
                bg: "bg-blue-50",
                text: "text-blue-600"
              },
              {
                title: "One place for jobs",
                desc: "No more hunting through WhatsApp chats, emails, and camera rolls.",
                icon: MessageSquare,
                bg: "bg-purple-50",
                text: "text-purple-600"
              },
              {
                title: "Legal protection",
                desc: "Every photo and message is timestamped. Disputes don't stand a chance.",
                icon: ShieldCheck,
                bg: "bg-emerald-50",
                text: "text-emerald-600"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <div className={`w-12 h-12 ${item.bg} ${item.text} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Benefits Section - Neo Style Dark Mode */}
      <section id="benefits" className="py-24 lg:py-32 bg-proofly-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
              Run a tighter ship. <br/>
              <span className="text-gray-500">Professional results.</span>
            </h2>
            <div className="hidden md:block h-px bg-white/20 flex-1 mx-12 mb-4"></div>
            <p className="text-gray-400 text-lg md:text-right max-w-xs font-mono text-sm">
              SYSTEM_STATUS: <span className="text-emerald-500">OPTIMIZED</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-[auto] gap-5">
            
            {/* Card 1: Mobile Approvals (Large) */}
            <div className="md:col-span-4 neo-card bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 relative group hover:bg-zinc-900 transition-colors">
              <div className="relative z-10 max-w-md">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Approvals on-the-go</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Customers don't need an app. They receive a secure, professional link to view photos and click 'Approve' from any device.
                </p>
              </div>
              <div className="absolute top-8 right-8 md:top-1/2 md:-translate-y-1/2 w-32 h-48 border-2 border-zinc-700 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity rotate-12" />
            </div>

            {/* Card 2: Less Admin (Tall) */}
            <div className="md:col-span-2 neo-card bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-zinc-900 transition-colors">
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                  <Clock size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">More billable hours</h3>
                <p className="text-gray-400">Automatic logs and work-done reports cut your admin time in half.</p>
              </div>
              <div className="mt-8 opacity-30">
                <div className="h-2 bg-zinc-700 rounded-full w-3/4 mb-2" />
                <div className="h-2 bg-zinc-700 rounded-full w-1/2" />
              </div>
            </div>

            {/* Card 3: Security (Standard) */}
            <div className="md:col-span-3 neo-card bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 group hover:bg-zinc-900 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white border border-white/10">
                  <Lock size={20} />
                </div>
                <ArrowUpRight className="text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Bank-grade security</h3>
              <p className="text-gray-400">Data stored with encrypted connections.</p>
            </div>

            {/* Card 4: Disputes (Standard) */}
            <div className="md:col-span-3 neo-card bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 group hover:bg-zinc-900 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white border border-white/10">
                  <History size={20} />
                </div>
                <div className="px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-500 text-xs font-bold uppercase tracking-wider">
                  Resolved
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Fewer disputes</h3>
              <p className="text-gray-400">A shared history creates trust and transparency.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};