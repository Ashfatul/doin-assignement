import Image from 'next/image';
import Link from 'next/link';


const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="relative group w-fit font-sans font-normal text-sm text-text-dark hover:text-primary transition-colors cursor-pointer">
    {children}
    <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-primary transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
  </Link>
);

export default function Footer() {

  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-border-light/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col gap-24">
        
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-10 max-w-[510px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src="/images/dark-logo.png"
                  alt="ByteSpace Logo"
                  width={170}
                  height={37}
                />
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
                <button className="flex items-center justify-center px-6 py-3 bg-secondary rounded-full font-sans font-medium text-lg text-text-dark hover:bg-secondary-alt hover:scale-105 active:scale-95 transition-[transform,color] duration-200 ease-out w-full sm:w-auto cursor-pointer">
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
              <div className="flex flex-col gap-4">
                <FooterLink href="#">Featured Courses</FooterLink>
                <FooterLink href="#">Featured Categories</FooterLink>
                <FooterLink href="#">Business</FooterLink>
                <FooterLink href="#">IT</FooterLink>
                <FooterLink href="#">Design</FooterLink>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <FooterLink href="#">Development</FooterLink>
                <FooterLink href="#">Marketing</FooterLink>
                <FooterLink href="#">Photography</FooterLink>
                <FooterLink href="#">Finance</FooterLink>
                <FooterLink href="#">Sport</FooterLink>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <FooterLink href="#">Become a Creator</FooterLink>
                <FooterLink href="#">Affiliate Program</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">Help</FooterLink>
                <FooterLink href="#">About</FooterLink>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-light/20">
          <p className="font-sans font-normal text-sm text-text-dark">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookies Settings</FooterLink>
          </div>
        </div>

      </div>
    </footer>
  );
}
