import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import "./ContactUsPage.css";

function ContactUsPage(){
    return(
        <main>
            <Navbar/>
            <ContactUs/>
            <Footer/>
        </main>
    );
}

export default ContactUsPage;