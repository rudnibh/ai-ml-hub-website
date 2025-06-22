import React from 'react';
import { X, Minimize2, Maximize2 } from 'lucide-react';
import chatbotLogo from '/chatbot.jpg';

interface ChatHeaderProps {
  onClose: () => void;
  onToggleSize: () => void;
  isExpanded: boolean;
  isOnline: boolean;
}

export function ChatHeader({ onClose, onToggleSize, isExpanded, isOnline }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-[var(--primary)]/20 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img src={chatbotLogo} alt="AI/ML Hub Assistant" className="h-8 w-8 rounded-full" />
          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[var(--bg-dark)] ${
            isOnline ? 'bg-green-500' : 'bg-gray-500'
          }`} />
        </div>
        <div>
          <h3 className="font-semibold text-[var(--text-light)]">AIMI - AI/ML Hub Virtual Assistant</h3>
          <p className="text-xs text-[var(--text-dim)]">
            {isOnline ? 'Online' : 'Offline'} • Ask me anything!
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSize}
          className="p-2 hover:bg-[var(--primary)]/20 rounded-lg transition-colors duration-200"
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4 text-[var(--text-dim)]" />
          ) : (
            <Maximize2 className="h-4 w-4 text-[var(--text-dim)]" />
          )}
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
        >
          <X className="h-4 w-4 text-[var(--text-dim)]" />
        </button>
      </div>
    </div>
  );
}