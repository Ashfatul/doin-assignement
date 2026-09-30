'use client';

import { motion } from 'framer-motion';
import Grid from '../ui/Grid';

export default function CreatorCTA() {
  return (
    <section className="relative w-full bg-primary py-24 overflow-hidden flex items-center justify-center">
      <Grid />

      {/* Animated Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <AnimatedShape src="/images/cta/cta-shape-1.png" className="absolute top-0 left-0 w-[120px] md:w-[180px] lg:w-[286px] opacity-20 lg:opacity-100 hidden sm:block" delay={0} yRange={[-15, 15]} rotateRange={[0, 10, 0]} />
        <AnimatedShape src="/images/cta/cta-shape-2.png" className="absolute top-[10%] -right-[20px] w-[100px] md:w-[150px] lg:w-[200px] opacity-20 lg:opacity-100" delay={1.5} yRange={[-10, 10]} rotateRange={[0, -10, 0]} />
        <AnimatedShape src="/images/cta/cta-shape-3.png" className="absolute -bottom-[22px] left-[0%] w-[150px] md:w-[220px] lg:w-[343px] opacity-20 lg:opacity-100 hidden md:block" delay={0.5} yRange={[-20, 20]} rotateRange={[0, 15, 0]} />
        <AnimatedShape src="/images/cta/cta-shape-4.png" className="absolute bottom-[0%] right-0 w-[150px] md:w-[200px] lg:w-[330px] opacity-20 lg:opacity-100" delay={2} yRange={[-12, 12]} />
        <AnimatedShape src="/images/cta/cta-shape-5.png" className="absolute top-[6%] left-[10%] w-[175px] hidden lg:block" delay={1.5} yRange={[-10, 10]} rotateRange={[0, -10, 0]} />
        <AnimatedShape src="/images/cta/cta-shape-6.png" className="absolute top-[5%] right-[15%] w-[188px] hidden lg:block" delay={0.5} yRange={[-20, 20]} rotateRange={[0, 15, 0]} />
        <AnimatedShape src="/images/cta/cta-shape-7.png" className="absolute bottom-[15%] left-0 w-[138px] hidden lg:block" delay={2} yRange={[-12, 12]} />
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
        
        <button className="flex items-center justify-center px-8 py-3 bg-secondary cursor-pointer rounded-full font-sans font-medium text-lg text-text-dark hover:bg-secondary-alt transition-[transform,color] duration-200 ease-out hover:scale-105 active:scale-95 w-full sm:w-auto">
          Join as Creator
        </button>
      </div>
    </section>
  );
}

function AnimatedShape({ src, className, delay, yRange, rotateRange = [0, 0, 0] }: { src: string, className: string, delay: number, yRange: number[], rotateRange?: number[] }) {
  return (
    <motion.div
      className={className}
      animate={{ 
      y: yRange,
      rotate: rotateRange
      }}
      transition={{
      duration: 6,
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

