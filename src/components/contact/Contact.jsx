import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

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

const onChange = () => {
  console.log("Captcha value:", value);
}

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [touched, setTouched] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_vj6qqsr",
        "template_nw7og4p",
        formRef.current,
        "SkurZoCyqw0hfI6XM"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    // Check if CAPTCHA has been successfully verified
    if (value) {
      setCaptchaVerified(true);
    }
  };

  const handleInputFocus = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
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