import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-proofly-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-bold text-xs">
            P
          </div>
          <span className="text-white font-bold">Proofly</span>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Proofly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};