import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatSuggestions } from './ChatSuggestions';
import { chatbotService } from '../../services/chatbotService';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if chatbot API is online
    const checkHealth = async () => {
      const health = await chatbotService.checkHealth();
      setIsOnline(health);
    };
    
    checkHealth();
    
    // Check health every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add welcome message when chatbot opens for the first time
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hello! I'm the AI/ML Hub assistant. I can help you learn about our organization, events, team members, and more. How can I assist you today?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await chatbotService.sendMessage(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us through our social media channels.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={toggleChatbot}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <MessageCircle className="h-6 w-6" />
        {!isOnline && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed z-50 ${
              isExpanded
                ? 'inset-4 md:inset-8'
                : 'bottom-6 right-6 w-96 h-[600px]'
            }`}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <ChatHeader
                onClose={() => setIsOpen(false)}
                onToggleSize={toggleSize}
                isExpanded={isExpanded}
                isOnline={isOnline}
              />

              {/* Messages Container - Fixed height with scrolling */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--primary)]/30 scrollbar-track-transparent"
                style={{ 
                  height: isExpanded ? 'calc(100vh - 200px)' : '400px',
                  minHeight: '300px'
                }}
              >
                {messages.length === 1 ? (
                  <div className="h-full flex flex-col">
                    <div className="p-4 flex-shrink-0">
                      <ChatMessage
                        message={messages[0].text}
                        isBot={messages[0].isBot}
                        timestamp={messages[0].timestamp}
                      />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                      <ChatSuggestions onSelectSuggestion={handleSuggestionClick} />
                    </div>
                  </div>
                ) : (
                  <div className="p-4 space-y-4 min-h-full">
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message.text}
                        isBot={message.isBot}
                        timestamp={message.timestamp}
                      />
                    ))}
                    
                    {/* Loading indicator */}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </div>
                        <div className="ml-3 max-w-[80%]">
                          <div className="px-4 py-3 rounded-2xl bg-[#1E1B4B]/50 border border-[var(--primary)]/20 text-[var(--text-light)] rounded-bl-md">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Scroll anchor */}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>

              {/* Input Container - Fixed at bottom */}
              <div className="flex-shrink-0">
                <ChatInput
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  disabled={!isOnline}
                />
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}