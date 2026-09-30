"use client";

import { Search } from "lucide-react";
import Header from "./Header";
import { motion } from "framer-motion";
import Grid from "../ui/Grid";
import Image from "next/image";

export default function Hero() {
   return (
      <section className="relative w-full bg-primary overflow-hidden text-center pt-[120px]">
         {/* Background Rings / Decorative lines can go here as absolutely positioned SVGs */}
         <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[1149px] h-[1149px] rounded-full border-[320px] border-[#CBFC01] pointer-events-none" />

         <Header />

         <div className="relative w-full pt-12 md:pt-24 flex flex-col items-center gap-12">
            {/* Left Content Area */}
            <div className="relative w-full">
               {/* Main Center Sphere */}
               <AnimatedShape
                  src="/images/hero/hero-shape-1.png"
                  className="absolute bottom-0 left-0 w-[265px]"
                  delay={0}
                  yRange={[-10, 10]}
               />
               {/* Top Right Cone */}
               <AnimatedShape
                  src="/images/hero/hero-shape-2.png"
                  className="absolute bottom-0 right-0 w-[210px]"
                  delay={1}
                  yRange={[-15, 15]}
                  rotateRange={[0, 15, 0]}
               />
               <div className="flex-1 max-w-[935px] flex flex-col gap-8 mx-auto">
                  <h1 className="font-heading font-semibold text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] text-white text-center">
                     Get Access to Hundreds Courses Available
                  </h1>
                  <p className="font-sans font-normal text-lg text-[#e5e6e8] max-w-[819px]">
                     Unlock your creativity, gain valuable knowledge, and grow
                     your business with our wide range of courses.
                  </p>

                  {/* Search Bar */}
                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto rounded-full w-full max-w-[581px]">
                     <div className="flex-1 flex items-center gap-3 px-6 py-3 bg-white rounded-full w-full">
                        <Search className="w-5 h-5 text-text-muted" />
                        <input
                           type="text"
                           placeholder="Course, topic, creator"
                           className="w-full font-sans text-lg text-text-dark placeholder:text-text-muted outline-none bg-transparent"
                        />
                     </div>
                     <button className="flex items-center justify-center bg-secondary text-text-dark font-sans font-medium text-lg px-8 py-3 rounded-full w-full sm:w-auto hover:bg-secondary-alt transition-[transform,color] duration-200 ease-out hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap">
                        Search
                     </button>
                  </div>
               </div>
            </div>

            {/* Right Content Area / Images */}
            <div className="flex-1 relative w-full hidden lg:flex items-center justify-center pointer-none text-left">
               {/* Hero Man */}
               <div className="relative bottom-0 w-[640px] h-[457px]">
                  <Image
                     src="/images/hero-man.png"
                     alt="Hero Man"
                     className="w-full h-full object-contain drop-shadow-2xl"
                     width={640}
                     height={457}
                     onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                     }}
                  />

                  <div className="absolute right-5 top-30 bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-2 min-w-[230px]">
                     <span className="font-sans font-medium text-sm text-text-dark">
                        Learning Progress
                     </span>
                     <span className="font-heading font-semibold text-5xl text-text-dark">
                        55%
                     </span>
                     <div className="w-full h-2 bg-background-card rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-secondary w-[55%] rounded-full" />
                     </div>
                  </div>

                  {/* Floating Meta */}
                  <div className="absolute top-20 -left-10 bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-4 min-w-[232px]">
                     <div>
                        <span className="font-sans font-medium text-base text-text-dark block">
                           UI/UX Design
                        </span>
                        <div className="flex items-center gap-1">
                           <span className="font-sans text-xs text-text-muted">
                              200 Courses
                           </span>
                           <span className="font-sans text-xs text-text-muted h-1 w-1 rounded-full bg-text-muted"></span>
                           <span className="font-sans text-xs text-text-muted">
                              1000+ Students
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Floating Card: Happy Students */}
                  <div className="absolute bottom-20 -left-26 bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-4 min-w-[232px]">
                     <div>
                        <span className="font-sans font-medium text-base text-text-dark block">
                           Happy Students
                        </span>
                        <div className="flex items-center gap-1">
                           <span className="font-sans text-xs text-text-muted">
                              4.5 (240)
                           </span>
                           <span className="text-secondary text-xs">★</span>
                        </div>
                     </div>
                     <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                           <Image
                              key={i}
                              src={`/images/users/${i}.png`}
                              alt={`Student ${i}`}
                              width={43}
                              height={43}
                              className="w-[43px] h-[43px] rounded-full object-cover"
                           />
                        ))}
                        <div className="w-[43px] h-[43px] rounded-full bg-secondary flex items-center justify-center font-sans font-bold text-xs text-text-dark z-10">
                           2K+
                        </div>
                     </div>
                  </div>
               </div>
               {/* Animated 3D Shapes */}
               <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {/* Bottom Right Ring */}
                  <AnimatedShape
                     src="/images/hero/hero-shape-3.png"
                     className="absolute top-0 left-[15%] w-[175px]"
                     delay={2}
                     yRange={[-20, 20]}
                     rotateRange={[0, -15, 0]}
                  />
                  {/* Top Left Shape */}
                  <AnimatedShape
                     src="/images/hero/hero-shape-4.png"
                     className="absolute top-0 right-[15%] w-[188px]"
                     delay={1.5}
                     yRange={[-12, 12]}
                  />
                  {/* Bottom Left Shape */}
                  <AnimatedShape
                     src="/images/hero/hero-shape-5.png"
                     className="absolute bottom-[10%] left-0 w-[342px]"
                     delay={0.5}
                     yRange={[-8, 8]}
                     rotateRange={[0, 10, 0]}
                  />

                  <AnimatedShape
                     src="/images/hero/hero-shape-6.png"
                     className="absolute bottom-[10%] right-0 w-[330px]"
                     delay={0.5}
                     yRange={[-8, 8]}
                     rotateRange={[0, 10, 0]}
                  />
               </div>
            </div>
         </div>

         <Grid />
      </section>
   );
}

function AnimatedShape({
   src,
   className,
   delay,
   yRange,
   rotateRange = [0, 0, 0],
}: {
   src: string;
   className: string;
   delay: number;
   yRange: number[];
   rotateRange?: number[];
}) {
   return (
      <motion.div
         className={`flex items-center justify-center ${className}`}
         //  animate={{
         //     y: yRange,
         //     rotate: rotateRange,
         //  }}
         //  transition={{
         //     duration: 4,
         //     repeat: Infinity,
         //     repeatType: "reverse",
         //     ease: "easeInOut",
         //     delay: delay,
         //  }}
      >
         <img
            src={src}
            alt="3D Shape"
            className="w-full h-full object-contain drop-shadow-xl"
            onError={(e) => {
               (e.target as HTMLImageElement).style.display = "none";
            }}
         />
      </motion.div>
   );
}
