import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import type { TeamMember } from '../../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  isHighlighted?: boolean;
  showDescription?: boolean;
}

export function TeamMemberCard({ member, isHighlighted = false, showDescription = false }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -8,
        z: 30
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`
        perspective-1000 transform-gpu
        ${isHighlighted ? 'col-span-1' : ''}
      `}
    >
      <Card 
        variant={isHighlighted ? "bordered" : "glass"}
        className="h-full"
      >
        <div className="relative group overflow-hidden rounded-t-xl">
          <div className="aspect-[4/5] relative">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-[50%_35%] transform transition-all duration-500
                group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darker)]/90 via-[var(--bg-dark)]/50 to-transparent 
              opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              
            <div className="absolute bottom-4 left-4 bg-[var(--primary)]/20 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-3 py-1">
              <span className="text-xs font-medium text-white">{member.role}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-semibold text-[var(--text-light)] group-hover:text-[var(--primary-light)] transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-[var(--text-dim)]">{member.email}</p>
          {showDescription && member.description && (
            <p className="text-sm text-[var(--text-dim)] mt-4 leading-relaxed">{member.description}</p>
          )}
          
          {member.socialLinks && (
            <div className="flex justify-start gap-3 pt-3">
              {member.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-[var(--primary-light)] hover:text-[var(--primary)] transition-colors"
                >
                  <span className="sr-only">{link.platform}</span>
                  {/* Icon would go here */}
                </a>
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}