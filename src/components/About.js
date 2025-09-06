// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Heart } from 'lucide-react';

const About = () => {
  const aboutData = {
    introduction: "🚀 Full-Stack Developer & AI/ML Engineer with expertise in Django REST, React, and AI/ML. I build scalable web apps, robust APIs, and intelligent systems that deliver real business impact.",
    mission: "My mission is to build smart, scalable, and impactful solutions through Full-Stack Development and AI/ML.",
    experience: "1+ years",
    location: "Islamabad, Pakistan",
    interests: ["Web Development", "Django", "React", "AI", "Backend Development", "Machine Learning"]
  };

  const timeline = [
    {
      year: "2025",
      title: "Full Stack Developer",
      description: "Built multiple web applications using React, Node.js, and MongoDB"
    },
    {
      year: "2025",
      title: "Backend Developer",
      description: "Leading Backend development projects"
    },
    {
      year: "2024",
      title: "Frontend Developer",
      description: "Started professional career focusing on React and modern JavaScript"
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <div className="about-info">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="about-text"
            >
              <h3>Hello! I'm a passionate developer</h3>
              <p>{aboutData.introduction}</p>
              <p>{aboutData.mission}</p>
              
              <div className="about-details">
                <div className="detail-item">
                  <Calendar className="detail-icon" />
                  <span><strong>Experience:</strong> {aboutData.experience}</span>
                </div>
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <span><strong>Location:</strong> {aboutData.location}</span>
                </div>
                <div className="detail-item">
                  <Heart className="detail-icon" />
                  <span><strong>Interests:</strong> {aboutData.interests.join(", ")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="about-image"
            >
              <div className="image-container">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
                  alt="About Me"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x500/8B5CF6/FFFFFF?text=Your+Photo";
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="stats-container"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="timeline-container"
          >
            <h3>My Journey</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (index * 0.2) }}
                >
                  <div className="timeline-marker">
                    <Award size={16} />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
