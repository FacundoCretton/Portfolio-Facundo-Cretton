import About from "../components/sections/about";
import Projects from "../components/sections/projects/projects";
import Tools from "../components/sections/skills/tools";
import Contact from "../components/sections/contact";
import Sidebar from "../components/sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "../components/sections/home/home";

function AppRoutes (){

    return(

        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path ='/about' element={<About/>}/>
            <Route path= '/projects' element={<Projects/>}/>
            <Route path= '/tools' element={<Tools/>}/>
            <Route path = '/contact' element = {<Contact/>}/>

        </Routes>


    );

}

function Main(){
    return(
        <>
        <Sidebar/>
        <Home/>
    
        </>
    )
}

export default AppRoutes;