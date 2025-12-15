import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, Mail, MessageSquare, Bell } from 'lucide-react';
import { Reveal } from './Reveal';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Content */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10 mb-8 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">We were expecting you</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-gray-900 dark:text-white">
              Need Help in Generating <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-purple animate-pulse">Consistent Sales?</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              We help B2B businesses book meetings with their ideal customers through cold outreach and content services. Data-driven, human-centric.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenModal}
                className="group relative px-8 py-4 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold rounded-lg overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-brand-500/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book A Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black dark:from-gray-100 dark:to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right 3D Visual */}
        <div className="relative perspective-1000">
          <motion.div 
            style={{ y: y1, rotateY: -12, rotateX: 5 }}
            initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: -12, rotateX: 5, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative z-10 bg-white dark:bg-brand-card/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl shadow-brand-500/10 w-full max-w-md mx-auto lg:ml-auto"
          >
            {/* Mock Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="h-2 w-20 bg-gray-100 dark:bg-white/10 rounded-full" />
            </div>

            {/* Mock Charts */}
            <div className="space-y-6">
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + i * 0.1, duration: 1, type: "spring" }}
                    className="w-full bg-gradient-to-t from-brand-500/20 to-brand-500 rounded-t-sm"
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <div className="h-24 flex-1 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5 p-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" />
                  <div className="space-y-2 mt-4">
                     <div className="h-2 w-12 bg-gray-200 dark:bg-white/10 rounded" />
                     <div className="h-4 w-8 bg-gray-300 dark:bg-white/20 rounded" />
                  </div>
                </div>
                <div className="h-24 flex-1 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5 p-3">
                   <div className="space-y-2 mt-4">
                     <div className="h-2 w-12 bg-gray-200 dark:bg-white/10 rounded" />
                     <div className="h-4 w-16 bg-brand-500/20 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notifications */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-12 top-20 bg-white dark:bg-[#1a1a1d] border border-gray-200 dark:border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 w-48"
            >
               <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Bell size={18} />
               </div>
               <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Just Now</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">New Meeting Booked</div>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -right-8 bottom-32 bg-white dark:bg-[#1a1a1d] border border-gray-200 dark:border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 w-48"
            >
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Mail size={18} />
               </div>
               <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">2 min ago</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Reply Received</div>
               </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};