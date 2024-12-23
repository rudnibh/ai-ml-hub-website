import React from 'react';
import { motion } from 'framer-motion';

interface StyledTextProps {
  children: React.ReactNode;
  variant?: 'highlight' | 'underline' | 'emphasis';
  color?: string;
  className?: string;
}

export function StyledText({ 
  children, 
  variant = 'highlight',
  color = 'purple',
  className = '' 
}: StyledTextProps) {
  const colors = {
    purple: 'after:bg-purple-400/30 hover:after:bg-purple-400/50',
    yellow: 'after:bg-yellow-400/30 hover:after:bg-yellow-400/50',
    pink: 'after:bg-pink-400/30 hover:after:bg-pink-400/50'
  };

  const variants = {
    highlight: `relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 
      after:w-full after:h-[0.4em] after:-z-10 after:rounded-sm ${colors[color]} after:transition-colors`,
    
    underline: `relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 
      after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 
      after:transition-transform after:origin-bottom-left`,
    
    emphasis: `relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-1 
      after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-100`
  };

  return (
    <motion.span 
      className={`${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
}