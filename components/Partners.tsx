import React from 'react';
import { Wrench, Zap, Hammer, BrickWall } from 'lucide-react';

export const Partners: React.FC = () => {
  const trades = [
    { icon: Wrench, label: 'Plumbers' },
    { icon: Zap, label: 'Electricians' },
    { icon: Hammer, label: 'Carpenters' },
    { icon: BrickWall, label: 'Bricklayers' },
  ];

  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Trusted by</span>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            {trades.map((Trade, index) => (
              <div key={index} className="flex items-center gap-3 group hover:opacity-100 transition-opacity cursor-default">
                <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                   <Trade.icon className="w-5 h-5 text-gray-900" />
                </div>
                <span className="font-semibold text-gray-900 tracking-tight">{Trade.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};