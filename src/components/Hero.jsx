import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.scss";

function Hero() {
  const circleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: [0.4, 0.8, 0.4],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {/* Animated circles */}
        <motion.div
          className="circle circle1"
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="circle circle2"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="circle circle3"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Siddharth Phadke</span>
        </h1>
        <p>Frontend React Developer | UI Enthusiast | Innovator</p>
        
      </div>
    </section>
  );
}

export default Hero;
