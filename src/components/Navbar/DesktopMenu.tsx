import React from 'react';
import { NavLink } from './NavLink';
import { menuItems } from '../../data/navigation';

interface DesktopMenuProps {
  currentPath: string;
  currentHash: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function DesktopMenu({ currentPath, currentHash, onNavClick }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {menuItems.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          label={item.label}
          isActive={
            item.href.startsWith('/#')
              ? currentPath === '/' && currentHash === item.href.substring(1)
              : currentPath === item.href
          }
          onClick={(e) => onNavClick(e, item.href)}
        />
      ))}
    </div>
  );
}