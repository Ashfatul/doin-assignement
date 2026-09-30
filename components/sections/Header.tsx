/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const containerVariants: any = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };
  
  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.1 } }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,box-shadow,height,padding] duration-200 ease-out ${
        scrolled || isMenuOpen ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div 
        className={`w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px] flex items-center justify-between text-white transition-[height,padding] duration-200 ease-out ${
          scrolled ? 'h-[64px] md:h-[80px] py-3 md:py-4' : 'h-[72px] md:h-[120px] py-4 md:py-6'
        }`}
      >
        <Link href="/" className="flex items-center z-50" onClick={() => setIsMenuOpen(false)}>
          <img src="/images/header-logo.svg" alt="ByteSpace Logo" className="h-[28px] md:h-[37px] w-auto transition-[transform,color] duration-200" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="relative font-sans font-medium text-base text-white/95 hover:text-white transition-colors group py-1 cursor-pointer">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
          </Link>
          <Link href="/courses" className="relative font-sans font-normal text-base text-white/95 hover:text-white transition-colors group py-1 cursor-pointer">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
          </Link>
          <Link href="/creators" className="relative font-sans font-normal text-base text-white/95 hover:text-white transition-colors group py-1 cursor-pointer">
            Creators
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="relative font-sans font-normal text-base text-white/95 hover:text-white transition-colors group py-1 cursor-pointer">
            Sign In
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
          </Link>
          <Link href="/register" className="relative font-sans font-normal text-base text-white/95 hover:text-white transition-colors group py-1 cursor-pointer">
            Join Us
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
          </Link>
          <button aria-label="Cart" className="text-white transition-[transform,color] duration-200 ease-out hover:text-secondary hover:scale-110 active:scale-95 cursor-pointer">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H14V18Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4 z-50">
          <button aria-label="Cart" className="text-white transition-[transform,color] duration-200 ease-out hover:text-secondary hover:scale-110 active:scale-95 cursor-pointer">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H14V18Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-1 focus:outline-none cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-0 left-0 w-full h-[100dvh] bg-primary overflow-y-auto -z-10"
          >
            <div className="flex flex-col items-center justify-start min-h-full pt-[100px] pb-[40px] gap-8">
              <motion.div variants={itemVariants}>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-heading text-2xl text-white font-medium hover:scale-105 inline-block transition-[transform,color] active:scale-95">Home</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/courses" onClick={() => setIsMenuOpen(false)} className="font-heading text-2xl text-white/90 hover:text-white hover:scale-105 inline-block transition-[transform,color] active:scale-95">Courses</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/creators" onClick={() => setIsMenuOpen(false)} className="font-heading text-2xl text-white/90 hover:text-white hover:scale-105 inline-block transition-[transform,color] active:scale-95">Creators</Link>
              </motion.div>
              
              <motion.div variants={itemVariants} className="w-[40px] h-[1px] bg-white/20 my-2"></motion.div>
              
              <motion.div variants={itemVariants}>
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="font-sans font-medium text-xl text-white/90 hover:text-white inline-block transition-colors">Sign In</Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/register" onClick={() => setIsMenuOpen(false)} className="font-sans font-medium text-xl text-white/90 hover:text-white inline-block transition-colors">Join Us</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
