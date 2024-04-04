import { motion } from "framer-motion";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px); 

`;


export const ModalContainer = styled.div`

    background: "#fff";
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 60%;
    position: relative;

    &> span{
        position: absolute;
        top: 30px;
        border: 1px solid #000000;
        right: 30px;
        cursor: "pointer";
        color: #333;
        z-index: 1001;
        padding: 5px 10px;
        border-radius: 5px;
        display: inline-block;
        vertical-align: middle;
        background: linear-gradient(to bottom, #6b6365, #000000);
        font-size: 15px;
        font-weight: 700;
        color: red;
             
    }


`;


export const CertContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    flex: 0 0 48%; 
    margin: 10px;
  }
`;

export const Rogelio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    font-family: "Montserrat";
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 25px;


  };
`;

export const CertContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;



export const CertificationPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3{
    font-family: 'Montserrat';
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 25px;
  
  }

`;


export const CertificationContainer = styled.div`
  position: relative;
  width: 300px; 
  height: auto;
  margin-bottom: 20px; 
`;

export const CertificationImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 10px; 
  cursor: pointer;
  z-index: 1000;

`;

export const CertificationFrame = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;

`;



export const CustomAccordionItem = styled(Accordion.Item)`
  
  border-bottom: 0;
  text-align: center ;
`;


export const CustomAccordion = styled(Accordion)`

  .accordion-button.collapsed{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #cfe2f3;
  }
  .accordion-button::after{
    display: none;
  } 

  .accordion-button:not(.collapsed){ 
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

export const LaImagen = styled.img`
  width: 22px;
  height: 22px;
`;