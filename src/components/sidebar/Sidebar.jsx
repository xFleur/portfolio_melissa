import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

const variants = {
  open: {
    clipPath: "circle(1200px at 25px 25px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: isMobile
    ? "circle(35px at 150px 50px)"  // mobile positie
    : "circle(35px at 323px 50px)", // desktop positie
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
     <motion.div
        className="bg"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} isOpen={open} />
    </motion.div>
  );
};

export default Sidebar;