import React from 'react';

export function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <ProjectLoadingSkeleton key={i} />
      ))}
    </div>
  );
}

function ProjectLoadingSkeleton() {
  return (
    <div className="bg-gray-900/30 rounded-lg h-[400px] animate-pulse">
      <div className="aspect-video bg-gray-800/50 rounded-t-lg" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-800/50 rounded w-3/4" />
        <div className="h-4 bg-gray-800/50 rounded w-1/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-800/50 rounded w-full" />
          <div className="h-4 bg-gray-800/50 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}