import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AimlLogo } from '../ui/AimlLogo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const target = document.querySelector(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-900/95 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-xl shadow-purple-900/30">
          <div className="flex justify-between h-14 px-4">
            <Link to="/" className="flex items-center">
              <AimlLogo className="h-12 w-13 text-purple-200" />
              <span className="ml-4 text-xl font-bold text-white">
                AI/ML HUB
              </span>
            </Link>

            <DesktopMenu
              currentPath={location.pathname}
              currentHash={location.hash}
              onNavClick={handleNavClick}
            />

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-purple-300 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          <MobileMenu
            isOpen={isOpen}
            onNavClick={handleNavClick}
            onClose={() => setIsOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}