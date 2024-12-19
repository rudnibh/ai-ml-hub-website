import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ActivityCard({ title, description, Icon }: ActivityCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-purple-500/20 hover:border-purple-400 transition-all hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 bg-purple-900/30 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-purple-100 mb-2">{title}</h3>
      <p className="text-purple-100/80">{description}</p>
    </div>
  );
}