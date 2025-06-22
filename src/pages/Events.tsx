import React from 'react';
import { Container } from '../components/ui/Container';
import { GradientHeading } from '../components/ui/GradientHeading';
import EventCard from '../components/EventCard';
import UpcomingEvent from '../components/UpcomingEvent'; 
import { events } from '../data/events';

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === 'upcoming' || e.status === 'ongoing');
  const pastEvents = events.filter(e => e.status === 'past');

  return (
    <div className="min-h-screen pt-32 relative">
      <Container>
        <section id="upcoming-events" className="py-20">
          <GradientHeading>Upcoming & Ongoing Events</GradientHeading>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-12">
              {upcomingEvents.map((event) => (
                <UpcomingEvent key={event.title} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[var(--text-dim)]">No upcoming events at the moment. Stay tuned!</p>
          )}
        </section>

        <section id="past-events" className="py-20">
          <GradientHeading>Past Events</GradientHeading>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[var(--text-dim)]">No past events to show.</p>
          )}
        </section>
      </Container>
    </div>
  );
}