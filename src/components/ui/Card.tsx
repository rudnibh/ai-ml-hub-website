import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
}

export function Card({ 
  children, 
  className = '', 
  interactive = true, 
  variant = 'default' 
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  
  // Base styles that apply to all variants
  let baseStyles = "rounded-xl overflow-hidden";
  
  // Variant specific styles
  const variantStyles = {
    default: "bg-[var(--bg-dark)]/50 backdrop-blur-sm border border-[var(--primary-dark)]/30",
    elevated: "bg-[var(--bg-dark)]/70 backdrop-blur-md shadow-xl shadow-[var(--primary-dark)]/20",
    bordered: "bg-[var(--bg-dark)]/40 backdrop-blur-sm border-2 border-[var(--primary)]/30",
    glass: "bg-[var(--bg-dark)]/20 backdrop-blur-xl border border-[var(--primary)]/20"
  };
  
  // Combine base and variant styles
  baseStyles = `${baseStyles} ${variantStyles[variant]}`;
  
  if (!interactive) {
    return (
      <div className={`${baseStyles} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
      animate={{ 
        boxShadow: hovered 
          ? '0 10px 25px -5px rgba(139, 92, 246, 0.25), 0 0 10px 5px rgba(139, 92, 246, 0.1)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ 
        translateY: -4,
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {hovered && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/30 to-[var(--secondary)]"></div>
          <div className="absolute -inset-[1px] opacity-30 border border-[var(--primary)]/30 rounded-xl"></div>
        </div>
      )}
    </motion.div>
  );
}