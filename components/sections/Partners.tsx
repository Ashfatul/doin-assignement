'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
  '/images/partners/partner1.svg',
  '/images/partners/partner2.svg',
  '/images/partners/partner3.svg',
  '/images/partners/partner4.svg',
  '/images/partners/partner5.svg',
];

export default function Partners() {
  return (
    <section className="w-full bg-background-alt py-12 border-y border-border-light/20 overflow-hidden flex items-center">
      <div className="flex w-full whitespace-nowrap">
        {/* Infinite Marquee Animation */}
        <motion.div
          className="flex items-center gap-16 md:gap-24 px-12"
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((src, idx) => (
            <div key={idx} className="flex items-center justify-center h-10 w-[150px]" title="Replace with actual partner logo">
              {/* Fallback box shown until images are provided by user */}
              <img 
                src={src} 
                alt={`Partner ${idx}`} 
                className="w-full h-full object-contain filter grayscale opacity-60 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Hide broken image icon if image is missing
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerText = 'Logo';
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
