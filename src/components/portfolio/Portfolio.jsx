import "./portfolio.scss";
import React, { useState } from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom';
import projects from '../../data/projectData';
// import projects from '../../data/projects';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};



const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="portfolio"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="wrapper">
        <motion.h1>Portfolio</motion.h1>

        <div className="gallery">
          {projects.map((project, index) => (
            <Link to={`/portfolio/${project.id}`} className="gallery-item" key={project.id}>
              <motion.div className="gallery-item">
                <img
                  src={project.images[0]}
                  alt={project.title}
                />
                <div className="tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h2 className="image-title">{project.title}</h2>
                <p className="image-subtitle">{project.subtitle}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;