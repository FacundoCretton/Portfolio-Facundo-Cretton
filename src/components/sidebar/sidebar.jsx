import React from "react";
import { ProfileImage, SidebarNav, SidebarSubTitle, SidebarTitle, SidebarWrapper } from "./sidebarStyles";
import AboutLink from "../navLinks/aboutLink";
import ProjectsLink from "../navLinks/projectsLink";
import ToolsLink from "../navLinks/toolsLink";
import ContactLink from "../navLinks/contactLink";
import HomeLink from "../navLinks/homeLink";

const Sidebar = () =>{

    return(
        <SidebarWrapper>
            <ProfileImage src="/images/The choose one.jpg" alt="Foto de perfil" />
            <SidebarTitle>Facundo Cretton</SidebarTitle>
            <SidebarSubTitle>Full Stack Developer</SidebarSubTitle>
            <SidebarNav>
                <HomeLink/>
                <AboutLink/>
                <ProjectsLink/>
                <ToolsLink/>
                <ContactLink/>                
                
            </SidebarNav>



        </SidebarWrapper>
    );
}

export default Sidebar;