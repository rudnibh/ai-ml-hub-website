import React from 'react';
import { AimlLogo } from './ui/AimlLogo';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring animation */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse-slow" />
        
        {/* Inner container */}
        <div className="relative bg-gray-900 rounded-full p-8">
          {/* Logo with floating animation */}
          <div className="relative transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
            <AimlLogo className="h-24 w-24 text-purple-400 relative z-10 animate-float" />
          </div>
        </div>

        {/* Loading indicator */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-purple-400"
              style={{
                animation: `loadingDot 1.5s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}