import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import EventCard from './EventCard';
import { events } from '../data/events';

export default function EventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pastEvents = events.filter(event => event.status === 'past');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
              <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x no-scrollbar"
        >
          {pastEvents.map((event, index) => (
            <div key={index} className="flex-none w-[300px] md:w-[350px] snap-start">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
