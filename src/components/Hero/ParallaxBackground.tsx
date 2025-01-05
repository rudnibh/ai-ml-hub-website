import React from 'react';
import { animated, SpringValue } from '@react-spring/web';

interface ParallaxBackgroundProps {
  xy: SpringValue<number[]>;
}

export function ParallaxBackground({ xy }: ParallaxBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-900" />
        <animated.img
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
    </>
  );
}
