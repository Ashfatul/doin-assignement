import AuthLayout from '@/components/layout/AuthLayout';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthLayout 
      title="Sign in with ease" 
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col gap-8 w-full">
        {/* Form Header */}
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-heading font-semibold text-3xl text-black">
            Sign In
          </h2>
          <p className="font-sans font-normal text-base text-text-muted">
            Welcome Back
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-5 w-full">
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
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-border-light"></div>
          <span className="flex-shrink-0 mx-4 text-text-muted font-sans text-sm">or</span>
          <div className="flex-grow border-t border-border-light"></div>
        </div>

        {/* Social Logins */}
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center justify-center w-[72px] h-[72px] rounded-[24px] border border-border-light hover:bg-background-alt transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.34H19.29C21.37 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.29 20.34L15.73 17.57C14.74 18.23 13.48 18.63 12 18.63C9.13999 18.63 6.70999 16.7 5.83999 14.12H2.17999V16.96C3.98999 20.55 7.7 23 12 23Z" fill="#34A853"/>
              <path d="M5.84 14.12C5.62 13.46 5.49 12.75 5.49 12C5.49 11.25 5.62 10.54 5.84 9.88V7.04H2.18C1.43 8.53 1 10.22 1 12C1 13.78 1.43 15.47 2.18 16.96L5.84 14.12Z" fill="#FBBC05"/>
              <path d="M12 5.38C13.62 5.38 15.06 5.94 16.2 7.02L19.36 3.86C17.45 2.08 14.97 1 12 1C7.7 1 3.99 3.45 2.18 7.04L5.84 9.88C6.71 7.3 9.14 5.38 12 5.38Z" fill="#EA4335"/>
            </svg>
          </button>
          <button className="flex items-center justify-center w-[72px] h-[72px] rounded-[24px] border border-border-light hover:bg-background-alt transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.143 2.128c1.39-1.688 2.327-4.043 2.073-6.402-2.024.081-4.484 1.348-5.918 3.03-1.286 1.492-2.42 3.896-2.127 6.208 2.253.175 4.582-1.148 5.972-2.836zm3.327 7.03c-2.403-.046-4.225 1.424-5.467 1.424-1.241 0-2.825-1.376-4.836-1.332-2.613.045-5.023 1.517-6.368 3.856-2.73 4.733-.699 11.75 1.954 15.586 1.306 1.884 2.853 4 4.887 3.917 1.952-.089 2.709-1.275 5.076-1.275 2.344 0 3.045 1.275 5.1 1.23 2.096-.046 3.42-1.955 4.708-3.834 1.49-2.182 2.106-4.296 2.138-4.407-.048-.02-4.137-1.587-4.172-6.353-.028-3.98 3.256-5.897 3.4-5.986-1.854-2.713-4.735-3.08-5.42-3.136z" fill="#000" transform="translate(0 3) scale(0.9)"/>
            </svg>
          </button>
        </div>

        {/* Footer Link */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="font-sans font-normal text-sm text-text-muted">
            New user?
          </span>
          <Link href="/register" className="font-sans font-medium text-sm text-primary hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
