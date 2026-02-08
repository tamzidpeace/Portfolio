import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useUIStore } from "@/stores";

const NavbarTailwind: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useUIStore();

  const handleToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    { path: "/", icon: AiOutlineHome, label: "Home" },
    { path: "/about", icon: AiOutlineUser, label: "About" },
    { path: "/project", icon: AiOutlineFundProjectionScreen, label: "Projects" },
    { path: "/resume", icon: CgFileDocument, label: "Resume" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-gradient hover:opacity-80 transition-opacity z-10"
            onClick={handleNavClick}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <span>Portfolio</span>
          </Link>

          {/* Desktop Navigation - Liquid Glass Pill */}
          <div className="hidden md:flex items-center gap-4">
            <div className="liquid-glass-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`liquid-glass-nav-item ${isActive(item.path) ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <BsSun className="text-xl text-yellow-400" />
              ) : (
                <BsMoonStars className="text-xl text-purple-500" />
              )}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <BsSun className="text-lg text-yellow-400" />
              ) : (
                <BsMoonStars className="text-lg text-purple-500" />
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={handleToggle}
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white liquid-glass-button transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Liquid Glass */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-96 opacity-100 mt-4" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="liquid-glass-mobile">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`liquid-glass-mobile-item ${isActive(item.path) ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                <item.icon className="text-lg" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTailwind;