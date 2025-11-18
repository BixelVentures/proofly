import React from 'react';
import { Wrench, Zap, Hammer, BrickWall, Ruler, Paintbrush, HardHat, Truck, Droplets, Key } from 'lucide-react';

export const Partners: React.FC = () => {
  const trades = [
    { icon: Wrench, label: 'PLUMBING' },
    { icon: Zap, label: 'ELECTRICAL' },
    { icon: Hammer, label: 'CARPENTRY' },
    { icon: BrickWall, label: 'MASONRY' },
    { icon: Ruler, label: 'HVAC' },
    { icon: Paintbrush, label: 'PAINTING' },
    { icon: HardHat, label: 'CONSTRUCTION' },
    { icon: Truck, label: 'LOGISTICS' },
    { icon: Droplets, label: 'LANDSCAPING' },
    { icon: Key, label: 'SECURITY' },
  ];

  // Triple duplication for seamless loop on large screens
  const marqueeItems = [...trades, ...trades, ...trades, ...trades];

  return (
    <section className="border-y border-gray-100 bg-white py-10 overflow-hidden relative">
      {/* Gradient Fade Sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
        {marqueeItems.map((Trade, index) => (
          <div key={index} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 group cursor-default">
            <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 group-hover:border-gray-300 transition-colors">
               <Trade.icon className="w-5 h-5 text-gray-900" strokeWidth={2} />
            </div>
            <span className="font-mono text-sm font-bold text-gray-900 tracking-[0.2em] uppercase">{Trade.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};