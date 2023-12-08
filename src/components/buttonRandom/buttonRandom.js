import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Button from '../../utils/button';
import "./buttonRandom.css";
import AnimatedCard from './AnimatedCard';
const DatosSobreMi = [
  'Desarrollador de Software',
  'Amante de la tecnología',
  'Aventurero culinario',
  'Apasionado por aprender',
  'Adicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los librosAdicto a los libros',
];

function ButtonRandom() {
  const [mostrarAcordeon, setMostrarAcordeon] = useState(false);
  const [datoActual, setDatoActual] = useState(null);

  const seleccionarDatoAleatorio = () => {
    const nuevoDato = DatosSobreMi[Math.floor(Math.random() * DatosSobreMi.length)];
    setDatoActual(nuevoDato);
  };

  const toggleAcordeon = () => {
    setMostrarAcordeon(false);

    setTimeout(() => {
      seleccionarDatoAleatorio();
      setMostrarAcordeon(true);
    }, 500);
  };

  const buttonText = mostrarAcordeon ? 'Ver otro dato' : 'Conóceme';

  return (
    <div id="acordeon-container">
      <Button variant="link" onClick={toggleAcordeon}>
        {buttonText}
      </Button>
      {mostrarAcordeon && (
        <Accordion id="acordeon">
          <Accordion.Item className='lacartita' eventKey="0">
            <Card>
              <AnimatedCard show={mostrarAcordeon}>
                <Card.Body className='yo'>{datoActual}</Card.Body>
              </AnimatedCard>
            </Card>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
}

export default ButtonRandom;
