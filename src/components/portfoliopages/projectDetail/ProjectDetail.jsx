import "./projectDetail.scss";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import projects from '../../../data/projectData';


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

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
      <motion.img    variants={itemVariants(0.2)} src={project.image} alt={project.title} />
      <motion.h2 variants={itemVariants(0.3)}>{project.subtitle}</motion.h2>
      <motion.p variants={itemVariants(0.4)} >{project.description}</motion.p>
      <motion.div variants={itemVariants(0.5)} className="tags">
        {project.tags.map(tag => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </motion.div>
      {/* <a href="/portfolio_melissa/#Portfolio" className="back-link">← Terug naar Portfolio</a> */}
      <motion.button className="back-link" onClick={handleBack}>
        ← Terug naar Portfolio
      </motion.button>
    </motion.div>
  );
};

export default ProjectDetail;
