// src/components/Navbar.js
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="logo-text">Portfolio</span>
        </motion.div>
        
        <ul className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li 
                key={item.id}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                <button
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentPage(item.id)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                  {currentPage === item.id && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeTab"
                      initial={false}
                    />
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;