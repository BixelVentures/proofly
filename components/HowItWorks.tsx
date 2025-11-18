import React from 'react';
import { Plus, Camera, Unlock, ChevronRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Create Job",
      desc: "Add address & scope. Invite team.",
      icon: Plus
    },
    {
      num: "02",
      title: "Capture Proof",
      desc: "Snap photos & notes to timeline.",
      icon: Camera
    },
    {
      num: "03",
      title: "Get Paid",
      desc: "Customer approves. Payment unlocks.",
      icon: Unlock
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#F4F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-2">Three simple steps</h2>
            <p className="text-gray-500 text-lg">From setup to payout in minutes.</p>
          </div>
          <div className="hidden md:block px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">
            Workflow v1.0
          </div>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gray-300 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="flex flex-col md:items-start items-center text-center md:text-left">
                  
                  {/* Icon Node */}
                  <div className="w-20 h-20 bg-white rounded-[1.5rem] border border-gray-200 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-proofly-black transition-all duration-300 relative">
                    <step.icon size={28} strokeWidth={1.5} className="text-proofly-black" />
                    {/* Small connector dot */}
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 w-2 h-2 bg-gray-300 rounded-full group-hover:bg-proofly-black transition-colors" />
                    {/* Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.num}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-proofly-black">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};