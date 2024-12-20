import React from 'react';
import { Container } from '../../components/ui/Container';
import { HallOfFame } from './HallOfFame';
import { StudentAchievements } from './StudentAchievements';

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <Container>
        <HallOfFame />
        <StudentAchievements />
      </Container>
    </div>
  );
}