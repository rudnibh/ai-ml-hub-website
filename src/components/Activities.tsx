import React from 'react';
import { Code, Users, Trophy, Brain } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientHeading } from './ui/GradientHeading';
import { AnimatedCard, AnimatedElement } from './ui/AnimatedElement';

const activities = [
  {
    icon: <Code className="h-8 w-8 text-purple-400" />,
    title: 'Coding Workshops',
    description: 'Weekly hands-on sessions covering various programming languages and frameworks.',
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: 'Networking Events',
    description: 'Connect with industry professionals and fellow tech enthusiasts.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-purple-400" />,
    title: 'Hackathons',
    description: 'Participate in exciting coding competitions and build amazing projects.',
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    title: 'Tech Talks',
    description: 'Learn from expert speakers about the latest trends in technology.',
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative py-20">
      <Container>
        <AnimatedElement>
          <GradientHeading>Our Activities</GradientHeading>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <AnimatedCard
              key={index}
              className="p-6 group"
              delay={index * 0.1}
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {activity.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {activity.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}