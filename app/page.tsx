import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import Categories from '@/components/sections/Categories';
import Courses from '@/components/sections/Courses';
import PathToGrowth from '@/components/sections/PathToGrowth';
import CreatorCTA from '@/components/sections/CreatorCTA';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-white">
      <Hero />
      <Partners />
      <Courses />
      <Categories />
      <PathToGrowth />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
