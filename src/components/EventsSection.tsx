import React, { useRef, useEffect, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import { Card } from './ui/Card';

const events = [
  {
    title: "Mindescape",
    date: "March 01, 2024",
    image: "mindescape.JPG",
    description: "AI Powered Minigames"
  },
  {
    title: "Capturing Pics",
    date: "March 01, 2024",
    image: "capturingpics.JPG",
    description: "AI Powered Photobooth"
  },
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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!container) return;
      
      if (e.shiftKey) return;
      
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      
      setIsAutoScrolling(false);
      clearTimeout(container.dataset.scrollTimeout as unknown as number);
      
      const timeout = window.setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
      
      container.dataset.scrollTimeout = timeout.toString();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(container.dataset.scrollTimeout as unknown as number);
    };
  }, []);

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
      
      clearTimeout(container.dataset.scrollTimeout as unknown as number);
      const timeout = window.setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
      container.dataset.scrollTimeout = timeout.toString();
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (scrollContainerRef.current) {
      clearTimeout(scrollContainerRef.current.dataset.scrollTimeout as unknown as number);
      const timeout = window.setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
      scrollContainerRef.current.dataset.scrollTimeout = timeout.toString();
    }
  };

  return (
    <section id="events" className="relative py-20 overflow-hidden">
      <Container>
        <GradientHeading>Past Events</GradientHeading>
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full border border-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full border border-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className={`flex overflow-x-auto gap-6 pb-4 snap-x no-scrollbar touch-pan-x ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => {
              handleDragEnd();
              setIsAutoScrolling(true);
            }}
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
                    draggable="false"
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
