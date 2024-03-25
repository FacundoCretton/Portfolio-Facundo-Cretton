import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import html1 from "../../../assets/icons/html.svg";
import css1 from "../../../assets/icons/css.svg";
import js1 from "../../../assets/icons/js.svg";
import react1 from "../../../assets/icons/react1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import { ButtonContainer, CardsStyle } from "./projectsStyles";
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
    <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title>En directo</Card.Title>
        <Card.Img variant="top" src={IntegralDiseño} />

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
        <Card.Text>
          Diseño de sitio web para empresa ficticia de venta de entradas para eventos.
          Con este proyecto pude practicar y mejorar mis habilidades en HTML, CSS y recibir la certificación de Diseño Web de NUCBA
        </Card.Text>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item><img src={html1} alt="html" width="30px"/> HTML</ListGroup.Item>
          <ListGroup.Item><img src={css1} alt="css" width="30px"/> CSS</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
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

    <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title>Nuevo Mundo </Card.Title>
        <Card.Img variant="top" src={IntegralJs} />

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
        <Card.Text>
          Diseño de sitio web para empresa ficticia de venta de entradas para eventos.
          Con este proyecto pude practicar y mejorar mis habilidades en HTML, CSS y recibir la certificación de Diseño Web de NUCBA
        </Card.Text>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item><img src={html1} alt="html" width="30px"/> HTML</ListGroup.Item>
          <ListGroup.Item><img src={css1} alt="css" width="30px"/> CSS</ListGroup.Item>
          <ListGroup.Item><img src={js1} alt="js" width="30px"/> JavaScript</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
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
    <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title>La despensa de la abuela</Card.Title>
        <Card.Img variant="top" src={IntegralReact} />

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Descripción</Accordion.Header>
        <Accordion.Body>
        <Card.Text>
          Diseño de sitio web para empresa ficticia de venta de entradas para eventos.
          Con este proyecto pude practicar y mejorar mis habilidades en HTML, CSS y recibir la certificación de Diseño Web de NUCBA
        </Card.Text>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Herramientas utilizadas</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
          <ListGroup.Item><img src={react1} alt="html" width="30px"/> React</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
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



    </CardsStyle>
  </PageWrapper>

  );
}

export default Projects;
