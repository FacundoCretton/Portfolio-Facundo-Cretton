import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import html1 from "../../../assets/icons/html.svg";
import css1 from "../../../assets/icons/css.png";
import js1 from "../../../assets/icons/js.webp";
import react1 from "../../../assets/icons/react.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import { AccordionBody, AccordionItem, ButtonContainer, CardText, CardTitle, CardsStyle } from "./projectsStyles";
import IntegralDiseño from "../../../assets/Integral-Diseño.gif";
import IntegralJs from "../../../assets/Integral js (1).gif";
import IntegralReact from "../../../assets/Integral-React.gif";
import { PageWrapper } from "../sectionsStyles";
import Button from "../../../utils/button";

const Projects = () => {
  return (

  <PageWrapper>
    <div>
      <h2>Mis proyectos </h2>
      <p> En esta sección podras ver algunos de los proyectos mas destacas que he desarrollado con diferentes herramientas.</p>
    </div>

    <CardsStyle>
    <Card style={{ width: '23rem', background: '#ffffcc'}}>
      <Card.Body>
        <CardTitle>En directo</CardTitle>
        <Card.Img variant="top" src={IntegralDiseño} style={{marginBottom: '20px'}} />

        <Accordion>
      <AccordionItem eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <AccordionBody>
        <CardText>
        Diseño de un sitio web de venta de entradas para eventos. Me enfoque en la creación de una experiencia de usuario fluida y atractiva. El proyecto me desafió a considerar la diversidad de necesidades de los usuarios y a optimizar el sitio web para diferentes dispositivos. A pesar de las limitaciones de trabajar solo con HTML y CSS pude crear un diseño sólido y funcional. La idea del diseño fue que la landing page sea facil de utilizar y que se entienda la separacion de secciones de una manera clara y elegante con los separadores-banner.
        </CardText>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <AccordionBody>
        <ListGroup>
          <ListGroup.Item><img src={html1} alt="html" width="30px"/> HTML</ListGroup.Item>
          <ListGroup.Item><img src={css1} alt="css" width="30px"/> CSS</ListGroup.Item>
        </ListGroup>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
      </Card.Body>
      <Card.Body>
        <ButtonContainer>
        <Button 
          href="https://github.com/FacundoCretton/Entrega-Integral-HTML-CSS" 
          target="_blank" 
          backgroundColor="#a5a5a5"
          width={"40%"}
        >Ver código
        </Button>
        <Button 
          href="https://entrega-integral-html-css.vercel.app/" 
          target="_blank"
          backgroundColor="#a5a5a5"
          width={"40%"}
        >Ver proyecto
        </Button>
        </ButtonContainer>
      </Card.Body>
    </Card>

    <Card style={{ width: '23rem', background: '#ffffcc'}}>
      <Card.Body>
        <CardTitle>Nuevo Mundo </CardTitle>
        <Card.Img variant="top" src={IntegralJs} style={{marginBottom: '20px'}}/>

        <Accordion>
      <AccordionItem eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <AccordionBody>
        <CardText>
          El diseño de esta página consiste en una ecommerce de venta de paquetes de cruceros. En este caso utilice JavaScript para poder darle funcionalidad a la página. Pude practicar y mejorar mis habilidades en HTML, CSS y JavaScript. Trate de enfocar en un diseño moderno, atractivo y funcional. Con este proyecto recibi la certificacion de JS de NUCBA.
        </CardText>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <AccordionBody>
        <ListGroup>
          <ListGroup.Item><img src={html1} alt="html" width="30px"/> HTML</ListGroup.Item>
          <ListGroup.Item><img src={css1} alt="css" width="30px"/> CSS</ListGroup.Item>
          <ListGroup.Item><img src={js1} alt="js" width="30px"/> JavaScript</ListGroup.Item>
        </ListGroup>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
      </Card.Body>
      <Card.Body>
        <ButtonContainer>
        <Button 
          href="https://github.com/FacundoCretton/Entrega-Integral-JS" 
          target="_blank" 
          backgroundColor="#a5a5a5"
          width={"40%"}
        >Ver código
        </Button>
        <Button 
          href="https://entrega-integral-js-git-main-facundocretton.vercel.app/" 
          target="_blank"
          backgroundColor="#a5a5a5"
          width={"40%"}
        >Ver proyecto
        </Button>
        </ButtonContainer>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem', background: '#ffffcc'}}>
      <Card.Body>
        <CardTitle>La despensa de la abuela</CardTitle>
        <Card.Img variant="top" src={IntegralReact} style={{marginBottom: '20px'}} />

        <Accordion>
      <AccordionItem eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <AccordionBody>
        <CardText>
          Este diseño fue realizado con React y diferentes librerias, como react-router-dom, styled-components, redux, entre otras. La idea del proyecto al ser una ecommerce llamada "La despensa de la abuela" fue darle un toque vintage y que de una sensacion de hogar ya que los productos ofrecidos son caseros. La pagina cuenta con un registro de usuarios que es necesario para realizar las compras, un carrito de compras y un formulario de contacto. Cuenta con el backend realizado en Node.js y MongoDB.
        </CardText>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <AccordionBody>
        <ListGroup>
          <ListGroup.Item><img src={react1} alt="html" width="30px"/> React</ListGroup.Item>
        </ListGroup>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
      </Card.Body>
      <Card.Body>
        <ButtonContainer>
        <Button 
          href="https://github.com/FacundoCretton/Entrega-Front-Back" 
          target="_blank" 
          backgroundColor="#a5a5a5"
          width={"40%"}
        >Ver código
        </Button>
        <Button 
          href="https://entrega-front-back.vercel.app/" 
          target="_blank"
          backgroundColor="#a5a5a5"
          width={"40%"}
        >Ver proyecto
        </Button>
        </ButtonContainer>
      </Card.Body>
    </Card>



    </CardsStyle>
  </PageWrapper>

  );
}

export default Projects;
