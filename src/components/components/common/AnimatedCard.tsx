
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  delay?: number;
  onClick?: () => void; // Add onClick property to the interface
}

const AnimatedCard = ({
  children,
  className,
  hoverEffect = true,
  glassEffect = false,
  delay = 0,
  onClick // Add onClick to the destructured props
}: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        'divine-card animate-fade-in-up',
        hoverEffect && 'divine-card-hover',
        glassEffect && 'glassmorphism',
        className
      )}
      style={{ animationDelay: `${delay * 0.1}s` }}
      onClick={onClick} // Add onClick handler to the div
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
