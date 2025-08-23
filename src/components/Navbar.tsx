import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AimlLogo } from './ui/AimlLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/projects', label: 'Projects' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/#contactus', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href.substring(1) } });
      } else {
        const target = document.querySelector(href.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900/80 backdrop-blur-lg border border-purple-900/20 rounded-2xl shadow-lg shadow-purple-500/10">
          <div className="flex justify-between h-14 px-4">
            <Link to="/" className="flex items-center">
              <AimlLogo className="h-12 w-13 text-purple-200" />
              <span className="ml-4 text-xl font-bold text-white">
                AI/ML HUB
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-gray-300 hover:text-purple-400 transition-colors group py-2 ${
                      location.pathname === '/' && location.hash === item.href.substring(1) ? 'text-purple-400' : ''
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`relative text-gray-300 hover:text-purple-400 transition-colors group py-2 ${
                      location.pathname === item.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-purple-400 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-purple-900/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  item.href.startsWith('/#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}