import React from 'react';
import { motion } from 'framer-motion';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  align?: 'left' | 'center' | 'right';
}

export function GradientHeading({ 
  children, 
  className = '',
  as = 'h2',
  align = 'left'
}: GradientHeadingProps) {
  
  const baseClasses = "font-bold tracking-tight";
  const sizeClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
  };
  
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  
  const allClasses = `${baseClasses} ${sizeClasses[as]} ${alignClasses[align]} mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-purple-300 to-[var(--secondary)] ${className}`;
  
  const Component = as;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Component className={allClasses}>
      {children}
      </Component>
    </motion.div>
  );
}