import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
`

export const ProfileImage = styled.img`
    width: 60%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 1px solid #000;
    margin: 1rem auto;
`

export const SidebarTitle = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: center;
`

export const SidebarSubTitle = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: center;
`

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  overflow-y: auto; /* Habilita el desbordamiento vertical con barra de desplazamiento */
  max-height: calc(100vh - 100px); /* Ajusta la altura máxima según sea necesario */
  padding-top: 10px; /* Compensa el espacio de la barra de desplazamiento */

  a {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 60%;
    text-align: center;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    font-weight: bold;
    padding: 10px;
    font-size: 1rem;
    color: #fff; 
    background-color: #333; 

    &:hover {
      color: #ddd;
      background: rgba(255, 255, 255, 0.2);
    }

    &.active {
      color: #000;
      background: #D3D3D3;
    }
  }
  
`;

