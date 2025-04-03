import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        Get in Touch with Us!
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We're always here to connect. Reach out to us through any of the following ways.
      </motion.p>

      {/* Contact Information Section */}
      <motion.div 
        className="contact-info"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="info-item">
          <FaPhone className="icon" />
          <span>+91 76964 55668</span>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <span>shauviqmishraofficial@gmail.com</span>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <span>Manipal University Jaipur</span>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div 
        className="social-media"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2>Follow Us</h2>
        <motion.a href="https://www.instagram.com/shauviqmishra/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaInstagram />
        </motion.a>
        <motion.a href="https://github.com/Shauviq" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaGithub />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/shauviqmishra/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
