import "./bio.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [age, setAge] = useState(calculateAge(1999, 0, 28));
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(1999, 0, 28));
    }, 1000 * 60 * 60 * 24 * 365); // Update every year

    return () => clearInterval(interval);
  }, []);

  function calculateAge(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

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
      <motion.h1 className="header">Biography</motion.h1>
      <div className="aside aside-1">
        <motion.img
        // class="aside aside-1"
            variants=""
            animate="scrollButton"
            src="./images/melissa/prof/herolaptop.jpg"
            alt=""
          />
          </div>
          <div className="aside aside-2"> 
         
            <motion.div > <h2 >Hej! </h2>I am Melissa and I am {age} years old, 
              enthusiastic, driven and decisive are words that describe me well. 
            Currently, I am studying Interactive Media Technology at KTH in Stockholm. 
            I am particularly drawn to the intersection of design and technology, 
            which is where my skills and passions truly come together. 
            I find the process of blending creativity with the latest technological advancements to be extremely rewarding, 
            and I believe this is where I can make a real impact in the field.
            </motion.div>
          </div>
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Bio;