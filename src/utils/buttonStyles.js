import styled from "styled-components";


export const StyledButton = styled.a`
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  :last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #333;
  }

  svg {
    margin-right: 5px;
  }
`;


export const StyledIcon = styled.span`
  color: #fff;  
  font-size: 1.2rem;  
  margin-right: 5px;  
`;