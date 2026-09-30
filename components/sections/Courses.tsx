import Link from "next/link";

const TABS = [
   "Featured",
   "Music",
   "Drawing & Painting",
   "Marketing",
   "Animation",
   "Social Media",
   "UI/UX Design",
   "Creative Marketing",
   "Digital Illustration",
   "Film & Video",
   "Crafts",
   "Freelance & Entrepreneurship",
   "Graphic Design",
   "Photography",
   "Productivity",
   "Web Development",
   "Data Science",
   "Cooking",
];

const COURSES = [
   {
      id: 1,
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      price: "$25",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      students: "26+",
   },
   {
      id: 2,
      title: "Build Digital Asset",
      author: "purepearl studio",
      price: "$25",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      students: "26+",
   },
   {
      id: 3,
      title: "the Power of Big Data",
      author: "purepearl studio",
      price: "$25",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      students: "26+",
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
                  At Bytespace Courses, we bring you closer to life-changing
                  knowledge. Explore a variety of courses across different
                  fields, from technology to the arts, and make a difference in
                  your career and life.
               </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-4 overflow-x-auto pb-4 hide-scrollbar justify-start xl:justify-center flex-wrap">
               {TABS.map((tab, idx) => (
                  <button
                     key={idx}
                     className={`flex-shrink-0 px-6 py-3 rounded-full font-sans font-medium text-base transition-colors ${
                        idx === 0
                           ? "bg-secondary text-text-dark"
                           : "bg-background-alt text-[#4b4c53] hover:bg-gray-200"
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
                  <div
                     key={course.id}
                     className="flex flex-col bg-white border border-border-light rounded-[24px] p-4 gap-4 hover:shadow-xl transition-shadow cursor-pointer group"
                  >
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
                           <div className="flex justify-between">
                              <h3 className="font-heading font-semibold text-[20px] text-black line-clamp-1">
                                 {course.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                 <span className="font-sans font-normal text-lg text-text-gray">
                                    {course.rating}
                                 </span>
                                 <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525H0.999597C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625H10.3096V5.5525Z"
                                       fill="#CED0D3"
                                    />
                                 </svg>
                              </div>
                           </div>
                           <div className="flex items-center gap-1">
                            <span className="font-sans font-normal text-xs text-text-gray">
                              by
                           </span>
                           <span className="font-sans font-medium text-sm text-primary">
                              {course.author}
                           </span>
                           </div>
                        </div>

                        {/* Level & Avatars */}
                        <div className="flex items-center justify-start gap-3">
                           <div className="flex items-center gap-2 px-3 py-1.5 bg-background-alt rounded-full">
                              <svg
                                 width="13"
                                 height="14"
                                 viewBox="0 0 13 14"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z"
                                    fill="#4B4C53"
                                 />
                              </svg>

                              <span className="font-sans font-medium text-xs text-[#4b4c53]">
                                 {course.level}
                              </span>
                           </div>

                           <div className="flex -space-x-2">
                              {[1, 2, 3, 4].map((i) => {
                                 const imageIndex = ((course.id + i) % 7) + 1;
                                 return (
                                    <img
                                       key={i}
                                       src={`/images/users/${imageIndex}.png`}
                                       alt="Student"
                                       className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                    />
                                 );
                              })}
                              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center font-sans font-medium text-xs text-text-dark z-10">
                                 {course.students}
                              </div>
                           </div>
                        </div>

                        {/* Footer: Price & Rating */}
                        <div className="flex items-center justify-between mt-2">
                           <div className="flex items-end gap-1">
                              <span className="font-heading font-semibold text-[20px] text-primary">
                                 {course.price}
                              </span>
                              <span className="font-sans font-normal text-xs text-text-gray pb-[3px]">
                                 /lifetime
                              </span>
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
