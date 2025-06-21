import React from 'react';
import { motion } from 'framer-motion';

interface ChatSuggestionsProps {
  onSelectSuggestion: (suggestion: string) => void;
}

const suggestions = [
  "What is AI/ML Hub?",
  "Tell me about upcoming events",
  "Who are the team members?",
  "How can I join AI/ML Hub?",
  "What projects have students worked on?",
  "When are the weekly meetings?"
];

export function ChatSuggestions({ onSelectSuggestion }: ChatSuggestionsProps) {
  return (
    <div className="p-4 space-y-3">
      <p className="text-sm text-[var(--text-dim)] mb-3">Quick questions to get you started:</p>
      <div className="grid grid-cols-1 gap-2">
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onSelectSuggestion(suggestion)}
            className="text-left p-3 rounded-lg bg-[#1E1B4B]/30 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 hover:bg-[#1E1B4B]/50 transition-all duration-200 text-sm text-[var(--text-light)]"
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
    </div>
  );
}