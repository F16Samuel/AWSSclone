import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FooterAnimation } from "../../Utility/animations";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      variants={FooterAnimation(0)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }} 
    >
      <p className="Copyright">© 2025 AWSS</p>

      <motion.div 
        className="footer-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link to="/AboutUs">About</Link>
        <Link to="/OurModel">Our Model</Link>
        <Link to="/ContactUs">Contact</Link>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
