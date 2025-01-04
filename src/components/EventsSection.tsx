import React, { useRef, useEffect, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import { Card } from './ui/Card';

const events = [
  {
    title: "Prompt Crafting Competetion",
    date: "November 18, 2024",
    image: "https://i.ibb.co/JpM215x/first-class.jpg",
    description: "Competition on Crafting beautiful prompts to leverage the power of Generative AI"
  },
  {
    title: "Hands on Machine Learning",
    date: "September 24, 2024",
    image: "https://i.ibb.co/JpM215x/first-class.jpg",
    description: "Weekly Hands on Machine Learning Classes"
  },
  {
    title: "Orientation",
    date: "September 18, 2024",
    image: "https://i.ibb.co/3hqQsfp/orientation.jpg",
    description: "Brief Overview and introduction to Machine Learning and Artificial Intelligence."
  },
];

export default function EventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationId: number;
    const container = scrollContainerRef.current;

    const autoScroll = () => {
      if (!container || !isAutoScrolling) return;

      const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
      
      if (isAtEnd) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };

    if (isAutoScrolling) {
      animationId = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoScrolling]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(false);
      const scrollAmount = 400;
      const container = scrollContainerRef.current;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <section id="events" className="relative py-20">
      <Container>
        <GradientHeading>Past Events</GradientHeading>
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800/80 p-2 rounded-full border border-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800/80 p-2 rounded-full border border-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className={`flex overflow-x-auto hide-scrollbar gap-6 pb-4 px-4 -mx-4 snap-x snap-mandatory ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => {
              handleMouseLeave();
              setIsAutoScrolling(true);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {events.map((event, index) => (
              <Card
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-start overflow-hidden group/card transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover/card:text-purple-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
