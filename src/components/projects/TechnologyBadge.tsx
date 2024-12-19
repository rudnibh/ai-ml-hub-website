import React from 'react';

interface TechnologyBadgeProps {
  technology: string;
}

export default function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  return (
    <span className="px-2 py-1 text-xs font-medium text-purple-200 bg-purple-900/40 rounded-md">
      {technology}
    </span>
  );
}