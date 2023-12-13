import React from "react";
const CertificationPreview = ({ title, imageSrc, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} style={{ width: "200px" }} />
      <p>{description}</p>
    </div>
  );
};

export default CertificationPreview;