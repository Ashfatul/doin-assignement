import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";

export default function LoginPage() {
   return (
      <AuthLayout
         title="Sign in with ease"
         subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      >
         <div className="flex flex-col gap-[73px] w-full flex-1">
            {/* Form Header */}
            <div className="flex flex-col gap-[2px] mb-[73px]">
               <h2 className="font-sans font-normal text-lg text-primary leading-[28.8px]">
                  Sign In
               </h2>
               <p className="font-heading font-semibold text-text-dark text-[44px] leading-[52.8px] tracking-[-1px]">
                  Welcome Back
               </p>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-5 w-full mb-[73px]">
               <div className="flex flex-col gap-2">
                  <label className="font-sans font-medium text-sm text-text-dark">
                     Email
                  </label>
                  <input
                     type="email"
                     placeholder="designer@example.com"
                     className="w-full px-5 py-3 rounded-xl border border-border-light bg-white font-sans text-lg text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label className="font-sans font-medium text-sm text-text-dark">
                     Password
                  </label>
                  <input
                     type="password"
                     
                     className="w-full px-5 py-3 rounded-xl border border-border-light bg-white font-sans text-lg text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                  />
               </div>

               <button
                  type="submit"
                  className="ml-auto py-3 px-6 mt-2 bg-secondary rounded-full font-sans font-medium text-lg text-text-dark hover:bg-secondary-alt hover:scale-105 active:scale-95 transition-[transform,color] duration-200 ease-out cursor-pointer"
               >
                  Sign In
               </button>
            </form>

            <div className="flex flex-col gap-10">
               {/* Divider */}
               <div className="relative flex items-center">
                  <div className="flex-grow border-t border-border-light"></div>
                  <span className="flex-shrink-0 mx-[11px] text-text-muted font-sans font-normal text-lg leading-[28.8px]">
                     or
                  </span>
                  <div className="flex-grow border-t border-border-light"></div>
               </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
               <button className="flex items-center justify-center w-[72px] h-[72px] rounded-[24px] border border-border-light hover:bg-background-alt hover:scale-105 active:scale-95 transition-[transform,color] duration-200 ease-out cursor-pointer">
                  <svg
                     width="34"
                     height="34"
                     viewBox="0 0 34 34"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M33.3333 16.6667C33.3333 7.46191 25.8714 -3.8147e-06 16.6667 -3.8147e-06C7.46191 -3.8147e-06 0 7.46191 0 16.6667C0 24.9855 6.09476 31.8805 14.0625 33.1309V21.4844H9.83073V16.6667H14.0625V12.9948C14.0625 8.81771 16.5507 6.51041 20.3577 6.51041C22.1812 6.51041 24.0885 6.83593 24.0885 6.83593V10.9375H21.9869C19.9165 10.9375 19.2708 12.2222 19.2708 13.5403V16.6667H23.8932L23.1543 21.4844H19.2708V33.1309C27.2386 31.8805 33.3333 24.9855 33.3333 16.6667Z"
                        fill="black"
                     />
                  </svg>
               </button>
               <button className="flex items-center justify-center w-[72px] h-[72px] rounded-[24px] border border-border-light hover:bg-background-alt hover:scale-105 active:scale-95 transition-[transform,color] duration-200 ease-out cursor-pointer">
                  <svg
                     width="33"
                     height="34"
                     viewBox="0 0 33 34"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M32.625 17.0417C32.625 15.9444 32.5278 14.9028 32.3611 13.8889H16.6667V20.1528H25.6528C25.25 22.2083 24.0694 23.9444 22.3194 25.125V29.2917H27.6806C30.8194 26.3889 32.625 22.1111 32.625 17.0417Z"
                        fill="black"
                     />
                     <path
                        d="M16.6667 6.59722C19.125 6.59722 21.3194 7.44445 23.0556 9.09723L27.8056 4.34722C24.9306 1.65278 21.1667 0 16.6667 0C10.1528 0 4.52778 3.75 1.79167 9.19445L7.31945 13.4861C8.63889 9.52778 12.3194 6.59722 16.6667 6.59722Z"
                        fill="black"
                     />
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.6667 33.3333C10.1528 33.3333 4.52778 29.5833 1.79167 24.1389L7.31945 19.8472C8.63889 23.8056 12.3194 26.7361 16.6667 26.7361C18.9167 26.7361 20.8194 26.125 22.3194 25.125L27.6806 29.2917C24.9306 31.8333 21.1667 33.3333 16.6667 33.3333ZM7.31945 13.4861V9.19445H1.79167L7.31945 13.4861Z"
                        fill="black"
                     />
                     <path
                        d="M1.79167 19.8472H7.31945C6.97222 18.8472 6.79167 17.7778 6.79167 16.6667C6.79167 15.5556 6.98611 14.4861 7.31945 13.4861L1.79167 9.19445C0.652776 11.4444 0 13.9722 0 16.6667C0 19.3611 0.652776 21.8889 1.79167 24.1389V19.8472Z"
                        fill="black"
                     />
                     <path
                        d="M7.31945 19.8472H1.79167V24.1389L7.31945 19.8472Z"
                        fill="black"
                     />
                  </svg>
               </button>
            </div>
            </div>

            {/* Footer Link */}
            <div className="flex items-center justify-center gap-[5px] mt-auto">
               <span className="font-sans font-normal text-base text-text-muted leading-[25.6px]">
                  New user?
               </span>
               <Link
                  href="/register"
                  className="font-sans font-medium text-base text-primary hover:underline leading-[25.6px]"
               >
                  Create an account
               </Link>
            </div>
         </div>
      </AuthLayout>
   );
}
