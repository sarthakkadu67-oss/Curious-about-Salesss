import React from 'react';

const brands = [
  { name: "Veryfi", url: "https://www.veryfi.com/" },
  { name: "UrSpayce", url: "https://urspayce.com/" },
  { name: "Insightmonk", url: "https://www.insightmonk.com/" },
  { name: "Statzon", url: "https://statzon.com/" },
  { name: "Nanonets", url: "https://nanonets.com/" },
  { name: "Amplifyre", url: "https://amplifyre-us.com/" },
  { name: "Passage", url: "https://passage.com/" },
  { name: "Indigo-Premedia", url: "https://indigopremedia.com/" },
  { name: "Eurasian Capital", url: "https://www.eurasiancapital.com/" },
  { name: "Nordwind Growth", url: "https://www.nordwindgrowth.de/" }
];

export const Brands = () => {
  return (
    <section className="py-20 relative border-y border-white/5 bg-[#1A1429] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Top Brands That Trust Us</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-infinite-scroll flex whitespace-nowrap gap-16 px-8">
          {/* Duplicating the list 4 times to ensure no gaps on large screens when translating -50% */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <a 
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 cursor-pointer group/brand"
            >
              <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover/brand:bg-white/10 group-hover/brand:border-brand-500/30 transition-colors`}>
                {/* Dynamically fetch the icon from the domain */}
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${new URL(brand.url).hostname}&sz=128`}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xl font-display font-semibold text-white">{brand.name}</span>
            </a>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#1A1429] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#1A1429] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};