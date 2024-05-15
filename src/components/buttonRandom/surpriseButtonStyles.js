import styled, { keyframes } from 'styled-components';

// Definimos la animación para mover el sombreado en sentido horario
const moveShadow = keyframes`
  from {
    box-shadow: 0 10px 20px -10px purple;
  }
  to {
    box-shadow: -20px -10px 40px -10px purple; /* Ajusta los valores según el efecto deseado */
  }
`;

// Estilizamos el botón
export const StyledButton = styled.button`
  background-color: rgb(26, 125, 194);
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  /* Aplicamos la animación al sombreado */ 
  animation: ${moveShadow} 3s linear infinite alternate; /* Movimiento alternativo */

  &:hover {
    background-color: #125891;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
`;

















































// import styled, {keyframes} from 'styled-components';

// export const StyledButton = styled.button`
// @keyframes rainbowEffect {
//   0% {
//     filter: hue-rotate(0deg);
//   }
//   100% {
//     filter: hue-rotate(360deg);
//   }
// }

//   background-color: #6b4226;
//   color: white;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.2s ease-in-out;
//   font-family: "Montserrat";

//   &:hover {
//     background-color: #8c5d3b;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }

//   /* Agregar efecto de arcoíris en el estado normal */
//   animation: rainbowEffect 5s linear infinite; /* Cambia el tiempo y la velocidad según desees */
// `;




// import styled, { keyframes } from 'styled-components';

// // Define la animación de rotación del gradiente de colores
// const rotateRainbow = keyframes`
//   0% {
//     background-position: 0% 50%;
//   }
//   100% {
//     background-position: 100% 50%;
//   }
// `;

// // Define el botón estilizado
// export const StyledButton = styled.button`
//   background: linear-gradient(90deg, 
//     #ff0000 0%, 
//     #ff7f00 10%, 
//     #ffff00 20%, 
//     #00ff00 30%, 
//     #0000ff 40%, 
//     #4b0082 50%, 
//     #9400d3 60%,
//     #ff0000 70%,
//     #ff7f00 80%,
//     #ffff00 90%,
//     #00ff00 100%);
//   background-size: 300% 300%; /* Tamaño del gradiente */
//   border: none;
//   border-radius: 5px;
//   color: white;
//   font-size: 16px;
//   padding: 10px 20px;
//   cursor: pointer;
//   font-family: "Montserrat";
//   animation: ${rotateRainbow} 3s linear infinite; /* Aplicar la animación */
//   transition: background-color 0.2s ease-in-out;

//   &:hover {
//     background-color: #8c5d3b;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;


