import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface NotificationProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export function Notification({ show, onClose, title = 'Success!', message }: NotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-gray-800 border border-purple-500/20 rounded-lg shadow-lg shadow-purple-500/10 p-4 max-w-md">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-gray-300">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}