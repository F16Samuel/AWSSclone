import { Route , Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Model from "../components/Our_Model/Model";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUsPage from "../components/ContactUsPage/ContactUsPage";


function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/OurModel" element = {<Model/>}/>
            <Route path="/AboutUs" element = {<AboutUs/>}/>
            <Route path="/ContactUs" element = {<ContactUsPage/>}/>
        </Routes>
    );
}

export default CustomRoutes;