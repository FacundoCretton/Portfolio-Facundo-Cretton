import styled from 'styled-components';

export const AboutText = styled.div`
 
  margin: 20px ;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  


  p {
    margin-bottom: 15px;
    text-align: justify;
    font-size: 20px;
  }

`;

export const Sub = styled.span `
  font-size: 1rem;
  font-style: italic;
  font-family: "Open Sans";

`;

export const DataCard = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #FFF5DD;
  display: flex;
  justify-content: center;
  width: 90%;
  height: 70%;
  align-items: center;
  border: 1px solid #C99E5A;
  font-family: "Montserrat";
  flex-direction: column;
`;



export const ContainerCard = styled.div`
  background: #FFF5DD;
  border: 1px solid #C99E5A;
  border-radius: 15px;
  margin-top: 20px;
  width: 50%;
  min-height: 150px; 
  display:flex ;
  justify-content: center;
  align-items: center;
  
`;




export const Image = styled.img`
  width: 200px; /* Cambia el tamaño de la imagen según lo necesario */
  height: auto; /* Ajusta la altura automáticamente según el ancho */
`;


export const Button = styled.button`

  background-color: #C99E5A;
  color: white;
  border: 1px solid #C99E5A;
  padding: 10px 10px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 11px;
  font-family: "Poppins";
  border-radius: 10px;


`;



export const SpanImage = styled.span`

  color: brown;
  font-size: 12px;
  cursor: pointer;
  font-family: "Poppins";
  border-bottom: 1px solid brown;
  margin-top: 10px;
`;