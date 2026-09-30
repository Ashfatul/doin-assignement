import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Grid from '@/components/ui/Grid';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#003be2] overflow-hidden relative">
      <Header />
      
      {/* Main 404 Content */}
      <div className="flex-1 relative flex items-center justify-center pt-[120px] pb-[120px] w-full">
        <Grid />
        {/* 404 Text Background (Linear gradient clip text) */}
        <div className="absolute inset-0 -top-50 flex items-center justify-center pointer-events-none z-0">
          <span className="font-heading font-bold text-[300px] md:text-[480px] leading-none bg-gradient-to-b from-[#cbfc01] to-white/0 bg-clip-text text-transparent select-none">
            404
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center max-w-[935px] px-6 mt-100">
          <h1 className="font-heading font-semibold text-[40px] md:text-[72px] leading-[1.2] md:leading-[86.4px] text-white">
            The page you are looking for doesn’t exist
          </h1>
          <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[1.6] md:leading-[28.8px] text-[#e5e6e8]">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link href="/">
            <button className="bg-[#cbfc01] text-[#0a0a0a] font-sans cursor-pointer font-medium text-lg px-8 py-4 rounded-full hover:bg-[#b8e600] hover:scale-105 active:scale-95 transition-[transform,color] duration-200 ease-out mt-6 shadow-md">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </main>
  );
}
