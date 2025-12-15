import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface CTAProps {
  onOpenModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-600/20 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Stop Chasing Leads. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-white">Start Closing Deals.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Your ideal customers are waiting to hear from you. Let's make the introduction.
          </p>
          
          <button 
            onClick={onOpenModal}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Start Your Campaign</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity gap-3">
              Start Your Campaign <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <p className="mt-6 text-sm text-gray-500">
            No long-term contracts. 100% Satisfaction Guarantee.
          </p>
        </Reveal>
      </div>
    </section>
  );
};