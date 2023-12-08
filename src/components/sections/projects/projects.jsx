import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import html1 from "../../../assets/icons/html.svg";
import css1 from "../../../assets/icons/css.svg";
import js1 from "../../../assets/icons/js.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import { CardsStyle } from "./projectsStyles";
import IntegralDiseño from "../../../assets/Integral-Diseño.gif";
import { PageWrapper } from "../sectionsStyles";

const Projects = () => {
  return (
  <>
  <PageWrapper>
    <div>
      <h1>Project Page </h1>
      <p>Project Page, Project Page, Project Page, Project Page, Project Page, Project Page, Project Page, Project Page, Project Page, .</p>
    </div>

    <CardsStyle>
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>En directo (Diseño Web)</Card.Title>
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
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>


    </CardsStyle>
  </PageWrapper>
    </>
  );
}

export default Projects;
