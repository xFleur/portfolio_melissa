import "./portfolio.scss";
import React, { useState } from 'react';
import { motion, useInView } from "framer-motion";
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
       
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;