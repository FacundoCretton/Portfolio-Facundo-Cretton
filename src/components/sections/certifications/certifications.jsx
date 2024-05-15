import React, { useState } from "react";
import { PageWrapper } from "../sectionsStyles";
import CertificadoReact from "./cert-img/CertReact.jpg";
import CertificadoJs from "./cert-img/CertJs.jpg";
import { CertContainer, CertContainerWrapper, CertificationContainer, CertificationFrame, CertificationImage, CertificationPreviewContainer, CustomAccordion, CustomAccordionBody, CustomAccordionItem, LaImagen, ModalContainer, ModalOverlay, Rogelio } from "./certificationsStyles";
import CertificadoDW from "./cert-img/CertDW.jpg";
import CertificadoFull from "./cert-img/CertFull.jpg";
import CertificadoCS from "./cert-img/Certificado Ciberseguridad.png";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion } from "react-bootstrap";
import MarcoImage from "./cert-img/marco.png";

const pensador= "./pensador.png";

const certificationsData = [
  {
    title: "Diseño Web",
    imageSrc: CertificadoDW,
    description:
    [ <p>Durante el curso de diseño web, adquirí una base sólida de HTML y CSS, dominando la estructura y presentación de las páginas web desde cero.</p>,
    <hr/>,
    <p>Aprendí  las etiquetas, colores, fuentes y medidas, comprendiendo cómo cada elemento contribuye a la apariencia y funcionalidad del sitio. Además, adquirí habilidades en la aplicación de estilos avanzados, incluyendo fondos y animaciones, para crear interfaces web dinámicas y atractivas.</p>,
    <hr/>,
    <p> También comprendi y aplique el diseño responsivo, utilizando Flexbox, Media Queries y CSS Grid para garantizar que los diferentes sitios web se vean y funcionen de manera óptima en diferentes dispositivos y tamaños de pantalla .</p>,
    <hr/>,
    <p> Exploré herramientas y tecnologías complementarias como Bootstrap, Tailwind CSS, entre otras.</p>,
    <hr/>,
    <p> Finalmente, puse en práctica lo aprendido desarrollando un proyecto final y desplegándolo en Vercel. Este proceso consolidó lo adquirido y me proporcionó una comprensión más profunda de las mejores prácticas de desarrollo y despliegue.</p>,
    ]
  },
  {
    title: "Javascript",
    imageSrc: CertificadoJs,
    description: [
      <p>Durante el curso de Javascript, adquirí una comprensión desde los conceptos básicos hasta técnicas avanzadas, este curso me equipó para desarrollar aplicaciones web dinámicas y funcionales.</p>,
      <hr/>,
      <p>Aprendí los fundamentos esenciales de Javascript, como hoisting, sintaxis y estructuras de datos.</p>,
      <hr/>,
      <p>Profundicé en temas como scope, operadores, condicionales y funciones, aprendiendo sobre funciones de flecha y métodos avanzados de arrays para escribir código más limpio y eficiente.</p>,
      <hr/>,
      <p>Manipulé el DOM, interactuando con elementos HTML, manipulando su contenido y respondiendo a eventos del usuario. También comprendí asincronismo, pasando obviamente por promesas y async/await para manejar datos asíncronos de manera efectiva.</p>,
      <hr/>,
      <p>Exploré la programación orientada a objetos, aprendiendo sobre prototipos, herencia y el uso de clases.</p>,
      <hr/>,
      <p>El curso culminó con un proyecto real, donde pude aplicar todas las habilidades y conceptos aprendidos, desde el diseño inicial hasta el despliegue final.</p>,
    ],
  },
  {
    title: "React",
    imageSrc: CertificadoReact,
    description: 
    [<p>Durante mi formación en React, adquirí habilidades claves para desarrollar aplicaciones web. Comprendí conceptos fundamentales como el Virtual DOM y su aplicación en interfaces dinámicas.</p>,
    <hr/>,
    <p>Utilizando la metodología Atomic Design, aprendí a estructurar y organizar componentes de manera modular, facilitando el mantenimiento y la escalabilidad en mis proyectos. Dominé el uso de Styled Components para aplicar estilos de manera eficiente y mantener una base de código limpia y fácil de mantener</p>,
    <hr/>,

    <p>Utilizando Atomic Design, organicé componentes de manera modular, facilitando el mantenimiento y la escalabilidad. Dominé Styled Components para aplicar estilos eficientes y mantener código limpio.</p>,
    <hr/>,

    <p>Profundicé en conceptos de React, desde la sintaxis JSX hasta la gestión de estados y ciclos de vida. Utilicé Hooks de React para mejorar la gestión del estado.</p>,
    <hr/>,

   <p> Para la gestión global del estado, utilicé Context API junto con Redux y Redux Toolkit, permitiendo la creación de aplicaciones complejas con una gestión eficiente del estado.</p>,
   <hr/>,

    <p>También vi la gestión de solicitudes HTTP con Fetch y Axios, y en el enrutamiento de aplicaciones con React Router, mejorando la experiencia del usuario con rutas dinámicas y privadas</p>]
  },
  {
    title: "Full Stack",
    imageSrc: CertificadoFull,
    description:[
      <p>Está explicación la voy a orientar a explicar lo aprendido en el módulo de Backend, ya que obtuve esta certificación Full Stack al finalizar dicho módulo (y haber aprobado la parte de Front).
      En backend, adquirí habilidades fundamentales para construir APIs con Node.js y Express. Este curso me proporcionó las herramientas necesarias para crear sistemas backend sólidos y funcionales.</p>,
      <hr/>,
      <p>Exploré los conceptos básicos de Node.js, comprendiendo su funcionamiento y utilizando módulos para organizar mi código de manera efectiva. Además, adquirí experiencia en la manipulación de archivos y la creación de CLIs utilizando Node.js.</p>,
      <hr/>,
      <p>Profundicé en el funcionamiento de los servidores, aprendiendo sobre el modelo cliente-servidor, el protocolo HTTP y creando servidores web con Node.js y Express.js.</p>,
      <hr/>,
      <p>Comprendí el diseño de APIs RESTful utilizando Express, diseñando endpoints, gestionando solicitudes y respuestas JSON, y utilizando middlewares para mejorar la funcionalidad y seguridad de mis APIs.</p>,
      <hr/>,
      <p>Trabajé con bases de datos SQL y NoSQL, interactuando con ellas desde Node.js y gestionando datos de manera eficiente y escalable.</p>,
      <hr/>,

      <p>El curso culminó con un proyecto práctico en el que tuve que hacer el back de un proyecto front. Manejando una base de datos en Mongo de registro de usuarios, órdenes de compras y las respectivas solicitudes a la misma base.</p>,
    ]
  },
  {
    title: "Ciberseguridad",
    imageSrc: CertificadoCS,
    description:
    [  
      <p>Este curso en ciberseguridad me ha proporcionado una comprensión de los desafíos y amenazas que enfrentan los sistemas digitales en la actualidad. Desde el ciberdelito hasta la protección de redes y usuarios, este curso me ha equipado con las habilidades necesarias para garantizar la seguridad de la información en entornos digitales.</p>,
      <hr/>,
      <p>Exploré los fundamentos de la ciberseguridad, comprendiendo la naturaleza de las amenazas y la importancia de proteger los activos digitales. Aprendí sobre malware, vulnerabilidades y exploits, así como técnicas para analizar y combatir estas amenazas utilizando herramientas especializadas.</p>,
      <hr/>,
      <p>Incursione en el hacking ético, aprendiendo lo básico sobre técnicas de escaneo de vulnerabilidades y exploits comunes, lo que me permitió identificar y mitigar vulnerabilidades en sistemas digitales de manera ética y responsable.</p>,
      <hr/>,
      <p>Adquirí experiencia en la protección de redes, implementando tecnologías como VPN y capturando tráfico utilizando herramientas como Wireshark para analizar el flujo de datos en una red.</p>,
      <hr/>,
      <p>Por último, exploré técnicas de protección para usuarios finales, incluyendo la criptografía, prevención del phishing y tecnologías de protección de usuarios.</p>      
      ]
  },
];

