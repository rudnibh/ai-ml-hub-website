import React from 'react';
import { formatDate } from '../../../utils/date';

interface ProjectHeaderProps {
  title: string;
  date: string;
  category: string;
}

export function ProjectHeader({ title, date, category }: ProjectHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xl font-semibold text-purple-100 mb-1">
          {title}
        </h3>
        <p className="text-sm text-purple-200/60">
          {formatDate(date)}
        </p>
      </div>
      <CategoryBadge category={category} />
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-900/40 rounded-full">
      {category}
    </span>
  );
}