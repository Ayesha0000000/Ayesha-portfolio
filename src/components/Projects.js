// src/components/Projects.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "🚀 Real-time Emotion Detection",
      description: "Emotion detection using Python OpenCV YOLO, DeepFace",
      longDescription: "I've built a real-time emotion detection system...",
      image: `${process.env.PUBLIC_URL}/images/project1.jpg`,
      technologies: ["Python", "OpenCV", "YOLO", "DeepFace", "TensorFlow"],
      demoUrl: "https://github.com/Ayesha0000000/local_camera_stream.git", 
      githubUrl: "https://github.com/Ayesha0000000/local_camera_stream.git",
      videoUrl: `${process.env.PUBLIC_URL}/videos/emotion-detection-demo.mp4`, 
      features: [
        "✅ Real-time Emotion Recognition from live camera feed",
        "✅ YOLO-based Face Detection for high accuracy", 
        "✅ Deep Learning (DeepFace) for multi-emotion classification"
      ],
      challenges: "Built using OpenCV, YOLO, and DeepFace...",
      learnings: "Hands-on with YOLO & DeepFace..."
    },
    {
      id: 2,
      title: "🚀 Hand gesture Drawing App", 
      description: "Hand gesture drawing app using Python OpenCV and Mediapipe",
      longDescription: "I built an interactive Hand Gesture Drawing Application...",
      image: `${process.env.PUBLIC_URL}/images/project2.jpg`,
      technologies: ["Python", "OpenCV", "Mediapipe", "Tensorflow"],
      demoUrl: "https://github.com/Ayesha0000000/hand-gesture-drawing.git",
      githubUrl: "https://github.com/Ayesha0000000/hand-gesture-drawing.git",
      videoUrl: `${process.env.PUBLIC_URL}/videos/Hand-gesture-drwaing.mp4`, 
      features: ["🎥 Real-time Hand Tracking", "✋ Gesture-based Drawing"],
      challenges: "Real-time hand tracking...",
      learnings: "Worked with Mediapipe..."
    },
    {
      id: 3,
      title: "🚀 Real-time Emotion Detection System (Django + Deep Learning) 🎭 ",
      description: "Django-based real-time emotion detection system...",
      longDescription: "I developed a Django-based real-time emotion detection system...",
      image: `${process.env.PUBLIC_URL}/images/project3.jpg`,
      technologies: ["Django", "React", "SQLite", "Bootstrap", "DeepFace", "YOLO", "OpenCV"],
      demoUrl: "https://github.com/Ayesha0000000/local_camera_stream.git",
      githubUrl: "https://github.com/Ayesha0000000/local_camera_stream.git",
      videoUrl: `${process.env.PUBLIC_URL}/videos/full_stack-emotion.mp4`,
      features: ["👤 Person Management", "🎥 Live Emotion Detection"],
      challenges: "Real-time face & emotion detection...",
      learnings: "Built AI-powered Django backend..."
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>My Projects</h2>
          <p>Here are some of my recent works</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button onClick={() => setSelectedProject(project)}>View Details</button>
                  <button onClick={() => setVideoModal(project.videoUrl)}>
                    <Play size={16} /> Demo Video
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {videoModal && (
            <motion.div
              className="modal-overlay video-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModal(null)}
            >
              <motion.div
                className="video-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={() => setVideoModal(null)}>
                  <X size={24} />
                </button>
                <video controls autoPlay>
                  <source src={videoModal} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
