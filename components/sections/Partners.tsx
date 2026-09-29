export default function Partners() {
  return (
    <section className="w-full bg-background-alt py-12 border-y border-border-light/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px]">
        {/* We use standard text placeholders for partner logos since SVG exports were not available */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-12 opacity-50 grayscale">
          {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5', 'Company 6'].map((partner, idx) => (
            <div key={idx} className="font-display font-bold text-2xl text-text-muted flex items-center justify-center h-10 min-w-[120px]">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
