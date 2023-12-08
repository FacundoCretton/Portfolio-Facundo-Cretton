import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedCard = ({ children, show }) => {
    const cardRef = useRef(null);

  const fadeInOut = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(-20px)',
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(-40px)' },
    to: { transform: 'translateY(0)' },
    reset: true,
    reverse: !show,
    onRest: () => {
        // Acciones después de que la animación ha terminado
        if (cardRef.current) {
          cardRef.current.style.border = '1px solid red';
          cardRef.current.style.borderRadius = '6px';
        }
      },
    config: { duration: 1000 },
    
  });

  const fadeInLetters = useSpring({
    opacity: show ? 1 : 0,
    from: { opacity: 0 },
    reset: true,
    reverse: !show,
    config: { duration: 1000, stagger: 100 }, // Ajusta la duración y el espaciado según sea necesario
  });


  

  return <animated.div style={{ ...fadeInOut, ...slideIn }}ref={cardRef}>      <animated.div style={fadeInLetters}>{children}</animated.div>
  </animated.div>;
};

export default AnimatedCard;
