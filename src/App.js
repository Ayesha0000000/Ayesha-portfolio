import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/App.css';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="loader-ring"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="background-animation">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;