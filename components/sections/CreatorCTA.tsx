'use client';

import { motion } from 'framer-motion';

export default function CreatorCTA() {
  return (
    <section className="relative w-full bg-primary py-24 overflow-hidden flex items-center justify-center">
      {/* Background Rings / Decorative lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[200px] border-secondary opacity-10 pointer-events-none" />
      
      {/* Animated Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <AnimatedShape src="/images/cta-shape-1.png" className="absolute top-[10%] left-[10%] w-[150px]" delay={0} yRange={[-15, 15]} rotateRange={[0, 10, 0]} />
        <AnimatedShape src="/images/cta-shape-2.png" className="absolute bottom-[20%] left-[20%] w-[100px]" delay={1.5} yRange={[-10, 10]} rotateRange={[0, -10, 0]} />
        <AnimatedShape src="/images/cta-shape-3.png" className="absolute top-[20%] right-[15%] w-[180px]" delay={0.5} yRange={[-20, 20]} rotateRange={[0, 15, 0]} />
        <AnimatedShape src="/images/cta-shape-4.png" className="absolute bottom-[15%] right-[25%] w-[120px]" delay={2} yRange={[-12, 12]} />
      </div>
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col items-center text-center gap-10">
        <div className="flex flex-col gap-8 max-w-[964px] items-center">
          <h2 className="font-heading font-semibold text-4xl md:text-[44px] leading-tight text-[#f5f5f6] max-w-[710px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="font-sans font-normal text-lg text-[#f5f5f6] leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
        </div>
        
        <button className="flex items-center justify-center px-8 py-3 bg-secondary rounded-full font-sans font-medium text-lg text-text-dark hover:bg-secondary-alt transition-colors w-full sm:w-auto">
          Join as Creator
        </button>
      </div>
    </section>
  );
}

function AnimatedShape({ src, className, delay, yRange, rotateRange = [0, 0, 0] }: { src: string, className: string, delay: number, yRange: number[], rotateRange?: number[] }) {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center ${className}`}
      animate={{ 
        y: yRange,
        rotate: rotateRange
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
    >
      <img src={src} alt="3D Shape" className="w-full h-full object-contain drop-shadow-xl" 
        onError={(e) => {
           (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </motion.div>
  );
}

