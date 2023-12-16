import React, { useState } from "react";
import { PageWrapper } from "../sectionsStyles";
import CertificadoReact from "./cert-img/CertReact.jpg";
import CertificadoJs from "./cert-img/CertJs.jpg";
import { CertContainer, CertContainerWrapper, CertificationContainer, CertificationFrame, CertificationImage, CertificationPreviewContainer, ModalContainer, ModalOverlay, Rogelio } from "./certificationsStyles";
import CertificadoDW from "./cert-img/CertDW.jpg";
import CertificadoFull from "./cert-img/CertFull.jpg";
import CertificadoCS from "./cert-img/Certificado Ciberseguridad.png";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, ListGroup } from "react-bootstrap";
import MarcoImage from "./cert-img/marco.png";

const certificationsData = [
  {
    title: "Certificación Diseño Web",
    imageSrc: CertificadoDW,
    description: "Certificación Diseño Web",
  },
  {
    title: "Certificación Javascript",
    imageSrc: CertificadoJs,
    description: "Certificación Javascript",
  },
  {
    title: "Certificación React",
    imageSrc: CertificadoReact,
  },
  {
    title: "Certificación Full Stack",
    imageSrc: CertificadoFull,
  },
  {
    title: "Certificación Ciberseguridad",
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
          style={{ width: "300px", cursor: "pointer", zIndex: "1" }}
          onClick={handleImageClick}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
          <CertificationFrame
            src={MarcoImage}
            alt="Marco"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              pointerEvents: "none",
              position: "absolute",
              zIndex: 0,
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
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
                animate={{ scale: 1, opacity: 1 }}
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
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              
              </ModalContainer>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </div>

      <Accordion className="certification-accordion" style={{ width: "300px" }}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Descripción</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>{description}</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
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

