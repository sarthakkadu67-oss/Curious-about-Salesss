import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Database, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  {
    icon: Brain,
    title: "We leverage human psychology",
    desc: "We're not just cold outreach specialists. We study human psychology. By tapping into triggers like reciprocity and authority, we craft messages that resonate.",
    color: "text-purple-400"
  },
  {
    icon: Target,
    title: "We do pain-point prospecting",
    desc: "Forget generic spray-and-pray. We zero in on prospects by their pain points, ensuring every outreach is targeted at those who genuinely need your solution.",
    color: "text-blue-400"
  },
  {
    icon: Database,
    title: "Driven by data, not assumptions",
    desc: "Every strategy we deploy is backed by rigorous experimentation. We verify our approach until it's razor-sharp.",
    color: "text-emerald-400"
  },
  {
    icon: TrendingUp,
    title: "Years of expertise, tailored for you",
    desc: "Our B2B outreach system isn't built overnight. With experience spanning multiple years and over 30 B2B companies, we deliver results that matter.",
    color: "text-orange-400"
  }
];

export const Differentiators = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 space-y-32">
        <div className="text-center mb-24">
           <Reveal width="100%" className="flex justify-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">So what makes <br /> Curious About Sales different?</h2>
           </Reveal>
        </div>

        {features.map((feature, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}>
            
            {/* Connector Line (Desktop Only) */}
            {i !== features.length - 1 && (
               <div className={`hidden md:block absolute top-1/2 left-1/2 w-[2px] h-32 bg-gradient-to-b from-white/10 to-transparent -translate-x-1/2 translate-y-24 border-l border-dashed border-white/20`} />
            )}

            {/* Text Side */}
            <div className="flex-1 text-center md:text-left">
              <Reveal>
                <h3 className="text-3xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </Reveal>
            </div>

            {/* Visual Side */}
            <div className="flex-1 flex justify-center">
              <Reveal>
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Orbit Ring 1 */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-white/5 border-dashed"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                  </motion.div>
                  
                  {/* Orbit Ring 2 */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border border-white/5"
                  >
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-brand-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                  </motion.div>

                  {/* Glass Icon Container */}
                  <div className="relative z-10 w-32 h-32 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 shadow-2xl">
                    <feature.icon size={48} className={feature.color} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};