import {motion} from "framer-motion";
import Biodegradable from '../../assets/Biodegradeable.jpeg';
import Recyclable from '../../assets/Recycleable.jpg';
import vinland  from '../../assets/vinland.jpg';
import './ModelInfo.css';
import {SlideRight} from "../../Utility/animations";

function Info(){
    return(
        <div className="info-holder">
            <motion.div
            variants={SlideRight(0.2)} 
            whileInView={"animate"}
            initial={'initial'} className="info-holder-1">
                <div className="info-holder-1-image">
                    <img src={Biodegradable}/>
                </div>
                <div className="info-holder-1-text">
                    <h2>Layer 1: Biodegradability Check (Binary Classification)</h2>
                    <p>
                    The first step in the waste classification process is determining whether an item is 
                    biodegradable or non-biodegradable. Biodegradable waste includes organic materials like 
                    food scraps, paper, and plant-based products, which naturally decompose over time. 
                    In contrast, non-biodegradable waste, such as plastic, glass, and metal, does not 
                    break down easily and requires recycling or proper disposal. This classification is 
                    crucial for ensuring that biodegradable waste is directed toward composting, reducing 
                    landfill accumulation and promoting environmental sustainability.
                    </p>
                </div>
            </motion.div>

            <motion.div
            variants={SlideRight(0.4)} 
            whileInView={"animate"}
            initial={"initial"} className="info-holder-2">
                <div className="info-holder-2-text">
                    <h2>Layer 2: Recyclability Check (Binary Classification)</h2>
                    <p>
                    Once waste is identified as non-biodegradable, it undergoes a second classification to 
                    determine whether it is recyclable or non-recyclable. Recyclable materials, such as 
                    paper, glass, certain plastics, and metals, can be reprocessed into new products, 
                    reducing the need for raw materials. Non-recyclable waste, on the other hand, consists
                    of materials that cannot be efficiently repurposed, often ending up in landfills or 
                    incineration. This step helps optimize waste management by directing recyclable
                    materials toward the appropriate recycling facilities.
                    </p>
                </div>
                <div className="info-holder-2-image">
                    <img src={vinland}/>
                </div>
            </motion.div>

            <motion.div
            variants={SlideRight(0.5)}
            whileInView={'animate'}
            initial={'initial'} className="info-holder-3">
                <div className="info-holder-3-image">
                    <img src={Recyclable}/>
                </div>
                <div className="info-holder-3-text">
                    <h2>Layer 3: Waste Type Classification (Multiclass Classification)</h2>
                    <p>
                        In the final step, recyclable waste is further categorized into specific types, such
                        as plastic, metal, glass, paper, and electronic waste. This detailed classification
                        allows for better sorting and processing, ensuring that each type of waste follows 
                        the appropriate recycling path. For example, plastics can be melted and reshaped, 
                        metals can be refined and reused, and electronic waste can be dismantled for 
                        valuable components. By precisely identifying the waste type, this layer enhances
                        the efficiency of waste management systems, promoting a more sustainable approach 
                        to resource utilization.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Info;