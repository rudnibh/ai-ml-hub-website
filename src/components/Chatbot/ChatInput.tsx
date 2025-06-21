import React, { useState, KeyboardEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, isLoading, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading && !disabled) {
      console.log("📤 Submitting message:", message);
      onSendMessage(message.trim());
      setMessage('');
    } else {
      console.log("⛔ Submission blocked - Either loading or empty");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      console.log("⌨️ Enter key pressed");
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 border-t border-[var(--primary)]/20 bg-[#0D0A2D] z-50 relative"
    >
      <div className="flex-1 relative">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            console.log("✍️ Typing:", e.target.value);
          }}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about AI/ML Hub..."
          disabled={disabled || isLoading}
          rows={1}
          className="w-full px-4 py-3 bg-[#1E1B4B]/30 border border-[var(--primary)]/20 rounded-xl text-[var(--text-light)] placeholder-[var(--text-dim)] focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ minHeight: '48px', maxHeight: '120px' }}
        />
      </div>

      <button
        type="submit"
        disabled={!message.trim() || isLoading || disabled}
        className="px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center min-w-[48px]"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
      </button>
    </form>
  );
}
