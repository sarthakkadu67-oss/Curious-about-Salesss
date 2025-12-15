import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Linkedin, Mail, Database, Crosshair, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

// Define data structure separately from component rendering logic
const SERVICE_DATA = [
  {
    id: 'linkedin',
    title: 'LinkedIn Outreach',
    icon: Linkedin,
    desc: 'Profile Optimization: First impressions count! We transform your LinkedIn profile into a compelling narrative.'
  },
  {
    id: 'gtm',
    title: 'Go-to-market Strategy',
    icon: Crosshair,
    desc: 'Highly-targeted prospects: Don\'t leave things to chance. We curate a list of prospects tailored to your ideal customer persona.'
  },
  {
    id: 'email',
    title: 'Cold Email Outreach',
    icon: Mail,
    desc: 'Personalized Outreach: Say goodbye to generic messages. Our team crafts personalized outreach messages that capture attention.'
  },
  {
    id: 'database',
    title: 'Custom Database',
    icon: Database,
    desc: 'We build custom databases ensuring your outreach hits the right inbox every time.'
  }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICE_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  // Render the visual component based on the active tab ID
  const renderVisual = (id: string) => {
    switch (id) {
      case 'linkedin':
        return (
          <div className="bg-white p-6 rounded-lg text-black w-full max-w-[280px]">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 bg-gray-200 rounded-full" />
               <div className="h-3 w-32 bg-gray-200 rounded" />
            </div>
            <div className="space-y-2 mb-4">
               <div className="h-2 w-full bg-gray-100 rounded" />
               <div className="h-2 w-5/6 bg-gray-100 rounded" />
            </div>
            <motion.div 
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               key="badge-linkedin"
               className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1"
            >
               <CheckCircle2 size={12} /> Connected
            </motion.div>
         </div>
        );
      case 'gtm':
        return (
          <div className="w-full h-full flex items-center justify-center relative">
             <motion.div 
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-32 h-32 border-4 border-red-500 rounded-full flex items-center justify-center"
             >
                <div className="w-24 h-24 border-4 border-red-500/50 rounded-full flex items-center justify-center">
                   <div className="w-4 h-4 bg-red-500 rounded-full" />
                </div>
             </motion.div>
             <div className="absolute bottom-4 bg-black/80 text-white text-xs px-3 py-1 rounded">Target Acquired</div>
          </div>
        );
      case 'email':
        return (
          <div className="relative w-full max-w-[280px] perspective-500">
             <motion.div 
                initial={{ z: 0, rotateX: 0 }}
                animate={{ z: 50, rotateX: -10 }}
                key="email-card"
                className="bg-white p-6 rounded-lg shadow-xl text-black"
             >
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                   <span className="text-xs font-bold text-gray-400">New Message</span>
                   <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="h-2 w-20 bg-gray-200 rounded mb-2" />
                <div className="h-20 bg-gray-50 rounded mb-4" />
                <div className="bg-blue-600 text-white text-xs py-2 px-4 rounded w-fit">Send Now</div>
             </motion.div>
          </div>
        );
      case 'database':
        return (
           <div className="space-y-2 w-full max-w-[260px]">
              {[1,2,3,4].map(i => (
                 <motion.div 
                    key={`db-${i}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur border border-white/20 p-3 rounded flex items-center justify-between"
                 >
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-500" />
                       <div className="h-2 w-24 bg-white/20 rounded" />
                    </div>
                    <div className="h-2 w-8 bg-white/10 rounded" />
                 </motion.div>
              ))}
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-sm font-medium text-brand-500 uppercase">Our Service</span>
             <h2 className="text-4xl font-display font-bold mt-2">Done-For-You Cold Outreach Service</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Left 3D Interactive Card */}
             <div 
               className="h-[500px] flex items-center justify-center relative perspective-1000"
               onMouseMove={handleMouseMove}
               onMouseLeave={() => { x.set(200); y.set(200); }}
             >
                <motion.div
                   style={{ rotateX, rotateY }}
                   className="w-full h-full max-w-md bg-gradient-to-br from-brand-dark to-[#1a1a1f] border border-white/10 rounded-3xl p-8 shadow-2xl flex items-center justify-center relative overflow-hidden"
                >
                   {/* Background Elements */}
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]" />
                   
                   {/* Visual Content */}
                   <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div className="block" key={SERVICE_DATA[activeTab].id}>
                         {renderVisual(SERVICE_DATA[activeTab].id)}
                      </div>
                   </div>
                   
                   {/* Text Overlay */}
                   <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-2xl font-bold mb-2">{SERVICE_DATA[activeTab].title}</h3>
                      <p className="text-sm text-gray-400">{SERVICE_DATA[activeTab].desc}</p>
                   </div>
                </motion.div>
             </div>

             {/* Right Menu */}
             <div className="space-y-4">
                {SERVICE_DATA.map((service, index) => {
                   const Icon = service.icon;
                   return (
                     <div 
                        key={service.id}
                        onClick={() => setActiveTab(index)}
                        className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border ${
                           activeTab === index 
                           ? 'bg-white/5 border-white/20' 
                           : 'bg-transparent border-transparent hover:bg-white/5'
                        } relative overflow-hidden`}
                     >
                        <div className="flex items-center justify-between z-10 relative">
                           <h3 className={`text-xl font-display font-bold ${activeTab === index ? 'text-white' : 'text-gray-500'}`}>
                              {service.title}
                           </h3>
                           {activeTab === index && <Icon className="text-brand-500" />}
                        </div>
                        
                        {/* Progress Bar for Active Tab */}
                        {activeTab === index && (
                           <motion.div 
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 5, ease: "linear" }}
                              className="absolute bottom-0 left-0 h-[2px] bg-brand-500"
                           />
                        )}
                     </div>
                   );
                })}
             </div>
          </div>
       </div>
    </section>
  );
};