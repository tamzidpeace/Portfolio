import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useScroll } from "@/hooks/useScroll";

const NavbarTailwind: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScroll(20);

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-700" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
            onClick={handleNavClick}
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link flex items-center space-x-2"
                onClick={handleNavClick}
              >
                <item.icon className="text-lg" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={handleToggle}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
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

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-64 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
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