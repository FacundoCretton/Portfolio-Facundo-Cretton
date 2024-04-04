import Projects from "../components/sections/projects/projects";
import Tools from "../components/sections/skills/tools";
import Contact from "../components/sections/contact/contactForm";
import { Routes, Route } from "react-router-dom";
import Home from "../components/sections/home/home";
import Certifications from "../components/sections/certifications/certifications";
import About from "../components/sections/about/about";

function AppRoutes (){

    return(

        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path ='/about' element={<About/>}/>
            <Route path= '/projects' element={<Projects/>}/>
            <Route path= '/tools' element={<Tools/>}/>
            <Route path = '/contact' element = {<Contact/>}/>
            <Route path = '/certifications' element = {<Certifications/>}/>

        </Routes>


    );

}

function Main(){
    return(
        <>
        <Home/>
    
        </>
    )
}

export default AppRoutes;