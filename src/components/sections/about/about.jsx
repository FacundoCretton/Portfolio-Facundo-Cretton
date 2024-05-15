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
  const [loadingIndex, setLoadingIndex] = useState(loadingData.length - 3);

  const handleSurpriseButtonClick = () => {
    setShowNextCard(true);
    setTimeout(() => {
      const randomData = pickRandomData(aboutData, 1)[0];
      setCurrentData(randomData);
      setShowNextCard(false);
    }, 2000);
  };

  const changeLoadingText = () => {
    const newIndex = (loadingIndex + 1) % loadingData.length;
    setLoadingIndex(newIndex);
  };

  return (
    <PageWrapper>
      <h2>¿Quién soy?</h2>
      <AboutText>
        <Sub>
        ¡Hola! Soy Facundo Cretton, un desarrollador web con una historia única que me ha llevado al mundo de la tecnología.

        Voy a intentar no ir por el lado convencional. No te diré que soy "muy proactivo" o "muy responsable". Prefiero demostrarlo en lugar de decirlo.

        Si quieres conocer un poco más sobre mí, haz clic en el botón de abajo. Te mostraré algunos datos sobre mí
        </Sub>
      </AboutText>
      <SurpriseButton onClick={handleSurpriseButtonClick} disabled={showNextCard} />

      <ContainerCard>
        {showNextCard ? (
          <DataCard>{loadingData[loadingIndex]}<ProgressBar /> </DataCard>
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
