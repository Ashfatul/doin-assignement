/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export default function PathToGrowth() {
  return (
    <section className="relative w-full py-16 md:py-26 bg-[#fafafa] overflow-hidden">
      {/* Background Gradients */}
      {/* Top Left */}
      <div 
        className="absolute top-0 left-0 pointer-events-none -translate-x-1/3 -translate-y-1/3 z-0" 
        style={{
          width: '1137px',
          height: '1137px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)'
        }} 
      />
      {/* Top Right */}
      <div 
        className="absolute top-0 right-0 pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" 
        style={{
          width: '1137px',
          height: '1137px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)'
        }} 
      />
      {/* Bottom Left */}
      <div 
        className="absolute bottom-0 left-0 pointer-events-none -translate-x-1/3 translate-y-1/3 z-0" 
        style={{
          width: '672px',
          height: '672px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)'
        }} 
      />
      {/* Bottom Right */}
      <div 
        className="absolute bottom-0 right-0 pointer-events-none translate-x-1/3 translate-y-1/3 z-0" 
        style={{
          width: '1137px',
          height: '1137px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)'
        }} 
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-24 lg:gap-26">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col gap-10 max-w-[574px] z-10">
            <h2 className="font-heading font-semibold text-[32px] md:text-[44px] text-text-dark leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-sans font-normal text-lg text-[#4b4c53] leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-12 sm:gap-14 mt-4">
              <div className="flex flex-col gap-1">
                <span className="font-heading font-medium text-[40px] text-primary leading-none">12K</span>
                <span className="font-sans font-normal text-base text-[#4b4c53]">Students</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-medium text-[40px] text-primary leading-none">70+</span>
                <span className="font-sans font-normal text-base text-[#4b4c53]">Courses</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-medium text-[40px] text-primary leading-none">16</span>
                <span className="font-sans font-normal text-base text-[#4b4c53]">Creators</span>
              </div>
            </div>
          </div>

          {/* Right Image/Widget Area (Boy) */}
          <div className="flex-1 relative w-full h-[500px] sm:h-[600px] hidden lg:block z-10">
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[750px] flex items-center justify-center z-10">
              <img src="/images/growth-image-1.png" alt="Growth" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            {/* Scribble (Optional) */}
            <div className="absolute top-[15%] right-[0%] w-[216px] h-[216px] z-12">
              <Image src="/images/spiral.svg" alt="Scribble" width={216} height={216} className="w-full h-full text-[#cbfc01]" />
            </div>

            {/* Widget 1: Learn Figma Course Card */}
            <div className="absolute top-[15%] left-[-20px] bg-white rounded-[20px] w-[260px] flex flex-col shadow-[0px_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="relative w-full h-[140px]">
                 <img src="/images/course/1.png" alt="Course" className="w-full h-full object-cover" />
                 <div className="absolute bottom-2 left-2 flex items-center gap-1">
                   <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-medium text-text-dark">17 Lessons</div>
                   <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-medium text-text-dark">2 hours 16 mins</div>
                 </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-heading font-semibold text-[15px] text-text-dark leading-tight">Learn Figma from Scratch</span>
                  <span className="font-sans font-normal text-[11px] text-[#2f55d4]">by purepearl studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-[#f3f4f6] px-2 py-1 rounded text-[11px] font-medium text-[#4b4c53]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                    Beginner
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-heading font-bold text-lg text-[#2f55d4]">$25</span>
                  <span className="font-sans font-normal text-xs text-[#82868e]">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Learning Progress */}
            <div className="absolute top-[45%] right-[-10px] bg-white p-5 rounded-[20px] w-[200px] flex flex-col gap-3 shadow-[0px_20px_40px_rgba(0,0,0,0.08)] z-10">
              <span className="font-sans font-medium text-[13px] text-text-dark">Learning Progress</span>
              <span className="font-heading font-bold text-[40px] text-text-dark leading-none">55%</span>
              <div className="w-full h-[6px] bg-[#f3f4f6] rounded-full overflow-hidden mt-1 relative">
                <div className="absolute top-0 left-0 w-[55%] h-full bg-[#cbfc01] rounded-full" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Left Image/Widget Area (Girl) */}
          <div className="flex-1 relative w-full h-[500px] sm:h-[600px] hidden lg:block z-10">
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[750px] flex items-center justify-center z-10">
              <img src="/images/growth-image-2.png" alt="Growth" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            {/* Scribble (Optional) */}
            <div className="absolute top-[10%] right-[15%] w-[216px] h-[216px] z-12">
              <Image src="/images/spiral2.svg" alt="Scribble" width={216} height={216} className="w-full h-full text-[#cbfc01]" />
            </div>

            {/* Widget 1: Total Revenue */}
            <div className="absolute top-[16%] left-[-20px] bg-primary p-4 rounded-2xl w-[232px] flex flex-col gap-2 shadow-[0px_20px_40px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-[13px] text-white">Total Revenue</span>
                <span className="font-sans font-normal text-[10px] text-white/70">July 1-28</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-2xl text-white">$120.29</span>
                <div className="bg-[#cbfc01] px-2 py-[2px] rounded-full font-sans font-bold text-[10px] text-text-dark">
                  +12%
                </div>
              </div>
              <div className="w-full h-[6px] bg-white/20 rounded-full overflow-hidden mt-2">
                <div className="w-[60%] h-full bg-[#cbfc01] rounded-full" />
              </div>
            </div>

            {/* Widget 2: Year to Date */}
            <div className="absolute top-[45%] left-[-30px] bg-primary p-4 rounded-2xl w-[150px] flex flex-col gap-2 shadow-[0px_20px_40px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-[13px] text-white">Year to Date</span>
                <span className="font-sans font-normal text-[10px] text-white/70">2023</span>
              </div>
              <span className="font-heading font-bold text-2xl text-white">$1,200.38</span>
              <div className="bg-[#cbfc01] px-2 py-[2px] rounded-full font-sans font-bold text-[10px] text-text-dark w-fit">
                +12$
              </div>
            </div>

            {/* Widget 3: Happy Students */}
            <div className="absolute bottom-[30%] right-[0%] bg-white p-4 rounded-2xl w-[258px] flex flex-col gap-3 shadow-[0px_20px_40px_rgba(0,0,0,0.08)] z-10">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-[14px] text-text-dark">Happy Students</span>
                <div className="flex items-center gap-1">
                  <span className="font-sans font-semibold text-[11px] text-text-dark">4.5</span>
                  <span className="font-sans text-[11px] text-[#82868e]">(240)</span>
                  <span className="text-[#cbfc01] text-[11px] ml-1">★</span>
                </div>
              </div>
              <div className="flex -space-x-3 mt-1">
                 {[1, 2, 3, 4, 5, 6].map((i) => (
                   <img
                     key={i}
                     src={`/images/users/${i}.png`}
                     alt={`Student ${i}`}
                     className="w-[38px] h-[38px] rounded-full object-cover border-2 border-white"
                   />
                 ))}
                 <div className="w-[38px] h-[38px] rounded-full bg-[#cbfc01] flex items-center justify-center font-sans font-bold text-[11px] text-text-dark z-10 border-2 border-white">
                   2K+
                 </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex-1 flex flex-col gap-8 max-w-[574px] z-10">
            <h2 className="font-heading font-semibold text-[32px] md:text-[44px] text-text-dark leading-[1.2]">
              Create & Manage <br /> Courses Easily.
            </h2>
            <p className="font-sans font-normal text-lg text-[#4b4c53] leading-relaxed">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2f55d4] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-sans font-medium text-base text-text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
