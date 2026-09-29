import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 py-6 md:px-10 lg:px-[120px] h-[120px] flex items-center justify-between text-white relative z-10">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/images/header-logo.svg" alt="ByteSpace Logo" className="h-[37px] w-auto" />
      </Link>

      {/* Center Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="font-sans font-medium text-base text-white/95">
          Home
        </Link>
        <Link href="/courses" className="font-sans font-normal text-base text-white/95 hover:text-white transition-colors">
          Courses
        </Link>
        <Link href="/creators" className="font-sans font-normal text-base text-white/95 hover:text-white transition-colors">
          Creators
        </Link>
      </nav>

      {/* Right Nav */}
      <div className="flex items-center gap-6">
        <Link href="/signin" className="hidden sm:block font-sans font-normal text-base text-white/95 hover:text-white transition-colors">
          Sign In
        </Link>
        <Link href="/join" className="hidden sm:block font-sans font-normal text-base text-white/95 hover:text-white transition-colors">
          Join Us
        </Link>
        <button aria-label="Cart" className="text-white/95 hover:text-white transition-colors">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
