import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
    >
      <motion.div className="textContainer">
        <motion.h1 >Let’s work together</motion.h1>
        <motion.div className="item" >
          <h2>Socials</h2>
          <span>     
          <div className="social"> 
            <a href="https://www.linkedin.com/in/melissa-j/" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://github.com/xFleur" target="_blank" rel="noopener noreferrer">
              <img src="./images/icons/github.png" alt="github" />
            </a>
          </div>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;