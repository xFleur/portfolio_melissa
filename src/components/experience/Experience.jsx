import "./experience.scss";
import { motion } from "framer-motion";
import { useRef } from "react";

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

const Experience = () => {
  const ref = useRef();

  return (
    <motion.div
    ref={ref}
    className="experience"
    variants={variants}
    initial="initial"
    whileInView="animate"
    >
      <motion.div className="wrapper">
      <motion.h1>Experience</motion.h1>
       
      </motion.div>
    </motion.div>
  );
};

export default Experience;