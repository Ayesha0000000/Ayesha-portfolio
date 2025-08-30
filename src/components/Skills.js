// src/components/Skills.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Yahan aap apne skills add kar sakte hain
  const skillCategories = [
    {
      category: "Frontend",
      icon: Globe,
      skills: [
        {
          name: "React",
          level: 80,
          description: "Advanced React development with hooks, context API, Redux, and modern patterns. Built 10+ projects using React.",
          experience: "1+ years",
          projects: ["Blog website", "Social Media Dashboard", "Portfolio Website"]
        },
        {
          name: "python ",
          level: 90,
          description: "ES6+, async/await, DOM manipulation, and modern JavaScript features. Strong problem-solving skills.",
          experience: "1+ years",
          projects: ["gestutre drwaing ", " Real- time emotion detection ", "Yoga Posdure correction "]
        },
        {
          name: "HTML/CSS",
          level: 95,
          description: "Semantic HTML, CSS Grid, Flexbox, animations, and responsive design. Expert in modern CSS.",
          experience: "2+ years",
          projects: ["Responsive Layouts", "Animation Libraries", "CSS Frameworks"]
        }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        {
          name: "Django",
          level: 90,
          description: "Server-side development, Admin penals, REST APIs, and jwt authentictacation.",
          experience: "2+ years",
          projects: ["REST API", "BLOG Website backend", "mini linkendin backend"]
        },
        {
          name: "SQLITE",
          level: 75,
          description: "NoSQL database design, aggregation pipelines, and data modeling.",
          experience: "1.5+ years",
          projects: ["User Management", "Blog System", "E-commerce Backend"]
        }
      ]
    },
    
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>My Skills</h2>
          <p>Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="skill-category"
              >
                <div className="category-header">
                  <Icon size={24} />
                  <h3>{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        />
                      </div>
                      
                      <button className="view-details-btn">
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="skill-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-modal"
                  onClick={() => setSelectedSkill(null)}
                >
                  <X size={24} />
                </button>
                
                <h3>{selectedSkill.name}</h3>
                <div className="skill-level-display">
                  <div className="level-bar">
                    <motion.div
                      className="level-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span>{selectedSkill.level}%</span>
                </div>
                
                <p className="skill-description">{selectedSkill.description}</p>
                
                <div className="skill-details">
                  <div className="detail-item">
                    <strong>Experience:</strong> {selectedSkill.experience}
                  </div>
                  
                  <div className="detail-item">
                    <strong>Projects Built:</strong>
                    <ul>
                      {selectedSkill.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;