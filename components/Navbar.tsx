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
      className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4`}
    >
      <div className={`
        flex items-center justify-between px-6 transition-all duration-500
        ${isScrolled || mobileMenuOpen 
          ? 'w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg rounded-full py-3' 
          : 'w-full max-w-7xl bg-transparent py-4'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-proofly-black rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
            P
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-proofly-black' : 'text-proofly-black'}`}>Proofly</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-gray-600 hover:text-proofly-black transition-colors">Benefits</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-gray-600 hover:text-proofly-black transition-colors">How it works</button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-600 hover:text-proofly-black transition-colors">Pricing</button>
          <Button onClick={() => scrollToSection('join')} variant="primary" size="sm" className="text-sm">Join Early Access</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-gray-100 p-2 rounded-3xl flex flex-col gap-1 shadow-2xl">
          <button onClick={() => scrollToSection('benefits')} className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-2xl">Benefits</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-2xl">How it works</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-2xl">Pricing</button>
          <div className="p-2">
            <Button onClick={() => scrollToSection('join')} variant="primary" className="w-full py-4 rounded-xl">Join Early Access</Button>
          </div>
        </div>
      )}
    </nav>
  );
};