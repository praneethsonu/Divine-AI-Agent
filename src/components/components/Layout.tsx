import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [animationClass, setAnimationClass] = useState('');
  
  useEffect(() => {
    const themes = ['divine-pattern-1', 'divine-pattern-2', 'divine-pattern-3'];
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % themes.length;
      setAnimationClass(themes[currentIndex]);
    }, 30000); // Change every 30 seconds
    
    setAnimationClass(themes[0]); // Set initial theme
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className={cn(
      "min-h-screen flex flex-col relative overflow-hidden",
      animationClass
    )}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute h-40 w-40 rounded-full bg-saffron-300/10 blur-2xl top-1/4 right-1/4 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute h-32 w-32 rounded-full bg-golden-300/10 blur-xl top-1/3 left-1/3 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute h-56 w-56 rounded-full bg-divine-200/10 blur-3xl bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '7s' }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-divine-50/30 dark:to-divine-900/30 pointer-events-none"></div>
      </div>
      
      {!isHomePage && <Navigation />}
      
      <main className={cn(
        'flex-1 transition-all duration-500 ease-in-out z-10 pb-20 md:pb-6',
        fullWidth ? 'w-full' : 'container mx-auto px-4 py-6 md:px-6 md:py-8'
      )}>
        <div className="animate-fade-in" style={{ animationDuration: '0.8s' }}>
          {children}
        </div>
      </main>
      
      {!isHomePage && (
        <footer className="py-6 px-6 text-center z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-golden-500 animate-pulse-gentle" />
            <h3 className="font-divine text-2xl md:text-3xl font-bold bg-gradient-divine-conic bg-clip-text text-transparent animate-background-shine tracking-wider">
              ✧ DIVINE-AI ✧
            </h3>
            <Sparkles className="h-5 w-5 text-saffron-500 animate-pulse-gentle" />
          </div>
          <p className="text-sm text-divine-600/70 dark:text-divine-400/70">
            Spiritual wisdom for your journey • © {new Date().getFullYear()}
          </p>
        </footer>
      )}
    </div>
  );
};

export default Layout;
