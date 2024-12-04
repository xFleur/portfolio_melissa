import React from 'react';
import './what2pack.scss';
import { motion } from 'framer-motion';

const What2pack = () => {
  return (
    <div className="project-detail">
      {/* Project Header */}
      <motion.div className="project-header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Project: Interactive Portfolio Website
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A personal portfolio showcasing my skills, projects, and achievements as a web developer.
        </motion.p>
      </motion.div>

      {/* Project Background */}
      <motion.div className="project-background" variants={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <motion.h2>Background</motion.h2>
        <motion.p>
          This project was initiated to create a personal portfolio website for showcasing my work and achievements in web development. The goal was to build a responsive, visually appealing, and easy-to-navigate website that highlights my skills and projects.
        </motion.p>
      </motion.div>

      {/* Problem & Goal */}
      <motion.div className="project-goals" variants={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <motion.h2>Question/Goal</motion.h2>
        <motion.p>
          The challenge was to create a seamless user experience with clear navigation while keeping the site visually interesting. I wanted to implement animations, smooth scroll effects, and ensure mobile responsiveness.
        </motion.p>
      </motion.div>

      {/* Solution */}
      <motion.div className="project-solution" variants={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <motion.h2>Solution</motion.h2>
        <motion.p>
          The solution involved building the website with React, implementing custom animations using Framer Motion, and utilizing a mobile-first approach to ensure responsiveness. I also integrated smooth scrolling, dynamic project carousels, and a contact form using emailJS.
        </motion.p>
      </motion.div>

      {/* Showcase Images */}
      <motion.div className="project-gallery" variants={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <motion.h2>Gallery</motion.h2>
        <div className="gallery-images">
          <img src="./images/portfolio_afb/23_what2pack/homescreen.png" alt="Project Screenshot 1" />
          <img src="./images/portfolio_afb/23_what2pack/startscreen.png" alt="Project Screenshot 2" />
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div className="cta" variants={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => window.location.href = "https://github.com/xFleur/portfolio"}
        >
          View the Code on GitHub
        </motion.button>
      </motion.div>
    </div>
  );
};

export default What2pack;
