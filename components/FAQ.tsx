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
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Common questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-gray-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
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