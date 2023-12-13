import React from "react";
import { ProfileImage, SidebarNav, SidebarSubTitle, SidebarTitle, SidebarWrapper } from "./sidebarStyles";
import AboutLink from "../navLinks/aboutLink";
import ProjectsLink from "../navLinks/projectsLink";
import ToolsLink from "../navLinks/toolsLink";
import ContactLink from "../navLinks/contactLink";
import HomeLink from "../navLinks/homeLink";
import CertificacionesLink from "../navLinks/certificacionesLink";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css'


const Sidebar = () => {

    return (
        <SidebarWrapper>
            <ProfileImage src="/images/The choose one.jpg" alt="Foto de perfil" />
            <SidebarTitle>Facundo Cretton</SidebarTitle>
            <SidebarSubTitle>Full Stack Developer</SidebarSubTitle>

            <PerfectScrollbar
                options={{
                    wheelSpeed: 2,
                    wheelPropagation: false,
                    minScrollbarLength: 20,
                    suppressScrollX: true,
                    scrollbarX: false,
                    suppressScrollY: false,
                    scrollbarY: true,
                }}
                style={{ backgroundColor: 'transparent' }} // Fondo transparente
            >
                <SidebarNav>
                    <HomeLink />
                    <AboutLink />
                    <ProjectsLink />
                    <ToolsLink />
                    <CertificacionesLink />
                    <ContactLink />
                </SidebarNav>

                <style jsx global>{`
                    /* Cambia el color de la barra de desplazamiento vertical */
                    .ps__rail-y {
                        background-color: #000 !important; /* Cambia a tu color deseado, por ejemplo, negro */
                        
                    }

                    /* Cambia el color de la barra "corredera" vertical */
                    .ps__thumb-y {
                        background-color: "#CCCCCC" !important; 
                    }
                `}</style>
            </PerfectScrollbar>
        </SidebarWrapper>
    );
}

export default Sidebar;