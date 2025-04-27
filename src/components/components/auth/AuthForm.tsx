
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

type AuthMode = 'login' | 'register';

const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, we would connect to Supabase here
    // For now, we'll simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-md w-full">
      <div className="divine-card p-8 md:p-10">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-light mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h3>
          <p className="text-divine-600/70 dark:text-divine-400/70">
            {mode === 'login' 
              ? 'Continue your spiritual journey' 
              : 'Begin your path to inner peace'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-divine-700 dark:text-divine-300">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="divine-input w-full"
                placeholder="Your name"
                required
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-divine-700 dark:text-divine-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="divine-input w-full"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5 text-divine-700 dark:text-divine-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="divine-input w-full"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className={cn(
                'divine-button w-full flex justify-center items-center',
                isLoading && 'opacity-80 cursor-not-allowed'
              )}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </div>
          
          <div className="text-center mt-4 text-sm">
            <span className="text-divine-600/70 dark:text-divine-400/70">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              type="button"
              onClick={toggleMode}
              className="text-divine-600 dark:text-divine-300 hover:underline"
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-divine-200 dark:border-divine-700/30"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white dark:bg-divine-50/10 text-divine-500 dark:text-divine-400">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2.5 border border-divine-200 dark:border-divine-700/30 rounded-xl text-sm font-medium bg-white/50 dark:bg-divine-50/5 hover:bg-divine-50 dark:hover:bg-divine-100/10 transition-all duration-200"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2.5 border border-divine-200 dark:border-divine-700/30 rounded-xl text-sm font-medium bg-white/50 dark:bg-divine-50/5 hover:bg-divine-50 dark:hover:bg-divine-100/10 transition-all duration-200"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
              </svg>
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
