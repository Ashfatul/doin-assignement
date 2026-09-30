import Link from 'next/link';
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

      {/* Auth Simple Header Logo */}
      <header className="w-full z-50 h-[120px] flex items-center px-6 lg:px-[120px] relative">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-8 text-secondary">
            <svg viewBox="0 0 29 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4375 0L28.875 8V24L14.4375 32L0 24V8L14.4375 0Z" />
            </svg>
          </div>
          <span className="font-display font-bold text-2xl tracking-wide text-white">ByteSpace</span>
        </Link>
      </header>

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
            <div className="absolute top-0 left-0 transform -rotate-6 scale-90 opacity-70 pointer-events-none select-none">
              <CourseCardAuth 
                id={2} 
                title="the Power of Big Data" 
                author="purepearl studio" 
                price="$25" 
                rating="4.5"
                lessons="17 Lessons"
                duration="2 hours 16 mins"
                comments="59 Comments"
                level="Beginner"
                students="26+"
              />
            </div>
            
            {/* Foreground floating card 2 */}
            <div className="absolute top-10 left-10 transform z-10 shadow-2xl pointer-events-none select-none">
              <CourseCardAuth 
                id={3} 
                title="Build Digital Asset" 
                author="purepearl studio" 
                price="$25" 
                rating="4.5"
                lessons="17 Lessons"
                duration="2 hours 16 mins"
                comments="59 Comments"
                level="Beginner"
                students="26+"
              />
            </div>

            {/* Floating Happy Students */}
            <div className="absolute bottom-10 -right-10 bg-secondary p-4 rounded-2xl w-[258px] flex flex-col gap-4 shadow-xl z-20 pointer-events-none select-none">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-base text-text-dark">Happy Students</span>
                <div className="flex items-center gap-1">
                  <span className="font-sans font-medium text-[10px] text-text-dark/70">4.5 (240)</span>
                  <span className="text-text-dark text-[10px]">★</span>
                </div>
              </div>
              <div className="flex -space-x-4">
                 {[1, 2, 3, 4, 5, 6].map((i) => (
                   <img key={i} src={`/images/users/${i}.png`} alt="Student" className="w-[43px] h-[43px] rounded-full border-2 border-secondary object-cover" />
                 ))}
                 <div className="w-[43px] h-[43px] rounded-full bg-white border-2 border-secondary flex items-center justify-center font-sans font-bold text-xs text-text-dark z-10">
                   2K+
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full max-w-[579px] bg-white rounded-[24px] p-8 md:p-12 shadow-2xl shrink-0">
          {children}
        </div>

      </div>
    </main>
  );
}

interface CourseCardAuthProps {
  id: number;
  title: string;
  author: string;
  price: string;
  rating: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  students: string;
}

function CourseCardAuth({ id, title, author, price, rating, lessons, duration, comments, level, students }: CourseCardAuthProps) {
  return (
    <div className="w-[373px] flex flex-col bg-white border border-border-light rounded-[24px] p-4 gap-4 bg-white">
       <div className="w-full h-[195px] bg-[#443131] rounded-xl flex items-end p-3 relative overflow-hidden">
          <img 
             src={`/images/course/${id}.png`} 
             alt={title}
             className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="flex flex-wrap items-center gap-3 relative z-10">
             <div className="px-3 py-1.5 bg-[#f6f6f6] rounded-full font-sans font-medium text-xs text-text-gray">
                {lessons}
             </div>
             <div className="px-3 py-1.5 bg-[#f6f6f6] rounded-full font-sans font-medium text-xs text-text-gray">
                {duration}
             </div>
             <div className="px-3 py-1.5 bg-[#f6f6f6] rounded-full font-sans font-medium text-xs text-text-gray hidden sm:block">
                {comments}
             </div>
          </div>
       </div>

       <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-1">
             <div className="flex justify-between">
                <h3 className="font-heading font-semibold text-[20px] text-black line-clamp-1">
                   {title}
                </h3>
                <div className="flex items-center gap-2">
                   <span className="font-sans font-normal text-lg text-text-gray">
                      {rating}
                   </span>
                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525H0.999597C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625H10.3096V5.5525Z" fill="#CED0D3" />
                   </svg>
                </div>
             </div>
             <div className="flex items-center gap-1">
              <span className="font-sans font-normal text-xs text-text-gray">by</span>
              <span className="font-sans font-medium text-xs text-primary">{author}</span>
             </div>
          </div>

          <div className="flex items-center justify-start gap-3">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-background-alt rounded-full">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z" fill="#4B4C53" />
                </svg>
                <span className="font-sans font-medium text-xs text-[#4b4c53]">{level}</span>
             </div>
             <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                   <img key={i} src={`/images/users/${i}.png`} alt="Student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center font-sans font-medium text-xs text-text-dark z-10">
                   {students}
                </div>
             </div>
          </div>

          <div className="flex items-center justify-between mt-2">
             <div className="flex items-end gap-1">
                <span className="font-heading font-semibold text-[20px] text-primary">{price}</span>
                <span className="font-sans font-normal text-xs text-text-gray pb-[3px]">/lifetime</span>
             </div>
          </div>
       </div>
    </div>
  );
}
