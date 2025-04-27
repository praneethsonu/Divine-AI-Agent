
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Book, Heart } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Heart className="h-5 w-5" /> },
    { name: 'Sacred Texts', path: '/sacred-texts', icon: <Book className="h-5 w-5" /> },
  ];

  return (
    <header className={cn(
      'sticky top-0 z-40 w-full transition-all duration-300 font-divine',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow' : 'bg-white/80'
    )}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/dashboard" className="flex items-center space-x-2 group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300 animate-rotate-slow flex items-center justify-center">
            <span className="text-2xl font-bold text-orange-400">✧</span>
          </div>
          <span className="font-divine text-xl md:text-2xl tracking-wider text-black font-semibold">
            ✧ DIVINE-AI ✧
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 rounded-lg flex items-center space-x-2 font-divine text-black/80 transition-all duration-300',
                location.pathname === item.path 
                  ? 'bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-100 text-orange-600 shadow'
                  : 'hover:bg-yellow-100'
              )}
            >
              {React.cloneElement(item.icon, {
                className: cn(
                  'h-5 w-5',
                  location.pathname === item.path ? 'text-orange-500' : 'text-yellow-500'
                )
              })}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-yellow-100 z-50">
            <div className="flex justify-around py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex flex-col items-center py-2 px-4 font-divine text-sm',
                    location.pathname === item.path
                      ? 'text-orange-600'
                      : 'text-yellow-500'
                  )}
                >
                  {React.cloneElement(item.icon, {
                    className: cn(
                      'h-5 w-5 mb-1',
                      location.pathname === item.path
                        ? 'text-orange-600'
                        : 'text-yellow-500'
                    )
                  })}
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 h-0.5 w-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-t-full" />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
