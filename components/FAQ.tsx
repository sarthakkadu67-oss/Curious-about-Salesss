import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    q: "Are cold emails still effective?", 
    a: "Yes! Cold emails are still more effective than any other lead-generation method. If correctly executed. An effective cold email campaign can generate more leads, book more meetings, and fill the pipeline with qualified leads." 
  },
  { 
    q: "How long does it take to see results?", 
    a: "It depends. There are a lot of factors to be considered in cold outreach. So, it takes time to build a winning campaign. From our experience, it takes at least 3 months to see the results." 
  },
  { 
    q: "What industries do you serve?", 
    a: "Well, we don’t restrict ourselves to specific industries. But we specialize in helping B2B businesses get consistent sales and meetings. We’re currently working with a SaaS company, coach, finance company, deep tech startup, etc." 
  },
  { 
    q: "What tools do you use?", 
    a: "We use 15+ tools and databases like LinkedIn sales navigator, Zoominfo, Apollo, Instantly, Zerobounce, Lemlist, Closely, etc." 
  },
  {
    q: "How do I track the progress of my campaigns?",
    a: "Yes, you can. You’ll have access to a dashboard where you can see the campaign analytics. You can easily track the metrics like open rates, number of leads contacted, reply rate, etc."
  },
  {
    q: "Do you send weekly reports?",
    a: "Yes! Every Saturday, we send our clients weekly reports so they get insights into the campaigns. The weekly report includes metrics such as the number of emails sent, open rates, and leads generated."
  },
  {
    q: "What are you doing to ensure your emails land in the primary inbox?",
    a: "We know how important it is to send emails at the right time to the right people, from the right email clients, and from the right domains. To ensure your emails land in the primary inbox, we do 3 most important things: 1. Do a proper technical setup of your domain records and warm them up. 2. Build a list of verified and relevant prospects to ensure the emails reach the right person. 3. Write a relevant message that resonates with your prospects."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gray-50 dark:bg-brand-dark relative z-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-bold tracking-widest text-sm uppercase mb-2">FAQS</p>
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">Have any doubts?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border transition-all duration-300 rounded-lg overflow-hidden h-fit ${
                openIndex === i 
                  ? 'border-brand-500 bg-white shadow-lg dark:bg-white/5 dark:border-brand-500/50' 
                  : 'border-gray-200 bg-white hover:border-gray-300 dark:border-white/10 dark:bg-transparent dark:hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between p-6 text-left"
              >
                <span className={`font-medium text-lg pr-4 ${openIndex === i ? 'text-brand-600 dark:text-white' : 'text-gray-800 dark:text-gray-400'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 p-1 rounded-full transition-colors mt-1 ${openIndex === i ? 'bg-brand-100 text-brand-600 dark:bg-brand-500 dark:text-white' : 'bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};