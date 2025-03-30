import React from 'react';
import { Container } from '../../components/ui/Container';
import { HallOfFame } from './HallOfFame';
import { StudentAchievements } from './StudentAchievements';

export default function Achievements() {
  return (
    <div className="min-h-screen pt-28 z-0">
      <Container>
        <HallOfFame />
        <StudentAchievements />
      </Container>
    </div>
  );
}