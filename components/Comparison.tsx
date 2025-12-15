import React from 'react';
import { Check, X } from 'lucide-react';
import { Reveal } from './Reveal';

export const Comparison = () => {
  return (
    <section className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Top Companies Switch to Us</h2>
          <p className="text-gray-400">The difference is in the details.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Competitors */}
          <Reveal className="h-full">
            <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-gray-300">Other Agencies</h3>
                <ul className="space-y-6">
                  {[
                    "Generic 'spray & pray' templates",
                    "Outsourced, unverified contact lists",
                    "Set it and forget it mentality",
                    "Charge per lead (even bad ones)",
                    "No A/B testing or optimization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400">
                      <div className="mt-1 min-w-[24px] h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
                        <X size={14} />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Us */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full bg-gradient-to-b from-brand-900/40 to-brand-900/10 border border-brand-500/30 rounded-2xl p-8 md:p-10 relative z-10 shadow-2xl overflow-hidden hover:border-brand-500/50 transition-colors">
              {/* Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-brand-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg">
                  RECOMMENDED
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-white">Curious About Sales</h3>
                <ul className="space-y-6">
                  {[
                    "Psychology-backed custom copywriting",
                    "Hand-curated, triple-verified leads",
                    "Daily optimization & active management",
                    "Performance-based partnership",
                    "Deep analytics & transparency"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white font-medium">
                      <div className="mt-1 min-w-[24px] h-6 rounded-full bg-green-500 text-brand-dark flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
