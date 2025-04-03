import {Link} from "react-router-dom";
import React from "react";
import logo from "../../assets/Logo.png";
import './navbar.css'
import {motion} from "framer-motion";
import {SlideDown} from "../../Utility/animations";

function Navbar(){
    return(
        <motion.header variants={SlideDown(0)}
        initial="initial"
        whileInView={"animate"}>
            <div className="Navbar">
                {/* logo section */}
                <div>
                    <img src={logo} className="logo"/>
                </div>


                {/* Navlinks section */}
                <div className="navlinks-div">
                    <div className="navlinks">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="navlinks">
                        <Link to='/OurModel'>Our Model</Link>
                    </div>
                    <div className="navlinks">
                        <Link to='/AboutUs'>About Us</Link>
                    </div>
                </div>


                {/* button section */}
                <div>
                <Link to='/ContactUs'><button className="btn-touch">Get In Touch</button></Link>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;