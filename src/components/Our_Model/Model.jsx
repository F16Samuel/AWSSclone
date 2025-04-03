import HeroSection from "../Hero Section/Hero_Sec";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import ModelInfo from "../model_info/ModelInfo";
import "./model.css";

function Model(){
    return(
        <main>
            <Navbar/>
            <HeroSection/>
            <ModelInfo/>
            <Footer/>
        </main>
    );
}

export default Model;