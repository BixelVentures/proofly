import React from 'react';
import { Button } from './Button';
import { ArrowRight, Check } from 'lucide-react';

export const PricingTeaser: React.FC = () => {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-16">
          <div className="max-w-2xl">
             <h2 className="text-4xl font-bold tracking-tighter mb-4">Made for small teams.</h2>
             <p className="text-xl text-gray-500 font-light">Simple plans for 1–12 people. Join early to lock in founder pricing.</p>
          </div>
          <Button onClick={scrollToJoin} variant="primary" size="lg">Join early access <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Solo', 'Team', 'Crew'].map((tier, i) => (
            <div key={i} className={`
              group p-8 rounded-[2rem] border flex flex-col transition-all duration-300 relative overflow-hidden
              ${i === 1 
                ? 'bg-proofly-black text-white border-proofly-black shadow-2xl scale-105 z-10' 
                : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300'}
            `}>
              <div className="mb-8">
                <span className={`text-xs font-bold uppercase tracking-wider ${i === 1 ? 'text-gray-400' : 'text-gray-400'}`}>
                  {i === 0 ? 'For Individuals' : i === 1 ? 'Best Value' : 'For Growing Co'}
                </span>
                <h3 className="text-3xl font-bold mt-2">{tier}</h3>
                <div className="mt-1 text-sm opacity-60">
                  {i === 0 ? '1 User' : i === 1 ? '2-5 Users' : '6-12 Users'}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {['Unlimited Jobs', 'Photo Proof', 'PDF Exports', i > 0 ? 'Team Roles' : null, i > 1 ? 'Priority Support' : null].filter(Boolean).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium opacity-90">
                    <Check size={16} className={i === 1 ? 'text-emerald-400' : 'text-blue-600'} />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <div className={`h-1 w-full rounded-full ${i === 1 ? 'bg-gray-800' : 'bg-gray-100'}`}>
                 <div className={`h-full w-1/3 rounded-full ${i === 1 ? 'bg-emerald-500' : 'bg-gray-300'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};