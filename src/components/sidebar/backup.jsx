import React, { useRef, useState } from "react";
import { ProfileImage, SidebarNav, SidebarSubTitle, SidebarTitle, SidebarWrapper } from "./sidebarStyles";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Sidebar = () => {
    
    const [menuToggle, setMenuToggle] = useState(false);
    const refNav = useRef();
    const refMenu = useRef();
    const refBtnToggle = useRef();
    const refIcon = useRef();


    return (
      

       

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
                <SidebarWrapper ref={refNav}>
                <button ref={refBtnToggle} className="btnToggle"><FaBars ref={refIcon}/></button>
                <ProfileImage src="/images/The choose one.jpg" alt="Foto de perfil" />
                <SidebarTitle>Facundo Cretton</SidebarTitle>
                <SidebarSubTitle>Full Stack Developer</SidebarSubTitle>
                <NavLink to="/" >Inicio</NavLink>
                <NavLink to="/about" >Sobre Mí</NavLink>
                <NavLink to="/projects" >Proyectos</NavLink>
                <NavLink to="/tools" >Herramientas</NavLink>
                <NavLink to="/certifications" >Certificaciones</NavLink>
                <NavLink to="/contact" >Contacto</NavLink>
                </SidebarWrapper>

                <style jsx global>{`
                    /* Cambia el color de la barra de desplazamiento vertical */
                    .ps__rail-y {
                        background-color: #000 !important; /* Cambia a tu color deseado, por ejemplo, negro */
                        
                    }

                    /* Cambia el color de la "corredera" vertical */
                    .ps__thumb-y {
                        background-color: "#CCCCCC" !important;
                    }
                `}</style>
                
            </PerfectScrollbar>

    );
}

export default Sidebar;

