// sidebarStyles.js
import styled from 'styled-components';

export const StyledButton = styled.button`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const SidebarWrapper = styled.nav`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  padding-top: 10px;
  transition: left 0.3s ease-in-out;

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

  @media (max-width: 768px) {
    width: 100%;
    left: ${({ menuToggle }) => (menuToggle ? '0' : '-100%')};
    position: fixed; 
    top: 0; 
    height: 100%;
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

  @media (max-width: 768px) {

    width: 30%;
    height: 40%;
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
