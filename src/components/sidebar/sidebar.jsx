import React, { useEffect, useState } from "react";
import { ProfileImage, ProfileImageDiv, SidebarSubTitle, SidebarTitle, SidebarWrapper, StyledButton,StyledScrollbar } from "./sidebarStyles";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
  
    const handleToggle = () => {
      setMenuToggle(!menuToggle);
    };
  
    const handleCategoryClick = () => {
      if (window.innerWidth <= 768) {
        setMenuToggle(false);
      }
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setMenuToggle(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <>
      <StyledButton onClick={handleToggle}>
        {menuToggle ? <FaTimes /> : <FaBars />}
      </StyledButton>

        <SidebarWrapper menuToggle={menuToggle}>
        {/* <StyledScrollbar> */}

            <ProfileImageDiv><ProfileImage src="/images/ImagenR.jpg" alt="Foto de perfil" /></ProfileImageDiv>
            <SidebarTitle>Facundo Cretton</SidebarTitle>
            <SidebarSubTitle>Full Stack Developer</SidebarSubTitle>

            <NavLink to="/" onClick={handleCategoryClick}>
              Inicio
            </NavLink>
            <NavLink to="/about" onClick={handleCategoryClick}>
              Sobre Mí
            </NavLink>
            <NavLink to="/projects" onClick={handleCategoryClick}>
              Proyectos
            </NavLink>
            <NavLink to="/tools" onClick={handleCategoryClick}>
              Herramientas
            </NavLink>
            <NavLink to="/certifications" onClick={handleCategoryClick}>
              Certificaciones
            </NavLink>
            <NavLink to="/contact" onClick={handleCategoryClick}>
              Contacto
            </NavLink>
          {/* </StyledScrollbar> */}
        </SidebarWrapper>
      </>
    );
  };
  
  export default Sidebar;






  