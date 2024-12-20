import React from 'react';
import { Award, Star, Users } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { GradientHeading } from '../../components/ui/GradientHeading';
import { studentAchievements } from '../../data/achievements';

export function StudentAchievements() {
  return (
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
  );
}