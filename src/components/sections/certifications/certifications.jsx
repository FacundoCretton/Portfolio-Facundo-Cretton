import React, { useState } from "react";
import { PageWrapper } from "../sectionsStyles";
import CertificadoReact from "./cert-img/CertReact.jpg";
import CertificadoJs from "./cert-img/CertJs.jpg";
import { CertContainer, CertContainerWrapper, CertificationContainer, CertificationFrame, CertificationImage, CertificationPreviewContainer, CustomAccordion, CustomAccordionItem, LaImagen, ModalContainer, ModalOverlay, Rogelio } from "./certificationsStyles";
import CertificadoDW from "./cert-img/CertDW.jpg";
import CertificadoFull from "./cert-img/CertFull.jpg";
import CertificadoCS from "./cert-img/Certificado Ciberseguridad.png";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, ListGroup } from "react-bootstrap";
import MarcoImage from "./cert-img/marco.png";

const pensador= "./pensador.png";

const certificationsData = [
  {
    title: "Diseño Web",
    imageSrc: CertificadoDW,
    description: "Certificación Diseño Web",
  },
  {
    title: "Javascript",
    imageSrc: CertificadoJs,
    description: "Certificación Javascript",
  },
  {
    title: "React",
    imageSrc: CertificadoReact,
  },
  {
    title: "Full Stack",
    imageSrc: CertificadoFull,
  },
  {
    title: "Ciberseguridad",
    imageSrc: CertificadoCS,
  },
];

const CertificationPreview = ({ title, imageSrc, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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

      <CustomAccordion className="certification-accordion" style={{ width: "300px" }}>
        <CustomAccordionItem eventKey="1">
          <Accordion.Header>¿Qué aprendí? <LaImagen src= {pensador} alt="pensador"  /></Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>{description}</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
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

