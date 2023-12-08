import styled from "styled-components";


export const StyledButton = styled.a`
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: ${props => props.backgroundColor || "#000"};
  color: ${props => props.textColor || "#fff"};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  width: ${(props) => props.width || "auto"};

  
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