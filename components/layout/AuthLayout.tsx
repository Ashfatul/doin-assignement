import Header from '@/components/sections/Header';
import { BarChart2, Star } from 'lucide-react';
import React from 'react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-primary flex flex-col overflow-hidden relative">
      {/* Background Rings */}
      <div className="absolute top-0 left-0 w-[1440px] h-[1024px] overflow-hidden pointer-events-none">
        {Array.from({ length: 13 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute left-0 right-0 border-t-2 border-white/5" 
            style={{ top: `${(i + 1) * 78}px` }}
          />
        ))}
      </div>

      <Header />

      <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-[120px] flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-0 relative z-10">
        
        {/* Left Side: Graphic & Text */}
        <div className="flex-1 flex flex-col gap-10 max-w-[475px] relative">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading font-semibold text-4xl md:text-[56px] text-white leading-[1.1]">
              {title}
            </h1>
            <p className="font-sans font-normal text-lg text-white/80 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Decorative Cards Area (Hidden on small screens) */}
          <div className="hidden lg:block relative h-[400px] w-full mt-10">
            {/* Background floating card 1 */}
            <div className="absolute top-0 left-0 transform -rotate-6 scale-90 opacity-70">
              <CourseCardPlaceholder title="the Power of Big Data" />
            </div>
            
            {/* Foreground floating card 2 */}
            <div className="absolute top-10 left-10 transform z-10 shadow-2xl">
              <CourseCardPlaceholder title="Build Digital Asset" />
            </div>

            {/* Floating Happy Students */}
            <div className="absolute bottom-10 -right-10 bg-secondary p-4 rounded-2xl w-[258px] flex flex-col gap-4 shadow-xl z-20">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-base text-text-dark">Happy Students</span>
                <div className="flex items-center gap-1">
                  <span className="font-sans text-[10px] text-text-dark/70">4.5 (240)</span>
                  <span className="text-text-dark text-[10px]">★</span>
                </div>
              </div>
              <div className="flex -space-x-4">
                 {[1, 2, 3, 4, 5, 6].map((i) => (
                   <div key={i} className="w-[43px] h-[43px] rounded-full bg-white border-2 border-secondary" />
                 ))}
                 <div className="w-[43px] h-[43px] rounded-full bg-white border-2 border-secondary flex items-center justify-center font-sans font-bold text-xs text-text-dark z-10">
                   2K+
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full max-w-[579px] bg-white rounded-3xl p-8 md:p-12 shadow-2xl shrink-0">
          {children}
        </div>

      </div>
    </main>
  );
}

// Decorative Card Component matching the auth side graphics
function CourseCardPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-[373px] bg-white rounded-3xl p-4 shadow-xl border border-border-light flex flex-col gap-4 pointer-events-none select-none">
      <div className="w-full h-[195px] bg-[#443131] rounded-xl flex items-start p-3">
        <div className="flex items-center gap-2">
           <div className="px-3 py-1 bg-[#f6f6f6] rounded-full font-sans font-medium text-[10px] text-text-gray">17 Lessons</div>
           <div className="px-3 py-1 bg-[#f6f6f6] rounded-full font-sans font-medium text-[10px] text-text-gray">2 hours 16 mins</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <h3 className="font-heading font-semibold text-lg text-black">{title}</h3>
          <span className="font-sans text-xs text-text-gray">by purepearl studio</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-background-alt rounded-full">
            <BarChart2 className="w-3 h-3 text-[#4b4c53]" />
            <span className="font-sans font-medium text-[10px] text-[#4b4c53]">Beginner</span>
          </div>
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />)}
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-end gap-1">
            <span className="font-heading font-semibold text-lg text-primary">$25</span>
            <span className="font-sans text-[10px] text-text-gray pb-1">/lifetime</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-sans text-sm text-text-gray">4.5</span>
            <Star className="w-4 h-4 text-border-light" />
          </div>
        </div>
      </div>
    </div>
  );
}
