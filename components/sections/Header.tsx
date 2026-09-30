"use client";

import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check scroll position on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div 
        className={`w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex items-center justify-between text-white transition-all duration-300 ${
          scrolled ? 'h-[80px] py-4' : 'h-[120px] py-6'
        }`}
      >
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
        <Link href="/login" className="hidden sm:block font-sans font-normal text-base text-white/95 hover:text-white transition-colors">
          Sign In
        </Link>
        <Link href="/register" className="hidden sm:block font-sans font-normal text-base text-white/95 hover:text-white transition-colors">
          Join Us
        </Link>
        <button aria-label="Cart" className="text-white/95 hover:text-white transition-colors">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z" fill="#F5F5F6"/>
          </svg>
        </button>
      </div>
      </div>
    </header>
  );
}
