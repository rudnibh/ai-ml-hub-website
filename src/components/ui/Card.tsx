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
    default: "bg-[var(--bg-darker)] border border-[var(--primary-dark)]/30",
    elevated: "bg-[var(--bg-dark)] shadow-lg shadow-[var(--primary-dark)]/10",
    bordered: "bg-[var(--bg-darker)] border-2 border-[var(--primary)]/30",
    glass: "bg-[var(--bg-dark)] border border-[var(--primary)]/20"
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
          ? '0 8px 15px -5px rgba(139, 92, 246, 0.15), 0 0 5px 2px rgba(139, 92, 246, 0.05)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ 
        translateY: -2,
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {hovered && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/20 to-[var(--secondary)]"></div>
        </div>
      )}
    </motion.div>
  );
}