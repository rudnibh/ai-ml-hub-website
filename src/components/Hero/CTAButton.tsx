import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function CTAButton() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative inline-block group"
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
      <button className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300">
        <span className="flex items-center">
          Join Us Today
          <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
        </span>
      </button>
    </motion.div>
  );
}