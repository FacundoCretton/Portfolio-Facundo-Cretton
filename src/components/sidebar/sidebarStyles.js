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

  @media (max-width: 820px) {
    .sidebar-nav {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      z-index: 1001;
    }

    .overlay {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    }

    .sidebar-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 60%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 1px solid #000;
  margin: 1rem auto;
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

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  padding-top: 10px;

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
      background: #d3d3d3;
    }
  }
`;

export const BarrsMenu = styled.div`
  display: none;

  @media (max-width: 821px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    color: #fff;
  }
`;

/* Agrega cualquier estilo adicional aquí según sea necesario */
