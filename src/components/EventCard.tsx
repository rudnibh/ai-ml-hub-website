import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Image as ImageIcon, RotateCcw } from 'lucide-react';
import { Card } from './ui/Card';
import type { Event } from '../types/event';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective w-[300px] md:w-[400px] h-[350px] relative">
      <motion.div
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">
          <Card variant="glass" className="h-full group/card overflow-hidden">
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

            <div className="p-6 relative space-y-4">
              <h3 className="text-xl font-semibold mb-2 text-white group-hover/card:text-[var(--primary)] transition-colors">
                {event.title}
              </h3>
              <p className="text-[var(--text-dim)] mb-4 line-clamp-2">{event.description}</p>

              {/* <motion.button
                className="text-[var(--primary)] flex items-center text-sm font-medium hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => setFlipped(true)}
              >
                View Gallery <ArrowRight className="h-3 w-3 ml-1" />
              </motion.button> */}
            </div>
          </Card>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <Card variant="glass" className="h-full flex flex-col justify-center items-center text-center space-y-4 p-6">
            <h3 className="text-2xl font-bold text-white">{event.title}</h3>
            <p className="text-[var(--text-dim)] mb-4">Check out event moments!</p>
            <a
              href={event.galleryUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium px-4 py-2 rounded backdrop-blur-md border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              View Gallery
            </a>


            <button 
              onClick={() => setFlipped(false)}
              className="mt-4 text-[var(--primary)] flex items-center hover:underline"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Back
            </button>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
