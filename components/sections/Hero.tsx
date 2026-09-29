import { Search } from 'lucide-react';
import Header from './Header';

export default function Hero() {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      {/* Background Rings / Decorative lines can go here as absolutely positioned SVGs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1149px] h-[1149px] rounded-full border-[320px] border-secondary opacity-10 pointer-events-none" />

      <Header />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-12 md:py-24 lg:px-[120px] flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content Area */}
        <div className="flex-1 max-w-[935px] flex flex-col gap-8">
          <h1 className="font-heading font-semibold text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-sans font-normal text-lg text-[#e5e6e8] max-w-[819px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 bg-white/10 p-2 rounded-full w-full max-w-[581px] backdrop-blur-sm">
            <div className="flex-1 flex items-center gap-3 px-6 py-3 bg-white rounded-full w-full">
              <Search className="w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full font-sans text-lg text-text-dark placeholder:text-text-muted outline-none bg-transparent"
              />
            </div>
            <button className="flex items-center justify-center bg-secondary text-text-dark font-sans font-medium text-lg px-8 py-3 rounded-full w-full sm:w-auto hover:bg-secondary-alt transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Right Content Area / Images */}
        <div className="flex-1 relative w-full h-[500px] hidden lg:block">
          {/* We'll use placeholders for the 3D ornaments and images for now */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-white/20 rounded-3xl backdrop-blur-md flex items-center justify-center">
             <span className="text-white">Main Image Placeholder</span>
          </div>

          {/* Floating Card: Learning Progress */}
          <div className="absolute -left-10 top-1/4 bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-2 min-w-[200px]">
            <span className="font-sans font-medium text-sm text-text-dark">Learning Progress</span>
            <span className="font-heading font-semibold text-5xl text-text-dark">55%</span>
            <div className="w-full h-2 bg-background-card rounded-full overflow-hidden mt-1">
              <div className="h-full bg-secondary w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card: Happy Students */}
          <div className="absolute -bottom-10 right-10 bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-4 min-w-[232px]">
            <div>
              <span className="font-sans font-medium text-base text-text-dark block">Happy Students</span>
              <div className="flex items-center gap-1">
                <span className="font-sans text-xs text-text-muted">4.5 (240)</span>
                <span className="text-secondary text-xs">★</span>
              </div>
            </div>
            <div className="flex -space-x-4">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="w-[43px] h-[43px] rounded-full bg-gray-200 border-2 border-white" />
               ))}
               <div className="w-[43px] h-[43px] rounded-full bg-secondary border-2 border-white flex items-center justify-center font-sans font-bold text-xs text-text-dark z-10">
                 2K+
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
