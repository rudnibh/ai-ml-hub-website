import React from 'react';
import { Container } from '../../components/ui/Container';
import { HallOfFame } from './HallOfFame';
import { StudentAchievements } from './StudentAchievements';

export default function Achievements() {
  return (
    <div className="min-h-screen pt-32 relative">
      <Container>
        <StudentAchievements />
      </Container>
    </div>
  );
}
