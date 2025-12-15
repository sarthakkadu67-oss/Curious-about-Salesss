import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-6">Curious About Sales</h3>
            <p className="text-gray-400 max-w-sm mb-6">
              Your growth partner in the B2B landscape. We turn cold leads into warm conversations and revenue.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/curious-about-sales" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#process" className="hover:text-brand-500 transition-colors">Process</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Services</a></li>
              <li><a href="#results" className="hover:text-brand-500 transition-colors">Results</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Curious About Sales. All Rights Reserved.</p>
          <p>Designed with purpose.</p>
        </div>
      </div>
    </footer>
  );
};