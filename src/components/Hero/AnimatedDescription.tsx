import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedDescriptionProps {
  text: string;
}

export function AnimatedDescription({ text }: AnimatedDescriptionProps) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
    >
      {Array.from(text).map((char, index) => (
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
  );
}