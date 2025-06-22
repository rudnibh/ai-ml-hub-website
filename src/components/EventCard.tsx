import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
import type { Event } from '../types/event';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-none snap-start"
    >
      <Card variant="glass" className="h-full group/card">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/30 to-gray-900/90" />
          <motion.img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
            draggable="false"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute top-4 left-4 bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-3 py-1 flex items-center">
            <Calendar className="h-3 w-3 text-[var(--primary)] mr-1" />
            <span className="text-xs font-medium text-white">{event.date}</span>
          </div>
        </div>
        <div className="p-6 relative">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover/card:text-[var(--primary)] transition-colors">
            {event.title}
          </h3>
          <p className="text-[var(--text-dim)] mb-4 line-clamp-2">{event.description}</p>
          <motion.div 
            className="text-[var(--primary)] flex items-center text-sm font-medium"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            View details <ArrowRight className="h-3 w-3 ml-1" />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
} 