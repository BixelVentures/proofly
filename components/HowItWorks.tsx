import React, { useState, useEffect } from 'react';
import { Plus, Camera, Unlock, MapPin, User, FileCheck, CheckCircle2, CreditCard, ArrowRight, Scan } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      num: "01",
      id: "INIT_JOB",
      title: "Scan the Space",
      desc: "Input address and scope in seconds. Invite your team instantly.",
      stat: "45s avg. setup",
      icon: Plus,
      color: "bg-blue-500"
    },
    {
      num: "02",
      id: "DATA_INGEST",
      title: "Capture Proof",
      desc: "Photos are timestamped and geo-tagged automatically.",
      stat: "100% verifiable",
      icon: Camera,
      color: "bg-purple-500"
    },
    {
      num: "03",
      id: "FUNDS_UNLOCK",
      title: "Get Paid",
      desc: "Customer approves on their phone. Payment is triggered.",
      stat: "0 day terms",
      icon: Unlock,
      color: "bg-emerald-500"
    }
  ];

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          setActiveStep((prev) => (prev + 1) % steps.length);
          return 0;
        }
        return old + 1;
      });
    }, 50); // 5 seconds per step

    return () => clearInterval(timer);
  }, []);

  // Reset progress when step changes manually
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#F4F4F5] overflow-hidden relative">
      {/* Background Technical Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ 
        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT COLUMN: Controls */}
          <div className="flex-1 w-full lg:max-w-xl">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                 <span className="px-3 py-1 rounded bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest font-mono text-gray-500 shadow-sm">
                   Workflow Engine v2.0
                 </span>
                 <div className="h-px flex-1 bg-gray-300"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-proofly-black mb-6">
                The 3-step <br/>
                <span className="text-gray-400">revenue cycle.</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Proofly replaces disjointed apps with a single linear process.
                Designed for speed in the field.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group ${
                    activeStep === index 
                      ? 'bg-white border-gray-300 shadow-xl scale-[1.02]' 
                      : 'bg-gray-50/50 border-transparent hover:bg-white hover:border-gray-200'
                  }`}
                >
                  {/* Progress Bar Background for Active Step */}
                  {activeStep === index && (
                    <div 
                      className="absolute bottom-0 left-0 h-1 bg-proofly-black transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}

                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-colors duration-300 ${activeStep === index ? 'bg-proofly-black' : 'bg-gray-200 text-gray-400'}`}>
                      <step.icon size={20} strokeWidth={2} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-xl font-bold tracking-tight ${activeStep === index ? 'text-proofly-black' : 'text-gray-400'}`}>
                          {step.title}
                        </h3>
                        <span className="font-mono text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                          {step.id}
                        </span>
                      </div>
                      <p className={`text-sm mb-3 leading-relaxed ${activeStep === index ? 'text-gray-600' : 'text-gray-400'}`}>
                        {step.desc}
                      </p>
                      
                      {/* Value Metric */}
                      <div className={`inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider ${activeStep === index ? 'text-emerald-600 opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                        <ArrowRight size={12} />
                        <span>Efficiency: {step.stat}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Dynamic Visual Monitor */}
          <div className="flex-1 w-full flex justify-center lg:justify-end h-[600px] items-center">
            <div className="relative w-[320px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden transform transition-all duration-700">
              
              {/* Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-7 bg-black z-50 flex justify-center">
                <div className="w-24 h-6 bg-black rounded-b-xl"></div>
              </div>

              {/* Screen Content Wrapper */}
              <div className="w-full h-full bg-gray-50 relative flex flex-col">
                
                {/* Top Bar */}
                <div className="pt-10 pb-4 px-6 bg-white border-b border-gray-100 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Job ID: 9942</span>
                    <span className="text-sm font-bold">Kitchen Reno</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>

                {/* DYNAMIC SCREEN STATES */}
                <div className="flex-1 relative p-6 overflow-hidden">
                  
                  {/* STATE 1: CREATE JOB */}
                  <div className={`absolute inset-0 p-6 transition-all duration-500 transform ${activeStep === 0 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95'}`}>
                    <div className="space-y-4">
                       <div className="text-xs font-mono text-gray-400 mb-4">// JOB_PARAMETERS</div>
                       
                       <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                          <div className="flex items-center gap-3 text-gray-400 border-b border-gray-100 pb-3">
                            <MapPin size={16} />
                            <div className="h-2 w-32 bg-gray-100 rounded"></div>
                          </div>
                          <div className="flex items-center gap-3 text-gray-400">
                            <User size={16} />
                            <div className="h-2 w-24 bg-gray-100 rounded"></div>
                          </div>
                       </div>

                       <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-blue-900 text-sm font-medium flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                             <Plus size={16} />
                          </div>
                          Team Invited
                       </div>

                       {/* Animated Map */}
                       <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
                          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                             <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-ping absolute"></div>
                             <div className="w-3 h-3 bg-blue-600 rounded-full relative shadow-lg border-2 border-white"></div>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* STATE 2: CAPTURE */}
                  <div className={`absolute inset-0 p-0 transition-all duration-500 transform ${activeStep === 1 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95'}`}>
                    <div className="w-full h-full bg-gray-900 relative">
                       <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60" alt="Camera" />
                       
                       {/* Camera UI */}
                       <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                          <div className="flex justify-between text-white/70 font-mono text-[10px]">
                             <span>REC</span>
                             <span>[1080p]</span>
                          </div>
                          
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/30 rounded-lg flex items-center justify-center">
                             <Scan size={32} className="text-white/80 animate-pulse" />
                          </div>

                          <div className="space-y-2">
                             <div className="bg-black/50 backdrop-blur text-white p-3 rounded-xl flex items-center gap-3 border border-white/10">
                                <FileCheck size={16} className="text-emerald-400" />
                                <span className="text-xs">Metadata Encrypted</span>
                             </div>
                             <div className="h-16 bg-black/40 rounded-full flex items-center justify-center border border-white/20">
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-gray-300"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* STATE 3: GET PAID */}
                  <div className={`absolute inset-0 p-6 transition-all duration-500 transform ${activeStep === 2 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95'}`}>
                    <div className="flex flex-col h-full justify-center items-center text-center space-y-6">
                       
                       <div className="relative">
                          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2 relative z-10">
                             <CheckCircle2 size={40} strokeWidth={2} />
                          </div>
                          <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping"></div>
                       </div>

                       <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">Payment Succeeded</h4>
                          <p className="text-gray-500 text-sm">Transaction ID: #88239-X</p>
                       </div>

                       <div className="w-full bg-white rounded-2xl p-4 border border-gray-100 shadow-lg text-left">
                          <div className="flex justify-between items-center mb-4">
                             <span className="text-xs text-gray-400 font-mono uppercase">Amount</span>
                             <span className="text-xl font-bold text-gray-900">$1,250.00</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                             <CreditCard size={14} />
                             <span>Visa ending in 4242</span>
                          </div>
                       </div>

                       <div className="w-full py-3 bg-black text-white rounded-xl text-sm font-bold shadow-xl">
                          Download Receipt
                       </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-50 rounded-[2.5rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};