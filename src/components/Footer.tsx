import React from 'react';
import { Heart, Code, Palette } from 'lucide-react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const contributors = [
  {
    name: 'Harsimran Singh',
    role: 'Developer',
    icon:  " " ,
  },
  {
    name: 'Agnibha Nanda',
    role: 'Developer',
    icon:  " " ,
  },
  {
    name: 'Aarnya Jain',
    role: ' Developer',
    icon:  " ",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-purple-400/10 bg-gradient-to-b from-transparent to-[#0B0F1A]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Contributors Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-5 w-5 text-red-400 mr-2" />
            <span className="text-[var(--text-light)] font-medium">Made with love by</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {contributors.map((contributor, index) => (
              <HoverBorderGradient
                key={index}
                containerClassName="rounded-full"
                as="div"
                className="bg-gray-900 text-white flex items-center space-x-2 px-6 py-3 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                {contributor.icon}
                <span className="font-medium">{contributor.name}</span>
              </HoverBorderGradient>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-purple-400/10">
          <p className="text-[var(--text-dim)] text-sm">
            &copy; {new Date().getFullYear()} AI/ML HUB - JIIT. All rights reserved.
          </p>
          <p className="text-[var(--text-dim)] text-xs mt-2">
            
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}