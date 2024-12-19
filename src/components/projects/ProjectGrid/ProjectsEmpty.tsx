import React from 'react';

export function ProjectsEmpty() {
  return (
    <div className="text-center py-12">
      <p className="text-purple-100/80 text-lg">
        No projects found matching your criteria.
      </p>
    </div>
  );
}