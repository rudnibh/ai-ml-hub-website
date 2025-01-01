import React from 'react';
import { motion } from 'framer-motion';
import { TeamMemberCard } from './TeamMemberCard';
import { GradientHeading } from '../ui/GradientHeading';
import type { TeamData } from '../../types/team';

interface TeamSectionProps {
  data: TeamData;
}

export function TeamSection({ data }: TeamSectionProps) {
  // Combine all department heads except technical into a single array
  const departmentHeads = [
    ...data.coreTeam.heads.management.map(head => ({ ...head, department: 'Management' })),
    ...data.coreTeam.heads.marketing.map(head => ({ ...head, department: 'Marketing' })),
    ...data.coreTeam.heads.digital.map(head => ({ ...head, department: 'Digital' }))
  ];

  return (
    <section className="space-y-20">
      {/* Faculty Advisor */}
      <div className="space-y-8">
        <GradientHeading>Faculty Advisor</GradientHeading>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <TeamMemberCard member={data.facultyAdvisor} isHighlighted />
          </div>
        </div>
      </div>

      {/* Founders */}
      <div className="space-y-8">
        <GradientHeading>Founders</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.founders.map((founder, index) => (
            <TeamMemberCard key={index} member={founder} isHighlighted showDescription />
          ))}
        </div>
      </div>

      {/* Senior Advisors */}
      <div className="space-y-8">
        <GradientHeading>Senior Advisors</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.seniorAdvisors.map((advisor, index) => (
            <TeamMemberCard key={index} member={advisor} />
          ))}
        </div>
      </div>

      {/* Core Team */}
      <div className="space-y-12">
        <GradientHeading>Core Team</GradientHeading>
        
        {/* Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMemberCard member={data.coreTeam.president} isHighlighted />
          <TeamMemberCard member={data.coreTeam.vicePresident} isHighlighted />
          <TeamMemberCard member={data.coreTeam.generalSecretary} isHighlighted />
        </div>

        {/* Department Heads */}
        <div className="space-y-12">
          <GradientHeading>Department Heads</GradientHeading>
          
          {/* Management, Marketing, and Digital Heads in one row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {departmentHeads.map((head, index) => (
              <div key={`dept-${index}`} className="flex flex-col">
                <h4 className="text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {head.department}
                </h4>
                <TeamMemberCard member={head} />
              </div>
            ))}
          </div>

          {/* Technical Heads */}
          <div>
            <h4 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Technical
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.coreTeam.heads.technical.map((head, index) => (
                <TeamMemberCard key={`tech-${index}`} member={head} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}