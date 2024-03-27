import React, { useState } from "react";
import { PageWrapper } from "../sectionsStyles";
import SurpriseButton from "../../buttonRandom/surpriseButton";
import { AboutText, ContainerCard, DataCard, Sub } from "./aboutStyles";
import { pickRandomData } from "../../../utils/pickRandomData";
import {aboutData} from "./aboutData";

const About = () => {
  const [currentData, setCurrentData] = useState(aboutData[0]);



  const handleSurpriseButtonClick = () => {
    const randomData = pickRandomData(aboutData, 1)[0];
    setCurrentData(randomData);
  };

  return (
    <PageWrapper>
      <h1> ¿Quién soy? </h1>
      <AboutText>
        <Sub>¡Hola! Soy Facundo Cretton, un apasionado desarrollador de 32 años con una historia única que ha moldeado mi camino hacia el mundo de la tecnología.</Sub>
      </AboutText>
      <SurpriseButton onClick={handleSurpriseButtonClick} />

      <ContainerCard><DataCard>{currentData}</DataCard></ContainerCard>
    </PageWrapper>
  );
};

export default About;