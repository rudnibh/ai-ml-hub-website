import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { GradientHeading } from '../../components/ui/GradientHeading';
import { hallOfFame } from '../../data/achievements';

export function HallOfFame() {
  return (
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
  );
}