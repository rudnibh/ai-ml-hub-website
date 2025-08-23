import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import { Card } from './ui/Card';
import { events } from '../data/events';

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pastEvents = events.filter(event => event.status === 'past');

  // Calculate how many slides we need (3 events per slide)
  const EVENTS_PER_SLIDE = 3;
  const totalSlides = Math.ceil(pastEvents.length / EVENTS_PER_SLIDE);

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused && totalSlides > 0) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get events for current slide
  const getCurrentSlideEvents = () => {
    const startIndex = currentIndex * EVENTS_PER_SLIDE;
    return pastEvents.slice(startIndex, startIndex + EVENTS_PER_SLIDE);
  };

  // Don't render if no past events
  if (pastEvents.length === 0) {
    return null;
  }

  return (
    <section id="events" className="relative py-20">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <GradientHeading>Past Events</GradientHeading>
          <div className="flex items-center gap-4">
            <Link to="/events" className="text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors font-medium">
              View All
            </Link>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 300 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getCurrentSlideEvents().map((event, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="group"
                  >
                    <Card 
                      variant="glass" 
                      className="h-full group/card overflow-hidden border border-gray-800/50 hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/10"
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/20 to-gray-900/80 z-10" />
                        <motion.img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          draggable="false"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        <div className="absolute top-4 left-4 bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/30 rounded-full px-3 py-1 flex items-center z-20">
                          <Calendar className="h-3 w-3 text-[var(--primary)] mr-1" />
                          <span className="text-xs font-medium text-white">{event.date}</span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15" />
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-white group-hover/card:text-[var(--primary)] transition-colors duration-300">
                          {event.title}
                        </h3>

                        <p className="text-[var(--text-dim)] line-clamp-3 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-3">
                          {event.location && (
                            <div className="flex items-center text-sm text-[var(--text-dim)] group-hover:text-gray-300 transition-colors">
                              <MapPin className="h-4 w-4 mr-2 text-[var(--primary)]" />
                              {event.location}
                            </div>
                          )}
                          {event.time && (
                            <div className="flex items-center text-sm text-[var(--text-dim)] group-hover:text-gray-300 transition-colors">
                              <Calendar className="h-4 w-4 mr-2 text-[var(--primary)]" />
                              {event.time}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'bg-[var(--primary)] w-8 h-2 shadow-lg shadow-[var(--primary)]/50' 
                    : 'bg-gray-600 hover:bg-gray-500 w-2 h-2 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isPaused ? 'bg-gray-600' : 'bg-[var(--primary)] animate-pulse'
              }`} />
              <span>{isPaused ? 'Paused' : 'Auto-playing'}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