const CertificationPreview = ({ title, imageSrc, description }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
    setAccordionOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setAccordionOpen(false);
  };

  return (
    <CertificationPreviewContainer>
      <div>
        <h3>{title}</h3>
        
        <CertificationContainer>
          <CertificationImage
            src={imageSrc}
            alt={title}
            style={{ width: "300px", cursor: "pointer", zIndex: "1", margin:"30px 0", }}
            onClick={handleImageClick}
          />
          <CertificationFrame
            src={MarcoImage}
            alt="Marco"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              pointerEvents: "none",
              position: "absolute",
              zIndex: 0,
            }}
          />
        </CertificationContainer>
        <AnimatePresence>
          {modalOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <ModalContainer
                initial={{ scale: 0.5, opacity: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.1 }}
                  style={{ position: "absolute", cursor: "pointer" }}
                >
                  &times;
                </motion.span>
                <motion.img
                  src={imageSrc}
                  alt={title}
                  style={{ width: "100%" }}
                />
              </ModalContainer>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </div>

      <CustomAccordion className={accordionOpen ? "open certification-accordion" : "certification-accordion"}>
        <CustomAccordionItem eventKey="1">
          <Accordion.Header>¿Qué aprendí con esta certificación? <LaImagen src= {pensador} alt="pensador"  /></Accordion.Header>
          <CustomAccordionBody>
             {description}
          </CustomAccordionBody>
        </CustomAccordionItem>
      </CustomAccordion>
    </CertificationPreviewContainer>
  );
};



const Certifications = () => {
  return (
    <PageWrapper>
      <Rogelio>
        <h2>Certificaciones</h2>
        <p> Aquí podras ver las diferentes certificaciones que he adquirido en este tiempo y lo que he aprendido en cada una </p>
        <CertContainerWrapper>
          <CertContainer>
            {certificationsData.map((certification, index) => (
              <div key={index}>
                <CertificationPreview {...certification} />

              </div>
            ))}
          </CertContainer>
        </CertContainerWrapper>
      </Rogelio>
    </PageWrapper>
  );
};


export default Certifications;

