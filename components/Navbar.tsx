import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 pointer-events-none`}
    >
      <div className={`
        pointer-events-auto
        flex items-center justify-between px-6 transition-all duration-500
        ${isScrolled || mobileMenuOpen 
          ? 'w-full max-w-4xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] rounded-full py-2.5' 
          : 'w-full max-w-7xl bg-transparent py-4'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-proofly-black rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
            P
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-proofly-black' : 'text-proofly-black'}`}>Proofly</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-gray-500 hover:text-proofly-black transition-colors">Benefits</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-gray-500 hover:text-proofly-black transition-colors">How it works</button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-500 hover:text-proofly-black transition-colors">Pricing</button>
          <div className="w-px h-4 bg-gray-200"></div>
          <Button onClick={() => scrollToSection('join')} variant="primary" size="sm" className="text-sm px-5 py-2 shadow-lg shadow-black/5">Get started</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl border border-gray-200/50 p-3 rounded-3xl flex flex-col gap-1 shadow-2xl origin-top animate-fade-in-up">
          <button onClick={() => scrollToSection('benefits')} className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors">Benefits</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors">How it works</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors">Pricing</button>
          <div className="p-2 mt-2">
            <Button onClick={() => scrollToSection('join')} variant="primary" className="w-full py-4 rounded-xl shadow-lg shadow-black/10">Get started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};