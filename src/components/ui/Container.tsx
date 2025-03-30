import React from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withFade?: boolean;
}

export function Container({ 
  children, 
  className = '',
  size = 'lg',
  withFade = false
}: ContainerProps) {
  
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'max-w-full'
  };
  
  const baseStyles = `${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 relative z-0`;
  
  if (withFade) {
    return (
      <motion.div 
        className={`${baseStyles} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}