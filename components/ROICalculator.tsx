import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { DollarSign, Users, PieChart } from 'lucide-react';

export const ROICalculator = () => {
  const [prospects, setProspects] = useState(2000);
  const [dealValue, setDealValue] = useState(5000);
  const [closeRate, setCloseRate] = useState(20);

  // Conservative estimates
  const responseRate = 0.04; // 4% reply
  const meetingRate = 0.15; // 15% of replies book meeting
  
  const monthlyMeetings = Math.floor(prospects * responseRate * meetingRate);
  const monthlyDeals = Math.floor(monthlyMeetings * (closeRate / 100));
  const potentialRevenue = monthlyDeals * dealValue;

  return (
    <section className="py-24 relative overflow-hidden bg-[#050507]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <Reveal>
              <span className="text-brand-500 font-bold tracking-widest text-sm uppercase mb-2 block">ROI Calculator</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Calculate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Revenue Potential</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stop guessing. See exactly how our data-driven outreach campaigns translates into bottom-line revenue for your business.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 backdrop-blur-sm">
                {/* Slider 1 */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <label className="flex items-center gap-2 text-gray-300"><Users size={16} className="text-brand-500"/> Monthly Prospects Contacted</label>
                    <span className="text-white bg-white/10 px-2 py-1 rounded">{prospects.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="500" max="10000" step="100" 
                    value={prospects} onChange={(e) => setProspects(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                {/* Slider 2 */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <label className="flex items-center gap-2 text-gray-300"><DollarSign size={16} className="text-brand-500"/> Average Deal Value</label>
                    <span className="text-white bg-white/10 px-2 py-1 rounded">${dealValue.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="1000" max="100000" step="1000" 
                    value={dealValue} onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>

                {/* Slider 3 */}
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <label className="flex items-center gap-2 text-gray-300"><PieChart size={16} className="text-brand-500"/> Close Rate (%)</label>
                    <span className="text-white bg-white/10 px-2 py-1 rounded">{closeRate}%</span>
                  </div>
                  <input 
                    type="range" min="5" max="50" step="1" 
                    value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Result Card */}
          <div className="relative">
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-brand-600 to-blue-700 rounded-3xl p-1">
                <div className="bg-[#0A0A0C] rounded-[22px] p-8 md:p-12 text-center h-full relative overflow-hidden">
                   {/* Background Glow */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-500/20 blur-[50px] rounded-full pointer-events-none" />
                   
                   <h3 className="text-gray-400 font-medium uppercase tracking-widest text-sm mb-8">Projected Monthly Revenue</h3>
                   
                   <motion.div 
                     key={potentialRevenue}
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="text-6xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-8"
                   >
                     ${potentialRevenue.toLocaleString()}
                   </motion.div>

                   <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">{monthlyMeetings}</div>
                        <div className="text-xs text-gray-500 uppercase">Est. Meetings</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">{monthlyDeals}</div>
                        <div className="text-xs text-gray-500 uppercase">Est. Deals Closed</div>
                      </div>
                   </div>

                   <p className="text-xs text-gray-500 mt-8 italic">
                     *Based on conservative industry averages (4% reply rate, 15% booking rate).
                   </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};