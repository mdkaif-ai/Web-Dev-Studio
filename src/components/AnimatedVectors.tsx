import React from 'react';

// Animated Vector Background Component
export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 animate-float-vector opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,5 95,35 95,75 50,95 5,75 5,35" 
            fill="none" 
            stroke="url(#primaryGradient)" 
            strokeWidth="2"
            className="animate-pulse-glow"
          />
          <defs>
            // amazonq-ignore-next-line
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(280 100% 65%)" />
              <stop offset="100%" stopColor="hsl(45 100% 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-32 right-20 w-16 h-16 animate-spin-slow opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle 
            cx="50" 
            cy="50" 
            r="25" 
            fill="none" 
            stroke="url(#accentGradient)" 
            strokeWidth="3"
            strokeDasharray="10,5"
          />
          <defs>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(45 100% 60%)" />
              <stop offset="100%" stopColor="hsl(280 100% 65%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-20 left-32 w-24 h-24 animate-float-vector opacity-25" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path 
            d="M50,10 L80,30 L80,70 L50,90 L20,70 L20,30 Z" 
            fill="none" 
            stroke="url(#secondaryGradient)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(320 100% 70%)" />
              <stop offset="100%" stopColor="hsl(200 100% 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-32 right-16 w-12 h-12 animate-pulse-glow opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect 
            x="25" 
            y="25" 
            width="50" 
            height="50" 
            fill="none" 
            stroke="hsl(280 100% 65%)" 
            strokeWidth="3"
            transform="rotate(45 50 50)"
          />
        </svg>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(280 100% 65%)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

// Animated Icon Component
export const AnimatedIcon = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
      
      {/* Icon container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// Animated Vector Border Component
export const VectorBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-pulse-glow"></div>
      <div className="absolute inset-[1px] rounded-2xl bg-background/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Floating Particles Component
export const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-primary rounded-full animate-float-vector opacity-30`}
          style={{
            // amazonq-ignore-next-line
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};