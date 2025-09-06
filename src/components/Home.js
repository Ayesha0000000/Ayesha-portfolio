// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Heyyy, I'm{' '}
              <span className="gradient-text">Ayesha</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Full Stack & AI/ML Engineer Django, React, Advanced AI Solutions
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              I create amazing web experiences with modern technologies.
              Passionate about clean code and user-friendly interfaces.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="social-links"
            >
              <a href="https://github.com/Ayesha0000000" className="social-link">
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayesha-muhammad-490023374" 
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-image"
          >
            <div className="image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
                alt="Profile"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Your+Photo";
                }}
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="scroll-indicator"
        >
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
