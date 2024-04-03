import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

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
    <Button onClick={handleClick} disabled={disabled}>
      Conóceme
    </Button>
  );
};

export default SurpriseButton;