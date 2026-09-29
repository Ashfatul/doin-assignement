import { Monitor, Briefcase, Camera, PenTool, Layout, BarChart } from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'Design', icon: PenTool },
  { id: 2, name: 'Development', icon: Monitor },
  { id: 3, name: 'IT & Software', icon: Layout },
  { id: 4, name: 'Business', icon: Briefcase },
  { id: 5, name: 'Marketing', icon: BarChart },
  { id: 6, name: 'Photography', icon: Camera },
];

export default function Categories() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-10">
        
        {/* Heading Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-[958px]">
            <span className="font-sans font-medium text-lg text-accent">Featured Categories</span>
            <h2 className="font-heading font-medium text-4xl md:text-[44px] text-black">
              Innovative Paths to Knowledge
            </h2>
          </div>
          
          <button className="flex items-center justify-center px-6 py-2 bg-secondary-alt rounded-full font-sans font-medium text-base text-[#3a3b3f] hover:bg-secondary transition-colors whitespace-nowrap h-10 w-fit">
            View More
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10 mt-4 overflow-x-auto pb-4 hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id} 
                className="flex flex-col items-center justify-center min-w-[150px] lg:w-[167px] h-[167px] bg-background-alt rounded-[24px] gap-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-secondary flex items-center justify-center text-border-dark shadow-sm">
                   <Icon className="w-8 h-8 text-text-dark" strokeWidth={1.5} />
                </div>
                <span className="font-sans font-normal text-lg text-text-dark text-center leading-tight">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
