import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    text: "We were struggling to break into the US market. Curious About Sales didn't just book meetings; they helped us refine our entire value proposition. The ROI has been 12x in just 3 months.",
    name: "Sarah Jenkins",
    role: "VP of Sales, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "The quality of leads is unmatched. I've worked with 4 other agencies before, and they all sent me junk. These guys actually understand who our ideal customer is.",
    name: "Michael Chen",
    role: "Founder, DataSphere",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "Automation meets human touch. The emails they write sound exactly like me, maybe even better. It's completely hands-off for me but the calendar keeps filling up.",
    name: "Elena Rodriguez",
    role: "CEO, GrowthLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-4xl font-display font-bold mt-2">Don't just take our word for it</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors relative group">
                <Quote className="absolute top-8 right-8 text-white/10 group-hover:text-brand-500/20 transition-colors" size={40} />
                
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs text-brand-500 uppercase font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};