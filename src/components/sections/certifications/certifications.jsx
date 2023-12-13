import React, { useState } from "react";
import { PageWrapper } from "../sectionsStyles";
import CertificadoReact from "./cert-img/CertReact.jpg";
import CertificadoJs from "./cert-img/CertJs.jpg";
import { ModalContainer, ModalOverlay } from "./certificationsStyles";
import CertificadoDW from "./cert-img/CertDW.jpg";
import CertificadoFull from "./cert-img/CertFull.jpg";
import CertificadoCS from "./cert-img/Certificado Ciberseguridad.png";
import { motion, AnimatePresence } from "framer-motion";

const certificationsData = [
  {
    title: "Certificación Diseño Web",
    imageSrc: CertificadoDW,
  },
  {
    title: "Certificación Javascript",
    imageSrc: CertificadoJs,
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
    <div>
      <h3>{title}</h3>
      <motion.img
        src={imageSrc}
        alt={title}
        style={{ width: "200px", cursor: "pointer" }}
        onClick={handleImageClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      />
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
                style={{ position: "absolute", cursor: "pointer", }}
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
  );
};

const Certifications = () => {
  return (
    <PageWrapper>
      <div>
        <h2>Certificaciones</h2>
        {certificationsData.map((certification, index) => (
          <CertificationPreview key={index} {...certification} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Certifications;
