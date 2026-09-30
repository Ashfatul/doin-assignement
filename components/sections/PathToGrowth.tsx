export default function PathToGrowth() {
  return (
    <section className="w-full py-16 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col gap-10 max-w-[574px]">
            <h2 className="font-heading font-semibold text-4xl md:text-[44px] text-text-dark leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-sans font-normal text-lg text-[#4b4c53] leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-12 sm:gap-14 mt-4">
              <div className="flex flex-col">
                <span className="font-heading font-medium text-4xl text-primary">12K</span>
                <span className="font-sans font-normal text-lg text-[#4b4c53]">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-medium text-4xl text-primary">70+</span>
                <span className="font-sans font-normal text-lg text-[#4b4c53]">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-medium text-4xl text-primary">16</span>
                <span className="font-sans font-normal text-lg text-[#4b4c53]">Creators</span>
              </div>
            </div>
          </div>

          {/* Right Image/Widget Area */}
          <div className="flex-1 relative w-full h-[500px] sm:h-[600px] hidden lg:block">
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] flex items-center justify-center">
              <img src="/images/growth-image-1.png" alt="Growth" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>

            {/* Widget 1: Total Revenue */}
            <div className="absolute top-[10%] left-[-20px] bg-primary p-4 rounded-2xl w-[232px] flex flex-col gap-2 shadow-xl">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-base text-[#f5f5f6]">Total Revenue</span>
                <span className="font-sans font-normal text-[10px] text-[#f5f5f6]">July 1-28</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-2xl text-[#f5f5f6]">$120.29</span>
                <div className="bg-[#cbfc01] px-2 py-1 rounded-full font-sans font-medium text-[10px] text-text-dark">
                  +12%
                </div>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden mt-2">
                <div className="w-[60%] h-full bg-[#d4fb20] rounded-full" />
              </div>
            </div>

            {/* Widget 2: Year to Date */}
            <div className="absolute top-[40%] right-[-20px] bg-primary p-4 rounded-2xl w-[134px] flex flex-col gap-2 shadow-xl">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-base text-[#f5f5f6]">Year to Date</span>
                <span className="font-sans font-normal text-[10px] text-[#f5f5f6]">2023</span>
              </div>
              <span className="font-heading font-semibold text-2xl text-[#f5f5f6]">$1,200</span>
              <div className="bg-[#cbfc01] px-2 py-1 rounded-full font-sans font-medium text-[10px] text-text-dark w-fit">
                +12%
              </div>
            </div>

            {/* Widget 3: Happy Students */}
            <div className="absolute bottom-[5%] left-[10%] bg-white p-4 rounded-2xl w-[258px] flex flex-col gap-4 shadow-xl">
              <div className="flex flex-col">
                <span className="font-sans font-medium text-base text-text-dark">Happy Students</span>
                <div className="flex items-center gap-1">
                  <span className="font-sans text-[10px] text-[#82868e]">4.5 (240)</span>
                  <span className="text-[#d4fb20] text-[10px]">★</span>
                </div>
              </div>
              <div className="flex -space-x-4">
                 {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                   <img
                     key={i}
                     src={`/images/users/${i}.png`}
                     alt={`Student ${i}`}
                     className="w-[43px] h-[43px] rounded-full object-cover"
                   />
                 ))}
                 <div className="w-[43px] h-[43px] rounded-full bg-[#d4fb20] flex items-center justify-center font-sans font-bold text-xs text-text-dark z-10">
                   2K+
                 </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
