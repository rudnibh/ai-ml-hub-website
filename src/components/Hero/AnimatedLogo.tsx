import React from 'react';
import { motion } from 'framer-motion';
import { animated, SpringValue } from '@react-spring/web';
import { AimlLogo } from '../ui/AimlLogo';

interface AnimatedLogoProps {
  xy: SpringValue<number[]>;
}

export function AnimatedLogo({ xy }: AnimatedLogoProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-700 rounded-full blur-2xl opacity-35 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
      <animated.div
        style={{
          transform: xy.to((x, y) => `translate3d(${x * 2}px,${y * 2}px,0) rotateX(${y}deg) rotateY(${x}deg)`),
        }}
      >
        <AimlLogo className="h-47 w-46 text-purple-400 mx-auto mb-6" />
      </animated.div>
    </motion.div>
  );
}