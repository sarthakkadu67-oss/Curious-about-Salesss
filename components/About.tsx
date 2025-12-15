import React from 'react';
import { Search, Users, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const values = [
  { icon: Search, title: "Transparency", desc: "No hidden fees or black-box tactics. You see exactly what we do and how we do it." },
  { icon: Users, title: "Human-Centric", desc: "We write for people, not robots. Deep psychology and empathy drive our copywriting." },
  { icon: Zap, title: "Execution", desc: "Strategy is nothing without action. We move fast, break barriers, and get results." }
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-brand-dark">
      {/* Parallax Blobs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Split Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Text Content */}
          <div className="relative">
            <Reveal>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1]">
                Your B2B Growth <br />
                <span className="text-brand-500">Partner.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                We do whatever it takes for growth. We aren't just a service provider; we are an extension of your team. Our team of experts is dedicated to understanding your unique challenges.
              </p>
              <ul className="space-y-5 mb-10">
                {['Data-Driven Decision Making', 'Transparent Weekly Reporting', 'Result Oriented Mindset'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium text-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-[0_0_10px_#3b82f6]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Meet The Team
              </button>
            </Reveal>
          </div>

          {/* Right Bento Grid */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-5">
                 {/* Column 1 */}
                 <div className="space-y-5">
                    <Reveal delay={0.3}>
                        {/* 30+ Companies Scaled */}
                        <div className="bg-[#0F0F11] border border-white/10 p-8 rounded-[2rem] h-[220px] flex flex-col justify-between group hover:border-brand-500/30 transition-all duration-500 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl pointer-events-none" />
                           <div className="relative z-10">
                              <h3 className="text-5xl font-display font-bold text-brand-500 mb-2">30+</h3>
                              <p className="text-gray-400 font-medium">Companies Scaled</p>
                           </div>
                           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                              <Users size={20} />
                           </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4}>
                        {/* Global Reach 12 */}
                        <div className="bg-brand-600 border border-brand-500 p-8 rounded-[2rem] h-[280px] flex flex-col justify-between relative overflow-hidden shadow-2xl group">
                           <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
                           <div className="relative z-10">
                              <div className="text-white/90 font-bold text-lg">Global Reach</div>
                              <p className="text-white/60 text-sm mt-1">Expanding horizons</p>
                           </div>
                           <div className="relative z-10">
                              <div className="text-7xl font-display font-bold text-white tracking-tighter">12</div>
                              <div className="text-white/60 text-sm mt-2 font-medium">Countries Served</div>
                           </div>
                        </div>
                    </Reveal>
                 </div>

                 {/* Column 2 */}
                 <div className="space-y-5 pt-12"> {/* Offset for masonry effect */}
                    <Reveal delay={0.5}>
                         {/* Expert Team */}
                        <div className="bg-[#0F0F11] border border-white/10 p-8 rounded-[2rem] h-[260px] flex flex-col justify-between group hover:border-brand-500/30 transition-all duration-500 relative overflow-hidden">
                             <div className="flex -space-x-4 relative z-10">
                                 {[
                                   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
                                   "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
                                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
                                 ].map((src, i) => (
                                     <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#0F0F11] overflow-hidden">
                                        <img src={src} alt="Team" className="w-full h-full object-cover" />
                                     </div>
                                 ))}
                             </div>
                             <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
                                <p className="text-sm text-gray-400">Dedicated specialists for every step.</p>
                             </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.6}>
                        {/* 24/7 Support */}
                        <div className="bg-[#0F0F11] border border-white/10 p-8 rounded-[2rem] h-[200px] flex items-center justify-center group hover:border-brand-500/30 transition-all duration-500 relative overflow-hidden text-center">
                             <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <div className="relative z-10">
                                <div className="text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                                <div className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold group-hover:text-brand-500 transition-colors">Support</div>
                             </div>
                        </div>
                    </Reveal>
                 </div>
             </div>
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <Reveal key={i} delay={i * 0.15}>
               <div className="group relative bg-[#0F0F11] border border-white/10 p-8 rounded-[2rem] overflow-hidden hover:bg-white/[0.02] hover:border-brand-500/30 transition-all duration-500 h-full">
                  {/* Background Icon (Faint) */}
                  <val.icon 
                    strokeWidth={1}
                    className="absolute -bottom-8 -right-8 w-48 h-48 text-white/[0.03] group-hover:text-brand-500/[0.05] group-hover:rotate-12 transition-all duration-700" 
                  />
                  
                  <div className="relative z-10">
                     <div className="w-14 h-14 bg-gradient-to-br from-brand-500/20 to-purple-500/20 border border-white/10 text-white rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <val.icon size={28} className="text-brand-400" />
                     </div>
                     <h3 className="text-2xl font-bold mb-3 font-display">{val.title}</h3>
                     <p className="text-gray-400 leading-relaxed text-base">{val.desc}</p>
                  </div>
               </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};