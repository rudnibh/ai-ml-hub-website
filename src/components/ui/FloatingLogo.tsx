import React from 'react';
import { motion } from 'framer-motion';
import { AimlLogo } from './AimlLogo';

interface FloatingLogoProps {
  className?: string;
}

export function FloatingLogo({ className = '' }: FloatingLogoProps) {
  return (
    <motion.div
      animate={{ 
        y: [0, -20, 0] 
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      <AimlLogo />
    </motion.div>
  );
}