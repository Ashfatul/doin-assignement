import AuthLayout from '@/components/layout/AuthLayout';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <AuthLayout 
      title="Sign up and come in" 
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col gap-8 w-full">
        {/* Form Header */}
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-heading font-semibold text-3xl text-black">
            Create an Account
          </h2>
          <p className="font-sans font-normal text-base text-text-muted">
            Welcome to ByteSpace
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label className="font-sans font-medium text-sm text-text-dark">Full Name</label>
            <input 
              type="text" 
              placeholder="Jamie Davis" 
              className="w-full px-5 py-3 rounded-xl border border-border-light bg-background-alt font-sans text-base text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans font-medium text-sm text-text-dark">Email</label>
            <input 
              type="email" 
              placeholder="designer@example.com" 
              className="w-full px-5 py-3 rounded-xl border border-border-light bg-background-alt font-sans text-base text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-sans font-medium text-sm text-text-dark">Password</label>
            <input 
              type="password" 
              placeholder="********" 
              className="w-full px-5 py-3 rounded-xl border border-border-light bg-background-alt font-sans text-base text-text-dark placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-2 bg-primary rounded-xl font-sans font-medium text-lg text-white hover:bg-primary/90 transition-colors"
          >
            Continue
          </button>
        </form>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="font-sans font-normal text-sm text-text-muted">
            Already have an account?
          </span>
          <Link href="/login" className="font-sans font-medium text-sm text-primary hover:underline">
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
