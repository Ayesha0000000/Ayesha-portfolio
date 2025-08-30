import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  // Yahan aap apne projects add kar sakte hain
  const projects = [
    {
      id: 1,
      title: "🚀Real-time Emotion Detection",
      description: "Emotion detection using Python OpenCV YOLO, DeepFace",
      longDescription: "I've built a real-time emotion detection system using OpenCV, YOLO, and DeepFace. This project captures live video streams, detects faces with YOLO-based face detection, and classifies emotions like happy, sad, angry, surprised, neutral, etc. using DeepFace deep learning models. The system provides real-time feedback and can be integrated into various applications for sentiment analysis.",
      image: "/images/project1.jpg",
      technologies: ["Python", "OpenCV", "YOLO", "DeepFace", "TensorFlow"],
      demoUrl: "https://github.com/Ayesha0000000/local_camera_stream.git", 
      githubUrl: "https://github.com/Ayesha0000000/local_camera_stream.git",
      videoUrl: "/videos/emotion-detection-demo.mp4", 
      features: [
        "✅ Real-time Emotion Recognition from live camera feed",
        "✅ YOLO-based Face Detection for high accuracy", 
        "✅ Deep Learning (DeepFace) for multi-emotion classification",
        "✅ OpenCV Integration for video processing & visualization",
        "✅ Scalable for AI Applications - can be extended for sentiment analysis, surveillance, or healthcare monitoring"
      ],
      challenges: "Built using OpenCV, YOLO, and DeepFace to detect faces and classify emotions (happy, sad, angry, surprised, neutral) in real-time from a live camera feed.",
      learnings: "Hands-on with YOLO & DeepFace, building real-time AI pipelines, OpenCV video processing, model optimization, real-world AI applications."
    },
    {
      id: 2,
      title: "🚀Hand gesture Drawing App", 
      description: "Hand gesture drawing app using Python OpenCV and Mediapipe",
      longDescription: "I built an interactive Hand Gesture Drawing Application using Python, OpenCV, and Mediapipe. The app uses computer vision to detect and track hand landmarks in real-time, allowing users to draw on the screen using just their fingers — no mouse or stylus required.With Mediapipe’s robust hand tracking model, the system can recognize finger positions and gestures, while OpenCV handles the drawing canvas and visualization. This enables natural, touchless interaction where gestures become the input tool.",
      image: "/images/project2.jpg",
      technologies: ["Python ", "opencv", "mediapipe", "transerflow"],
      demoUrl: "https://github.com/Ayesha0000000/hand-gesture-drawing.git",
      githubUrl: "https://github.com/Ayesha0000000/hand-gesture-drawing.git",
      videoUrl: "/videos/Hand-gesture drwaing.mp4", 
      features: [
        "🎥 Real-time Hand Tracking – Detects and tracks 21 hand landmarks using Mediapipe." ,

        "✋ Gesture-based Drawing – Draw on the canvas by moving your index finger." ,

        "📐 Intuitive Controls – No mouse/keyboard required, only natural gestures." ,

        "🔄 Clear Screen Option – Instantly reset the canvas with a specific gesture." ,

        "⚡ Optimized Performance – Runs smoothly on CPU in real-time.",

        "📱 Scalable – Can be extended to touchless interfaces, AR/VR, gaming & accessibility apps." ,
      ],
      challenges: "Real-time hand tracking, handling multiple gestures (draw/erase/idle), lighting & background issues, intuitive gesture-to-action mapping, and performance optimization on standard hardware.",
      learnings: "Worked with Mediapipe hand landmarks, built gesture-controlled HCI, implemented OpenCV-based interactive drawing, understood real-time AI trade-offs (accuracy vs latency), and explored gesture recognition applications in education, accessibility, gaming, and creativity.."
    },
    {
      id: 3,
      title: "🚀 Real-time Emotion Detection System (Django + Deep Learning) 🎭 ",
      description: "Django-based real-time emotion detection system with DeepFace, YOLO, and Face Recognition", 
      longDescription: "I developed a Django-based real-time emotion detection system that combines DeepFace, YOLO, and Face Recognition with a complete REST API backend. The system detects faces from a live video stream, recognizes registered persons, and classifies their emotions in real-time — all while storing history, tracking sessions, and providing analytics via Django Admin & APIs.",
      image: "/images/project3.jpg",
      technologies: ["Django", "react", "sqlite", "bootsrap", "DeepFace", "YOLO", "OpenCV"],
      demoUrl: "https://github.com/Ayesha0000000/local_camera_stream.git",
      githubUrl: "https://github.com/Ayesha0000000/local_camera_stream.git",
      videoUrl: "/videos/full_stack emotion.mp4", // Local video
      features: [
        "👤 Person Management Register & store face encodings in DB" ,

        "🎥 Live Emotion Detection  Stable real-time predictions using buffer-based smoothing" ,

        "📊 Statistics & Analytics Track emotion history, session insights & averages" ,

        "🔒 Face Recognition  Identify known persons with tolerance-based matching" ,

        "🖥️ Django Admin Dashboard Manage persons, emotions & sessions" ,

        "🔗 REST API Endpoints  Full CRUD for integration with external apps",

        "⚡ Stability Optimized Buffer & confidence thresholding for accurate results"
      ],
      challenges: "Real-time face & emotion detection, handling lighting/noise, optimizing CPU inference, buffer-based stability, scalable REST API & Admin.",
      learnings: "Built AI-powered Django backend, mastered DeepFace & YOLO, applied buffer logic, integrated Django + CV models, explored real-world applications."
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
                  <button
                    className="overlay-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                  <button
                    className="overlay-btn video-btn"
                    onClick={() => setVideoModal(project.videoUrl)}
                  >
                    <Play size={16} />
                    Demo Video
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-modal"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>
                
                <div className="modal-content">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  
                  <div className="modal-info">
                    <h2>{selectedProject.title}</h2>
                    <p className="project-long-desc">{selectedProject.longDescription}</p>
                    
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {selectedProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="project-challenges">
                      <h4>Challenges:</h4>
                      <p>{selectedProject.challenges}</p>
                    </div>
                    
                    <div className="project-learnings">
                      <h4>What I Learned:</h4>
                      <p>{selectedProject.learnings}</p>
                    </div>
                    
                    <div className="modal-tech">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="modal-links">
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <ExternalLink size={16} />
                        View Project
                      </a>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <Github size={16} />
                        View Code
                      </a>
                      <button
                        className="btn btn-accent"
                        onClick={() => setVideoModal(selectedProject.videoUrl)}
                      >
                        <Play size={16} />
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Local Video Modal */}
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
                <button
                  className="close-modal"
                  onClick={() => setVideoModal(null)}
                >
                  <X size={24} />
                </button>
                
                {/* Check if it's YouTube/Vimeo embed or local video */}
                {videoModal.includes('youtube') || videoModal.includes('vimeo') || videoModal.includes('embed') ? (
                  <iframe
                    src={videoModal}
                    title="Project Demo Video"
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    preload="metadata"
                    onError={(e) => {
                      console.log('Video load error:', e);
                      alert('Video could not be loaded. Please check the file path.');
                    }}
                  >
                    <source src={videoModal} type="video/mp4" />
                    <source src={videoModal} type="video/webm" />
                    <source src={videoModal} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;