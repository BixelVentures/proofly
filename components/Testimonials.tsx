import React from 'react';
import { TestimonialItem } from '../types';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "We document jobs on-site and get invoices paid on time instead of arguing later.",
      author: "James M.",
      role: "Owner, 6-person electrical company"
    },
    {
      quote: "Customers see exactly what we’ve done and approve on their phone. Disputes have almost disappeared.",
      author: "Sarah L.",
      role: "Partner, plumbing & heating firm"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Massive Quote Mark Background */}
      <div className="absolute top-20 left-10 text-gray-100 opacity-50 select-none pointer-events-none">
        <Quote size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
           <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400">From early users</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col justify-between h-full">
              <blockquote className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] mb-10 text-proofly-black">
                “{item.quote}”
              </blockquote>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 font-bold text-lg">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.author}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};