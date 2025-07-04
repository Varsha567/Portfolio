// Header.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const Header = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu open/close

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-80 backdrop-blur-md z-50 py-4 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
    

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium transition-colors duration-300
                  ${activeSection === item.id ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-300 hover:border-b-2 hover:border-blue-300'}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 py-4 mt-2 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false); // Close menu after selection
                  }}
                  className={`text-xl font-medium transition-colors duration-300
                    ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-blue-300'}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
