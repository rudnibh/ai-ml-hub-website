import React from 'react';
import { Sparkles } from 'lucide-react';
import { AimlLogo } from './ui/AimlLogo';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

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
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
        <animated.img
          style={{
            transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Logo with 3D Effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-700 rounded-full blur-2xl opacity-35 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <animated.div
            style={{
              transform: xy.to((x, y) => `translate3d(${x * 2}px,${y * 2}px,0) rotateX(${y}deg) rotateY(${x}deg)`),
            }}
          >
            <AimlLogo className="h-47 w-46 text-purple-400 mx-auto mb-6" />
          </animated.div>
        </motion.div>

        {/* Animated Text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient"
        >
          AI/ML HUB
        </motion.h1>

        {/* Description with Character Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          {Array.from("Welcome to the AIML Hub at JIIT!").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Interactive CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative inline-block group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <button className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300">
            <span className="flex items-center">
              Join Us Today
              <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block w-3 h-3 bg-purple-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}