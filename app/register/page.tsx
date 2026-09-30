import AuthLayout from '@/components/layout/AuthLayout';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <AuthLayout 
      title="Sign up and come in" 
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col w-full flex-1">
        {/* Form Header */}
        <div className="flex flex-col gap-[2px] mb-4 md:mb-[107px]">
          <h2 className="font-sans font-normal text-lg text-primary leading-[28.8px]">
            Create an Account
          </h2>
          <p className="font-heading font-semibold text-text-dark text-[24px] md:text-[44px] leading-[52.8px] tracking-[-1px]">
            Welcome to ByteSpace
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-5 w-full mb-5 md:mb-[45px]">
          <div className="flex flex-col gap-2">
            <label className="font-sans font-medium text-sm text-text-dark">Full Name</label>
            <input 
              type="text" 
              placeholder="Jamie Davis" 
              className="w-full px-5 py-3 rounded-xl border border-border-light bg-white font-sans text-lg text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans font-medium text-sm text-text-dark">Email</label>
            <input 
              type="email" 
              placeholder="designer@example.com" 
              className="w-full px-5 py-3 rounded-xl border border-border-light bg-white font-sans text-lg text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans font-medium text-sm text-text-dark">Password</label>
            <input 
              type="password" 
               
              className="w-full px-5 py-3 rounded-xl border border-border-light bg-white font-sans text-lg text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="ml-auto py-3 px-6 mt-2 bg-secondary rounded-full font-sans font-medium text-lg text-text-dark hover:bg-secondary-alt hover:scale-105 active:scale-95 transition-[transform,color] duration-200 ease-out cursor-pointer"
          >
            Continue
          </button>
        </form>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-[5px] mt-auto">
          <span className="font-sans font-normal text-base text-text-muted leading-[25.6px]">
            Already have an account?
          </span>
          <Link href="/login" className="font-sans font-medium text-base text-primary hover:underline leading-[25.6px]">
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
