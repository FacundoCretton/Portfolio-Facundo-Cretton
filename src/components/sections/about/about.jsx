import React, { useState } from 'react';
import { PageWrapper } from '../sectionsStyles';
import SurpriseButton from '../../buttonRandom/surpriseButton';
import { AboutText, ContainerCard, DataCard, Sub } from './aboutStyles'; 
import { pickRandomData } from '../../../utils/pickRandomData';
import { aboutData, loadingData } from './aboutData';
import ProgressBar from './ProgressBar'; // Importa el componente ProgressBar

const About = () => {
  const [currentData, setCurrentData] = useState(aboutData[0]);
  const [showNextCard, setShowNextCard] = useState(false);
  const [loading, setLoading] = useState(loadingData[0]);


  
  const handleSurpriseButtonClick = () => {
    setShowNextCard(true);
    setTimeout(() => {
      const randomData = pickRandomData(aboutData, 1)[0];
      setCurrentData(randomData);
      setShowNextCard(false);
    }, 2000);
  };
  

  return (
    <PageWrapper>
      <h1>¿Quién soy?</h1>
      <AboutText>
        <Sub>
          ¡Hola! Soy Facundo Cretton, un apasionado desarrollador de 32 años con una historia única que ha moldeado mi camino hacia el mundo de la tecnología.
        </Sub>
      </AboutText>
      <SurpriseButton onClick={handleSurpriseButtonClick} disabled={showNextCard} />

      <ContainerCard>
        {showNextCard ? (
          <DataCard>Buscando un dato que te cautive...<ProgressBar /> </DataCard>
        ) : (
          <DataCard>
            {currentData && (
              <>
                <div>{currentData}</div>

              </>
            )}
          </DataCard>
        )}
      </ContainerCard>
    </PageWrapper>
  );
};

export default About;


