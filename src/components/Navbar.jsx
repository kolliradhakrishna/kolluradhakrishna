import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', index: 0 },
    { name: 'Skills', index: 1 },
    { name: 'Experience', index: 2 },
    { name: 'Projects', index: 3 },
    { name: 'Contact', index: 5 },
  ];

  const handleNavClick = (index) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent-DEFAULT to-accent-emerald cursor-pointer" onClick={() => handleNavClick(0)}>
            KSP
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex check items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${currentPage === link.index
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.index)}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
