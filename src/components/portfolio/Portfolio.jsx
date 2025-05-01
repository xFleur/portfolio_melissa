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

      <div className="gallery">

          {/* Image 1 */}
          <motion.div className="gallery-item">
            <img src="./images/portfolio_afb/23_what2pack/homescreen.png" alt="Image 1" />
            <div className="tags">
                <span className="tag">Web-progamming</span>
                <span className="tag">UX/UI</span>
                <span className="tag">Design</span>
              </div>
            {/* <div className="overlay">
              <motion.div className="text">
                <p>Some text over image 1</p>
                <motion.button>View More</motion.button>
              </motion.div>
            </div> */}
          <h2 className="image-title">What2Pack</h2>
          <p className="image-subtitle">What2Pack extra information</p>
          </motion.div>

          {/* Image 2 */}
          <motion.div className="gallery-item">
            <img src="./images/portfolio_afb/22_workbuddy/5.1_final2.png" alt="Image 2" />
              <div className="tags">
                <span className="tag">UX/UI</span>
                <span className="tag">Design</span>
              </div>
              {/* <div className="overlay">
              <motion.div className="text">
                <p>Some text over image 2</p>
                <motion.button>View More</motion.button>
              </motion.div>
            </div> */}
            <h2 className="image-title">What2Pack</h2>
            <p className="image-subtitle">What2Pack extra information</p>
          </motion.div>

          {/* Image 3 */}
          <motion.div className="gallery-item">
            <img src="./images/portfolio_afb/16_ipmedt1_museum/bipmedt1_rainstorm.png" alt="Image 3" />
              <div className="tags">
                <span className="tag">Hardware</span>
                <span className="tag">UX/UI</span>
                <span className="tag">Design</span>
              </div>
              {/* <div className="overlay">
              <motion.div className="text">
                <p>Some text over image 3</p>
                <motion.button >View More</motion.button>
              </motion.div>
            </div> */}
            <h2 className="image-title">What2Pack</h2>
            <p className="image-subtitle">What2Pack extra information</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;