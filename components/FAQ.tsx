import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Do my customers need an app?",
      answer: "No. They get a secure link to a visual job summary they can open in any browser on their phone or computer."
    },
    {
      question: "Can I keep using WhatsApp and email?",
      answer: "Yes. Proofly works alongside them but centralises the critical messages, photos, and approvals so nothing gets lost."
    },
    {
      question: "How does it help me get paid faster?",
      answer: "With clear photographic proof and on-site approval timestamps, there is less ambiguity and less reason for customers to delay or question your invoice."
    },
    {
      question: "Is it hard to set up?",
      answer: "You can create your first job in minutes. The interface is designed to be used on-site with minimal typing."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Job data is stored securely with encrypted connections and regular backups."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-center mb-12">
           <span className="h-px w-8 bg-gray-300"></span>
           <h2 className="text-3xl font-bold text-center text-proofly-black tracking-tight">Technical FAQ</h2>
           <span className="h-px w-8 bg-gray-300"></span>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group border border-gray-200 rounded-none border-l-0 border-r-0 border-t-0 border-b py-2 transition-all duration-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start gap-6 py-4 text-left bg-white hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-mono text-xs text-gray-400 pt-1">0{index + 1}</span>
                <span className="flex-1 font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{faq.question}</span>
                <div className={`p-1 rounded-full border transition-all ${openIndex === index ? 'rotate-180 border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-400'}`}>
                   {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-12 pr-6 pb-6 text-gray-600 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};