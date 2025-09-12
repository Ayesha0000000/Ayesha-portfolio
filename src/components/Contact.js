// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    email: "gmayesha2004@gmal.com",
    phone: "Not Available",
    location: "Islamabad , Punjab, Pakistan",
    socialLinks: {
      github: "https://github.com/Ayesha0000000",
      linkedin: "https://www.linkedin.com/in/ayesha-muhammad-490023374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "https://twitter.com" // placeholder
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-info"
          >
            center

            <h3>Let's Talk</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                <a 
                  href={contactInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={contactInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={contactInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
