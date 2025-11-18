import React from 'react';
import { Button } from './Button';
import { Check, CreditCard } from 'lucide-react';

export const PricingTeaser: React.FC = () => {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#FAFAFA] border-y border-gray-200 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-proofly-black">
             The platform is free. <br/>
             <span className="text-gray-400">Pay only when you get paid.</span>
           </h2>
           <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
             No monthly subscriptions. No setup fees. No contracts. 
             We only make money when you successfully complete a job.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: The Platform */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-gray-200 shadow-xl flex flex-col relative overflow-hidden group hover:border-gray-300 transition-colors">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-100"></div>
            
            <div className="mb-10">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border border-gray-200 inline-block px-3 py-1 rounded-full">Proofly Platform</h3>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-7xl font-bold text-proofly-black tracking-tighter">Free</span>
                <span className="text-xl text-gray-400 font-medium">/ forever</span>
              </div>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed font-light">
                We give you the entire suite of documentation and approval tools for free. No limits on team size or jobs.
              </p>
            </div>

            <div className="flex-1">
              <div className="h-px bg-gray-100 w-full mb-8"></div>
              <ul className="space-y-5">
                {[
                  'Unlimited team members (1–12)', 
                  'Unlimited jobs & storage', 
                  'Photo proof & timestamps', 
                  'Client approval links',
                  'Dispute protection'
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-emerald-600" strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: The Transaction */}
          <div className="bg-[#0A0A0A] text-white rounded-[2.5rem] p-10 md:p-12 border border-gray-800 shadow-2xl flex flex-col relative overflow-hidden">
            
            {/* Texture: Chip & Shine */}
            <div className="absolute top-10 right-10 w-16 h-12 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-600 opacity-80 flex items-center justify-center overflow-hidden border border-yellow-500/50 shadow-lg">
                <div className="w-full h-[1px] bg-black/20 absolute top-1/3"></div>
                <div className="w-full h-[1px] bg-black/20 absolute bottom-1/3"></div>
                <div className="h-full w-[1px] bg-black/20 absolute left-1/3"></div>
                <div className="h-full w-[1px] bg-black/20 absolute right-1/3"></div>
            </div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 noise-texture opacity-10 mix-blend-overlay"></div>
            
            <div className="mb-10 relative z-10">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4 border border-blue-900/50 bg-blue-900/10 inline-block px-3 py-1 rounded-full">Transaction Fee</h3>
              
              {/* Gradient Text */}
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-7xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">2%</span>
              </div>
               <span className="text-lg text-gray-400 font-medium block mt-2 pl-1">flat rate per transaction</span>
              
              <p className="mt-6 text-gray-300 text-lg leading-relaxed font-light">
                A single transparent fee, no matter the payment source. Applied only when your customer pays.
              </p>
            </div>

            <div className="flex-1 relative z-10">
               <div className="h-px bg-gray-800 w-full mb-8"></div>
              <ul className="space-y-5">
                {[
                  'No monthly subscription', 
                  'No setup or hidden fees', 
                  'Instant payouts',
                  'Secure card processing',
                  'Automated receipts'
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Check size={14} className="text-blue-400" strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 relative z-10">
              <Button onClick={scrollToJoin} variant="secondary" className="w-full py-5 text-lg font-bold border-none bg-white text-black hover:bg-gray-200 rounded-2xl shadow-lg shadow-black/25 transition-all hover:scale-[1.02]">
                Join early access
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4">Help shape our final pricing model.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};