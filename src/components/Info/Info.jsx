import {motion} from "framer-motion";
import why_need from '../../assets/why_need.jpg';
import problem_old from '../../assets/problem-old.jpg';
import our_sol  from '../../assets/our_sol.jpeg';
import './Info.css';
import {SlideRight} from "../../Utility/animations";

function Info(){
    return(
        <div className="info-holder">
            <motion.div
            variants={SlideRight(0.2)} 
            whileInView={"animate"}
            initial={'initial'} className="info-holder-1">
                <div className="info-holder-1-image">
                    <img src={why_need}/>
                </div>
                <div className="info-holder-1-text">
                    <h2>The Need for This Project</h2>
                    <p>
                        With rising urbanization and population growth, waste generation has surged, leading 
                        to inefficient recycling and overflowing landfills. Improper waste disposal harms the
                        environment and public health, while manual segregation is slow and error-prone. An 
                        automated waste segregation system is essential to streamline sorting, enhance 
                        efficiency, and promote sustainability.
                    </p>
                </div>
            </motion.div>

            <motion.div
            variants={SlideRight(0.4)} 
            whileInView={"animate"}
            initial={"initial"} className="info-holder-2">
                <div className="info-holder-2-text">
                    <h2>Issues with Existing Technology</h2>
                    <p>
                        Current waste classification technologies struggle with accuracy, high costs, and 
                        limited scalability. Many solutions are slow, inefficient, and unreliable in 
                        real-world conditions. Developing a more robust, affordable, and user-friendly system
                        is crucial for effective waste management.
                    </p>
                </div>
                <div className="info-holder-2-image">
                    <img src={problem_old}/>
                </div>
            </motion.div>

            <motion.div
            variants={SlideRight(0.5)}
            whileInView={'animate'}
            initial={'initial'} className="info-holder-3">
                <div className="info-holder-3-image">
                    <img src={our_sol}/>
                </div>
                <div className="info-holder-3-text">
                    <h2>Our Solution</h2>
                    <p>
                        Our deep learning-based system improves waste segregation by classifying waste in 
                        multiple layers. It first detects waste using sensors, then categorizes it as 
                        biodegradable or non-biodegradable. Further classification refines waste into paper,
                        recyclables plastic, glass, metal, and non-recyclables, ensuring higher accuracy 
                        and efficiency in waste management.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Info;