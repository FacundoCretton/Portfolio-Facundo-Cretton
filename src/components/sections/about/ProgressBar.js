// ProgressBar.js
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 10); // Ajustar el incremento de progreso según el tiempo deseado
      }, 40); // Intervalo de actualización más frecuente para una apariencia más fluida
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div style={{ width: '90%', height: '8px', backgroundColor: '#ccc', borderRadius:'15px', display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#007bff',
          transition: 'width 0.4s ease-in-out',
          borderRadius:'15px'
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
