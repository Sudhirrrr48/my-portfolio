import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">S_MAURYA</span>
        </div>
        
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Sudhir Maurya. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};
