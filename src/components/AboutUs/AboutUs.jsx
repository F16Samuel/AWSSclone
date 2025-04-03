import AboutUs from "../AboutUsInfo/AboutUsInfo";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import "./aboutus.css";

function Home(){
    return(
        <main>
            <Navbar/>
            <AboutUs/>
            <Footer/>
        </main>
    );
}

export default Home;