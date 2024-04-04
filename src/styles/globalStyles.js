import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
  html{
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      width: 10px;
    }
 
    ::-webkit-scrollbar-track {
      background: grey;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-left: 1px solid black;


    }
 
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);

  }
    
  }
  body {
    margin: 0;
    padding: 0;
    /* background: #D3D3D3 ; */
    background-image: url("./images/job297-ploy-07c-purple-01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden

    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;
