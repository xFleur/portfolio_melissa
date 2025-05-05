import "./projectDetail.scss";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import projects from '../../../data/projectData';


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Corrigeer het pad zodat het wijst naar /images/... in de public folder
  const correctedPath = project.images[currentIndex].replace('./', '../');


  if (!project) {
    return <div>Project not found</div>;
  }

  const handleBack = () => {
    navigate('/', { replace: false });
    // delay scroll so home content is rendered
    setTimeout(() => {
      const section = document.getElementById('Portfolio');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150); // 100ms is vaak genoeg, pas aan indien nodig
  };

  useEffect(() => {
    if (window.location.pathname === '/portfolio_melissa') {
      window.location.replace('/portfolio_melissa/');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const itemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    },
  });

  return (
    <motion.div className="project-detail">
      <motion.h1 variants={itemVariants(0.1)} >{project.title}</motion.h1>
      <motion.h2 variants={itemVariants(0.3)}>{project.subtitle}</motion.h2>
      <motion.div variants={itemVariants(0.5)} className="tags">
        {project.tags.map(tag => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </motion.div>
       <motion.div className="carousel" variants={itemVariants(0.2)}>
        <button
          className="carousel-btn prev"
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}>
          ‹
        </button>

        <img
          src={correctedPath}
          alt={`${project.title} afbeelding ${currentIndex + 1}`}
          className="carousel-image"
        />

        <button
          className="carousel-btn next"
          onClick={() => setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}>
          ›
        </button>
      </motion.div>
      <motion.p variants={itemVariants(0.4)} >{project.description}</motion.p>
      <motion.button className="back-link" onClick={handleBack}>
        ← Terug naar Portfolio </motion.button>
    </motion.div>
  );
};

export default ProjectDetail;
