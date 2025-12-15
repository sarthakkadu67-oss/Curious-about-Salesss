import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Settings, Mail, Zap, BarChart2, Coffee } from 'lucide-react';
import { Reveal } from './Reveal';

interface JourneyProps {
  onOpenModal: () => void;
}

const steps = [
  { icon: Database, title: "Laser-Focused Contact Database", desc: "We don't just shoot in the dark. We curate enriched lists of prospects ensuring your message doesn't get lost." },
  { icon: Settings, title: "Tech Setup? Sorted", desc: "Put those tech worries aside. We roll up our sleeves and fine-tune your email settings for maximum deliverability." },
  { icon: Mail, title: "Emails That Feel Real", desc: "Our expert copywriters don't write generic emails. Every email is personalized and relevant." },
  { icon: Zap, title: "Quick Response Handling", desc: "Forget delays. From handling tricky questions to knowing when to chat, we're on top of replies." },
  { icon: BarChart2, title: "Know Your Numbers", desc: "Every week, we dish out the deets. Opens, replies, and everything in between." },
  { icon: Coffee, title: "More Time For You", desc: "Ditch the stress of managing an SDR team. Focus on what truly matters for your business." }
];

export const Journey: React.FC<JourneyProps> = ({ onOpenModal }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 relative bg-brand-dark" ref={containerRef}>
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-sm font-medium text-brand-500 uppercase tracking-widest mb-2 block">What do we do?</span>
             <h2 className="text-4xl md:text-5xl font-display font-bold">Let us Guide You Through the Journey</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Dynamic vertical line - subtle in grid context, using borders for cards instead */}
             {steps.map((step, i) => (
                <Reveal key={i} delay={i * 0.1} className="h-full">
                  <div className="group relative h-full bg-white/5 border border-white/5 hover:border-brand-500/50 transition-all duration-300 p-8 rounded-2xl overflow-hidden backdrop-blur-sm">
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/10 group-hover:to-purple-500/5 transition-all duration-500" />
                     
                     <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-500/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                           <step.icon className="text-white group-hover:text-brand-500 transition-colors" size={28} />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-4 uppercase">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                </Reveal>
             ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
             <p className="text-xl text-gray-300 font-display mb-8">
               "Sure, you have built a brilliant product. We ensure your prospects see its brilliance too."
             </p>
             <button 
                onClick={onOpenModal}
                className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-all"
              >
                Book A Strategy Call Now
             </button>
          </div>
       </div>
    </section>
  );
};