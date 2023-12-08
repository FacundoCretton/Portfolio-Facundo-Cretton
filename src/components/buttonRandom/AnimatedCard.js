import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedCard = ({ children, show }) => {
  const styles = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.8)',
    boxShadow: show ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'none',
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default AnimatedCard;
