import { PencilRuler, Code, Laptop, Building2, Megaphone, Camera } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

const CATEGORIES = [
  { id: 1, name: 'Design', icon: PencilRuler },
  { id: 2, name: 'Development', icon: Code },
  { id: 3, name: 'IT & Software', icon: Laptop },
  { id: 4, name: 'Business', icon: Building2 },
  { id: 5, name: 'Marketing', icon: Megaphone },
  { id: 6, name: 'Photography', icon: Camera },
];

export default function Categories() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-12">
        
        {/* Heading Area */}
        <div className="flex flex-col items-center text-center gap-4 mx-auto">
          <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-black">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-sans font-normal text-[18px] text-[#82868e] leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br /> fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-2 justify-items-center">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <FadeIn 
                key={cat.id} 
                delay={0.1 * cat.id}
                className="flex flex-col items-center justify-center w-full max-w-[170px] aspect-square bg-white border border-gray-200 rounded-[20px] gap-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[#CBFC01] flex items-center justify-center text-text-dark shadow-sm">
                   <Icon className="w-7 h-7 text-text-dark" strokeWidth={1.5} />
                </div>
                <span className="font-sans font-medium text-[15px] text-[#3a3b3f] text-center leading-tight">
                  {cat.name}
                </span>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
