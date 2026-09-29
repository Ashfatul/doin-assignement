import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-border-light/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-24">
        
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-10 max-w-[528px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-8 text-secondary">
                  <svg viewBox="0 0 29 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4375 0L28.875 8V24L14.4375 32L0 24V8L14.4375 0Z" />
                  </svg>
                </div>
                <span className="font-display font-bold text-2xl tracking-wide text-text-dark">ByteSpace</span>
              </div>
              <p className="font-sans font-normal text-sm text-text-dark">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-[504px]">
                <div className="flex-1 w-full bg-white border border-border-light rounded-full px-6 py-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full font-sans text-base text-text-dark placeholder:text-text-dark outline-none bg-transparent"
                  />
                </div>
                <button className="flex items-center justify-center px-6 py-3 bg-secondary rounded-full font-sans font-medium text-lg text-text-dark hover:bg-secondary-alt transition-colors w-full sm:w-auto">
                  Search
                </button>
              </div>
              <p className="font-sans font-normal text-xs text-text-dark">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 sm:gap-24">
            
            <div className="flex flex-col gap-6">
              <span className="font-sans font-medium text-base text-text-dark">Browse</span>
              <div className="flex flex-col gap-4">
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Featured Courses</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Featured Categories</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Business</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">IT</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Design</Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-12">
              <div className="flex flex-col gap-4">
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Development</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Marketing</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Photography</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Finance</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Sport</Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-sans font-medium text-base text-text-dark">Platform</span>
              <div className="flex flex-col gap-4">
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Become a Creator</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">About Us</Link>
                <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Contact Us</Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-light/20">
          <p className="font-sans font-normal text-sm text-text-dark">
            © 2024 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
