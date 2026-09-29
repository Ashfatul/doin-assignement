import { BarChart2, Star } from 'lucide-react';
import Link from 'next/link';

const TABS = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking'
];

const COURSES = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    author: 'by purepearl studio',
    price: '$25',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    students: '26+',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    author: 'by purepearl studio',
    price: '$25',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    students: '26+',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    author: 'by purepearl studio',
    price: '$25',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    students: '26+',
  },
];

export default function Courses() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-12">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[917px] mx-auto">
          <h2 className="font-heading font-semibold text-4xl md:text-[44px] text-text-main leading-tight">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="font-sans font-normal text-lg text-text-muted">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 hide-scrollbar justify-start xl:justify-center flex-wrap">
          {TABS.map((tab, idx) => (
            <button 
              key={idx}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-sans font-medium text-base transition-colors ${
                idx === 0 
                  ? 'bg-secondary text-text-dark' 
                  : 'bg-background-alt text-[#4b4c53] hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}

          <Link href="#" className="text-[#003BE2]">
            + More
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {COURSES.map((course) => (
            <div key={course.id} className="flex flex-col bg-white border border-border-light rounded-[24px] p-4 gap-4 hover:shadow-xl transition-shadow cursor-pointer group">
              
              {/* Thumbnail Placeholder */}
              <div className="w-full h-[195px] bg-[#443131] rounded-xl flex items-end p-3 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                {/* Overlay stats */}
                <div className="flex flex-wrap items-center gap-3">
                   <div className="px-3 py-1.5 bg-[#f6f6f6] rounded-full font-sans font-medium text-xs text-text-gray">
                     {course.lessons}
                   </div>
                   <div className="px-3 py-1.5 bg-[#f6f6f6] rounded-full font-sans font-medium text-xs text-text-gray">
                     {course.duration}
                   </div>
                   <div className="px-3 py-1.5 bg-[#f6f6f6] rounded-full font-sans font-medium text-xs text-text-gray hidden sm:block">
                     {course.comments}
                   </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex flex-col gap-4 mt-2">
                
                {/* Title & Author */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-[20px] text-black line-clamp-1">{course.title}</h3>
                  <span className="font-sans font-normal text-xs text-text-gray">{course.author}</span>
                </div>

                {/* Level & Avatars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-background-alt rounded-full">
                    <BarChart2 className="w-4 h-4 text-[#4b4c53]" />
                    <span className="font-sans font-medium text-xs text-[#4b4c53]">{course.level}</span>
                  </div>

                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center font-sans font-medium text-xs text-text-dark z-10">
                      {course.students}
                    </div>
                  </div>
                </div>

                {/* Footer: Price & Rating */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-end gap-1">
                    <span className="font-heading font-semibold text-[20px] text-primary">{course.price}</span>
                    <span className="font-sans font-normal text-xs text-text-gray pb-[3px]">/lifetime</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-normal text-lg text-text-gray">{course.rating}</span>
                    <Star className="w-5 h-5 text-border-light fill-transparent" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
