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
          <Award className="h-8 w-8 text-[var(--primary-light)]" />
          Student Achievements
        </div>
      </GradientHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {studentAchievements.map((achievement, index) => (
          <Card key={index} className="group overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover object-[50%_35%] transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darker)] via-[var(--bg-dark)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-[var(--primary)] mb-2">
                <Star className="h-4 w-4" />
                <span className="text-sm">{achievement.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-light)] mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                {achievement.title}
              </h3>
              <p className="text-[var(--text-dim)] mb-4">{achievement.description}</p>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-[var(--primary)]" />
                <p className="text-sm text-[var(--text-dim)]">{achievement.students.join(', ')}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}