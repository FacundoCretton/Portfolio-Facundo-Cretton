// sidebarStyles.js
import styled from 'styled-components';

export const StyledButton = styled.button`
  @media (max-width: 768px) {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
    color: orange;
    font-size: 2rem;
    background: none;
    border: none;
    
  }
`;



export const SidebarWrapper = styled.nav`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  padding-top: 10px;
  transition: left 0.3s ease-in-out;
 
  ::-webkit-scrollbar {
  width: 10px;
}
 
::-webkit-scrollbar-track {
  background: black;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;

}
 
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;

}


  a {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 60%;
    text-align: center;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    font-size: 13px;
    color: #fff;
    background-color: #333;
    font-family: "Poppins";

    &:hover {
      color: #ddd;
      background: rgba(255, 255, 255, 0.2);
    }

    &.active {
      color: #000;
      background: #d3d3d3;      

    }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: ${({ menuToggle }) => (menuToggle ? '0' : '-100%')};
    position: fixed;
    top: 0;
  }
`;

export const ProfileImage = styled.img`
  width: 80%;
  height: 100%;
  /* object-fit: cover; */
  object-position: center;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 1rem auto;
  
  @media (max-width: 768px) {

    width: 100%;
    height: 100%;
  }
`;

export const ProfileImageDiv = styled.div`
  width: 180px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {

    width: 200px;
    height: 250px;

  }
`;

export const SidebarTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;
`;

export const SidebarSubTitle = styled.h2`
  color: #fff;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
`;






// export const StyledScrollbar = styled(Scrollbars)`
//   // Estilos para el contenedor de Scrollbars
//   width: 100%;
//   height: 100%;
//   scrollbar-color: blue;
//   color: red;

//  // Estilos para la corredera vertical
//  .ScrollbarsCustom-TrackVertical {
//     background-color: red;
//   }

//   // Estilos para ocultar la "x" (scrollbar thumb vertical)



//   // Estilos para el div interno que envuelve los elementos
//   & > div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

    
    

//   }
  



// `;
