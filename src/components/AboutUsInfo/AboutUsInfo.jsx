import React from "react";
import { motion } from "framer-motion";
import Shauviq from "../../assets/shauviq.jpg";
import Aanan from "../../assets/Aanan.jpg";
import Samar from "../../assets/Samar.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./AboutUsInfo.css"; // Importing the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Meet Our Team</h2>

      <div className="team-container">
        {[  
          {
            name: "Shauviq Mishra",
            role: "Full-Stack Developer",
            img: Shauviq,
            desc: "Managing both frontend & backend, ensuring seamless integration of the ML model with the web interface.",
            github: "https://github.com/Shauviq",
            linkedin: "https://www.linkedin.com/in/shauviqmishra/",
            instagram: "https://www.instagram.com/shauviqmishra/",
          },
          {
            name: "Aanan Chopra",
            role: "Machine Learning Engineer",
            img: Aanan,
            desc: "Developing and optimizing the AI model for accurate waste classification across multiple layers.",
            github: "https://github.com/AananChopra",
            linkedin: "https://www.linkedin.com/in/aananchopra",
            instagram: "https://www.instagram.com/aananchopra",
          },
          {
            name: "Samar Verma",
            role: "Documentation & Patent Specialist",
            img: Samar,
            desc: "Handling research, documentation, and patent processes to ensure legal and technical compliance.",
            github: "https://github.com/F16Samuel",
            linkedin: "https://www.linkedin.com/in/samar-verma-f16sam/?originalSubdomain=in",
            instagram: "https://www.instagram.com/samuel_f16sam/",
          },
        ].map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-desc">{member.desc}</p>
            <div className="social-icons">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
