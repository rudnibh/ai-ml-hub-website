import React from 'react';
import { useSpring } from '@react-spring/web';
import { motion } from 'framer-motion';
import { ParallaxBackground } from './ParallaxBackground';
import { FloatingElements } from './FloatingElements';
import { AnimatedDescription } from './AnimatedDescription';
import { CTAButton } from './CTAButton';
import { AnimatedLogo } from './AnimatedLogo';

export default function Hero() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;
    set({ xy: [x, y] });
  };

  return (
    <div 
      className="relative hero-grid min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ParallaxBackground xy={xy} />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0">
        <div className="honeycomb-pattern animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedLogo xy={xy} />

        {/* Animated Title */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient"
        >
          AI/ML HUB
        </motion.h1>

        <AnimatedDescription text="Welcome to the AIML Hub at JIIT!" />
        <CTAButton />
      </div>

      <FloatingElements />
    </div>
  );
}