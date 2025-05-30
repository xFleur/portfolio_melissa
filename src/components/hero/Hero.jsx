import "./hero.scss";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar.jsx";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleButtonClick = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update the URL hash using history.pushState
      history.pushState(null, null, id);
    }
  };
  
  return (
    <div className="hero">
          <Navbar />
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hi! MY NAME IS MELISSA JULSING</motion.h2>
          <motion.h1 variants={textVariants}>
            Front-end Developer and UX/UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button onClick={() => handleButtonClick("#Portfolio")} variants={textVariants}>
              Portfolio
            </motion.button>
            <motion.button onClick={() => handleButtonClick("#Contact")} variants={textVariants}>
              Contact Me
              </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./images/icons/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="./images/melissa/prof/herobw.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;