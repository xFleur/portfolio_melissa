import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          <h1>
            <a href="#homepage">
            MJ / Portfolio
            </a>
          </h1>
          
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/melissa-j/"  target="_blank">
            <img src="./images/icons/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/xFleur" target="_blank">
            <img src="./images/icons/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;