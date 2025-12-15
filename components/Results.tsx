import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Reveal } from './Reveal';
import { Play, Volume2, Maximize2 } from 'lucide-react';

const Counter = ({ to, suffix = "", className = "" }: { to: number, suffix?: string, className?: string }) => {
   const ref = useRef<HTMLDivElement>(null);
   const inView = useInView(ref, { once: true, margin: "-50px" });

   useEffect(() => {
      const node = ref.current;
      if (!inView || !node) return;

      const controls = animate(0, to, {
         duration: 2.5,
         ease: [0.25, 0.1, 0.25, 1],
         onUpdate(value) {
            node.textContent = Math.floor(value).toLocaleString() + suffix;
         }
      });

      return () => controls.stop();
   }, [inView, to, suffix]);

   return <div ref={ref} className={className}>0{suffix}</div>;
};

const VideoCard = ({ id, index }: { id: string, index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
      whileHover={!isPlaying ? { y: -10, rotateX: 2, rotateY: 2 } : {}}
      className="group bg-white dark:bg-brand-card border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
    >
      {/* Browser Toolbar */}
      <div className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/5 p-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 flex-1 bg-gray-200 dark:bg-black/20 h-6 rounded text-[10px] flex items-center px-3 text-gray-500 font-mono overflow-hidden whitespace-nowrap">
            loom.com/share/{id.substring(0, 10)}...
          </div>
      </div>
      
      {/* Video Area */}
      <div className="aspect-video bg-black relative flex items-center justify-center group-hover:bg-brand-dark/90 transition-colors overflow-hidden">
          {isPlaying ? (
            <iframe 
              src={`https://www.loom.com/embed/${id}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`} 
              frameBorder="0" 
              allowFullScreen 
              className="w-full h-full absolute inset-0"
              title={`Loom Video ${index + 1}`}
            ></iframe>
          ) : (
            <>
              {/* Thumbnail Placeholder Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-black/80" />

              {/* Central Play Button */}
              <div 
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur group-hover:scale-110 transition-transform cursor-pointer z-10 hover:bg-brand-500/80"
              >
                <Play fill="white" className="ml-1 text-white" />
              </div>

              {/* Fake Controls (Visual only, disappears on play) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex flex-col gap-2">
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[45%] bg-brand-500 rounded-full relative" />
                    </div>
                    <div className="flex items-center justify-between text-white/90">
                      <div className="flex items-center gap-3">
                          <Play size={14} fill="currentColor" />
                          <div className="text-xs font-mono font-medium">0:00</div>
                      </div>
                      <div className="flex items-center gap-3">
                          <Volume2 size={16} />
                          <Maximize2 size={16} />
                      </div>
                    </div>
                </div>
              </div>
            </>
          )}
      </div>
      
      <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Case Study #{index + 1}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">See how we implemented our system to generate consistent results.</p>
      </div>
    </motion.div>
  );
};

const videos = [
  "6492f260695a405cbeae05e01c162b3f",
  "a66ac38475104c43ae9cfcc44769ebf2",
  "6dc13770b8264438895c5ca6399d5fd0",
  "b792248fbd8e4a88822e32b74c99f3b6"
];

export const Results = () => {
  return (
    <section id="results" className="py-32 relative bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
             <div>
                <span className="text-sm text-brand-500 uppercase tracking-widest font-bold">Word On The Street</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight text-gray-900 dark:text-white">
                   Real Results, No Fluff! <br />
                   Watch our videos 🚀
                </h2>
             </div>
             <div className="flex gap-12 text-center md:text-left">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-white shadow-lg dark:bg-white/5 border border-gray-100 dark:border-white/5 backdrop-blur-sm transition-all cursor-default"
                >
                   <Counter to={450} suffix="+" className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white tracking-tight" />
                   <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase mt-2 tracking-wider">Meetings Booked</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-white shadow-lg dark:bg-white/5 border border-gray-100 dark:border-white/5 backdrop-blur-sm transition-all cursor-default"
                >
                   <Counter to={18} suffix="x" className="text-4xl md:text-5xl font-bold font-display text-brand-500 tracking-tight" />
                   <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase mt-2 tracking-wider">Average ROI</div>
                </motion.div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             {videos.map((id, i) => (
                <Reveal key={i} delay={i * 0.1}>
                   <VideoCard id={id} index={i} />
                </Reveal>
             ))}
          </div>
       </div>
    </section>
  );
};