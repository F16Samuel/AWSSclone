import React from "react";
import { motion } from "framer-motion";
import Group_1 from "../../assets/Plugin/Group_1.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <motion.div 
      className="hero-section"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2>Understanding Our Model</h2>
        <p>
          Learn how our waste classification model works, breaking down waste into 
          multiple layers based on biodegradability, recyclability, and reusability.
        </p>
      </motion.div>

      <motion.div 
        className="model_image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img 
          src={Group_1} 
          alt="AWSS Model" 
          className="model-svg"
          animate={{ 
            y: [0, -10, 0], 
            rotate: [0, 2, -2, 0] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          whileHover={{ scale: 1.2 }} 
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
