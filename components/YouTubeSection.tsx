import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Reveal } from './Reveal';

const videos = [
  {
    title: "Cold Emailing Strategies in 2024",
    views: "12K views",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    duration: "12:04"
  },
  {
    title: "How to Build a Lead List from Scratch",
    views: "8.5K views",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    duration: "08:45"
  },
  {
    title: "The Psychology of Sales Copywriting",
    views: "22K views",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    duration: "15:20"
  }
];

export const YouTubeSection = () => {
  return (
    <section className="py-32 bg-[#050507] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <Reveal>
             <span className="text-brand-500 font-bold uppercase tracking-widest text-sm">Content Hub</span>
             <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Latest from YouTube</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <button className="hidden md:flex items-center gap-2 text-sm font-bold text-white hover:text-red-500 transition-colors group">
              View All Videos <Play size={12} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
              >
                {/* Thumbnail Image */}
                <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Dark Overlay - Fades out on hover */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Play Button - Scales up on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white scale-90 opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                    <Play fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* Video Info Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 mb-1 uppercase tracking-wider">
                    YouTube
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                     <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-500" /> {video.views}</span>
                     <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gray-500" /> {video.duration}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="text-sm font-bold text-white hover:text-red-500 transition-colors underline">
              View All Videos
            </button>
        </div>
      </div>
    </section>
  );
};