import React, { useState, useEffect } from 'react';
import { StyledButton } from './surpriseButtonStyles';

const SurpriseButton = ({ onClick, disabled }) => {
  const [isRolling, setRolling] = useState(false);
  

  useEffect(() => {
    let interval;

    if (isRolling) {
      interval = setInterval(() => {
        onClick();
      }, 10);

      setTimeout(() => {
        clearInterval(interval);
        setRolling(false);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isRolling, onClick]);

  const handleClick = () => {
    setRolling(true);
  };

  return (
    <StyledButton className='rainbow-button' onClick={handleClick} disabled={disabled}>
      Conóceme
    </StyledButton>
  );
};

export default SurpriseButton;