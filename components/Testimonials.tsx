import React from 'react';
import { Quote, CheckCircle2, MapPin, Calendar, FileCheck } from 'lucide-react';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image: string;
  location: string;
  jobId: string;
  date: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "We document jobs on-site and get invoices paid on time instead of arguing later. It's changed how we work.",
      author: "James Miller",
      role: "Master Electrician",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      location: "Manchester, UK",
      jobId: "ELEC-294",
      date: "12 SEP 2024"
    },
    {
      quote: "Customers see exactly what we’ve done and approve on their phone. Disputes have almost disappeared for us.",
      author: "Sarah Lewis",
      role: "HVAC Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      location: "London, UK",
      jobId: "PLUMB-882",
      date: "19 OCT 2024"
    }
  ];

  return (
    <section className="py-32 bg-[#F9F9F9] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 flex items-end justify-between">
           <h2 className="text-4xl font-bold tracking-tighter text-proofly-black">Field Reports</h2>
           <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Live Feed Incoming</span>
           </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg shadow-gray-200/30 hover:shadow-xl transition-all duration-300 group">
              
              {/* Technical Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <span className="font-mono text-[10px] text-gray-400 font-bold">LOG_ID: #{item.jobId}</span>
                   <div className="w-px h-3 bg-gray-300"></div>
                   <span className="font-mono text-[10px] text-gray-400 font-bold">{item.date}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600">
                   <FileCheck size={12} />
                   <span className="font-mono text-[10px] font-bold tracking-wider uppercase">Verified</span>
                </div>
              </div>

              <div className="p-8">
                {/* Report Body */}
                <div className="relative mb-8">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-100"></div>
                  <blockquote className="font-medium text-lg leading-relaxed text-gray-800 relative z-10 pl-2 font-mono text-opacity-90">
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Operator Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-dashed border-gray-100">
                  <div className="w-12 h-12 rounded-lg border border-gray-200 p-0.5">
                    <img src={item.image} alt={item.author} className="w-full h-full object-cover rounded" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <div>
                         <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-0.5">Operator</div>
                         <div className="font-bold text-gray-900 text-sm">{item.author}</div>
                       </div>
                       <div className="text-right">
                         <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-0.5">Location</div>
                         <div className="font-bold text-gray-900 text-sm">{item.location}</div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};