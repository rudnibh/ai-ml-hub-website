import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedElementProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedElement({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "",
  ...props 
}: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.21, 1.02, 0.73, 0.99] 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Animated button with hover effect and micro-interactions
export function AnimatedButton({ 
  children, 
  className = "",
  ...props 
}: AnimatedElementProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [0.9, 1], opacity: [0, 1] }}
        exit={{ scale: 0.9, opacity: 0 }}
      />
      {children}
    </motion.button>
  );
}

// Animated card with hover effects
export function AnimatedCard({ 
  children, 
  className = "",
  ...props 
}: AnimatedElementProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-900/20 ${className}`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [0.9, 1], opacity: [0, 1] }}
        exit={{ scale: 0.9, opacity: 0 }}
      />
      {children}
    </motion.div>
  );
}

// Text reveal animation
export function AnimatedText({ 
  children, 
  className = "",
  stagger = 0.05,
  ...props 
}: AnimatedElementProps & { stagger?: number }) {
  const words = children?.toString().split(' ') || [];

  return (
    <motion.div className={`inline-flex flex-wrap ${className}`} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * stagger,
            ease: [0.21, 1.02, 0.73, 0.99]
          }}
          className="mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Parallax container
export function ParallaxContainer({ 
  children, 
  offset = 50,
  className = "",
  ...props 
}: AnimatedElementProps & { offset?: number }) {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}