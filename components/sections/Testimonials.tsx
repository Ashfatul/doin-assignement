const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="font-heading font-semibold text-4xl md:text-[44px] text-black leading-tight max-w-[577px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-sans font-normal text-lg text-[#4f4f4f] leading-relaxed max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col bg-white rounded-[24px] p-6 gap-6 shadow-sm border border-border-light/40">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-200" />
                <div className="flex flex-col">
                  <span className="font-heading font-semibold text-[20px] text-black">{testimonial.name}</span>
                  <span className="font-sans font-normal text-lg text-primary">{testimonial.role}</span>
                </div>
              </div>
              
              {/* Text */}
              <p className="font-sans font-normal text-lg text-[#4f4f4f] leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
