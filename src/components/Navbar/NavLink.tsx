import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  const baseClasses = "relative text-white hover:text-purple-300 transition-colors group py-2";
  const activeClasses = isActive ? "text-purple-300" : "";

  if (href.startsWith('/#')) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${activeClasses}`}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={`${baseClasses} ${activeClasses}`}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}