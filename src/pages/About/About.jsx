import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const About = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    transition: {
      duration: 0.8,
    },
  };

  const slideInAnimation = {
    hidden: { x: -50 },
    visible: { x: 0 },
  };

  const imagePath = "https://avatars.githubusercontent.com/u/84221186?v=4";

  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <motion.img
              src={imagePath}
              alt="profile_pic"
              initial="hidden"
              animate="visible"
              variants={fadeInAnimation}
              whileHover={{ scale: 1.1 }} // Add a zoom-in effect on hover
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInAnimation}
            >
              About Me
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideInAnimation}
            >
              I am Avijit Dam. I have a B.Tech degree in electrical engineering
              and 8 months of experience at Wipro as a project engineer. I have
              also completed a professional MERN Stack certification course from
              Ejob India.
            </motion.p>
            <motion.button
              initial="hidden"
              animate="visible"
              variants={fadeInAnimation}
              className="btn btn-hire"
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
