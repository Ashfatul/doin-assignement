export default function CreatorCTA() {
  return (
    <section className="relative w-full bg-primary py-24 overflow-hidden flex items-center justify-center">
      {/* Background Rings / Decorative lines can go here as absolutely positioned SVGs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[200px] border-secondary opacity-10 pointer-events-none" />
      
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
