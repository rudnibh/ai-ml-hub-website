import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onNavClick, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-purple-900/20">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {menuItems.map((item) => (
          item.href.startsWith('/#') ? (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}