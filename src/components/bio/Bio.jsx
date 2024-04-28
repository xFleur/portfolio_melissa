import "./bio.scss";
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

const Bio = () => {
  const ref = useRef();

  return (
    <motion.div
    ref={ref}
    className="bio"
    variants={variants}
    initial="initial"
    whileInView="animate"
  >
    <motion.div className="bio">
      <motion.div className="wrapper">
      <motion.h1>Biography</motion.h1>
      <motion.p>Hej! I am Melissa! 
        I get energy from achieving results together with others. 
        My adaptability and creative spirit enable me to quickly navigate new systems and situations. 
        Outside the professional field, my passion for hockey goes back to my childhood and I still actively participate in ice hockey. 
        Besides this beloved sport, I find passion in activities such as running, mountain biking and painting. 
        Exploring the latest technologies also fascinates me.
        </motion.p>
        <motion.img
            variants=""
            animate="scrollButton"
            src="./images/melissa/prof/Subject5.png"
            alt=""
          />
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Bio;