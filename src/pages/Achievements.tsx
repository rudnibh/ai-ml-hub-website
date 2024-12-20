import React from 'react';
import { Trophy, Award, Star, Users } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { GradientHeading } from '../components/ui/GradientHeading';
import { Card } from '../components/ui/Card';

const hallOfFame = [
  {
    name: "Dr. Sarah Johnson",
    achievement: "Lead AI Researcher at Google DeepMind",
    description: "Pioneered breakthrough research in reinforcement learning",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80",
    year: "2018"
  },
  {
    name: "Rahul Mehta",
    achievement: "Founder of AI Healthcare Startup",
    description: "Developed AI-powered diagnostic tools used in over 100 hospitals",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
    year: "2020"
  }
];

const studentAchievements = [
  {
    title: "International ML Competition Winners",
    description: "First place in the Global AI Challenge 2024",
    students: ["Priya Sharma", "Arun Kumar"],
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80",
    date: "March 2024"
  },
  {
    title: "Research Paper Publication",
    description: "Published in top-tier IEEE conference on AI Ethics",
    students: ["Vikram Singh"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80",
    date: "February 2024"
  },
  {
    title: "National AI Hackathon Champions",
    description: "Won first prize for innovative healthcare AI solution",
    students: ["Neha Patel", "Raj Malhotra", "Amit Kumar"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    date: "January 2024"
  }
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <Container>
        {/* Hall of Fame Section */}
        <section className="py-20">
          <GradientHeading>
            <div className="flex items-center justify-center gap-2">
              <Trophy className="h-8 w-8 text-purple-400" />
              Hall of Fame
            </div>
          </GradientHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {hallOfFame.map((alumni, index) => (
              <Card key={index} className="group overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-purple-400 mb-2">
                      <Star className="h-5 w-5" />
                      <span className="text-sm">{alumni.year} Graduate</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{alumni.name}</h3>
                    <p className="text-purple-400">{alumni.achievement}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">{alumni.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Student Achievements Section */}
        <section className="py-20">
          <GradientHeading>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-8 w-8 text-purple-400" />
              Student Achievements
            </div>
          </GradientHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {studentAchievements.map((achievement, index) => (
              <Card key={index} className="group overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-purple-400 mb-2">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">{achievement.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{achievement.description}</p>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-400" />
                    <p className="text-sm text-gray-400">{achievement.students.join(', ')}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}