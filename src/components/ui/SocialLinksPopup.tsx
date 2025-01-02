import React from 'react';
import { X, Linkedin, Mail, Instagram } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';

interface SocialLinksPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SocialLinksPopup({ isOpen, onClose }: SocialLinksPopupProps) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com/company/ai-ml-hub-of-jiit',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />,
      url: '#',
      color: 'hover:text-gray-100'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      url: 'https://www.instagram.com/aiml.jiit',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />,
      url: 'https://chat.whatsapp.com/B6LyQMpACJB7n8bOqBG9OR',
      color: 'hover:text-green-500'
    },
    {
      name: 'Discord',
      icon: <FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />,
      url: '#',
      color: 'hover:text-indigo-500'
    },
    {
      name: 'Email',
      icon: <Mail className="h-6 w-6" />,
      url: 'mailto:aiml.jiit24@gmail.com',
      color: 'hover:text-purple-500'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md"
          >
            <Card className="relative overflow-hidden">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Join Us
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 text-gray-400 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className={`transition-colors ${link.color}`}>
                        {link.icon}
                      </span>
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
